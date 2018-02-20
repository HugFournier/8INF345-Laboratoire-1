import * as $ from 'jquery';
import {Service} from '../Service/Service';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import {generateHTMLArticle} from '../View/ViewArticle';
import { Panier } from '../Model/Panier';
import { PanierController } from './PanierController';

export class DescriptionController implements IController{

    public constructor(public id : number = 0){

    }

    public display(){
        let body = $('body');
        let html = getNav();
        html += "<div class='container'><table class='table table-hover table-responsive'><br>";
        html += generateHTMLArticle(new Service().getArticleParID(this.id), true); //description article
        html += "</table></div>";
        body.html(html);
        this.chargerEventBouton();
    }

    private chargerEventBouton(){
        let btn = $('.addPanier').on('click', function(event){
            let id:number = +event.currentTarget.getAttribute("idArticle");
            new PanierController().addArticleParID(id);
        });
    }

}