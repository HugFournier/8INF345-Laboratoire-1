class Article{
    
    private image : URL;

    public constructor(private label : String, private description : String, image : String){
        this.image = new URL(image as string);
    };

    public getLabel() : String {
        return this.label;
    }

    public getDescription() : String {
        return this.description;
    }

    public getImage() : URL {
        return this.image;
    }
}