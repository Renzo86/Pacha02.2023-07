import express, {Router} from 'express';
import {check, checkSchema} from 'express-validator';
import {validarCampos} from '../middlewares/validar_campos.js';
import {crearUsuario, login} from '../controllers/auth.js';

const router = Router();

router.post('/register', [
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('password', 'El campo password es obligatorio').not().isEmpty(),
    check('email', 'El campo email es obligatorio').isEmail(),
    validarCampos

], crearUsuario);

router.post('/login', [
    check('password', 'El campo password es obligatorio').not().isEmpty(),
    check('email', 'El campo email es obligatorio').isEmail(),
    validarCampos

], login);

export default router;