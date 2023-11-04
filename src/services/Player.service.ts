import Player from '../objects/Player';
import { roomService } from './Room.service';

class PlayerService {
    public getPlayer(): Player {
        return roomService.getRoomPlayerIsIn().player as Player;
    }
}

export const playerService = new PlayerService();
