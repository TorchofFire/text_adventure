import Game from '../objects/Game';

class GameManagerService {
    testGame(): Game {
        const game = new Game();
        game.title = 'The Testing Rooms';
        game.description = 'A game made solely for the purpose of testing out the engine';

        const room = game.rooms[0];
        room.name = 'Dusty Room';
        room.description = 'A dusty room where the air is stale and the floorboards are creaky';
        room.position = { x: 0, y: 0 };
        room.newItem('ball', 'a red ball');
        room.newItem('couch', 'a musty old couch')
            .setCanBePickedUp(false);
        room.newItem('knife', 'knife');
        room.newItem('cabinet', 'A normal looking cabinet in the corner of the room')
            .setCanBePickedUp(false);
        return game;
    }
}

export const gameManagerService = new GameManagerService();
