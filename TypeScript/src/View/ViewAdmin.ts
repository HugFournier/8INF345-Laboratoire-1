import * as $ from 'jquery';
import { Article } from "../Model/Article";

/*
  * Génère l'HTML pour l'entête du tableau du panneau d'administration
*/
export function getEnTeteTableau(): string{
    return `
        <br/><br/>
        <div class="container table-responsive">
            <h1>Panneau d'administration</h1>
            <table id="tableAdmin" class="table">
                <thead>
                    <tr>
                        <th style="width:5%">ID</th>
                        <th style="width:20%">Nom</th>
                        <th style="width:55%">Description</th>
                        <th style="width:10%">Prix</th>
                        <th style="width:20%">Action</th>
                    </tr>
                </thead>
                <tbody>
    `;
}

/*
  * Génère l'HTML pour un article passé en paramètre
*/
export function generateArticleAdmin(article: Article): string{
    return `
    <tr>
        <td><p>${article.getID()}</p></td>
        <td><input type="text" class="form-control modifLabel" value="${article.getLabel()}"></td>
        <td><input type="text" class="form-control modifDescription" value="${article.getDescription()}"></td>
        <td><input type="number" class="form-control modifPrix" value="${article.getPrix()}" min="0"></td>
        <td>
            <button class="btn btn-success btnModif">+</button>
            <button class="btn btn-danger btnSuppr">-</button>
        </td>
    </tr>
    `;
}

/*
  * Génère l'HTML pour les dernières lignes du tableau du panneau d'administration
*/
export function getBasTableau(): string{
    return `
        </tbody>
        <tfoot>
            <tr>
                <td><input id="newID" type="number" class="form-control" placeholder="ID"  min="0"></td>
                <td><input id="newNom" type="text" class="form-control" placeholder="Nom de l'article"></td>
                <td><input id="newDescription" type="text" class="form-control" placeholder="Description"></td>
                <td><input id="newPrix" type="number" class="form-control" placeholder="Prix"  min="0"></td>
                <td>
                    <button type="submit" id="ajouterArticleAdmin" class="btn btn-success">Ajouter</button>
                </td>
            </tr>
            <tr>
                <td><a href="?" class="btn btn-warning">Retour</a></td>
            </tr>
        </tfoot>
        </table>
        </div>
    `;
}

/*
  * Vide les champs du formulaire
*/
export function clearInputsAdmin(){
    $('#newID').val('');
    $('#newNom').val('');
    $('#newDescription').val('');
    $('#newPrix').val('');
}