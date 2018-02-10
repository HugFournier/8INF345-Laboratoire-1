import Article from '../Model/Article';

export default class Service {
    public static returnArticlesStub() : Array<Article> {
        return [
            new Article("Aspirateur 300", "Lorem ipsum dolor amet blue bottle skateboard unicorn, hashtag sartorial poutine offal master cleanse fixie. Stumptown migas gochujang dreamcatcher, you probably haven't heard of them drinking vinegar lomo viral small batch put a bird on it pitchfork neutra narwhal normcore. Craft beer tacos chambray flexitarian migas. Flannel four loko artisan humblebrag. Distillery art party master cleanse lyft vinyl offal post-ironic letterpress cray DIY forage stumptown plaid viral.", 16, "http://lorempixel.com/200/200"),
            new Article("Tondeuse à gazon","Lorem ipsum dolor amet blue bottle skateboard unicorn, hashtag sartorial poutine offal master cleanse fixie. Stumptown migas gochujang dreamcatcher, you probably haven't heard of them drinking vinegar lomo viral small batch put a bird on it pitchfork neutra narwhal normcore. Craft beer tacos chambray flexitarian migas. Flannel four loko artisan humblebrag. Distillery art party master cleanse lyft vinyl offal post-ironic letterpress cray DIY forage stumptown plaid viral.", 20, "http://lorempixel.com/200/200"),
            new Article("Aspirateur 300","blablabla", 30, "http://lorempixel.com/200/200"),
            new Article("Tondeuse à gazon","Lorem ipsum dolor amet blue bottle skateboard unicorn, hashtag sartorial poutine offal master cleanse fixie. Stumptown migas gochujang dreamcatcher, you probably haven't heard of them drinking vinegar lomo viral small batch put a bird on it pitchfork neutra narwhal normcore. Craft beer tacos chambray flexitarian migas. Flannel four loko artisan humblebrag. Distillery art party master cleanse lyft vinyl offal post-ironic letterpress cray DIY forage stumptown plaid viral.",40, "http://lorempixel.com/200/200"),    
            /*new Article("Aspirateur 300","blablabla","http://lorempixel.com/200/200"),
            new Article("Tondeuse à gazon","blobloblo","http://lorempixel.com/200/200"),*/
        ];
    }
}