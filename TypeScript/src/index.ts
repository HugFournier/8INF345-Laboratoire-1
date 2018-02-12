import * as $ from 'jquery';
import Article from './Model/Article';
import Service from './Service/Service';
import AccueilController from './Controller/AccueilController';
import { url } from 'inspector';

$(function(){
    let uri = parseQueryString("");
    console.log(uri);
    let accueilController = new AccueilController();
    let body = $('body');
    let htmlAcc = "";
    htmlAcc += accueilController.getNav();
    htmlAcc += accueilController.getArticles();
    htmlAcc += getForm();
    body.html(htmlAcc);
    let btn = document.getElementById("addPanier");
    //btn.addEventListener("click", (e:Event) => accueilController.ajouterPanier(e.srcElement.getAttribute("idArticle")));
});

//Fonction de test pour un formulaire
function getForm(): string{
    return "<div class='container'><form id='testForm'>"+
    "<div class='form-group'><label for='login'>Pseudo :</label>"+
    "<input name='login' id='login' type='text' class='form-control' /></div>"+
    "<div class='form-group'><label for='pwd'>Mot de passe :</label>"+
    "<input name='pwd' id='pwd' type='text' class='form-control' /></div>"+
    "<button type='submit' class='btn btn-primary'>Connexion</button></form></div>";
}

//Récupère les paramètres dans l'URL
function parseQueryString(queryString: string): Map<string, string> {
    if (queryString == null) {
        queryString = window.location.search.substring(1);
    }

    var params = new Map<string, string>();

    var queries = queryString.split("&");

    queries.forEach((indexQuery: string) => {
        var indexPair = indexQuery.split("=");

        var queryKey = decodeURIComponent(indexPair[0]);
        var queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : "");

        params[queryKey] = queryValue;
    });

    return params;
}