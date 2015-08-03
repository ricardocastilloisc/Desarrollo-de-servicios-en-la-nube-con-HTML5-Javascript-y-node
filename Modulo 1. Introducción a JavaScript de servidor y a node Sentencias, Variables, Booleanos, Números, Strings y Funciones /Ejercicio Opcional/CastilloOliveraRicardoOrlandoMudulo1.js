var valorpi = Math.PI.toFixed(8);


console.log(valorpi+'\n\n');
console.log("Caracteres escapados (\\u55e8\\uff0c\\u4f60\\u597d\\u5417):"+"\u55e8\uff0c\u4f60\u597d\u5417")

var caracter ='嗨，你好吗';
for(var i=0; i<caracter.length; i++)
{
	var x = caracter.charCodeAt(i).toString(16);
	var y = String.fromCharCode(parseInt(x, 16));
	console.log('El caracter escapado \\u'+x+' representa: '+y);
}
