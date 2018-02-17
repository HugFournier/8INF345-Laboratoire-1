//#region import
import * as $ from 'jquery';
import {Article} from './Model/Article';
import {Service} from './Service/Service';
import {AccueilController} from './Controller/AccueilController';
import { url } from 'inspector';
import { PanierController } from './Controller/PanierController';
import * as ts from "typescript";
import { IController } from './Controller/IController';
import { LoginController } from './Controller/LoginController';
import { AdminController } from './Controller/AdminController';
import { DescriptionController } from './Controller/DescriptionController';
//#endregion

$(function(){
    //Récupération des paramètres URL
    let uri = parseQueryString(null);

    let controller: IController;

    if (uri['view'] === "Accueil" || uri['view'] == null)
    {
        controller = new AccueilController();
    }
    else if(uri['view'] === "Panier")
    {
        controller = new PanierController();
    } 
    else if (uri['view'] === "Login")
    {
        controller = new LoginController();
    }
    else if (uri['view'] === "Admin")
    {
        controller = new AdminController();
    }
    else if (uri['view'] === "Description")
    {
        controller = new DescriptionController(+uri['idArticle']);
    }
    controller.display();
});

/*
  * Récupère les paramètres dans l'URL et les stock dans une map
  * Fonction récupéré sur le site : https://www.malcontentboffin.com/2016/11/TypeScript-Function-Decodes-URL-Parameters.html
*/
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