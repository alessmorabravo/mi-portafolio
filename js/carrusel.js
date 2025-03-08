const grande = document.querySelector(".grande");
const punto =
  document.querySelectorAll(".punto")
  // cuando hago un click en cada punto, vamos a saber la posicion de ese punto, vamos a aplicar un transform translateX al grande,y luego quitar la clase activo de todos los puntos y despues vamos a añadir la clase activo al punto que hemos hecho click.

// Recorrer TODOS los puntos  
  punto.forEach((cadaPunto, i) => {
    //   Asignamos un CLICK a CADAPUNTO
    punto[i].addEventListener("click", () => {


      // guardando posición
      let posicion = i;
      // cuando la posicion 0 el transformX es 0
      // y cuando la posicion es 1 el transformX es -50%
      // vamos a hacer una operación: la operacion nos va a dar el numero exacto del transform en el ege X

    //  calculando el espacio que deben DESPLAZARSE el GRANDE
      let operacion = posicion * -33.3;
    
    //   MOVEMOS el grand
      grande.style.transform = `translateX(${operacion}%)`;

// Recorremos TODOS los puntos
      punto.forEach((cadaPunto, i) => {
        //   quitamos la clase ACTIVO a TODOS LOS PUNTOS
        punto[i].classList.remove("activo");
      });
    //   AÑADIR la clase activo en el punto que hemos hecho CLICK
      punto[i].classList.add("activo");
    });
  });
