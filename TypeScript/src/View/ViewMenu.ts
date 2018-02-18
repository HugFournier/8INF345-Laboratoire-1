export function getNav(): string{
    /*return `
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="?">Marché mémé</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="?">Accueil</a>
                    <a class="nav-item nav-link" href="?view=Panier">Panier</a>
                    <a class="nav-item nav-link" href="?view=Login">Se connecter</a>
                </div>
            </div>
        </nav>
        
        `;*/
    return `
        <div>
            <img src="src/Images/mememarket.PNG" class="img-fluid" />
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="?">Mémé Market</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="?">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="?view=Panier">Panier</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="?view=Login">Se connecter</a>
              </li>
            </ul>
        </div>
        </div>
        </nav>
    `;
}