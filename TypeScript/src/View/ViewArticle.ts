import * as $ from 'jquery';
import { Article } from "../Model/Article";
import { PanierController } from "../Controller/PanierController";
import {Panier} from "../Model/Panier";

/*
  * Génère le code HTML d'un article
  * 'isDetailed' permet de savoir si il faut afficher la description 
*/
export function generateHTMLArticle(element: Article, isDetailed: boolean = false) : string {
    return ` 
        <div class="col-xs-12 col-sm-6 col-md-3">
            <p><img src="${element.getImage()}" class="img-responsive" alt="${element.getLabel()}"/></p>
            <p> ${element.getLabel()} </p>
            <p>${isDetailed ? element.getDescription() : ""}</p>
            <p>$${element.getPrix()} ${!isDetailed ? getBoutonDetail(element.getID()) : ""}</p>
            <p>${getBoutonAjouterPanier(element.getID())}</p>
            
        </div>
    `;
}

/*
  * Affiche la pagination en haut de la page
*/
export function getEnteteAccueil(nbPage : number) : string {
    return `
        <br/>
        <div class="container-fluid">
            ${getLienPagination(nbPage)}
            <br/><br/>
            <div class="row">
    `;
}

/*
  * Affiche la pagination en bas de la page
*/
export function getBasAccueil(nbPage : number) : string {
    return `
            </div>
            ${getLienPagination(nbPage)}
            <br/><br/>
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

/*
  * Génère les liens de la pagination
*/
function genererLesLiens(nbPage : number):string{
    let html : string = "";
    let i : number = 0;
    for(i;i<nbPage;i++){
        html += '<a href="?view=Accueil&page='+i+'" class="btn btn-primary btn-lg" role="button" aria-disabled="true">'+(i+1)+'</a>';
    }
    return html;
}