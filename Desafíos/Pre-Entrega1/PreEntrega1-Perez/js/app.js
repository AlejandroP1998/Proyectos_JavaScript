/* Crear un algoritmo interactivo con un ciclo y condicionales */
/* Variables globales */
let total = 0;
let nombre = "";
let final = false;

do {
    while (nombre == "") {
        /* Llamado a una variable global */
        nombre = prompt("Ingrese su nombre");
    }

    /* Variable local */
    let op = prompt(
        "Bienvenido a la tienda " + nombre + "\nSeleccione la opcion que desea\n\n\n\t1. Comprar un televisor\n\n\t2. Comprar un telefono\n\n\t3. Comprar una tablet\n\n\t4. Comprar una computadora\n\n\t5. Salir del programa\n\n\nTotal a gastar:\t\t$" + total
    );
    /* Condicional switch */
    switch (op) {
        case "1":
            tv();
            break;
        case "2":
            tel();
            break;
        case "3":
            tab();
            break;
        case "4":
            pc();
            break;
        case "5":
            final = true;
            alert("El total de la compra sin iva es $" + total);
            iva(total);
            break;
        default:
            alert("Ingreso un valor incorrecto, pruebe de nuevo")
            break;
    }
} while (final == false);

/* Funcion para la compra de televisiones */
function tv() {
    /* variable local */
    let op = prompt("Ingrese el numero de la tv que desea\n\n\n\t1. SAMSUNG 58'' \t\t$1200.00\n\n\t2.PANASONIC 55''\t$1050.00\n\n\t3.SONY 58''\t\t\t$1800.00\n\n\t4.Regresar");
    /* Condicional switch */
    switch (op) {
        case "1":
            total += 1200.00;
            break;
        case "2":
            total += 1050.50;
            break;
        case "3":
            total += 1800.99;
            break;
        case "4":
            break;
        default:
            alert("Ingreso un valor incorrecto");
            tv();
            break;
    }
}

/* Funcion para la compra de telefonos */
function tel() {
    /* variable local */
    let op = prompt("Ingrese el numero del telefono que desea\n\n\n\t1. SAMSUNG A53 \t\t$1300.00\n\n\t2.XIOMI POCO 3\t\t$1250.00\n\n\t3.SONY XPERIA\t\t$1120.00\n\n\t4.Regresar");
    /* Condicional switch */
    switch (op) {
        case "1":
            total += 1300.00;
            break;
        case "2":
            total += 1250.00;
            break;
        case "3":
            total += 1120.00;
            break;
        case "4":
            break;
        default:
            alert("Ingreso un valor incorrecto");
            tel();
            break;
    }
}

/* Funcion para la compra de tablets */
function tab() {
    /* variable local */
    let op = prompt("Ingrese el numero de la tablet que desea\n\n\n\t1. SAMSUNG 12'' \t\t$1230.33\n\n\t2.PANASONIC 15''\t\t$1100.63\n\n\t3.SONY 10''\t\t\t$999.99\n\n\t4.Regresar");
    /* Condicional switch */
    switch (op) {
        case "1":
            total += 1230.33;
            break;
        case "2":
            total += 1100.63;
            break;
        case "3":
            total += 999.99;
            break;
        case "4":
            break;
        default:
            alert("Ingreso un valor incorrecto");
            tab();
            break;
    }
}

/* Funcion para la compra de computadoras */
function pc() {
    /* variable local */
    let op = prompt("Ingrese el numero de la computadora que desea\n\n\n\t1. HP OMEN 15 \t\t\t\t$2500.00\n\n\t2.ASUS RAZOR\t\t\t\t$3250.00\n\n\t3.DELL INSPIRON 15\t\t\t$2800.00\n\n\t4.Regresar");
    /* Condicional switch */
    switch (op) {
        case "1":
            total += 2500.00;
            break;
        case "2":
            total += 3250.00;
            break;
        case "3":
            total += 2800.00;
            break;
        case "4":
            break;
        default:
            alert("Ingreso un valor incorrecto");
            tv();
            break;
    }
}

/* Funcion para calcaular el iva del 21% */
function iva(total) {
    /* Variable local */
    let op = prompt("¿Desea calcular el IVA? (Y/N)");
    /* Condicional if/else */
    if (op == "Y" || op == "y") {
        total = total * 1.21;
        alert("El total de la compra mas IVA(21%) es $" + total);
    }else{
        alert("Ha salido del programa sin calcular el IVA")
    }

}