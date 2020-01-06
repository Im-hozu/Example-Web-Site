//Añado una función nueva a la clase array con el método fisher-yates
Array.prototype.shuffle = function()
    {
        var i = this.length;
        var numRandom = 0; //Variable del número aleatorio para los intercambios
        var temp; //Variable que almacena el valor temporal de los índices aleatorios para los intercambios

        while(--i>0)
        {
            numRandom = Math.floor(Math.random() * (i+1));
            temp=this[numRandom]; //almaceno el valor de este índice para que no se pierda en el intercambio
            this[numRandom] = this[i]; 
            this[i] = temp;
        }
    }

class Juego{
    constructor(){
        this.arrayOpciones = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
        this.valoresCartas = [];
        this.idCartas = [];
        this.cartasAdivinadas = 0
    }

    //Método que genera el tablero,reinicia las variables y re-mezcla las opciones
    generarTablero()
    {
        $('#tablero').html("");
        this.cartasAdivinadas=0;
        var htmlTablero="";
        this.valoresCartas=[];
        this.idCartas=[];
        this.arrayOpciones.shuffle();

        for(var i=0;i<this.arrayOpciones.length;i++)
        {
            htmlTablero+='<div id="carta'+i+'" value="'+i+'"></div>';
        }
        $('#tablero').append(htmlTablero);
    }
            
    girarCarta(carta)
    {
        var indice = carta.getAttribute("value");
        if(carta.innerHTML == "" && this.valoresCartas.length < 2)
        {
            carta.style.background = '#FFF';
            carta.innerHTML = this.arrayOpciones[indice];
            //Código que se ejecuta cuando se gira la primera carta
            if(this.valoresCartas.length === 0)
            {
                this.valoresCartas.push(this.arrayOpciones[indice]);
                this.idCartas.push(carta.id);
            }
            //Código que se ejecuta cuando se gira la segunda carta
            else if(this.valoresCartas.length === 1)
            {
                this.valoresCartas.push(this.arrayOpciones[indice]);
                
                this.idCartas.push(carta.id);
                //compruebo si las cartas son iguales
                if(this.valoresCartas[0]===this.valoresCartas[1])
                {
                    this.cartasAdivinadas+=2;
                    //limpiamos las variables
                    this.valoresCartas = [];
                    this.idCartas = [];
                    //compruebo si terminó el juego
                    if (this.cartasAdivinadas === this.arrayOpciones.length)
                    {
                      alert("Ah shit there we go again!");
                      $('#tablero').innerHTML = "";
                    }

                }
                else
                {
                    var carta_1=document.getElementById(this.idCartas[0]);
                    var carta_2=document.getElementById(this.idCartas[1]);
                    this.valoresCartas=[];
                    this.idCartas=[];
                    setTimeout(function(){
                        //Oculto carta 1
                        carta_1.style.backgroundImage ="url(img/icon.png)";
                        carta_1.style.backgroundColor ="#eee";
                        carta_1.style.backgroundSize="cover";
                        carta_1.innerHTML ="";
                        //Oculto carta 2
                        carta_2.style.backgroundImage ="url(img/icon.png)";
                        carta_2.style.backgroundColor ="#eee";
                        carta_2.style.backgroundSize="cover";
                        carta_2.innerHTML="";
                    },500);
                }

            }
        }
    }
}