//Packages
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
import moment from 'moment-timezone';

//Importar variables de entornos locales
const dotenv = require('dotenv');
dotenv.config({path: '.env'});

const app = express();
app.use(morgan('dev'));
app.use(cors());

//Configurando la Hora de Chile
moment().tz("America/Santiago").format();

//Conexión a la base de datos
mongoose.Promise = global.Promise;


const dbUrl = process.env.DB_URL

mongoose.connect( dbUrl, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true})
.then(mongoose => console.log('Conectado a la BD'))
.catch(err => console.log(err));


//Middlewares JSON
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
//Página STATIC
app.use(express.static(path.join(__dirname,'public')));


//Principal PATH ROUTES
app.use('/api', router);

//Puerto de sevidor local
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 5000);

app.listen( app.get('port'), app.get('host'), ()=>{
    console.log('server on port ' + app.get('port') + ' ' + app.get('host'));
});