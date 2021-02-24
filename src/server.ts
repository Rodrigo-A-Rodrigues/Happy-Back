import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// Rotas = conjuntos
// Recurso = users
// Metodos http = GET, POST, PUT, DELETE 
// Paramentros

//GET = buscar uma informação
//POST = criando informação
//PUT = editando uma informação
//DELETE = deletando uma informação

// Query Params: http://localhost:3333/users?search? => filtragem
// Route Params: identificar um recurso 
// Body: enviar dados de formulários