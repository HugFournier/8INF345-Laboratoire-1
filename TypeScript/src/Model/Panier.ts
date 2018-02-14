import {Article} from "./Article";
import {ArticlePanier} from "./ArticlePanier"; 
import {Service} from "../Service/Service";

export class Panier{

    private items:ArticlePanier[];

    constructor(){
        this.items = new Array();
    }

    public addItem(id: number){
        let article : Article = new Service().getArticleParID(id);
        let articlePanier: ArticlePanier = this.items.find(articlePanier => articlePanier.getArticle() === article);
        if(articlePanier == undefined){
            this.items.push(new ArticlePanier(article, 1));
            console.log("item"+this.items);
        } else {
            articlePanier.setQuantite(articlePanier.getQuantite() + 1);
        }
    }

}