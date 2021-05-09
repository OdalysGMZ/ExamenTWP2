import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  nombre!: String[];
  apellidos!: String[];
  correo!: String[];
  comentario!: String[];

  i:number=0;
  x:number=0;
  edited: Boolean = false;
  error: Boolean = false;
  mail: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.edited = false;
    this.error = false;
  }
  enviar(){
    for( this.i=0; this.i<=this.correo.length;this.i++){
      if(this.correo[this.i]=='@'){
        this.x++;
      }
    }
    if(this.x==1){
      this.mail=true;
      this.x=0;
    }else{
      this.mail=false;
      this.x=0;
    }

    if(this.mail==true && this.nombre!=null && this.apellidos!=null && this.correo!=null && this.comentario!=null && this.comentario.length>=5){
      this.error =false;
      this.edited = true;
      this.mail=false;
    }else{
      this.error = true;
      this.edited = false;
    }
  }

}
