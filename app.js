class Vehiculo {
    constructor(codigo, marca, modelo, año, color, motor, cilindraje, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.motor = motor;
        this.cilindraje = cilindraje;
        this.codigo = codigo;
        this.tipo = tipo;
    }
    crear() {
        const codigo = document.getElementById("cod").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const año = parseInt(document.getElementById("año").value);
        const color = document.getElementById("color").value;
        const motor = document.getElementById("motor").value;
        const cilindraje = parseInt(document.getElementById("cilindraje").value);
        const seleccionElement = document.getElementById("selec");
        const tipo = seleccionElement.options[seleccionElement.selectedIndex].text;
        if (listado.some(vehiculo => vehiculo.codigo === codigo)) {
            alert("El código ya está registrado. No se puede registrar otro vehículo con el mismo código.");
            return;
        }
        const nuevoVehiculo = new Vehiculo(codigo, marca, modelo, año, color, motor, cilindraje, tipo);
        listado.push(nuevoVehiculo);
        document.getElementById("cod").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("año").value = "";
        document.getElementById("color").value = "";
        document.getElementById("motor").value = "";
        document.getElementById("cilindraje").value = "";
        document.getElementById("selec").selectedIndex = 0;
        let detalles = "Vehículos creado:\n";
        for (const vehiculo of listado) {
            detalles += `Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}\n`;
            detalles += `Año: ${vehiculo.año}, Color: ${vehiculo.color}\n`;
            detalles += `Motor: ${vehiculo.motor}, Cilindraje: ${vehiculo.cilindraje}\n`;
            detalles += `Código: ${vehiculo.codigo}, Tipo: ${tipo}\n\n`;
        }
        alert("Lista de vehiculos:\n" + detalles);
    }
    buscar() {
        const codigoBuscado = document.getElementById("buscar").value;
        let vehiculoEncontrado = null;
        for (const vehiculo of listado) {
            if (vehiculo.codigo === codigoBuscado) {
                vehiculoEncontrado = vehiculo;
                break;
            }
        }
        if (vehiculoEncontrado) {
            document.getElementById("detalle-cod").value = vehiculoEncontrado.codigo;
            document.getElementById("detalle-marca").value = vehiculoEncontrado.marca;
            document.getElementById("detalle-modelo").value = vehiculoEncontrado.modelo;
            document.getElementById("detalle-año").value = vehiculoEncontrado.año;
            document.getElementById("detalle-color").value = vehiculoEncontrado.color;
            document.getElementById("detalle-cilindraje").value = vehiculoEncontrado.cilindraje;
            document.getElementById("detalle-motor").value = vehiculoEncontrado.motor;
            document.getElementById("detalle-tipo").value = vehiculoEncontrado.tipo;
            document.getElementById("resultadoBusqueda").style.display = "block";
        } else {
            alert("No exite un vehiculo con ese codigo.");
            document.getElementById("resultadoBusqueda").style.display = "none";
        }
    }
    modificarVehiculo() {
        const password = document.getElementById("password").value;
        if (password === "1234") {
            const codigoBuscado = document.getElementById("buscar").value;
            const codigo = document.getElementById("detalle-cod").value;
            const marca = document.getElementById("detalle-marca").value;
            const modelo = document.getElementById("detalle-modelo").value;
            const año = parseInt(document.getElementById("detalle-año").value);
            const color = document.getElementById("detalle-color").value;
            const motor = document.getElementById("detalle-motor").value;
            const cilindraje = parseInt(document.getElementById("detalle-cilindraje").value);
            const tipo = document.getElementById("detalle-tipo").value;
            for (let i = 0; i < listado.length; i++) {
                if (listado[i].codigo === codigoBuscado) {
                    listado[i].marca = marca;
                    listado[i].modelo = modelo;
                    listado[i].año = año;
                    listado[i].color = color;
                    listado[i].motor = motor;
                    listado[i].cilindraje = cilindraje;
                    listado[i].tipo = tipo;
                    listado[i].codigo = codigo;
                    break;
                }
            }
            alert("Modificación exitosa.");
            document.getElementById("resultadoBusqueda").style.display = "none";
        } else {
            alert("Contraseña incorrecta.");
        }
    }
    eliminarVehiculo() {
        const codigoBuscado = document.getElementById("buscar").value;
        const password = document.getElementById("password").value;
        if (password === "1234") {
            const index = listado.findIndex(vehiculo => vehiculo.codigo === codigoBuscado);
            if (index !== -1) {
                listado.splice(index, 1);
                alert("Vehículo eliminado exitosamente.");
                document.getElementById("resultadoBusqueda").style.display = "none";
            } else {
                alert("No se encontró ningún vehículo con ese código.");
            }
        } else {
            alert("Contraseña incorrecta.");
        }
    }
    mostrarCrear() {
        document.getElementById('crearContenedor').style.display = 'block';
        document.getElementById('buscarContenedor').style.display = 'none';
        document.getElementById('resultadoBusqueda').style.display = 'none';
    }
    mostrarBuscar() {
        document.getElementById('buscarContenedor').style.display = 'block';
        document.getElementById('crearContenedor').style.display = 'none';
        document.getElementById('resultadoBusqueda').style.display = 'none';
    }
}
var listado = [];
const miobjeto = new Vehiculo("", "", "", 0, "", "", 0);