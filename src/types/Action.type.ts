import { Verbs } from '../constants/Words.constant';
import { ObjectId } from './ObjectId.type';

export type Action = {
    useCases: UseCase;
    narration: string;
    verb: (Verbs | string)[];
    affectedItems: AffectedItem[];
};

export type UseCase = {
    inInventory?: boolean;
    objectInRoom?: ObjectId[];
};

export type AffectedItem = {
    itemId: ObjectId;
    affect: Affect;
};

export type Affect = {
    movedToInventory?: boolean;
    movedToRoom?: ObjectId;
    deletion?: boolean;
};
