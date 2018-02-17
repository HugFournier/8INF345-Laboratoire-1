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
		
		let panier:Panier = new FabriquePanier().factoryArticlePanierFromJSON(stockage.get("panier"));
		if(panier == null){
			panier = new Panier();
		} else {
			stockage.remove("panier");
		}
		panier.addItem(id);
		stockage.add('panier', JSON.stringify(panier));
	}

	public getPanier(): Panier{
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		console.log(stockage.get('panier'));
		let panier:Panier = new FabriquePanier().factoryArticlePanierFromJSON(stockage.get("panier"));
		if(panier == null){
			panier = new Panier();
			stockage.add("panier", JSON.stringify(panier));
		}
		console.log(panier);
		return panier;
	}
	
}