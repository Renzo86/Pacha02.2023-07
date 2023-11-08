
export default (io) => {
    io.on('connection', (client) => {
        console.log('Cliente conectado.');

        client.on('disconnect', () => {
            console.log('Cliente desconectado.');
        })
    })
}