import * as $ from 'jquery';
import { IController } from "./IController";
import {generateHTMLFormLogin} from '../View/ViewLogin';
import {getNav} from '../View/ViewMenu';
import { AdminController } from './AdminController';

export class LoginController implements IController{

    private incorrect: boolean = false;

    public display(){
        let body = $('body');
        let htmlLogin = getNav();
        htmlLogin += generateHTMLFormLogin();
        body.html(htmlLogin);
        let btnLogin = $('#loginButton').on('click', function(event){
            if($('#login').val() == "admin" && $('#pwd').val() == "admin"){
                let controller = new AdminController();
                controller.display();
            } else {
                $('#formLogin').before('<p class="text-center" style="color:red">Identifiant ou mot de passe incorrect</p>');                
            }
        });
    }

}