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
        let btn = $('#ajouterArticleAdmin').on('click', this.addArticle); //Charge l'evenement du bouton pour ajouter un article
        this.chargerEventBoutonModifier();
        this.chargerEventBoutonSupprimer();
    }

    private generateTableauArticleAdmin(): string{
        let html : string = "";
        let liArticles : Article[] = new Service().returnArticlesStub();
        liArticles.forEach(article => {
            html += generateArticleAdmin(article);
        });
        return html;
    }

    private addArticle() {
        if(!(/^\s*$/.test(<string>$('#newID').val()) || /^\s*$/.test(<string>$('#newNom').val()) || /^\s*$/.test(<string>$('#newDescription').val()) || /^\s*$/.test(<string>$('#newPrix').val()))){
            let newArticle: Article = new Article(parseInt($('#newID').val().toString()), $('#newNom').val().toString(), $('#newDescription').val().toString(), parseInt($('#newPrix').val().toString()), "http://lorempixel.com/200/200/");
            $('#tableAdmin').find('tbody').append(generateArticleAdmin(newArticle));
            clearInputsAdmin();
        }else{
            alert("Veuillez renseigner tous les champs");
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
        let btn = $('#tableAdmin').on('click', '.btnModif', function(){
            let ligneModif : JQuery<HTMLElement> = $(this).closest('tr');
            let newLabel : string = <string> ligneModif.find('.modifLabel').val();
            let newDescription : string = <string> ligneModif.find('.modifDescription').val();
            let newPrix : string = <string> ligneModif.find('.modifPrix').val();
            if(/^\s*$/.test(newLabel) || /^\s*$/.test(newDescription) || /^\s*$/.test(newPrix)){
                alert("Veuillez ne pas laisser de champs vides");
            }else{
                alert("Vous avez modifié l'article");
            }
        });
    }

}