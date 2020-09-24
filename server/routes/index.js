const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

/**Controladores */
const homeController = require('../controllers/homeController');
const nostrosController = require('../controllers/nosotrosController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () {
    router.get('/', homeController.consultasHomePage);

    router.get('/nosotros', nostrosController.infoNostros);

    router.get('/viajes', viajesController.mostrarViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    // Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);


    return router;
}