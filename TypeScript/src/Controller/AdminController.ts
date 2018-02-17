import * as $ from 'jquery';
import { IController } from "./IController";
import {Service} from '../Service/Service';
import {getNav} from '../View/ViewMenu';
import { getEnTeteTableau, getBasTableau, generateArticleAdmin } from "../View/ViewAdmin";
import { Article } from '../Model/Article';

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
        let btn = $('#ajouterArticleAdmin').on('click', this.addArticle);
    }

    private addArticle() {
        let newArticle: Article = new Article(parseInt($('#newID').val().toString()), $('#newNom').val().toString(), $('#newDescription').val().toString(), parseInt($('#newPrix').val().toString()), "http://lorempixel.com/200/200/");
        $('#tableAdmin').find('tbody').append(generateArticleAdmin(newArticle));
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