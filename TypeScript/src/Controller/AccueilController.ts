import * as $ from 'jquery';
import {Service} from '../Service/Service';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import {generateHTMLArticle, getEnteteAccueil, getBasAccueil} from '../View/ViewArticle';
import { Panier } from '../Model/Panier';
import { PanierController } from './PanierController';

export class AccueilController implements IController{

    public constructor(private page : number = 0){
    }

    //Génère l'html pour afficher l'accueil
    public generateTableauHTMLArticles() : string{
        let serveur : Service = new Service();
        let liArticles = serveur.returnPageArticlesStub(this.page == undefined ? 0 : this.page);
        let nbPage = serveur.getNombreDePage();
        let html = getEnteteAccueil(nbPage);
        liArticles.forEach(element => {
            html += generateHTMLArticle(element);
        });
        return html += getBasAccueil(nbPage);
    }

    public display(){
        let body = $('body');
        let htmlAcc = getNav();
        htmlAcc += this.generateTableauHTMLArticles();
        body.html(htmlAcc);
        this.chargerEventBoutonAjoutPanier();
        this.chargerEventBoutonDetail();
    }

    //Evenement du bouton pour ajouter un article au panier
    private chargerEventBoutonAjoutPanier(){
        let btn = $('.addPanier').on('click', function(event){
            let id:number = +event.currentTarget.getAttribute("idArticle");
            new PanierController().addArticleParID(id);
        });
    }

    //Evenement du bouton pour afficher le détail d'un article
    private chargerEventBoutonDetail(){
        let btn = $('.detail').on('click', function(event){
            let id:number = +event.currentTarget.getAttribute("idArticle");
            window.open("?view=Description&idArticle=" + id.toString(),"_self");
        });
    }
}