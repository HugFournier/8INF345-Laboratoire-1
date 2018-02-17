import * as $ from 'jquery';
import { Article } from "../Model/Article";
import { PanierController } from "../Controller/PanierController";
import {Panier} from "../Model/Panier";

export function generateHTMLArticle(element: Article, isDetailed: boolean = false) : string {
    return ` 
        <tr idArticle="${element.getID()}" class="articleAccueil">
            <td><img src="${element.getImage()}"/></td>
            <td> ${element.getLabel()} </td>
            <td>${(element.getDescription().length > 28 && !isDetailed ? element.getDescription().substring(0, 25) + "..." : element.getDescription())}</td>
            <td>$${element.getPrix()}</td>
            <td>${getBoutonAjouterPanier(element.getID())}</td>
            ${!isDetailed ? "<td>"+getBoutonDetail(element.getID())+"</td>" : ""}
        </tr>
    `;
}

function getBoutonAjouterPanier(id: number): string{
    return `<button idArticle="${id}" class="btn btn-primary addPanier">Ajouter au panier</button>`;
}

function getBoutonDetail(id: number): string{
    return `<button idArticle="${id}" class="btn btn-primary detail">Détail</button>`;
}