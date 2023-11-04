import { game } from '../main';
import Item from '../objects/Item';
import Room from '../objects/Room';
import { ObjectId } from '../types/ObjectId.type';

class RoomService {
    public getRoomPlayerIsIn(): Room {
        return game.rooms.filter(x => x.player !== null)[0];
    }

    public getRoomsFromId(roomId: ObjectId): Room[] {
        return game.rooms.filter(room => room.id.endsWith(roomId));
    }

    public itemInCurrentRoom(item: Item): boolean {
        return this.getRoomPlayerIsIn().items.includes(item);
    }
}

export const roomService = new RoomService();
