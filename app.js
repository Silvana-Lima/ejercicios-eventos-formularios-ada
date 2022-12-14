// # Formularios dinámicos

// ## Ejercicios

// Para estos ejercicios, todos los `inputs`, `textarea` y `select` deben tener su respectiva `label`, el atributo `name` completo y un `placeholder` que sirva de ejemplo para el formato de lo que se tiene que agregar. Darles los siguientes estilos mínimos:

// - Cambiar la tipografía y el color de fuente original.
// - Sacar los estilos por defecto de elementos de formulario y darles padding, un tamaño adecuado y un borde levemente redondeado.
// - Centrar todo con respecto a la pantalla.


//FUNCION PARA TRAER LOS ELEMENTOS DE TODOS LOS EJERCICIOS:

let $ = (selector)=> document.querySelector(selector);

// // ---

// // ### Kilómetros a Millas✅

// // Crear una página que:

// // - Tenga dos `inputs`, uno para el valor de kilómetros y otro para el de millas.
// // - Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que ki´lómetro es 0.62 millas, y una milla es 1.61 kilómetros.

// let kilometros = $('#input-km');
// let millas = $('#input-millas');

// kilometros.addEventListener('change', function(){

//     let kmIngresados = event.target.value;
//     let pasarAmillas = Number(kmIngresados) * 0.62;

//     millas.value = pasarAmillas;

// });

// millas.addEventListener('change', function(){

//     let millasIngresadas = event.target.value;
//     let pasarAkm = Number(millasIngresadas) * 1.61;

//     kilometros.value = pasarAkm;

// });

// // ---

// // ### RGB✅

// // Crear una página que:

// // - Tenga tres `input`s numéricos, con valor mínimo 0 y valor máximo 255, uno para el valor R (red), otro para el valor G (green) y otro para el valor B (blue).
// // - Todos los `input`s comiencen con el valor 255.
// // - Cuando se modifica algún `input`, se cambie el color de fondo del `body` con el color que se forma a partir de dichos valores.

// let red = $('#red');
// let green = $('#green');
// let blue = $('#blue');
// let body = $('body');

// red.addEventListener('input', (event)=>{
    
//     let colorBody = `rgb(${event.target.value},${green.value},${blue.value})`

//     console.log(colorBody);
//     body.style.backgroundColor = colorBody;
// })

// green.addEventListener('input', (event)=>{

//     let colorBody = `rgb(${red.value},${event.target.value},${blue.value})`

//     console.log(colorBody);
//     body.style.backgroundColor = colorBody;
// })

// blue.addEventListener('input', (event)=>{

//     let colorBody = `rgb(${red.value},${green.value},${event.target.value})`

//     console.log(colorBody);
//     body.style.backgroundColor = colorBody;
// })





// // ---

// // ### Todo✅

// // Crear una página que:

// // - Tenga un `input`, un botón que diga `Crear todo` y una lista.
// // - Al presionar el botón, _si el `input` no está vacío_, se agregue un ítem a la lista con el contenido del `input` y se borre el contenido del `input`.

// let inputItem = $('.input__item');
// let btnAgregarItem = $('.btn__agregar__item');
// let lista = $('.lista');



// btnAgregarItem.addEventListener('click', ()=>{
//     let itemCreado = inputItem.value;
//     if(itemCreado != ''){
//         lista.innerHTML += `<li>${itemCreado}</li>`
//         inputItem.value ='';
//     }
    
// })



// // ### Agregar imágenes✅

// // Crear una página que:

// // - Tenga un `input` para la url de la imagen, un botón que diga `Agregar imagen` y un contenedor flexible donde mostrar imágenes como en una grilla.
// // - Al presionar el botón, _si el `input` no está vacío_, se agregue una imagen al contenedor cuyo `src` es el contenido del `input` y se borre el contenido del `input`.
// // - Al hacer click en una imagen, esta se elimine.

// let inputUrl = $('#input__url');
// let btnAgregarImg = $('.btn__agregar__img');
// let contImg = $('.container__img');

// btnAgregarImg.addEventListener('click', ()=>{
//     let urlIngresada = inputUrl.value;
//     if (urlIngresada != '') {
        
//         contImg.innerHTML += `<img src="${urlIngresada}" alt="" class="agregar-img">`

//         inputUrl.value = '';
//     }
// })

// contImg.addEventListener('click', (event)=>{

//     let eliminarImg = event.target;
//     eliminarImg.remove();
  
// })

// // ---

// // ### Comentario✅

// // Crear una página que:

