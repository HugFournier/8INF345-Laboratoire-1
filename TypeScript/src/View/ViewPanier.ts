import * as $ from 'jquery';
import { ArticlePanier } from "../Model/ArticlePanier";
import { Article } from '../Model/Article';
import { Panier } from '../Model/Panier';

export function getEntetePanier(): string{
    return `
    <div class="container">
        <table class="table table-responsive">
            <thead>
                <tr>
                    <th style="width:50%">Article</th>
                    <th style="width:10%">Prix</th>
                    <th style="width:10%">Quantitée</th>
                    <th style="width:25%">Sous-Total</th>
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
                    <div class="col-sm-3">
                        <img src="${article.getImage()}" class="img-responsive"/>
                    </div>
                    <div class="col-sm-10">
                        <h3>${article.getLabel()}</h3>
                        <p>${article.getDescription()}</p>
                    </div>
                </div>
            </td>
            <td>$${article.getPrix()}</td>
            <td>${articlepanier.getQuantite()}</td>
            <td>$${articlepanier.calculerTotal()}</td>
            <td> <button class="btn btn-danger">Supprimer</button> </td>
        </tr>
    `;
}

export function getBasPanier(panier : Panier): string{
    return `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5" class="text-center">Total $${panier.calculerTotal()}</td>
            </tr>
        </foot>
            
    `;
}