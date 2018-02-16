import { Article } from "./Article";
import {Service} from "../Service/Service";

export class ArticlePanier {

    constructor(private id: number, private quantite: number){

    }

    getID(): number{
        return this.id;
    }

    getQuantite(): number{
        return this.quantite;
    }

    setQuantite(value: number){
        this.quantite = value;
    }

    getArticleParId(id: number){
        return new Service().getArticleParID(id);
    }

    //Méthode permettant de calculer le sous-total en fonction du nombre d'articles
    calculerTotal(article: Article): number{
        return article.getPrix() * this.quantite; 
    }

}