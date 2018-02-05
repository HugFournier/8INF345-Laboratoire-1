function afficherArticles() {
    var articles = Service.returnArticlesStub();
    /*let articles = [
        new Article("Toto","blablabla","http://lorempixel.com/200/200"),
        new Article("Tata","blobloblo","http://lorempixel.com/200/200"),
    ];*/
    var ligne;
    var contenu;
    var image;
    var listeHTML = document.getElementById('listeArticle');
    articles.forEach(function (element) {
        ligne = document.createElement('li');
        contenu = document.createTextNode(element.toString());
        image = document.createElement('img');
        image.setAttribute("src", element.getImage());
        ligne.appendChild(image);
        ligne.appendChild(contenu);
        listeHTML.appendChild(ligne);
    });
}
afficherArticles();
