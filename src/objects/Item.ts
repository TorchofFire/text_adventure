import { Articles } from '../constants/Words.constant';

export default class Item {
    constructor(name: string, description: string) {
        this.name = name;
        this.altNames = null;
        this.description = description;
        this.canBePickedUp = true;
        this.article = Articles.a;
    }

    name: string;
    altNames: string[] | null;
    description: string;
    canBePickedUp: boolean;
    article: Articles;

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
