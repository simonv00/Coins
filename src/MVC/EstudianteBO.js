import v from "validator";
/* import Controlador from "./Controlador" */

export default class EstudianteBO{

    static validateAll(estudiante){

        const {nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado} = estudiante

        if(
            this.validateMail(correo) &&
            this.validateAlpha(nombre1) &&
            this.validateAlpha2(nombre2) &&
            this.validateAlpha(apellido1) &&
            this.validateAlpha2(apellido2) &&
            this.validateNumber(telefono) &&
            this.validateID(id) &&
            this.validateMonto(monto)
            
        ){
            console.log(nombre1)
            return true
        }
        return false
    }


    static validateAlpha(data){
        var aprobado = (v.isAlpha(data) && v.isLength(data, 1, 45))
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateAlpha2(data){
        var aprobado = (v.isLength(data, 0, 45) && v.isAlpha(data)) || data.length === 0
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateNumber(data){
        var aprobado = (v.isNumeric(data.toString()) && v.isLength(data.toString(), 7,12) )
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateMail(data){
        var aprobado = (v.isEmail(data) && v.isLength(data,1,45) && v.contains(data,'@eia.edu.co'))
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateMonto(data){
        var aprobado = (v.isNumeric(data.toString()) && data > -5000 && data < 500000)
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateID(data){
        var aprobado = (v.isLength(data,1,20))
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }
}