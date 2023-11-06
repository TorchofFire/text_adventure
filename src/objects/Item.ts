import { Articles } from '../constants/Words.constant';
import { ItemAction } from '../types/ItemAction.type';
import { ObjectId } from '../types/ObjectId.type';

export default class Item {
    constructor(name: string, id: ObjectId, description: string) {
        this.name = name;
        this.id = id;
        this.altNames = null;
        this.description = description;
        this.canBePickedUp = true;
        this.article = Articles.a;
        this.actions = [];
    }

    name: string;
    id: ObjectId;
    altNames: string[] | null;
    description: string;
    canBePickedUp: boolean;
    article: Articles;
    actions: ItemAction[];

    public addAction(action: ItemAction): Item {
        this.actions.push(action);
        return this;
    }

    public setAltName(names: string[]): Item {
        this.altNames = names;
        return this;
    }

    public setCanBePickedUp(canBePickedUp: boolean): Item {
        this.canBePickedUp = canBePickedUp;
        return this;
    }

    public setArticle(article: Articles): Item {
        this.article = article;
        return this;
    }

    // TODO add what event and what triggers it
}
