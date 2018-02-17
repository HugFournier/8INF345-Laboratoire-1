import * as $ from 'jquery';
import {Service} from '../Service/Service';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import {generateHTMLArticle} from '../View/ViewArticle';
import { Panier } from '../Model/Panier';
import { PanierController } from './PanierController';

export class AccueilController implements IController{

    public constructor(){

    }

    //Génère l'html pour afficher l'accueil
    public generateTableauHTMLArticles() : string{
        let html = "<div class='container'><table class='table table-hover table-responsive'>";
        let liArticles = new Service().returnArticlesStub();
        liArticles.forEach(element => {
            html += generateHTMLArticle(element);
        });
        return html += "</table></div>";
    }

    public display(){
        let body = $('body');
        let htmlAcc = getNav();
        htmlAcc += this.generateTableauHTMLArticles();
        body.html(htmlAcc);
        this.chargerEventBouton();
        this.chargerEventLigne();
    }

    private chargerEventBouton(){
        let btn = $('.addPanier').on('click', function(event){
            let id:number = +event.currentTarget.getAttribute("idArticle");
            new PanierController().addArticleParID(id);
        });
    }

    private chargerEventLigne(){
        let btn = $('.detail').on('click', function(event){
            let id:number = +event.currentTarget.getAttribute("idArticle");
            window.open("?view=Description&idArticle=" + id.toString(),"_self");
        });
    }
}