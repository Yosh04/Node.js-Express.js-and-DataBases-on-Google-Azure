const {rest} = require('./db')
class service{//Se crearon los metodos que conectan con el Google Azure

    async all(){
        const result = await rest.executeStoredProcedure('ListarEspecie');
        console.log(result)
        return result.data;
    }

    one(id){
        return{"name":"eagle"};
    }

    update(){
        rest.executeStoredProcedure('ModificarEspecie',null,{
            Especie_id:1,
            Especie_descripcion:'Cafe con leche',
            Especie_estado:'A'
        });
    }

    insert (){
        rest.executeStoredProcedure('InsertarEspecie',null,{
            Especie_descripcion:'Luna llena',
            Especie_estado:'A'
        });
    }

    inactivar(){
        rest.executeStoredProcedure('InactivarEspecie',null,{
            Especie_id:1
        });
    }
}


module.exports=service; //Exportamos para que se utilizado en controller.
