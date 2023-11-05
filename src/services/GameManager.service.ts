import { Verbs } from '../constants/Words.constant';
import Game from '../objects/Game';

class GameManagerService {
    testGame(): Game {
        const game = new Game('The Testing Rooms', 'A game made solely for the purpose of testing out the engine');

        const room = game.rooms[0];
        room.newItem('ball', 'ball', 'a red ball')
            .addAction({
                verb: ['throw'],
                narration: 'You throw the ball and it bounces around before settling in the room.',
                affectedItems: [{ itemId: 'ball', affect: { movedToRoom: 'default' } }],
                useCases: { inInventory: true }
            })
            .addAction({
                verb: [Verbs.take],
                narration: 'You grab the ball and you are now carrying it.',
                affectedItems: [{ itemId: 'ball', affect: { movedToInventory: true } }],
                useCases: { inInventory: false }
            });
        room.newItem('couch', 'couch', 'a musty old couch')
            .setCanBePickedUp(false);
        room.newItem('knife', 'knife', 'knife')
            .addAction({
                verb: ['throw'],
                narration: 'You throw the knife and it sticks into the wall.',
                affectedItems: [{ itemId: 'knife', affect: { movedToRoom: 'default' } }],
                useCases: { inInventory: true }
            })
            .addAction({
                verb: [Verbs.take],
                narration: 'You grab the knife and are now carrying it.',
                affectedItems: [{ itemId: 'knife', affect: { movedToInventory: true } }],
                useCases: { inInventory: false }
            });
        room.newItem('cabinet', 'cabinet', 'A normal looking cabinet in the corner of the room')
            .setCanBePickedUp(false);
        return game;
    }
}

export const gameManagerService = new GameManagerService();
