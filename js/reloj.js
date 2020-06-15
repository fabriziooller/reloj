//window.setTimeout(saludar, 12000) //este metodo me ayuda a ejecutar una funcion despues de un tiempo establecido
//function saludar(){
//    alert("hola")
//}

//let contador = 1;
//let tiempo = window.setInterval(contar,1000)
//function contar(){
//  document.write(contador + "<br>")
//contador++;
//if(contador > 15){
//  clearInterval(tiempo)
// }
//}
function crearHora() {
  let fecha = new Date(),
    hora = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    anio = fecha.getFullYear();
  //enviar al html las variables
  let parrafDiaSemana = document.getElementById("diaSemana"),
    parrafDia = document.getElementById("dia"),
    parrafMes = document.getElementById("mes"),
    parrafAnio = document.getElementById("anio");
  //asignar valores a los objetos del html
  parrafDia.innerText = dia;
  parrafAnio.innerText = anio;
  let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  parrafDiaSemana.innerText = semana[diaSemana];
  parrafMes.innerText = meses[mes];
//obtener objetos del html
let parrafHora= document.getElementById("horas"),
parrafMinutos = document.getElementById("minutos"),
parrafSegundos = document.getElementById("segundos");

if(segundos < 10){
  parrafSegundos.innerText = "0" + segundos;
} else{
  parrafSegundos.innerText = segundos;
}

parrafHora.innerText = hora;
parrafMinutos.innerText = minutos;

  console.log(fecha);
  console.log(dia);
}

window.setInterval(crearHora,1000);
