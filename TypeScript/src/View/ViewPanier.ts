import * as $ from 'jquery';
import { ArticlePanier } from "../Model/ArticlePanier";
import { Article } from '../Model/Article';
import { Panier } from '../Model/Panier';
import { PanierController } from '../Controller/PanierController';

export function getEntetePanier(): string{
    return `
    <br/>
    <div class="container table-responsive">
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th style="width:60%">Article</th>
                    <th style="width:10%">Prix</th>
                    <th style="width:5%">Quantitée</th>
                    <th style="width:20%">Sous-Total</th>
                    <th style="width:10%"><th>
                </tr>
            </thead>
            <tbody>
    `;
}

export function generateHTMLArticlePanier(articlepanier: ArticlePanier): string{
    let article : Article = articlepanier.getArticle();
    return `
        <tr>
            <td>
                <div class="row">
                    <div class="col-sm-3 hidden-sm">
                        <img src="${article.getImage()}" class="img-responsive" alt="${article.getLabel()}"/>
                    </div>
                    <div class="col-sm-10">
                        <h4>${article.getLabel()}</h4>
                        <p>${article.getDescription()}</p>
                    </div>
                </div>
            </td>
            <td>$${article.getPrix()}</td>
            <td>${articlepanier.getQuantite()}</td>
            <td>$${articlepanier.calculerTotal()}</td>
            <td> ${getCodeBoutonSupprimer(article.getID())} </td>
        </tr>
    `;
}

export function getBasPanier(panier : Panier): string{
    let total : number = panier.calculerTotal();
    return `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5" class="text-center">Total $${total}<br>${!panier.estVide() ? getCodeBoutonPasserCommande() : ""}</td>
            </tr>
        </foot>
            
    `;
}

function getCodeBoutonPasserCommande() : string
{
    return '<button class="btn btn-success passerCommande">Tout acheter</button>'
}

function getCodeBoutonSupprimer(id :number) : string
{
    return '<button idArticle='+ id.toString() +' class="btn btn-danger supprimerArticlePanier">Supprimer</button>'
}