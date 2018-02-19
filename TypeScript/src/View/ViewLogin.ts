

export function generateHTMLFormLogin(): string{
    return `
        <br/><br/>
        <div class="container text-center">
            <div class="input-group mb-3" id="formLogin">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Identifiant</span>
                </div>
                <input id="login" type="text" class="form-control" placeholder="Identifiant" aria-label="Identifiant" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Mot de passe</span>
                </div>
                <input id="pwd" type="password" class="form-control" placeholder="Mot de passe" aria-label="Mot de passe" aria-describedby="basic-addon1">
            </div>
            <button type="submit" class="btn btn-primary" id="loginButton">Connexion</button>
        </div>
    `;
}