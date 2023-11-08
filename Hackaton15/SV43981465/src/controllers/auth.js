import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { generateJwt } from '../helpers/jwt.js';

export const crearUsuario = async (req, res) => {
    try {
        const {email, password, nombre} = req.body;

        const userOnDb = await User.findOne({email});
        if(!userOnDb) {
            return res.status(500).json('El email ya existe. ')
        }
    
        const user = new User(req.body);
        const salt = bcrypt.genSaltSync();

        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const token = await generateJwt(user.id)
        res.status(200).json({
            ok: true,
            msg: user,
            token
        });

    } catch (error) {
        res.status(500).json('error al crear usuario');

    }
}

export const login = async (req, res) => {
    try {
        const {email, password, nombre} = req.body;
    
        const userOnDb = await User.findOne({email});
        if(!userOnDb) {
            return res.status(500).json('El usuario no existe. ')
        }

        const validPassword = bcrypt.compare(password, userOnDb.password);
        if(!validPassword) {
            return res.status(500).json('Contraseña incorrecta. ')
        }

        const token = await generateJwt(userOnDb.id)
        res.status(200).json({
            ok: true,
            msg: userOnDb,
            token
        });

    } catch (error) {
        res.status(500).json('error el login');

    }
}