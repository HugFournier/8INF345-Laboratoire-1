import Service from '../Service/Service';

export default class AccueilController {

    public constructor(){

    }

    public getArticles() : string{
        let html = "<center><table class='table table-hover table-responsive'>";
        let liArticles = Service.returnArticlesStub();

        liArticles.forEach(element => {
            let img = "<img src='"+element.getImage()+"'/>";
            html += "<tr><td>" + img +"</td><td>"+ element.getLabel() + "</td><td>" + element.getDescription().substring(0, 50) + "...</td><td>CDN$ " + element.getPrix() + "</td><td><button id='addPanier' class='btn btn-primary'>Ajouter au panier</button></td></tr>";
        });

        return html += "</table></center>";
    }

    public getNav() : string{
        return "<nav class='navbar navbar-inverse'><div class='container-fluid'><div class='navbar-header'><a class='navbar-brand'>Catalogue</a></div><ul class='nav navbar-nav'><li><a href='#'>Accueil</a></li><li><a href='#'>Page 2</a></li></ul></div></nav>    <div class='container'><h3>Catalogue</h3><p>Bacon ipsum dolor amet swine porchetta drumstick salami, jerky kielbasa brisket buffalo bresaola ground round short ribs pork. Meatball alcatra beef ribs, andouille spare ribs swine short ribs pork picanha jerky ball tip ribeye ham. Short loin shankle rump, turducken fatback filet mignon t-bone short ribs biltong beef ribs tenderloin tail. Meatloaf jowl landjaeger, drumstick tenderloin pork belly burgdoggen chuck bresaola shankle tri-tip. Pork chop rump leberkas corned beef, porchetta filet mignon landjaeger pork belly picanha. Chuck porchetta pastrami turducken pork chop beef ribs. Swine kevin jerky, rump beef ribs prosciutto bacon beef buffalo.</p></div>";
        //return "<nav class='navbar navbar-inverse'><div class='container-fluid'><div class='navbar-header'><a class='navbar-brand' href='#'>WebSiteName</a></div><ul class='nav navbar-nav'><li class='active'><a href='#'>Home</a></li></div></nav>";
    }

}
//export { getArticles, getNav };