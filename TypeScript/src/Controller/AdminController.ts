import * as $ from 'jquery';
import { IController } from "./IController";
import {Service} from '../Service/Service';
import {getNav} from '../View/ViewMenu';
import { getEnTeteTableau, getBasTableau, generateArticleAdmin } from "../View/ViewAdmin";

export class AdminController implements IController{

    public display(){
        let body = $('body');
        let htmlAdmin = getNav();
        htmlAdmin += getEnTeteTableau();
        htmlAdmin += this.generateTableauArticleAdmin();
        htmlAdmin += getBasTableau();
        body.html(htmlAdmin);
        this.chargerEventBoutonModifier();
        this.chargerEventBoutonAjouter();
        this.chargerEventBoutonSupprimer();
    }

    private generateTableauArticleAdmin(): string{
        let html;
        let liArticles = new Service().returnArticlesStub();
        liArticles.forEach(article => {
            html += generateArticleAdmin(article);
        });
        return html;
    }

    private chargerEventBoutonAjouter(){
        let btn = $('#ajouterArticleAdmin').on('click', function(event){
            alert("Vous avez ajouté un article.");
        });  
    }

    private chargerEventBoutonSupprimer(){
        let btn = $('.btnSuppr').on('click', function(event){
            alert("Vous avez supprimé l'article.");
        });  
    }

    private chargerEventBoutonModifier(){
        let btn = $('.btnModif').on('click', function(event){
            alert("Vous avez modifié l'article.");
        });   
    }

}