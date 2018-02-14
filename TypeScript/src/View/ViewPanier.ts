import * as $ from 'jquery';
import { ArticlePanier } from "../Model/ArticlePanier";

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
    return `
        <tr>
            <td>
                <div class="row">
                    <div class="col-sm-3">
                        <img src="${articlepanier.getArticle().getImage()}" class="img-responsive"/>
                    </div>
                    <div class="col-sm-10">
                        <h3>${articlepanier.getArticle().getLabel()}</h3>
                        <p>${articlepanier.getArticle().getDescription()}</p>
                    </div>
                </div>
            </td>
            <td>${articlepanier.getArticle().getPrix()}</td>
            <td>${articlepanier.calculerTotal()}</td>
            <td> <button class="btn btn-danger">Supprimer</button> </td>
        </tr>
    `;
}

export function getBasPanier(): string{
    return `
        </tbody>
        <tfoot>
            <tr>
                <td class="text-center">Total $ </td>
            </tr>
            
    `;
}