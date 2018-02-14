import * as $ from 'jquery';
import { IController } from "./IController";
import {generateHTMLFormLogin} from '../View/ViewLogin';
import {getNav} from '../View/ViewMenu';

export class LoginController implements IController{

    public display(){
        let body = $('body');
        let htmlAcc = getNav();
        htmlAcc += generateHTMLFormLogin();
        body.html(htmlAcc);
        let btnLogin = $('#loginButton').on('click', function(event){
            if($('#login').val() == "admin" && $('#pwd').val() == "admin"){
                alert("Vous êtes connecté !");
            } else {
                htmlAcc += `
                    <div class="container">
                        <p class="text-center" style="color:red;">Identifiant ou mot de passe incorrect</p>
                    </div>
                `;
                body.html(htmlAcc);
            }
        });
    }

}