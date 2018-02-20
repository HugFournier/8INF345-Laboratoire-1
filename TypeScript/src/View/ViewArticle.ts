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
        <div ${!isDetailed ? 'class="col-xs-12 col-sm-6 col-md-4"' : ""}>  
            <div class="panel panel primary"
            style="
                background-color: rgb(228, 228, 176);
                padding-bottom: 1%;
                margin-bottom: 4%;
                padding-top: 27px;
                border-radius: 10px;
            "
            >
              <div class="panel-heading">
                    <h3 align="center"> ${element.getLabel()} </h3><br>
                </div>
                <div class="panel-body">
                    <img src="${element.getImage()}" idArticle="${element.getID()}" class="img-responsive rounded mx-auto d-block detail" alt="${element.getLabel()}"/>
                </div>
                <div class="panel-footer">
                    ${isDetailed ? '<p align="justify" style="padding:4%">' + element.getDescription() + '</p>': ""}
                    <h1 align="center">$${element.getPrix()}</h1>
                    <p align="center">${getBoutonAjouterPanier(element.getID())}</p>
                </div>
            </div>
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
            <center>${getLienPagination(nbPage)}</center>
            <br/><br/>
                <div style="display:flex; align-items:stretch; flex-flow: row wrap">
    `;
}

/*
  * Affiche la pagination en bas de la page
*/
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