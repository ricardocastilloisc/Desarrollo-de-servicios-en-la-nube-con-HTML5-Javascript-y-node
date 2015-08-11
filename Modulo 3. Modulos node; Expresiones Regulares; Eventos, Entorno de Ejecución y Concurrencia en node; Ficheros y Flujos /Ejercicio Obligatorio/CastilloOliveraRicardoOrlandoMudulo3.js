var fs = require('fs');
		
	
if(process.argv.length < 4){
	console.log('Sintaxis incorrecta, se requiere: node merge <destino> <origen1> <origen2> .. <origenN>'); 
	process.exit(); // Termina el proceso
}	

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
	var new_archivo = archivos.shift();
	
	if(nuevo_archivo !=undefined)
	{
		fs.readFile(new_archivo,appendArchivo);
	}
}

function appendArchivo(error,data){
	if(error)
	{
		throw error;
	}
	fs.appendFile(archivodestino,data,leerArchivo);
			
}

//para ejecutar lo es 
				//archivo //apartir del uno es donde se ponen los archivos 
				//destino //
//node merge.js final.js 1.js 2.js 3.js
console.log('Proceso terminado');