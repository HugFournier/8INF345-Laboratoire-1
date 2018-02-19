export function getNav(): string{
    return `
        <div>
            <img src="src/Images/mememarket.PNG" class="img-fluid" />
        </div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="?">Mémé Market</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
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