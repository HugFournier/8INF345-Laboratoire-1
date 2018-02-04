//import {Article} from "../Buisness/Article";

class Service {
    public static returnArticlesStub() : Array<Article> {
        return [
            new Article("Toto","blablabla","http://lorempixel.com/200/200"),
            new Article("Tata","blobloblo","http://lorempixel.com/200/200"),            
        ];
    }
}