import { Verbs } from '../constants/Words.constant';
import { ObjectId } from './ObjectId.type';

export type RoomAction = {
    // TODO: add door things
    // useCases: RoomUseCase;
    narration: string;
    verb: (Verbs | string)[];
    movePlayerToRoom: ObjectId;
};

export type RoomUseCase = {
    // door stuff here
};

