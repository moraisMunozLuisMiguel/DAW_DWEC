// Solicitamos el peso al usuario
      var peso = prompt("PESO en kgs: ");
      // Solicitamos la altura al usuario
      var altura = prompt("ALTURA en metros: ");
      // Calculamos el Indice de Masa Corporal
      var imc = peso / (altura) ^ 2;
      // Con la solución, nuestro programa deberá visualizar un mensaje en función del resultado
      if (imc < 19) {
         // Si el IMC es menor a 19 quiere decir que “Estás por debajo de tu peso ideal”
         msg = "Estás por debajo de tu peso ideal";
      } else if (imc >= 19 && imc < 24.5) {
         /* Si el IMC es mayor o igual que 19  y menor a 24.5 quiere decir que “Estás en tu peso ideal” */
         msg = "Estás en tu peso ideal";
      } else if (imc >= 24.5 && imc < 29.9) {
         /* Si el IMC es mayor o igual que 24.5  y menor a 29.9 quiere decir que “Estás por encima de tu peso ideal” */
         msg = "Estás por encima de tu peso ideal";
      }
      else {
         // Si el IMC es mayor o igual que 30 quiere decir que hay “Obesidad”
         msg = "Obesidad";
      }
      // Mostramos el mensaje
      alert(msg);