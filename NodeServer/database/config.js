const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_LOCAL,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("BASE DE DATOS CONECTADA");
    } catch (e) {
        console.log(e);
        throw new Error("ERROR AL CONECTAR LA BASE DE DATOS");
    }
}


module.exports = {
    dbConnection,
}