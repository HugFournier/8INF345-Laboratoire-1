var Article = /** @class */ (function () {
    function Article(label, description, image) {
        this.label = label;
        this.description = description;
        this.image = new URL(image);
    }
    ;
    Article.prototype.getLabel = function () {
        return this.label;
    };
    Article.prototype.getDescription = function () {
        return this.description;
    };
    Article.prototype.getImage = function () {
        return this.image;
    };
    Article.prototype.toString = function () {
        return this.getLabel() + "\t" + this.getDescription();
    };
    return Article;
}());
