import { Articles } from '../constants/Words.constant';

export default class Item {
    constructor() {
        this.name = 'Item Name';
        this.altNames = null;
        this.description = 'Item Description';
        this.canBePickedUp = true;
        this.article = Articles.a;
    }

    name: string;
    altNames: string[] | null;
    description: string;
    canBePickedUp: boolean;
    article: Articles;

    public setName(name: string): Item {
        this.name = name;
        return this;
    }

    public setAltName(names: string[]): Item {
        this.altNames = names;
        return this;
    }

    public setDescription(description: string): Item {
        this.description = description;
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