// // - Tenga un `textarea`, un texto pequeño debajo de este y un botón que diga `Enviar`.
// // - El texto comience diciendo `0/240 caracteres`.
// // - Cuando se escribe algo en el `textarea`, se actualice el texto para reflejar la cantidad de caracteres restantes.
// // - Al presionar el botón, si hay 240 caracteres o menos, se borre el contenido del input y se actualice el texto para que diga `Comentario enviado`.
// // - El color del borde del `textarea` cambie de la siguiente forma:
// //   - normal si está vacío
// //   - verde si tiene texto y 240 caracteres o menos
// //   - rojo si tiene más de 240 caracters

// let textComentario = $('#textarea__comentario');
// let numeroCaracteres = $('.caracteres');
// let btnEnviar = $('.btn__enviar');

// textComentario.addEventListener("input", () => {
//   let caracteresIngresados = textComentario.value.length;
//   let caracteresRestantes = 240 - caracteresIngresados;

//   numeroCaracteres.innerText = `Restan ${caracteresRestantes} caracteres.`;

//   if(textComentario.value.length <= 240){
//     textComentario.style.borderColor = `green`;
//   } else if (textComentario.value.length > 240){
//     textComentario.style.borderColor = `red`;
//   }
// });

// btnEnviar.addEventListener('click', ()=>{
//     if (textComentario.value.length <= 240 ) {
//         numeroCaracteres.innerText = `Comentario enviado`;
        
//         textComentario.value =``;
//     } else if (textComentario.value.length > 240 ){
//         numeroCaracteres.innerText = `Hay mas de 240 caracteres` 
//     }

// })

// // ---

// // ### Conversor avanzado

// // Crear una página que:

// // - Tenga
// //   - un `input` para ingresar el valor a convertir
// //   - un `select` para seleccionar la unidad del valor convertido
// //   - un `select` para seleccionar la unidad a convertir
// //   - un botón que diga `Intercambiar`
// //   - un texto que muestre el resultado
// // - Cuyos `select`s tengan las siguientes opciones:
// //   - Kilómetros (km)
// //   - Metros (m)
// //   - Decímetros (dm)
// //   - Centímetros (cm)
// //   - Milímetros (mm)
// // - Ambos `select` comiencen con la opción `metros` seleccionada y el `input` comience con el valor `1`.
// // - Al seleccionar una nueva opción en cualquiera de los `select` o al modificar el valor del input, se actualice el texto con el resultado de la conversión del valor ingresado de una unidad a la otra.
// // - Al clickear el botón `Intercambiar` se intercambien las opciones de los `select`s y se actualice el texto.
// //   <br>

// // **TIP**

// // Para realizar este ejercicio, el `value` de cada option del `select` deben ser los siguiente:

// // - Para `Kilómetros`, el value debe ser `1000`
// // - Para `Metros`, el value debe ser `1`
// // - Para `Decímetros`, el value debe ser `0.1`
// // - Para `Centímetros`, el value debe ser `0.01`
// // - Para `Milímetros`, el value debe ser `0.001`
// //   <br>

// // La conversión se realiza con la fórmula: `VALOR_INGRESADO * VALOR_UNIDAD / VALOR_UNIDAD_A_CONVERTIR`.

let numeroIngresado = $('.input-valor-a-convertir');
let valorConvertido = $('.unidad-valor-convertido');
let valorAConvertir = $('.unidad-valor-a-convertir');
let btnIntercambiar = $('.btn-intercambiar');
let resultado = $('.resultado');

let convertir = ()=>{

   let nuevoResultado = numeroIngresado.value* valorConvertido.value / valorAConvertir.value;
   
   resultado.innerText= `${nuevoResultado}`
}

numeroIngresado.addEventListener('input', convertir);
valorConvertido.addEventListener('change', convertir);
valorAConvertir.addEventListener('change', convertir);



//boton intercambiar con error ❌
btnIntercambiar.addEventListener('click', ()=>{

   valorAConvertir.value = valorConvertido.value;
   valorConvertido.value = valorAConvertir.value
   convertir();


})


// ---

// ### Card dinámica✅

// Crear una página que:

// - Tenga un `input` para la url de la imagen, un `input` para el título, un `textarea` para la descripción, un `input` para la url externo y un `checkbok` que diga `Link externo`
// - Tenga una card simple y estilizada con: imagen, título, descripción, y un link que diga `Ver más`.
// - A medida que se modifiquen los campos, se modifique respectivamente los distintos elementos de la card.
// - Si el `checkbox` no está seleccionado, el link `Ver más` no se muestre y el `input` de la url externa se deshabilite.
// - Si el `checkbox` está seleccionado, el link `Ver más` se muestre y el `input` de la url externa se habilite.

// ---

// let inputUrlImagen = $('#url-imagen');
// let inputTituloImagen = $('#titulo-imagen');
// let inputDescripcion = $('#descripcion');
// let inputUrlExterno = $('#url-externo');
// let checkboxLinkExterno = $('#link-externo');

