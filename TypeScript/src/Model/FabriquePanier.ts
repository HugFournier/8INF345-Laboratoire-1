import { ArticlePanier } from "./ArticlePanier";
import { Panier } from "./Panier";

export class FabriquePanier{
    
    constructor(){

    }

    factoryArticlePanier(JSONString: string): Panier {
        console.log(JSONString);
        return new Panier();
    }

}