import { Verbs } from '../constants/Words.constant';
import { ObjectId } from './ObjectId.type';

export type ItemAction = {
    useCases: ItemUseCase;
    narration: string;
    verb: (Verbs | string)[];
    affectedItems: AffectedItem[];
};

export type ItemUseCase = {
    inInventory?: boolean;
    objectInRoom?: ObjectId[];
};

export type AffectedItem = {
    itemId: ObjectId;
    affect: ItemAffect;
};

export type ItemAffect = {
    movedToInventory?: boolean;
    movedToRoom?: ObjectId;
    deletion?: boolean;
};
