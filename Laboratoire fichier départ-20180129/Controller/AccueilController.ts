class AccueilController implements AccueilModel {

    listerArticles(): Article[] {
        return Service.returnArticlesStub();
    }
    
}