import * as $ from 'jquery';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import { Panier } from '../Model/Panier';
import {getEntetePanier, generateHTMLArticlePanier, getBasPanier} from "../View/ViewPanier";
import {LocalStorageWorker} from './StorageHelper';
import { FabriquePanier } from '../Model/FabriquePanier';

export class PanierController implements IController{
	
	public display(){
		let body = $('body');
		let htmlPanier = getNav();
		let panier : Panier = this.getPanier();
		htmlPanier += getEntetePanier();
		panier.getArticlesPanier().forEach(e => htmlPanier += generateHTMLArticlePanier(e));
		htmlPanier += getBasPanier(panier);
		body.html(htmlPanier);
        this.chargerEventBoutonSuppression();
        this.chargerEventBoutonPasserCommande();
    }

	/*
      * Evenement du bouton pour supprimer un article du panier
    */
    private chargerEventBoutonSuppression(){
        let btn = $('.supprimerArticlePanier').on('click', function(event){
            let id:number = +event.currentTarget.getAttribute("idArticle");
			let CPanier : PanierController = new PanierController();
			CPanier.removeArticleParID(id);
			CPanier.display();
        });
    }

	/*
      * Evenement du bouton pour passer une commande
    */
    private chargerEventBoutonPasserCommande(){
        let btn = $('.passerCommande').on('click', function(event){
			let CPanier : PanierController = new PanierController();
			CPanier.viderPanier();
			CPanier.display();
			alert("Commande réalisée avec succès, votre numéro de commande est le " + CPanier.randomisation() + ". Vous pouvez maitenant retourner à l'accueil");
        });
    }

	/*
      * Génère 5 lettres aléatoires et 10 chiffres aléatoire et retourne la concaténation des chiffres:lettres
    */
	private randomisation(): string{
		let randomNumbers = "", randomLetters = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for(let i = 0; i < 10; i++)
			randomNumbers += (Math.floor(Math.random() * 9) + 1).toString();
		for (var i = 0; i < 5; i++)
			randomLetters += possible.charAt(Math.floor(Math.random() * possible.length));
		return "#" + randomLetters + ":" + randomNumbers;
	}

	/*
      * Ajoute un article dans le Stockage local en fonction de son ID passé en paramètre
    */
	public addArticleParID(id:number){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		let panier:Panier = this.getPanier();
		stockage.remove("panier");
		panier.addItem(id);
		stockage.add('panier', JSON.stringify(panier));
	}

	/*
      * Supprime un article dans le Stockage local en fonction de son ID passé en paramètre
    */
	public removeArticleParID(id:number){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		let panier:Panier = this.getPanier();
		stockage.remove("panier");
		panier.removeItem(id);
		stockage.add('panier', JSON.stringify(panier));
	}

	/*
      * Suprrime le panier du Stockage local
    */
	public viderPanier(){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		stockage.remove("panier");
	}

	/*
      * Retourne un panier récupéré dans le Stockage local
    */
	public getPanier(): Panier{
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		let panierString : string = stockage.get("panier");
		let panier:Panier;

		if(panierString == null || panierString === ""){
			panier = new Panier();
			stockage.remove("panier");
			stockage.add("panier", JSON.stringify(panier));
		}
		else
		{
			panier = new FabriquePanier().factoryArticlePanierFromJSON(panierString);
		}
		return panier;
	}
	
}