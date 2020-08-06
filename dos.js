/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/



function mostrar() {
	let articulo;
	let categoria;
	let precio;
	let respuesta = "s";
	let contbebidas = 0;
	let flagarticulo = 0;
	let flaglacteo = 0;
	let preciomaxlacteos = 0;
	let lacteocaro;
	let productocaro;
	let preciomax;

	do {
		articulo = prompt("Ingrese el nombre del artículo");
		categoria = prompt("Ingrese la categoría del artículo");
		precio = parseInt (prompt("Ingrese el precio del artículo"));

		respuesta = prompt("Desea continuar ingresando productos? s/n");

		if (flagarticulo == 0 || precio > preciomax) {
			preciomax = precio;
			productocaro = articulo;
			flagarticulo = 1;
		}
	} while (respuesta == "s");

	switch (categoria) {
		case "lacteos":
			if (flaglacteo == 0 || precio > preciomaxlacteos) {
				preciomaxlacteos = precio;
				lacteocaro = articulo;
				flaglacteo = 1;
			}
			break;
		case "bebidas":
			contbebidas = contbebidas + 1;
	}
	alert(" cantidad de art. bebidas: " + contbebidas + "el lácteo con mayor precio es: " + lacteocaro + " El artículo con mayor precio es: " + productocaro);
}