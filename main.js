const imagen= document.getElementById("imagen");
const resultado= document.getElementById("rusultado");
const probabilidad= document.getElementById("probabilidad");

function init() {
      var inputFile = document.getElementById('file-input');
      inputFile.addEventListener('change', mostrarImagen, false);
}
    
function mostrarImagen(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
            imagen.src= event.target.result;
      }
      reader.readAsDataURL(file);

      const clasificador=ml5.imageClassifier("MobileNet",function (){
            console.log("Modelo cargado");
        });
        clasificador.predict(imagen,function (err,res){
            //console.log(res);
            resultado.innerText=res[0].className;
            probabilidad.innerText = res[0].probability;
        });
}
    
window.addEventListener('load', init, false);



