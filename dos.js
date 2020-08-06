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
	let flaglacteo = 0;
	let preciomaxlacteos = 0;

	do {
		articulo = prompt("Ingrese el nombre del artículo");
		categoria = prompt("Ingrese la categoría del artículo");
		precio = prompt("Ingrese el precio del artículo");

		respuesta = prompt("Desea continuar ingresando productos? s/n");
	} while (respuesta == "s");

	switch (categoria) {
		case "lacteos":
			if (flaglacteo == 0 || precio > preciomaxlacteos) {
				preciomaxlacteos = precio;
				flaglacteo = 1;
		}
			break;
		case "bebidas":
			contbebidas = contbebidas + 1;
	}
alert (" cantidad de art. bebidas: " + contbebidas + "lacteo con mayor precio:" + preciomaxlacteos + )
}