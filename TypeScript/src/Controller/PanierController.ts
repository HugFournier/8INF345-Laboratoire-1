import * as $ from 'jquery';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import { Panier } from '../Model/Panier';
import {getEntetePanier, generateHTMLArticlePanier} from "../View/ViewPanier";

export class PanierController implements IController{
	
	public constructor(){
		
	}

	public display(){
		let body = $('body');
        let htmlAcc = getNav();
		htmlAcc += getEntetePanier();
		body.html(htmlAcc);
		console.log("nada");
	}
	
}