import Service from '../Service/Service';

export default class AccueilController {

    public constructor(){

    }

    public getArticles() : string{
        let html = "<table class='table table-hover table-responsive' align='center'>";
        let liArticles = Service.returnArticlesStub();

        liArticles.forEach(element => {
            let img = "<img src='"+element.getImage()+"'/>";
            html += "<tr><td>" + img +"</td><td>"+ element.getLabel() + "</td><td>" + (element.getDescription().length > 50 ? element.getDescription().substring(0, 47) + "..." : element.getDescription()) + "</td><td>CDN$ " + element.getPrix() + "</td><td>"+ this.getCodeBoutonAjouterPanier(element.getID()) +"</td></tr>";
        });

        return html += "</table>";
    }

    private getCodeBoutonAjouterPanier(ID : number) : string {
        let tmp = "<button class='addPanier' idArticle='"+ID+"' class='btn btn-primary'>Ajouter au panier</button>";
        let btn =$('.addPanier').each( (index, elem) => {
            (<HTMLButtonElement>elem).on('click', this.ajouterPanier(ID.toString()));
        });
        return tmp;
    }

    public getNav() : string{
        let nav = "<nav class='navbar navbar-default'>";
        nav += "<div class='container'><div class='navbar-header'>";
        nav += "<a class='navbar-brand'>Catalogue</a></div>";
        nav += "<ul class='nav navbar-nav'><li><a>Accueil</a></li><li><a>Home</a></li></ul></div></nav>";
        
        return nav;
    }

    public ajouterPanier(ID : string) : void {
        console.log(ID);
    }

}