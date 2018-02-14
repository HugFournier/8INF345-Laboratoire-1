

export function generateHTMLFormLogin(): string{
    return `
        <div class="container">
            <form id="LoginForm">
                <div class="form-group">
                    <label for="login">Identifiant :</label>
                    <input name="login" id="login" type="text" class="form-control" placeholder="Identifiant" required/>
                </div>
                <div class="form-group">
                    <label for="pwd">Mot de passe :</label>
                    <input name="pwd" id="pwd" type="password" class="form-control" placeholder="Mot de passe" required/>
                </div>
                <button type="submit" class="btn btn-primary" id="loginButton">Connexion</button>
            </form>
        </div>`;
}