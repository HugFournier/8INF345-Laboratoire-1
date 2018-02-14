import * as $ from 'jquery';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import { Panier } from '../Model/Panier';
import {getEntetePanier, generateHTMLArticlePanier} from "../View/ViewPanier";
import {LocalStorageWorker} from './StorageHelper';

export class PanierController implements IController{
	
	public display(){
		let body = $('body');
        let htmlAcc = getNav();
		htmlAcc += getEntetePanier();
		body.html(htmlAcc);
		console.log("nada");
	}

	public addArticleParID(id:number){
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		let panier:Panier = stockage.get("panier");
		if(panier == null){
			panier = new Panier();
		} else {
			stockage.remove("panier");
		}
		panier.addItem(id);
		stockage.add('panier', panier);
	}

	public getPanier(): Panier{
		let stockage : LocalStorageWorker = new LocalStorageWorker();
		let panier:Panier = stockage.get('panier');
		if(panier == null){
			panier = new Panier();
			stockage.add("panier",panier);
		}
		return panier;
	}
	
}