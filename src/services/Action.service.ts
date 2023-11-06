import { TextElements } from '../constants/Elements.constant';
import { Verbs, getVerbSynonyms } from '../constants/Words.constant';
import { game } from '../main';
import Item from '../objects/Item';
import { AffectedItem, ItemUseCase } from '../types/ItemAction.type';
import { itemService } from './Item.service';
import { roomService } from './Room.service';
import { textBoxService } from './TextBox.service';

class ActionService {
    public doAction(userText: string): void {
        if (this.doItemAction(userText)) return;
        if (this.doWalkAction(userText)) return;
        this.doInspectSurroundings(userText);
    }

    private doInspectSurroundings(userText: string): boolean {
        if (!this.verbFound([Verbs.inspect], userText)) return false;
        if (userText.split(' ').length > 1) return false; // if inspecting something we don't want to describe scene
        textBoxService.describeScene();
        return true;
    }

    private doWalkAction(userText: string): boolean {
        if (!this.verbFound([Verbs.walk], userText)) return false;
        // TODO: walk to different places
        return true;
    }

    private doItemAction(userText: string): boolean {
        const items = itemService.getItemsFromName(userText);
        if (!items[0]) return false;
        for (const action of items[0].actions) { // TODO: account for item being used on another item.
            if (!this.verbFound(action.verb, userText)) continue;
            if (!this.itemUseCasesMet(action.useCases, items[0])) continue;
            textBoxService.appendTextElement(action.narration, TextElements.paragraph);
            if (action.affectedItems.length > 0) this.affectItems(action.affectedItems);
        }
        return true;
    }

    private verbFound(verbs: string[], text: string): boolean {
        const lcText = text.toLowerCase();
        const synonimizedVerbs = verbs.map(verb => getVerbSynonyms(verb)).reduce((a, value) => a.concat(value), []);
        return synonimizedVerbs.some(verb => lcText.includes(verb.toLowerCase()));
    }

    private itemUseCasesMet(useCases: ItemUseCase, item: Item): boolean { // TODO: Make sure this stuff works as intended
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
