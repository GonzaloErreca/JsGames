//import {  } from "./Juego de Programación.js";
import {juego1} from "./memoryGame";
import {juego2} from "./mysteryWord.js"
function menu(){
    console.log(`
        seleccion de la opcion:
        1 - para juego 1
        2 - para juego 2
        `);
    const opcion = prompt("Seleccione el juego que desee jugar");

    if(opcion === "1"){
        juego1()
    }   else if(opcion === "2"){
        juego2();    
    }else{
        console.log("Ingrese un valor correcto");
    }

menu()
}