var express 	= 	require('express');
var app 		=	express();
//pagina 1: preguntas
app.get('/preguntas', function(req,res)
{
	res.send('<html>'
	+	'<body>'
	+	'<h1>Preguntas</h1>'
	+	'<br>'
	+	'<form method="get" action="respuesta">'
	+	'¿Quién descubrió América?<br>'
	///parametos
	+	'<input type="hidden" name="id" value="1">'
	+	'<input type="text" name="respuesta1" /><br>'
	+	'<input type="submit" value="Enviar"/>'
	+	'</form><br>'
	+	'<form method="get" action="respuesta">'
	+	'¿Capital de Portugal?<br>'
	///parametos
	+	'<input type="hidden" name="id" value="2">'
	+	'<input type="text" name="respuesta2" /><br>'
	+	'<input type="submit" value="Enviar"/>'
	+	'</form><br>'
	+	'</body>'
	+	'</html>'
	);
}
);
//pagina 2: repuestas
app.get('/respuesta', function(req,res)
{
	if(req.query.id==1)
	{
		var regexp = /crist[oó]bal col[oó]n$/i;
		var match_array = req.query.respuesta1.match(regexp);
		var regexpb = /col[oó]n$/i;
		var match_arrayb = req.query.respuesta1.match(regexpb);
		if (match_array != null || match_arrayb!= null) 
		{
				res.send("La respuesta <strong> "
			+ 	req.query.respuesta1
			+ 	"</strong> es correcta" 
			+ 	"<br><br>"
			+	"<a href='/preguntas'>"
			+	"Volver a la página inicial</a>");
			} 
			else 
			{
				res.send("La respuesta <strong> "
			+ 	req.query.respuesta1
			+ 	"</strong> es incorrecta la respuest correcta es <strong>Cristobal Colón </strong>" 
			+ 	"<br><br>"
			+	"<a href='/preguntas'>"
			+	"Volver a la página inicial</a>");
			}
	}
	else
	{
		if(req.query.id==2)
		{
			var regexp = /lisboa$/i;
			var match_array = req.query.respuesta2.match(regexp);
			if (match_array != null) 
			{
				res.send("La respuesta <strong> "
			+ 	req.query.respuesta2
			+ 	"</strong> es correcta" 
			+ 	"<br><br>"
			+	"<a href='/preguntas'>"
			+	"Volver a la página inicial</a>");
			} 
			else 
			{
				res.send("La respuesta <strong> "
			+ 	req.query.respuesta2
			+ 	"</strong> es incorrecta la respuest correcta es <strong>Lisboa </strong>" 
			+ 	"<br><br>"
			+	"<a href='/preguntas'>"
			+	"Volver a la página inicial</a>");
			}
		}			
	}
	
});
app.listen(8000);