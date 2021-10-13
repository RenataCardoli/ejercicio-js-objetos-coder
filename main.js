
/* Esta es una funcion de primera clase, mi intencion es que trabaje como una class de tipo constructor, 
lo que hace es setear al nombre dos propriedades adicionales donde estan puntos de vida y punto extra.*/

function Jugador(nombre){
    this.nombre = nombre;
    this.puntosVida = 100;
    this.puntoExtra = 100;

/*Este metodo llamado curar que recibe un jugadorAccion por parametro suma puntos de vida.
Este metodo llamado atacar que recibe un jugadorAccion por parametro retira puntos de vida.

Esa misma funcion de primera clase quien se encarga de imprimir este jugador por referencia a que hago decisiones sencillas o acciones simples*/


    this.curar = function(jugadorAccion){
        if(this.puntoExtra >= 40 ){
            this.puntoExtra -=40;
            jugadorAccion.puntosVida = jugadorAccion.puntosVida + 20;
        }else{
            console.info( this.nombre + " No tiene puntos extras")
        }
        this.estado(jugadorAccion);
    }

    this.atacar = function(jugadorAccion){
        if( jugadorAccion.puntosVida > 40){
            jugadorAccion.puntosVida -=40;
            this.estado(jugadorAccion);
        }else{
            jugadorAccion.puntosVida = 0;
            console.error(jugadorAccion.nombre + " Murio!!");
        }
    }

    this.estado = function (jugadorAccion){
        console.info(this);
        console.info(jugadorAccion);
    }
};

/*La definicion de las LET = new son variables objeto de tipo jugador, las inicializa con sus valores definidos y la impresiones son por console.log, console.info, console.error*/

let jugadorUno = new Jugador("Juan");
let jugadorDos = new Jugador("Carlos");

console.log(jugadorUno);
console.log(jugadorDos);

/*para utilizar los metodos .curar o .atacar debes poner por console por ejemplo: jugadorUno.curar(jugadorDos) o jugadorUno.atacar(jugadorDos)*/
