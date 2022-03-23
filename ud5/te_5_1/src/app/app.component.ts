import { Component } from '@angular/core';
import { Jugador } from './jugador.model';
import { Numero } from './numero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "Juego de Adivinación de Números Aleatorios - DWEC05";
  descripcion="Parámetros de Configuración del Juego";
  saludo:boolean = false;
  intentosRestantes:boolean = false;
  despedida:boolean = false;
  aciertoFinal:boolean = false;
  introduce:boolean = true;
  listaNumerosIntroducidos:boolean = false;
  numeroSecreto:number = 0;
  jugadores:Jugador[]=[];
  numeros:Numero[]=[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroRangoMaximo:number=0;
  cuadroIntentos:number = 0;
  cuadroNumeroIntroducido:number = -1;
  rangoMinimo:number = 1;

    agregarJugador(){
      let miJugador=new Jugador(this.cuadroNombre, this.cuadroApellido,
      this.cuadroRangoMaximo,this.cuadroIntentos);
      this.jugadores.push(miJugador);
      this.saludo=true;
      this.intentosRestantes=true;
    }

    generarNumeroSecreto(){
      this.numeroSecreto = Math.round(Math.random() * (this.jugadores[0].rangoMaximo - this.rangoMinimo) + this.rangoMinimo);
      console.log(this.numeroSecreto);
    }

    agregarNumero(){
      let miNumero=new Numero(this.cuadroNumeroIntroducido);
      this.numeros.push(miNumero);
    }

    comprobarRango(){
         if (this.cuadroNumeroIntroducido > this.jugadores[0].rangoMaximo || this.cuadroNumeroIntroducido < this.rangoMinimo){
          alert("El número introducido no está en el rango de números generados");
        }
    }

    numeroIntentos(){
      this.jugadores[0].intentos = this.jugadores[0].intentos -1;
       if(this.jugadores[0].intentos == 0){
        this.despedida = true;
        this.listaNumerosIntroducidos = true;
      }
    }

    acierto(){
      if(this.numeros[0].numeroIntroducido == this.numeroSecreto){
        this.aciertoFinal = true;
        this.introduce = false;
      }
   }

}
