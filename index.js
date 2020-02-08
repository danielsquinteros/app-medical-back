//Packages
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(morgan('dev'));
app.use(cors());

//Middlewares JSON
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
//Página STATIC
app.use(express.static(path.join(__dirname,'public')));

app.set('port', process.env.PORT || 3000);

app.listen( app.get('port'), ()=>{
    console.log('server on port ' + app.get('port'));
});