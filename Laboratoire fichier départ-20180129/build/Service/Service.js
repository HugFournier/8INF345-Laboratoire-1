//import {Article} from "../Buisness/Article";
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.returnArticlesStub = function () {
        return [
            new Article("Toto", "blablabla", "http://lorempixel.com/200/200"),
            new Article("Tata", "blobloblo", "http://lorempixel.com/200/200"),
        ];
    };
    return Service;
}());
