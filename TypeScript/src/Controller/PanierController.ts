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

    private chargerEventBoutonSuppression(){
        let btn = $('.supprimerArticlePanier').on('click', function(event){
            let id:number = +event.currentTarget.getAttribute("idArticle");
			let CPanier : PanierController = new PanierController();
			CPanier.removeArticleParID(id);
			CPanier.display();
        });
    }

    private chargerEventBoutonPasserCommande(){
        let btn = $('.passerCommande').on('click', function(event){
			let CPanier : PanierController = new PanierController();
			CPanier.viderPanier();
			CPanier.display();
			alert("Commande réalisée avec succès, votre numéro de commande est le " + CPanier.randomisation() + ". Vous pouvez maitenant retourner à l'accueil");
        });
    }

	private randomisation(): string{
		let randomNumbers = "", randomLetters = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for(let i = 0; i < 10; i++)
			randomNumbers += (Math.floor(Math.random() * 9) + 1).toString();
		for (var i = 0; i < 5; i++)
			randomLetters += possible.charAt(Math.floor(Math.random() * possible.length));
		return "#" + randomLetters + ":" + randomNumbers;
	}

	public addArticleParID(id:number){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		let panier:Panier = this.getPanier();
		stockage.remove("panier");
		panier.addItem(id);
		stockage.add('panier', JSON.stringify(panier));
	}

	public removeArticleParID(id:number){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		let panier:Panier = this.getPanier();
		stockage.remove("panier");
		panier.removeItem(id);
		stockage.add('panier', JSON.stringify(panier));
	}

	public viderPanier(){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		stockage.remove("panier");
	}

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