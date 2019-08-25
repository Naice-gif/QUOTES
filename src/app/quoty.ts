export class Quoty {
    public showdetails: boolean;
    constructor (public author:string, public quotes:string, public details:string, public postDate: Date){
        this.showdetails=false;
    }
}
