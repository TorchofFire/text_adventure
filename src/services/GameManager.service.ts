import { Articles, Prepositions } from '../constants/Words.constant';
import Game from '../objects/Game';

class GameManagerService {
    public testGame(): Game {
        const game = new Game('Old Beach House', 'Figure out what secrets lie within the old beach house.\n(A game made to use all functions of the engine.)');

        const firstRoom = game.rooms[0];
        firstRoom.name = 'old beach house';
        firstRoom.id = 'outside';
        firstRoom.setPreposition(Prepositions.outside)
            .setArticle(Articles.an)
            .setAltNames(['outside'])
            .setDescription('You feel the sun hit your skin as you see an old somewhat dilapitated beach house in front of you.')
            .newDoor('front door', 'front', 'This is the door to the inside of the house', { x: 0, y: 1, z: 0 })
            .setArticle(Articles.the)
            .setAltNames(['inside']);

        const entrance = game.newRoom('entrance', 'entrance', 'As you walk in a putrid smell hits you in the face. Yuck!', { x: 0, y: 1, z: 0 })
            .setArticle(Articles.the);
        entrance.newDoor('door to the outside', 'front', 'This is the door to the outside of the house', { x: 0, y: 0, z: 0 })
            .setAltNames(['outside']);
        entrance.newItem('table', 'entrance-table', 'a table that is just positioned in the center of the room. Kinda ominous.');

        game.newRoom('side yard', 'yard', 'what used to be a side yard is now just sand', { x: 1, y: 0, z: 0 });

        return game;
    }
}

export const gameManagerService = new GameManagerService();
