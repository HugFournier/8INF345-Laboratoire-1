import { Article } from "./Article";

export class ArticlePanier {

    constructor(private article: Article, private quantite: number){

    }

    getArticle(): Article{
        return this.article;
    }

    getQuantite(): number{
        return this.quantite;
    }

    setQuantite(value: number){
        this.quantite = value;
    }

    //Méthode permettant de calculer le sous-total en fonction du nombre d'articles
    calculerTotal(): number{
        return this.article.getPrix() * this.quantite; 
    }

}