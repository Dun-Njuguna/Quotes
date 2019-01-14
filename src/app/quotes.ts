export class Quotes {
      public showName:boolean;
  constructor(public id:number, public name:string,public author:string,public quote:string, public vote:number, public dvote:number){
    this.showName=false;
  }
}
