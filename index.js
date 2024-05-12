import express from 'express';
import ejs from 'ejs';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import router from './src/routes/routes.js';
const app = express();
const port = process.env.PORT || 3000;
const __dirname =  dirname(fileURLToPath(import.meta.url));


app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(join(__dirname,'public')));


app.listen(port);

