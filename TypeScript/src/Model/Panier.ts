import {Article} from "./Article";

export class Panier{

    private items:ItemPanier[] = new Array();

}

export class ItemPanier {
    private article: Article;
    private quantite: number;

    public constructor(article: Article, quantite: number){
        this.article = article;
        this.quantite = quantite;
    }

    public getArticle(){
        return this.article;
    }

    public getQuantite(){
        return this.quantite;
    }

    public setQuantite(value: number){
        this.quantite = value;
    }
    
}