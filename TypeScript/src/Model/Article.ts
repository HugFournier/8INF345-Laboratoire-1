export class Article{

    private image : URL;

    public constructor(private ID : number, private label : String, private description : String, private prix : number, image : String){
        this.image = new URL(image as string);
    };

    public getID() : number {
        return this.ID;
    }

    public getLabel() : String {
        return this.label;
    }

    public getDescription() : String {
        return this.description;
    }

    public getPrix() : number {
        return this.prix;
    }

    public getImage() : URL {
        return this.image;
    }

    public toString() : String {
        return this.getLabel() + "\t" + this.getDescription();
    }
}