// let cardImagen = $('.card-imagen');
// let tituloImagen = $('.titulo-imagen');
// let descripcion = $('.descripcion');
// let linkVerMas = $('.cont-ver-mas');

// inputUrlImagen.addEventListener('input', (event)=>{
//     let urlImagenIngresada = event.target.value;
//    // console.log(urlImagenIngresada);
//     cardImagen.innerHTML = `<img src="${urlImagenIngresada}" alt="" class="imagenCard">`
// });

// inputTituloImagen.addEventListener('input', ()=>{
//     let tituloIngresado = event.target.value;

//     tituloImagen.innerText = tituloIngresado;
// })

// inputDescripcion.addEventListener('input', ()=>{
//     let descripcionIngresada = event.target.value;

//     descripcion.innerText = descripcionIngresada;
// })

// checkboxLinkExterno.addEventListener('click', ()=>{

//     if (checkboxLinkExterno.checked){
//         inputUrlExterno.disabled = false;
//         linkVerMas.classList.remove('oculto')
//     } else{
//         inputUrlExterno.disabled = true;
//         linkVerMas.classList.add('oculto')
//     }
    
// })

// inputUrlExterno.addEventListener('input', ()=>{
//     let urlExterno = event.target.value;
//     console.log(urlExterno)

//     linkVerMas.innerHTML= `<a href="${urlExterno} " class="ver-mas">Ver más</a>`

// })



// ### Selector de imágenes✅

// Crear una página que:

// - Tenga un `select` con categorías de imágenes (por ejemplo, animales, comida, paisajes, etc) y un contenedor con al menos 9 imágenes correspondientes a las distintas categorías, mostradas como grilla.
// - El `select` tenga la opción `Todas` y comience con dicha opción seleccionada.
// - Al seleccionar una nueva opción en el `select` se oculten aquellas imágenes que no pertecen a la categoría seleccionada y se muestren las que sí.
// - Al seleccionar `Todas` se muestren todas las imágenes.

// **TIP:** Agregar a cada imagen un atributo `data-categoria` cuyo valor se corresponda con el atributo `value` del `option` de la categoría correspondiente.

// let itemSeleccionado = $('#selec-img');
// let contTodas = $('.cont-todas');
// let contAnimales = $('.animales');
// let contComidas = $('.comidas');
// let contPaisajes = $('.paisajes');

// itemSeleccionado.addEventListener('change', (event)=>{
//     let seleccion = event.target.value;

//     switch(seleccion){
//         case 'animales':
//             contComidas.classList.add('oculto');
//             contPaisajes.classList.add('oculto');
//             contAnimales.classList.remove('oculto');
//             break;
//             case 'comida':
//                 contAnimales.classList.add('oculto');
//             contPaisajes.classList.add('oculto');
//             contComidas.classList.remove('oculto');
//             break;
//             case 'paisajes':
//                 contAnimales.classList.add('oculto');
//             contComidas.classList.add('oculto');
//             contPaisajes.classList.remove('oculto');
//             break;
//             case 'todas':
//                 contAnimales.classList.remove('oculto');
//             contComidas.classList.remove('oculto');
//             contPaisajes.classList.remove('oculto');
//  }
// })



// ---





// ### Buscador❌

// Crear una página que:

// - Tenga un `input` y un contenedor con al menos 9 imágenes mostradas como grilla y un texto para mostrar la cantidad de resultados encontrados.
// - Al escribir algo en el `input` aquellas imágenes cuyo `alt` contiene parte o todo el texto ingresado se muestran, mientras las demás se ocultan.
// - La búsqueda ignora mayúsculas y minúsculas.
// - Al vaciar el `input`, se muestran todas las imágenes.
// - Al realizar la búsqueda se actualiza el texto con la cantidad de imágenes que se están mostrando, de modo que diga, por ejemplo, `3 resultados encontrados`.

// <br>

// Por ejemplo, si una imagen tiene un `alt` que dice `Oso koala comiendo eucaliptus` y se busca `ko` dicha imagen debe mostrarse.

// let inputBusqueda = $('#input-busqueda');
// let resultadosEncontrados = $('.resultados-encontrados');
// let grilla = $('.grilla');
// //console.log(grilla.innerHTML)
// let imagen = $('.oveja')

// let atributo = imagen.getAttribute("alt");
// console.log(atributo)

// inputBusqueda.addEventListener('input', (event)=>{
// let busqueda = event.target.value;

// if(atributo.includes(busqueda)){
//     alert('hola')
// }
// });



// ---

// ### Filtro de imágenes

// Crear una página que:

