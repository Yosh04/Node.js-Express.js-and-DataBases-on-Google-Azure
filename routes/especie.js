var express = require('express');
var router = express.Router();
const Controller = require('../controllers/especie') //Hace uso de los metodos de controller
let controller = new Controller(); 


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {//Da en consola la hora de la ejecución.
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', async function(req, res) { //Metodo de listar. 
  res.json(await controller.all());
});
router.get('/insertarEspecie', async function(req, res) {//Metodo de insertar. 
  res.json(controller.insert());
});
router.get('/ModificarEspecie', async function(req, res) {//Metodo de Modificar.
  res.json(controller.update());
});
router.get('/inactivar', async function(req, res) {//Metodo de Inactivar. 
  res.json(controller.inactivar());
});
// define the about route
router.get('/about', function(req, res) { //Simple muestra en la page web del txt. 
  res.send('About especies');
});

router.put('/', function(req, res) {
  res.send('Update especie');
});

module.exports = router;// Se exporta para usar en app.js . El inicio del proyecto (Main)