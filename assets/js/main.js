let empleados= [];

function empleado(nombre,apellido,edad,cargo, salario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.salario = salario;
    alert("Empleado agregado");
    limpiarCampos();
}

function agregarEmpleado(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let cargo = document.getElementById("cargo").value;
    let salario = document.getElementById("salario").value;

    let nuevoEmpleado = new empleado(nombre,apellido,edad,cargo,salario);
    empleados.push(nuevoEmpleado);
    console.log(empleados);
}

function mostrarEmpleados(){
    let contenido = "";
    for(nuevoEmpleado of empleados){
        for(let propiedad in nuevoEmpleado){
            contenido= contenido + propiedad + ": " + nuevoEmpleado[propiedad] + " ";
        
        }
    contenido = contenido + "\n";
    }
    alert(contenido);
}

function limpiarCampos(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("salario").value = "";
}
