var fs = require('fs');
		
	

//parametros
var archivodestino = process.argv[2];
//se ponene en areglo
var archivos = process.argv.splice(3, process.argv.length);

//se elimana el primero del arreglo y se quita
var archivo = archivos.shift();

if(archivo !=undefined)
{
	fs.readFile(archivo, appendArchivo);
}

function leerArchivo(error){
	if(error)
	{
		throw error;
	}
	var nuevo_archivo = archivos.shift();
	
	if(nuevo_archivo !=undefined)
	{
		fs.readFile(nuevo_archivo,appendArchivo);
	}
}

function appendArchivo(error,d){
	if(error)
	{
		throw error;
	}
	fs.appendFile(archivodestino,d,leerArchivo);
			
}

//para ejecutar lo es 
				//archivo //apartir del uno es donde se ponen los archivos 
				//destino //
//node merge.js final.js 1.js 2.js 3.js
console.log('Ficheros integrados');