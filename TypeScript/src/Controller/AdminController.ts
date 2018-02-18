import * as $ from 'jquery';
import { IController } from "./IController";
import {Service} from '../Service/Service';
import {getNav} from '../View/ViewMenu';
import { getEnTeteTableau, getBasTableau, generateArticleAdmin, clearInputsAdmin } from "../View/ViewAdmin";
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
        let btn = $('#ajouterArticleAdmin').on('click', this.addArticle); //Charge l'evenement du bouton pour ajouter un article
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

    private addArticle() {
        if($('#newID').val() != '' && $('#newNom').val() != '' && $('#newDescription').val() != '' && $('#newPrix').val() != ''){
            let newArticle: Article = new Article(parseInt($('#newID').val().toString()), $('#newNom').val().toString(), $('#newDescription').val().toString(), parseInt($('#newPrix').val().toString()), "http://lorempixel.com/200/200/");
            $('#tableAdmin').find('tbody').append(generateArticleAdmin(newArticle));
            clearInputsAdmin();
        }
    }

    private chargerEventBoutonSupprimer(){
       
            $('#tableAdmin').on('click', '.btnSuppr', function(){
                if(confirm("Êtes-vous sûr de vouloir supprimer cette article ?") == true){
                    $(this).closest('tr').remove();
                }
            });
    }

    private chargerEventBoutonModifier(){
        let btn = $('.btnModif').on('click', function(event){
            alert("Vous avez modifié l'article.");
        });   
    }

}