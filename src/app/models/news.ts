export class News {
    _id:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:Date;
    isSports:boolean;

    constructor(_id:string, title:string, description:string, url:string,urlToImage:string, publishedAt:Date, isSports:boolean){
        this._id=_id;
        this.title=title;
        this.description=description;
        this.url=url;
        this.urlToImage=urlToImage;
        this.publishedAt=publishedAt;
        this.isSports=isSports;

    }
}
