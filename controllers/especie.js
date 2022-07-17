const Service = require('../services/especie');
let service = new Service();

class handler{ //Clase intermedia para conectar con los metodos de servicio. 
            //Sirve para redireccionar solamente. 
    update(){
        service.update();
    }
    async all(){
        let list = await service.all();
        console.log(list);
        return list;
    }
    one(id){
        let item = service.one(id);
        return item;
    }
    insert(){
        service.insert();
    }
    inactivar(){
        service.inactivar();
    }
}

module.exports=handler;//Se exporta para utilizar en en routes. 