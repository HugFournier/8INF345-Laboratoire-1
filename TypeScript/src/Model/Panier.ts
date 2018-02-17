import {Article} from "./Article";
import {ArticlePanier} from "./ArticlePanier"; 
import {Service} from "../Service/Service";

export class Panier{

    private items:ArticlePanier[];

    constructor(){
        this.items = new Array();
    }

    public addItem(id: number, quantite : number = 1){
        let articlePanier: ArticlePanier = this.items.find(articlePanier => articlePanier.getID() === id);
        if(articlePanier == undefined){
            this.items.push(new ArticlePanier(id, quantite));
        } else {
            articlePanier.setQuantite(articlePanier.getQuantite() + quantite);
        }
    }

    public getArticlesPanier() : ArticlePanier[]{
        return this.items;
    }
}