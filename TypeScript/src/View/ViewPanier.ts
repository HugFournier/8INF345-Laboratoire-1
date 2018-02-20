import * as $ from 'jquery';
import { ArticlePanier } from "../Model/ArticlePanier";
import { Article } from '../Model/Article';
import { Panier } from '../Model/Panier';
import { PanierController } from '../Controller/PanierController';

export function getEntetePanier(): string{
    return `
    <br>
    <div class="container table-responsive">
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Article</th>
                    <th>Prix</th>
                    <th>Quantitée</th>
                    <th>Sous-Total</th>
                </tr>
            </thead>
            <tbody>
    `;
}

export function generateHTMLArticlePanier(articlepanier: ArticlePanier): string{
    let article : Article = articlepanier.getArticle();
    return `
        <tr>
            <td colspan="4">
                <div>
                    <h4>${article.getLabel()}</h4>
                    <p align="justify">${article.getDescription()}</p>
                </div>
            </td>
        </tr><tr></tr>
        <tr>
            <td style="vertical-align:bottom;"> ${getCodeBoutonSupprimer(article.getID())} </td>
            <td style="vertical-align:bottom;">$${article.getPrix()}</td>
            <td style="vertical-align:bottom;">${articlepanier.getQuantite()}</td>
            <td style="vertical-align:bottom;">$${articlepanier.calculerTotal()}</td>
        </tr>
    `;
}

export function getBasPanier(panier : Panier): string{
    let total : number = panier.calculerTotal();
    return `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4" class="text-center"><br>Total $${total}<br><br>${!panier.estVide() ? getCodeBoutonPasserCommande() : ""}</td>
            </tr>
        </foot>
        </table>
            
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