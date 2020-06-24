var nombre = "Dennis Monzon";
var grupo = " Proyecto TRUYKI";
document.write(grupo);

function MostrarMiNombre(){
    var datos = document.getElementById("datos");
    datos.innerHTML ='<h3> Mi nombre es: </h3>' + nombre;
}

MostrarMiNombre();