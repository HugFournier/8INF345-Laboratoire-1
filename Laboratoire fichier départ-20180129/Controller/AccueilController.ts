function afficherArticles() {
        
    let articles = Service.returnArticlesStub();
    
    /*let articles = [
        new Article("Toto","blablabla","http://lorempixel.com/200/200"),
        new Article("Tata","blobloblo","http://lorempixel.com/200/200"),            
    ];*/
    let ligne;
    let contenu;
    let image;
    let listeHTML = <HTMLElement>document.getElementById('listeArticle');

    articles.forEach(element => {
        ligne = document.createElement('li');
        contenu = document.createTextNode(element.toString() as string);
        image = document.createElement('img');
        image.setAttribute("src",element.getImage());
        ligne.appendChild(image);
        ligne.appendChild(contenu);
        listeHTML.appendChild(ligne);
        });
}

afficherArticles();