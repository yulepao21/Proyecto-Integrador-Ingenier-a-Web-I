document.querySelector("form")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Gracias por contactarme. Pronto responderé tu mensaje.");

this.reset();

});