
// Array de salas con 2 puertas en cada una
var salas = [
    [{
      nombre: "PuertaA",
      correcta:false,
      url: "./imagenes/kisspng-damenzhen-chinoiserie-architecture-china-wind-door-5a98c2a9528416.947285621519960745338.png"
    },
    {
      nombre: "PuertaB",
      correcta:true,
      url: "./imagenes/kisspng-door-photography-illustration-a-closed-door-5a8d4c2673ec21.1901359415192095104748.png"
    }],
    [{
      nombre: "PuertaC",
      correcta:true,
      url: "./imagenes/kisspng-paifang-gate-architecture-house-chinese-gates-5a81379f274e34.808898741518417823161.png"
    },
    {
      nombre: "PuertaD",
     correcta:false,
      url: "./imagenes/kisspng-paper-wood-gates-made-of-metal-decorative-doors-5a8a6ce779f0a0.9699779915190212874995.png"
    }],
    [{
      nombre: "PuertaE",
      correcta:true,
      url: "./imagenes/pngegg.png"
    },
    {
      nombre: "PuertaF",
      correcta:false,
      url: "./imagenes/pngegg-verde.png"
    }
    ],
    [
    {
      nombre:"PuertaG",
      correcta:true,
      url: "./imagenes/kisspng-gate-hell-png-clipart-5a7415427bf873.3737158715175570585078.png"
    },
    {
      nombre:"PuertaH",
      correcta:false,
      url: "./imagenes/kisspng-window-sliding-glass-door-interior-design-services-doors-transparent-png-images-44-free-transpare-5c88edf4f1f781.1715950315524776849911.png"
    }
  ]]

var contador=0;
//var numeroSala=3;

 // Función que muestra las dos puertas de una sala dada
function mostrarPuertasDeSala(numeroSala=0) {
    let habitacion=document.getElementById("mostrarPuertas");
    //console.log(habitacion);
    habitacion.innerHTML="";
 
    var sala = salas[numeroSala];


    for(let i=0;i<sala.length;i++ )
    {
        let puerta=sala[i];
       //console.log(puerta);
       habitacion.innerHTML+= "<div> <img class= 'imagenPuerta' src=\""+puerta.url+"\"></div>";
       //habitacionNumero++
    }
    
    let divpuertas = document.getElementsByClassName('imagenPuerta');
    //console.log(divpuertas); 

    for(let i=0; i<divpuertas.length;i++)
    {
      //console.log(divpuertas.length);
    let divpuerta=divpuertas[i];

    divpuerta.onclick=(event)=>{
        
 contador++;
seleccionarPuerta(sala,i,contador); 
    }
 
}
};  
    mostrarPuertasDeSala();
   
   function seleccionarPuerta(sala, puerta, contador) {
      if (sala[puerta].correcta) {
        console.log(contador);
      mostrarPuertasDeSala(contador);
        // La puerta es correcta, reproducir la funcion
      } else {
        // La puerta es incorrecta, reproducir animación
        var animacion = document.createElement("img");
        document.getElementsByClassName("tenor-gif-embed")[0].appendChild(animacion);
        document.querySelector("#mostrarPuertas").style.display='none';
        document.getElementsByClassName("tenor-gif-embed")[0].style.display='block';
        var audio= document.createElement("mp3");
        document.getElementsByClassName("audio")[0].appendChild(audio);
        document.querySelector("#mostrarPuertas").style.display='none';
        document.getElementsByClassName("audio")[0].style.display='block';

      }
    }

      
    var cronometroElement = document.getElementById("cronometro");

    // Variable para almacenar el valor actual del cronómetro
    var segundos = 1;
    
    // Función que actualiza el cronómetro y muestra el tiempo transcurrido
    function actualizarCronometro() {
      // Muestra el valor actual de segundos en el elemento HTML
      cronometroElement.innerHTML = segundos;
    
      // Si alcanza 30 segundos, detén el cronómetro
      if (segundos === 30) {
        var animacion = document.createElement("img");
        document.getElementsByClassName("tenor-gif-embed")[0].appendChild(animacion);
        document.querySelector("#mostrarPuertas").style.display='none';
        document.getElementsByClassName("tenor-gif-embed")[0].style.display='block';
        var audio= document.createElement("mp3");
        document.getElementsByClassName("audio")[0].appendChild(audio);
        document.querySelector("#mostrarPuertas").style.display='none';
        document.getElementsByClassName("audio")[0].style.display='block';
      }
    
      // Incrementa el valor de segundos
      segundos++;
    }
    
    // Inicia el cronómetro
    var intervalo = setInterval(actualizarCronometro, 1000);