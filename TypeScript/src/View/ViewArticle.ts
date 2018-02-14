import * as $ from 'jquery';
import { Article } from "../Model/Article";
import { PanierController } from "../Controller/PanierController";
import {Panier} from "../Model/Panier";

export function generateHTMLArticle(element: Article, isDetailed: boolean = false) : string {
    return ` 
        <tr>
            <td><img src="${element.getImage()}"/></td>
            <td> ${element.getLabel()} </td>
            <td>${(element.getDescription().length > 28 && !isDetailed ? element.getDescription().substring(0, 25) + "..." : element.getDescription())}</td>
            <td>CDN$  ${element.getPrix()} </td>
            <td>${getBoutonAjouterPanier(element)}</td>
        </tr>
    `;
}

function getBoutonAjouterPanier(article: Article): string{
    //return `<button class="btn btn-primary addPanier" onClick="${Panier.getInstancePanier().addItem(article)}">Ajouter au panier</button>`;
    return `<button class="btn btn-primary addPanier">Ajouter au panier</button>`;
}