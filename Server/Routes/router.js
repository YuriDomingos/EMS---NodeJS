 
 /*
     @Autor : Yuri Domingos
     Data   : 23 - 09 - 2021
     Objectivo : Criar as rotas para o nosso sistema 
 */

const express = require('express');
const route = express.Router();
const services = require('../Services/render')


/**
 * @description Root route
 * @method  GET/
 * 
 */

route.get('/',services.homeRoutes);  


/**
 * @description add route
 * @method  GET/
 */
route.get('/add-user', services.add_user);


/**
 * @description update route
 * @method  GET/
 * 
 */
route.get('/update-user', services.update_user);

module.exports = route; 
