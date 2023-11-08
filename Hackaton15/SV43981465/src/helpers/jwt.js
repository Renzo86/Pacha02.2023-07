import jwt from 'jsonwebtoken';

export const generateJwt = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid }
        jwt.sign(payload, 'sdfnsfndfwuNDNGFWIURNFIWEFU234244qfq34r', {
            expiresIn: '24h'
        }, (err, token) => {
            if(err) {
                reject('No se pudo crear el token.')
            } else {
                resolve(token)
            }
        })

    })
}