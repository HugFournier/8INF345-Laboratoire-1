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
    body.html(htmlAcc);
});

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