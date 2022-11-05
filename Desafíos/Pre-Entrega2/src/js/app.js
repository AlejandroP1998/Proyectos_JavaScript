/* Datos del cliente */
function inicio() {
    let cliente = new Object();
    alert("Bienvenido a Lazy restaurant\nantes de comenzar con tu pedido debes llenar los datos de facturación.");
    cliente.nombre = prompt("Por favor ingresar un nombre y un apellido");
    let correcto = false;
    let pago = prompt("Ingrese el número de la forma de pago:\n1.Targeta de debito\n2.Targeta de credito\n3.Efectivo");
    do {
        switch (pago) {
            case "1":
                cliente.pago = "Targeta de debito";
                correcto = true;
                break;
            case "2":
                cliente.pago = "Targeta de credito";
                correcto = true;
                break;
            case "3":
                cliente.pago = "Efectivo";
                correcto = true;
                break;
            default:
                break;
        }
    } while (correcto == false);

    let consumo = prompt("Consumo:\n1.En el restaurante\n2.Para llevar\n3.Servicio a domicilio");
    do {
        correcto = false;
        switch (consumo) {
            case "1":
                cliente.consumo = "En el restaurante";
                correcto = true;
                break;
            case "2":
                cliente.consumo = "Para llevar";
                correcto = true;
                break;
            case "3":
                cliente.consumo = "Servicio a domicilio";
                correcto = true;
                break;
            default:
                break;
        }
    } while (correcto == false);

    return cliente;
}

/* Panel del menu */
function menu() {
    let fin = false;
    let productos = [];
    let food = [];
    do {
        let opcion = prompt("Nuestro menu\n\n\t1.Entradas\n\t2.Postres\n\t3.Banquetes\n\t4.Especialidades\n\t5.Bebidas\n\t6.Salir\n\n");
        switch (opcion) {
            case "1":
                food = entrada();
                productos = productos.concat(food);
                console.log(productos);
                break;
            case "2":
                food = postre();
                productos = productos.concat(food);
                console.log(productos);
                break;
            case "3":
                food = banquete();
                productos = productos.concat(food);
                console.log(productos);
                break;
            case "4":
                food = especialidad();
                productos = productos.concat(food);
                console.log(productos);
                break;
            case "5":
                food = bebida();
                productos = productos.concat(food);
                console.log(productos);
                break;
            case "6":
                fin = true;
                break;
            default:
                fin = true;
                break;
        }
    } while (fin == false)

    return productos;
}

/* Menu de entradas */
function entrada() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número de la entrada que desee añadir\n\t1.Sopa de papa ($300.00)\n\t2.Ensalada ($150.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Sopa de papa", precio: 300 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Ensalada", precio: 150 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de postres */
function postre() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número del postre que desee añadir\n\t1.Pie de manzana ($400.00)\n\t2.Rollos de canela ($250.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Pie de manzana", precio: 400 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Rollos de canela", precio: 250 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de banquetes */
function banquete() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número del banquete que desee añadir\n\t1.Pollo entero asado ($1420.00)\n\t2.Hamburguesas jumbo combo familiar ($1250.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Pollo entero asado", precio: 1420 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Hamburguesas jumbo combo familiar", precio: 1250 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de especialidades */
function especialidad() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número la especialidad que desee añadir\n\t1.Pizza super italiana ($700.00)\n\t2.Pasta al pesto ($575.00)");
        switch (op) {
            case "1":
                comida.push({ nombre: "Pizza super italiana", precio: 700 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Pasta al pesto", precio: 575 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de bebidas */
function bebida() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número del postre que desee añadir\n\t1.Pie de manzana ($400.00)\n\t2.Rollos de canela ($250.00)");
        switch (op) {
            case "1":
                comida.push({ nombre: "Pie de manzana", precio: 400 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Rollos de canela", precio: 250 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Procesos de facturación */
class factura {
    constructor() {
        this.cliente = inicio();
    }

    imprimirFactura() {
        console.log(this.cliente.nombre);
    }

    pedido() {
        this.cliente.productos = menu();
        console.log("Resumen de compra");
        console.log(this.cliente.productos);
    }
}

/* Inicio de la simulación */
let compra = new factura();
compra.pedido();