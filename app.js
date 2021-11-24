const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

// Handlebars
// Con esto le decimos a express que renderice lo de hbs
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estatico
app.use(express.static('public'))

// Renderizamos el contenido de la vista de home.hbs
app.get('/',(req, res) => {  
  res.render('home',{
    nombre:'Mario Romero',
    titulo:'Curso de Node'
  })  //Se pueden mandar opciones com segundo paametroy las podemos mostrar en el template con {{}}
})
app.get('/generic',(req, res) => {  
  res.render('generic',{
    nombre:'Mario Romero',
    titulo:'Curso de Node'
  })  //Se pueden mandar opciones com segundo paametroy las podemos mostrar en el template con {{}}
})
app.get('/elements',(req, res) => {  
  res.render('elements',{
    nombre:'Mario Romero',
    titulo:'Curso de Node'
  })  //Se pueden mandar opciones com segundo paametroy las podemos mostrar en el template con {{}}
})

// ejemplo de envio de respuesta
/*
app.get('/',(req, res) => { //El primer parametro del get es la ruta 
  res.send('Hola')
})*/

// Si queremos mostrar las rutas sin el .html
app.get('/generic', (req, res) => {  
    res.sendFile(__dirname + '/public/generic.html')  
})
app.get('/elements', (req, res) => {  
    res.sendFile(__dirname + '/public/elements.html')  
})

app.get('*', (req, res) => { //Para rutas que estan mal usamos * 
    res.sendFile(__dirname + '/public/404.html')  //Sendfile envia el archivo, construimos el path con dirname para usar la ruta absoluta
  })
 
app.listen(port,()=>{
    console.log(`Escuchando el puerto http://localhost:${port}`)
})