import * as $ from 'jquery';
import Article from './Model/Article';
import Service from './Service/Service';
import AccueilController from './Controller/AccueilController';
//import { getArticles, getNav } from './Controller/AccueilController';
import { url } from 'inspector';

$(function(){
    let body = $('body');
    let htmlAcc = "";
    htmlAcc += getNav();
    htmlAcc += getArticles();
    body.html(htmlAcc);
    let uri = parseURL("");
    console.log(uri);
});

function parseURL(stringUrl: string) : Map<string, string> {
    if(stringUrl == null){
        stringUrl = window.location.search.substring(1);
    }

    var params = new Map<string, string>();
    var queries = stringUrl.split("&");

    queries.forEach((indexQuery: string) => {
        var indexPair = indexQuery.split("=");
        var queryKey = decodeURIComponent(indexPair[0]);
        var queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : "");
        params[queryKey] = queryValue;
    });

    return params;
}