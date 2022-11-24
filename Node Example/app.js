import express from "express";

const app = express();
const puerto = 3000;


app.listen(puerto, () => {
    console.log('El servidor se esta ejecutando');
})

app.get('/',(req, res) =>{
    //Implementar el codigo
    res.send('Hola Mundo')
})

app.get('/home',(req, res) =>{
    //Implementar el codigo
    res.send('Estas en home')
})

app.get('/home/group',(req, res) =>{
    //Implementar el codigo
    res.send('Estas en group')
})