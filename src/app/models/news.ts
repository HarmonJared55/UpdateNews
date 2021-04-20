export class News{
    id:string;
    title:string;
    description:string;
    urlToImage:string;
    isSports:boolean;

    constructor(id:string, title:string, description:string, urlToImage:string, isSports:boolean){
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlToImage = urlToImage;
        this.isSports = isSports;
    }
    
}