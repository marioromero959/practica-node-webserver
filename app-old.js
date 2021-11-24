// Introduccion a creacion de servidores sin express
// Paquete de node para crear servidores http
const http = require('http');

http.createServer((req,res)=>{  // Req son las solicitudes, res es lo que responde el servidor
    res.write('Hola Mundo') //Node escribe la rta
    res.end(); //Terminamos la respuesta
}).listen(8080) //Ponemos el puerto en el que queremos levantar el servidor

console.log('Escuchando el puerto',8080)