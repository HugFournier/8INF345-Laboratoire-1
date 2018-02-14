import * as $ from 'jquery';
import {Service} from '../Service/Service';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import {generateHTMLArticle} from '../View/ViewArticle';

export class AccueilController implements IController{

    public constructor(){

    }

    //Génère l'html pour afficher l'accueil
    public generateTableauHTMLArticles() : string{
        let html = "<div class='container'><table class='table table-hover table-responsive'>";
        let liArticles = Service.returnArticlesStub();
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
    }

    private chargerEventBouton(){
        let btn = $('.addPanier').on('click', function(event){
            alert("btn");
        });
    }
}