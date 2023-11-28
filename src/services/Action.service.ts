import { TextElements } from '../constants/Elements.constant';
import { Verbs, getVerbSynonyms } from '../constants/Words.constant';
import { game } from '../main';
import Item from '../objects/Item';
import Room from '../objects/Room';
import { AffectedItem, ItemUseCase } from '../types/ItemAction.type';
import { gameService } from './Game.service';
import { itemService } from './Item.service';
import { roomService } from './Room.service';
import { textBoxService } from './TextBox.service';

class ActionService {
    public doAction(userText: string): void {
        const lcText = userText.toLowerCase();
        if (this.doItemAction(lcText)) return;
        if (this.doWalkAction(lcText)) return;
        this.doInspectSurroundings(lcText);
    }

    private doInspectSurroundings(userText: string): boolean {
        if (!this.verbsFound([Verbs.inspect], userText)) return false;
        if (userText.split(' ').length > 1) return false; // if inspecting something we don't want to describe scene
        textBoxService.describeScene();
        return true;
    }

    private doWalkAction(userText: string): boolean {
        if (!this.verbsFound([Verbs.walk], userText)) return false;
        const adjacentRooms = roomService.getPlayerAdjacentRooms();
        if (adjacentRooms.length < 1) return false;
        for (const room of adjacentRooms) {
            if (this.roomFound(room, userText)) {
                game.player.currentRoom = room;
                textBoxService.describeScene();
                return true;
            }
        }
        return false;
    }

    private roomFound(room: Room, text: string): boolean {
        const allNames = roomService.getAllRoomNames(room);
        allNames.push(gameService.getDirectionFromPlayer(room.position));
        // a door can represent a room
        const door = game.player.currentRoom.doors.find(d => gameService.compareIfPositionEqual(d.destination, room.position));
        if (door) {
            const doorNames = [door.name, ...door.altNames];
            allNames.push(...doorNames);
        }
        return allNames.some(name => text.includes(name.toLowerCase()));
    }

    private doItemAction(userText: string): boolean {
        const items = itemService.getItemsFromName(userText);
        if (!items[0]) return false;
        for (const action of items[0].actions) { // TODO: account for item being used on another item.
            if (!this.verbsFound(action.verb, userText)) continue;
            if (!this.itemUseCasesMet(action.useCases, items[0])) continue;
            textBoxService.appendTextElement(action.narration, TextElements.paragraph);
            if (action.affectedItems.length > 0) this.affectItems(action.affectedItems);
            return true;
        }
        return false;
    }

    private verbsFound(verbs: string[], text: string): boolean {
        const synonimizedVerbs = verbs.map(verb => getVerbSynonyms(verb)).reduce((a, value) => a.concat(value), []);
        return synonimizedVerbs.some(verb => text.includes(verb.toLowerCase()));
    }

    private itemUseCasesMet(useCases: ItemUseCase, item: Item): boolean {
        if (itemService.isInInventory(item) === useCases.inInventory) return true;
        const room = game.player.currentRoom;
        const objectsInRoom = useCases.objectInRoom?.map(obj => itemService.getItemFromIdWithinRoom(obj, room));
        if (objectsInRoom) return true;
        return false;
    }

    private affectItems(affectedItems: AffectedItem[]): void {
        for (const affectedItem of affectedItems) {
            const items = itemService.getItemsFromId(affectedItem.itemId);

            if (affectedItem.affect.movedToInventory) {
                itemService.deleteItems(items);
                game.player.inventory.push(...items);
            }
            if (affectedItem.affect.movedToRoom) {
                const rooms = roomService.getRoomsFromId(affectedItem.affect.movedToRoom);
                itemService.deleteItems(items);
                rooms[0].items.push(...items);
            }

            if (affectedItem.affect.deletion) itemService.deleteItems(items);
        }
    }
}

export const actionService = new ActionService();
