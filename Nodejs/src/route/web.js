import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    // router.get('/', (req,res)=> {
    //     return res.send('hello world with gnouch')
    // });

    router.get('/', homeController.getHomePage);




    return app.use("/",router);
}

module.exports = initWebRoutes;