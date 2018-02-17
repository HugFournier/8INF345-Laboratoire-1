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
	}

	public addArticleParID(id:number){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		
		let panier:Panier = this.getPanier();
		stockage.remove("panier");
		panier.addItem(id);
		stockage.add('panier', JSON.stringify(panier));
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