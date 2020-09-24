const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.agregarTestimonial = async (req, res) => {
    // valir campos llenos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu nombre' })
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu correo' })
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu mensaje' })
    }

    // revisar por errores
    if (errores.length > 0) {
        // muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        // almacenar en db
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}