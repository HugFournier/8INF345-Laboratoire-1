export function getNav(): string{
    return `
        <nav class='navbar navbar-default'>
            <div class='container'>
                <div class='navbar-header'>
                    <a class='navbar-brand' href='?view=Accueil'>Marché mémé</a>
                </div>
                <ul class='nav navbar-nav'>
                    <li><a href='?view=Accueil'>Accueil</a></li>
                    <li><a href='?view=Panier'>Panier</a></li>
                </ul>
                </div>
        </nav>`;
}