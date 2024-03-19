import express from 'express';
import configEngine from './src/config/viewEngine';
import initWebRoutes from './src/routes/web';
require('dotenv').config;

let app = express();


configEngine(app);


initWebRoutes(app);


let port = process.env.PORT || 8080;

app.listen(port , () => {
    console.log(`SERVER RUNNING ON PORT ${port}`)
});