import * as $ from 'jquery';
import { Article } from "../Model/Article";
import { PanierController } from "../Controller/PanierController";
import {Panier} from "../Model/Panier";

export function generateHTMLArticle(element: Article, isDetailed: boolean = false) : string {
    return ` 
        <div class="col-xs-12 col-sm-6 col-md-4" >  
            <div class="thumbnail">
                <img src="${element.getImage()}" class="img-responsive rounded mx-auto d-block" alt="${element.getLabel()}"/>
                <div class="caption">
                    <p> ${element.getLabel()} </p>
                    <p>${isDetailed ? element.getDescription() : ""}</p>
                    <p>$${element.getPrix()} ${!isDetailed ? getBoutonDetail(element.getID()) : ""}</p>
                    <p>${getBoutonAjouterPanier(element.getID())}</p>
                </div>
            </div>
        </div>
    `;
}

export function getEnteteAccueil(nbPage : number) : string {
    return `
        <br/>
        <div class="container-fluid">
            <center>${getLienPagination(nbPage)}</center>
            <br/><br/>
                <div style="display:flex; align-items:stretch; flex-flow: row wrap">
    `;
}

export function getBasAccueil(nbPage : number) : string {
    return `
                    
                </div><br>
            <center>${getLienPagination(nbPage)}</center>
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

function genererLesLiens(nbPage : number):string{
    let html : string = "";
    let i : number = 0;
    for(i;i<nbPage;i++){
        html += '<a href="?view=Accueil&page='+i+'" class="btn btn-primary btn-lg" role="button" aria-disabled="true">'+(i+1)+'</a>';
    }
    return html;
}