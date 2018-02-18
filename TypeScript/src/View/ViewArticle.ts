import * as $ from 'jquery';
import { Article } from "../Model/Article";
import { PanierController } from "../Controller/PanierController";
import {Panier} from "../Model/Panier";

export function generateHTMLArticle(element: Article, isDetailed: boolean = false) : string {
    return ` 
        <tr idArticle="${element.getID()}" class="articleAccueil">
            <td><img src="${element.getImage()}"/></td>
            <td> ${element.getLabel()} </td>
            <!--<td>${(element.getDescription().length > 28 && !isDetailed ? element.getDescription().substring(0, 25) + "..." : element.getDescription())}</td>-->
            <td>$${element.getPrix()}</td>
            <td>${getBoutonAjouterPanier(element.getID())}</td>
            ${!isDetailed ? "<td>"+getBoutonDetail(element.getID())+"</td>" : ""}
        </tr>
    `;
}

export function getEnteteAccueil(nbPage : number) : string {
    return `
        <div class='container table-responsive'>
            ${getLienPagination(nbPage)}
            <table class='table table-hover'>
    `;
}

export function getBasAccueil(nbPage : number) : string {
    return `
            </table>
            ${getLienPagination(nbPage)}
        </div>
    `;
}

function getBoutonAjouterPanier(id: number): string{
    return `<button idArticle="${id}" class="btn btn-primary addPanier">Ajouter au panier</button>`;
}

function getBoutonDetail(id: number): string{
    return `<button idArticle="${id}" class="btn btn-primary detail">Détail</button>`;
}

function getLienPagination(nbPage : number):string{
    return `
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        ${genererLesLiens(nbPage)}
    </div>
    `;
}

function genererLesLiens(nbPage : number):string{
    let html : string = "";
    let i : number = 0;
    for(i;i<nbPage;i++){
        html += '<a href="?view=Accueil&page='+i+'" class="btn btn-primary btn-lg" role="button" aria-disabled="true">'+(i+1)+'</a>';
    }
    return html;
}