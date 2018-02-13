import {Article} from "./Article";
import {ArticlePanier} from "./ArticlePanier"; 

export class Panier{

    private items:ArticlePanier[];
    private static instancePanier: Panier = null;

    private constructor(){
        this.items = new Array();
    }

    static getInstancePanier(): Panier{
        if(!Panier.instancePanier){
            Panier.instancePanier = new Panier();
        }
        return Panier.instancePanier;
    }

    public addItem(article: Article){
        let articlePanier: ArticlePanier = this.items.find(articlePanier => articlePanier.getArticle() === article);
        if(articlePanier == undefined){
            this.items.push(new ArticlePanier(article, 1));
            console.log("item"+this.items);
        } else {
            articlePanier.setQuantite(articlePanier.getQuantite() + 1);
        }
    }

}