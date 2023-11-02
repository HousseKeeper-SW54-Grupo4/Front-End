export class Viajes {
  id:number;
  title:string;
  description:string;
  photoUrl:string;
  price:number;
  bundleId:string;
  rating:number;

  constructor(){
    this.id=0;
    this.title='';
    this.description='';
    this.photoUrl='';
    this.price=0;
    this.bundleId='';
    this.rating=0;
  }
}
