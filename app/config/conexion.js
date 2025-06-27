const mongoose=require('mongoose')
//importar la conexon
const CONFIG=require('./configuracion')
module.exports={
    // inicia conexion nula
    conection:null,
    connect:()=>{
        if(this.conection)return this.conection
        return mongoose.connect(CONFIG.DB)
        .then(conn=>{
            this.conection=conn
            console.log('la conexion se realizó con éxito')
     } )
     .catch(e => console.log('error en la conexion', e))
    }
}