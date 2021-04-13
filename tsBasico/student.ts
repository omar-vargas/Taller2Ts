export class Student{
    cod: string;
    cedula: number;
    edad: number;
    direccion: string;    
    tel: number;


    constructor(cod: string, cedula: number, edad: number, direccion:string , tel:number ) {
      this.cod = cod;
      this.cedula = cedula;
      this.edad=edad
      this.direccion= direccion;
      this.tel=tel;
    }
  }