const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    },
    async store (req, res) {
        const {nome, email, whatsapp, cidade, estado} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            estado
        })
    
        return res.json({ id });
    }
}