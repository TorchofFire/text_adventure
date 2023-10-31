import { Articles } from "../constants/Words.constant";

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

    public setName(name: string) {
        this.name = name;
        return this;
    }
    public setAltName(names: string[]) {
        this.altNames = names;
        return this;
    }
    public setDescription(description: string) {
        this.description = description;
        return this;
    }
    public setCanBePickedUp(canBePickedUp: boolean) {
        this.canBePickedUp = canBePickedUp;
        return this;
    }
    public setArticle(article: Articles) {
        this.article = article;
        return this;
    }

    // TODO add what event and what triggers it
}