// - Tenga una grilla de imágenes y al menos 4 `checkbox` con categorías (por ejemplo, animales, comida, paisajes, etc).
// - Al seleccionar un `checkbox` se actualice la grilla, mostrando aquellas imágenes que pertenezcan a las categorías seleecionadas.
// - Al deseleccionar todos los checkbox se muestren todas las imágenes

// **TIP:** Agregar a cada imagen un atributo `data-categoria` cuyo valor se corresponda con el atributo `value` del `checkbox` de la categoría correspondiente.

// ---

// ### Feedback (Validación)

// Debemos crear una encuesta de satisfacción al cliente para un portal de ventas basado en 4 preguntas que nos determinará qué tan contento está el cliente con nuestro servicio.
// Las respuestas deben ser radio buttons y cada grupo responderá a una pregunta específica.

// 1. **¿Qué tan rápido solucionamos tu problema?**

//    - Demoraron mucho
//    - Lo recibí en el tiempo estimado
//    - Super rápido

// 2. **¿Como recibiste el producto?**

//    - Tuvo un desperfecto
//    - Era tal cual la publicación
//    - Superó mis expectativas

// 3. **¿Cómo calificarías el asesoramiento de nuestros representantes?**

//    - No supo responder adecuadamente mis preguntas
//    - El representante respondió adecuadamente
//    - Recibí un excelente asesoramiento

// 4. **¿Recomendarías nuestro portal a otro usuario?**
//    - No lo creo
//    - Solo para casos puntuales
//    - ¡Si, por supuesto!

// Una vez que obtengamos las respuestas mostraremos con una alerta el nivel de satisfacción con nuestro servicio, siendo que:

// - Las respuestas negativas tendrán un valor de 1
// - Las respuestas neutras un valor de 2
// - Mientras que las respuestas positivas un valor de 3.

// Por lo que el resultado deberá corresponder al siguiente para el puntaje total:

// - **4:** Sumamente insatisfecho
// - **5-6:** Insatisfecho
// - **6-8:** Conforme
// - **8-10:** Satisfecho
// - **11-12:** Muy satisfecho

// ---

// ### Tarjeta de crédito (Validación)

// Realizaremos una validación sobre el formulario del ejercicio [Pago](https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/21-formularios.md).

// Aplicaremos las siguientes validaciones:

// **Paso 1: Campo del número de la tarjeta de crédito.**

// - El campo debe tener 16 caracteres. Al salirse del foco de este input, y en el caso de no cumplir con este requerimiento, el input debe colorearse de rojo, le mostraremos un mensaje de error que la tarjeta debe contener 16 caracteres y borraremos el contenido el input.
// - Adicionaremos un input de tipo selector con 2 opciones. Visa y Mastercard. Esto no debe estar disponible para la edición del usuario, pero aplicaremos un cambio dada la siguiente condición: Si el número ingresado por el usuario inicia con 5. Será Mastercard, si comienza con 3 o 4 será visa. Y si inicia con otro valor mostraremos un mensaje de error indicando el número ingresado es erróneo.

// **Paso 2: Campo nombre.**

// - Validar que el campo de nombre posea solo texto. Lo validaremos con una regex.

// **Paso 3: CCV.**

// - Validar que solo posea solo números
// - Que su contenido sea 3 caracteres en el caso de visa y 4 en el caso de mastercard. Por lo que habilitaremos esta opción una vez haya completado correctamente el campo numérico.
// <br>

// En el Paso 1: Usaremos `blur` y `change`

// Mientras que las validaciones del Paso 2 y Paso 3 las haremos antes de intentar enviar el formulario.

// ---

// ### Registro (Validación)

// Antes de enviar el [formulario de registro de cliente](https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/21-formularios.md) creado con anterioridad, realizaremos algunas validaciones sobre este. Pero primero, agregaremos una etiqueta small debajo de cada input con un color rojo y de inicio no va a visualizarse.

// Los errores y las validaciones a mostrar deben ser las siguientes:

// - **Nombre:** "El campo nombre solo puede contener texto"
// - **Apellido:** "El campo apellido solo puede contener texto"
// - **DNI:** "El DNI no puede ser mayor a 8 caracteres"
// - **Email:** "El formato del email no es válido"
// - **Contraseña:** En este caso utilizaremos 2. "La contraseña debe tener al menos 8, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial" y "Las contraseñas no coinciden"
// - **Términos y condiciones de uso:** "Debe aceptar los términos y condiciones"

// En el caso de que alguno de los inputs no cumpla con las características solicitadas, debemos visualizar el error correspondiente a ese input.

// Usar las siguientes funciones para validar los datos con expresiones regulares:

// ```javascript
// const esEmailValido = (email) => {
//   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   return regex.test(email.toLowerCase())
// }

// const esPasswordValida = (password) => {
//   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
//   return regex.test(password)
// }
// ``