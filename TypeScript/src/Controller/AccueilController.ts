import Service from '../Service/Service';

export default class AccueilController {

    public constructor(){

    }

    public getArticles() : string{
        let html = "<table class='table table-hover table-responsive' align='center'>";
        let liArticles = Service.returnArticlesStub();

        liArticles.forEach(element => {
            let img = "<img src='"+element.getImage()+"'/>";
            html += "<tr><td>" + img +"</td><td>"+ element.getLabel() + "</td><td>" + (element.getDescription().length > 50 ? element.getDescription().substring(0, 47) + "..." : element.getDescription()) + "</td><td>CDN$ " + element.getPrix() + "</td><td><button id='addPanier' class='btn btn-primary'>Ajouter au panier</button></td></tr>";
        });

        return html += "</table>";
    }

    public getNav() : string{
        return "<nav class='navbar navbar-default'>"+
        "<div class='container'><div class='navbar-header'>"+
        "<a class='navbar-brand'>Catalogue</a></div>"+
        "<ul class='nav navbar-nav'><li><a>Accueil</a></li><li><a>Home</a></li></ul></div></nav>";
    }

}
//export { getArticles, getNav };