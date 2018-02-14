import * as $ from 'jquery';
import {getNav} from '../View/ViewMenu';
import { IController } from './IController';
import { Panier } from '../Model/Panier';
import {LocalStorageWorker} from './StorageHelper';

export class PanierController implements IController{
	
	public display(){
		let body = $('body');
        let htmlAcc = getNav();
		htmlAcc += this.getPanier();
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

	//Génere l'html pour afficher le panier
	public getPanier(): string{
		return `
			<div class="container">
				<table class="table table-responsive">
					<thead>
						<tr>
                        <th style="width:50%">Article</th>
                        <th style="width:10%">Prix</th>
                        <th style="width:10%">Quantitée</th>
                        <th style="width:25%">Sous-Total</th>
						</tr>
					</thead>
				</table>
			</div>
		`;
	}
	
}