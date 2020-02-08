//Packages
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
app.use(morgan('dev'));
app.use(cors());

//Conexión a la base de datos
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb://localhost:27017/dbmedical'
mongoose.connect( dbUrl, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true})
.then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
.catch(err => console.log(err));

//Middlewares JSON
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
//Página STATIC
app.use(express.static(path.join(__dirname,'public')));

app.set('port', process.env.PORT || 3000);

app.listen( app.get('port'), ()=>{
    console.log('server on port ' + app.get('port'));
});