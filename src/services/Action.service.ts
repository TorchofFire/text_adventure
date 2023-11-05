import { TextElements } from '../constants/Elements.constant';
import Item from '../objects/Item';
import { AffectedItem, UseCase } from '../types/Action.type';
import { itemService } from './Item.service';
import { playerService } from './Player.service';
import { roomService } from './Room.service';
import { textBoxService } from './TextBox.service';

class ActionService {
    public doAction(userText: string): void {
        const items = itemService.getItemsFromName(userText);
        if (!items[0]) return; // TODO: don't return and instead check if a short command was given such as 'help'
        for (const action of items[0].actions) { // TODO: account for item being used on another item.
            if (!this.verbFound(action.verb, userText)) continue;
            if (!this.itemUseCasesMet(action.useCases, items[0])) continue;
            textBoxService.appendTextElement(action.narration, TextElements.paragraph);
            if (action.affectedItems.length > 0) this.affectItems(action.affectedItems);
        }
    }

    private verbFound(verb: string[], text: string): boolean {
        const lcText = text.toLowerCase();
        return verb.some(v => lcText.includes(v.toLowerCase()));
    }

    private itemUseCasesMet(useCases: UseCase, item: Item): boolean { // TODO: Make sure this stuff works as intended
        if (itemService.isInInventory(item) === useCases.inInventory) return true;
        const room = roomService.getRoomPlayerIsIn();
        const objectsInRoom = useCases.objectInRoom?.map(obj => itemService.getItemFromIdWithinRoom(obj, room));
        if (objectsInRoom) return true;
        return false;
    }

    private affectItems(affectedItems: AffectedItem[]): void {
        for (const affectedItem of affectedItems) {
            const items = itemService.getItemsFromId(affectedItem.itemId);

            if (affectedItem.affect.movedToInventory) {
                itemService.deleteItems(items);
                playerService.getPlayer().inventory.push(...items);
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
