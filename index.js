const hapi = require('hapi');
const mongoose = require('mongoose');
const Painting = require('./models/Painting');

const server = hapi.server({
    port : 6969,
    host : 'localhost'
});


const init = async () => {

    mongoose.connect('mongodb://poweruser:power123123@ds245210.mlab.com:45210/powerful-api');
    mongoose.connection.once('open', () => {
        console.log('Connected');
    });

    server.route([
        {
            method : 'GET',
            path: '/',
            handler: function(request, reply){
                return '<h1>Oh Fucking Shit</h1>';
            }
        },
        {
            method : 'GET',
            path: '/api/v1/paintings',
            handler: function(request, reply){
                return Painting.find();
            }
        },
        {
            method : 'POST',
            path: '/api/v1/paintings',
            handler: function(request, reply){
                const {name, url, techniques} = request.payload;
                const painting = new Painting({
                    name, url, techniques
                });

                return painting.save();
            }
        }
    ]);

    await server.start();
    console.log('Server running at: ' + server.info.uri);
}

init();