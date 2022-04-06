window.onload = function () {
  console.log(window);
  const miFormulario = document.querySelector("#submitForm");
  miFormulario.addEventListener("submit", handleSubmitForm);
};

let usuarios = [ 
    {
         nombre: "Santiago"
    },
    {
        nombre: "Alejandro"
    },
    {
        nombre: "Mario"
    }
]

function handleSubmitForm(evt) {
  // Javascript automáticamente recibe el parametro del evento
  // el "target" de el evento que se desencadenó, es el elemento html
  // <form> que clickeamos

  evt.preventDefault();

  let valor = evt.target[0].value;
  // los forms guardan como un array sus inputs internos
  // event.target[0] -> input email... event.target[1] -> input contraseña...  etc

  const palabras = valor.split(" ");
  console.log(palabras);

  //dividimos nuestro String en un array, separando por espacios
}
