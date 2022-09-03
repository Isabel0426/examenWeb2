const loginController = {};
const login = require('../models/login');
const loginRepository = require('../repositories/loginRepository')


loginController.getAll = (req, res) => {
    //logica para listar todos los cursos
    loginRepository.getAll()
        .then((user) => {
            //si devuelve mas de un registro
            if (user.rows.length == 0) {
                res.status(400).send('Not Found');
            }
            res.json(user.rows);
        })
        .catch((error) => {
            res.status(500).send(error.stack);
        })
}

loginController.getById = (req, res) => {
    const username = req.params['username']
    loginRepository.getById(username)
        .then((user) => {
            if (user.rows.length == 0) {
                res.status(400).send({});
            }
            res.json(user.rows);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}

loginController.create = (req, res) => {
    //capturar body request
    const newuser = req.body;
    //crear modelo tipo course
    let user = new login(null,newuser.username,newuser.password)
    //llamar metodo del repository y enviamos objeto modelo
    loginRepository.create(username)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si inserto correctamente
            user.username = resp.rows[0].username
            res.status(201).send(user);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
loginController.update = (req, res) => {
    //capturamos queryParams
    const username = req.params['username']
    //capturamos body request
    const newuser = req.body;
    //crear modelo tipo course
    let user = new login(username,newuser.password)
    loginRepository.update(user)
        .then((resp) => {
            //si actualizo correctamente
            res.status(200).send(user);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
loginController.delete = (req, res) => {
    //capturamos queryParams
    const username = req.params['username']
    loginRepository.delete(username)
        .then((resp) => {
            //si elimino correctamente
            res.status(200);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}

module.exports = loginController
