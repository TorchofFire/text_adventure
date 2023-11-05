import { game } from '../main';
import Item from '../objects/Item';
import Room from '../objects/Room';
import { ObjectId } from '../types/ObjectId.type';

class ItemService {
    public isInInventory(item: Item): boolean {
        return game.player.inventory.includes(item);
    }

    public getItemFromIdWithinRoom(itemId: ObjectId, room: Room): Item | undefined {
        return room.items.find(item => item.id === itemId);
    }

    public getItemsFromId(itemId: ObjectId): Item[] {
        const items = [];
        for (const room of game.rooms) {
            items.push(...room.items.filter(item => item.id.endsWith(itemId)));
        }
        items.push(...game.player.inventory.filter(item => item.id.endsWith(itemId)));
        return items;
    }

    public getItemsFromName(text: string): Item[] {
        const lcText = text.toLowerCase();
        const items = [];
        for (const room of game.rooms) {
            items.push(...room.items.filter(item => {
                const possibleNames = [item.name];
                if (item.altNames) possibleNames.push(...item.altNames);
                return possibleNames.some(name => lcText.includes(name.toLowerCase()));
            }));
        }
        items.push(...game.player.inventory.filter(item => {
            const possibleNames = [item.name];
            if (item.altNames) possibleNames.push(...item.altNames);
            return possibleNames.some(name => lcText.includes(name.toLowerCase()));
        }));
        return items;
    }

    public deleteItems(items: Item[]): void {
        for (const room of game.rooms) {
            room.items = room.items.filter(item => !items.includes(item));
        }
        if (game.player?.inventory) game.player.inventory = game.player.inventory.filter(item => !items.includes(item));
    }
}

export const itemService = new ItemService();
