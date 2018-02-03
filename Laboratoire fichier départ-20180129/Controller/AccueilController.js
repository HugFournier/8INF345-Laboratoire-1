var AccueilController = /** @class */ (function () {
    function AccueilController() {
    }
    AccueilController.prototype.listerArticles = function () {
        return Service.returnArticlesStub();
    };
    return AccueilController;
}());
