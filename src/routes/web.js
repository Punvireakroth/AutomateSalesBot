import express from 'express';
import homepageController from '../controllers/homepageController';


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homepageController);

    
    return app.use('/', router);
};
module.exports = initWebRoutes;