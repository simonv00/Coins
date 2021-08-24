import v from "validator";
/* import Controlador from "./Controlador"; */
import Controlador from './Controlador'

class EstudianteBO{

    static validateAll(estudiante){

        const {nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado} = estudiante

        if(
            this.validateAlpha(nombre1) &&
            this.validateAlpha2(nombre2) &&
            this.validateAlpha(apellido1) &&
            this.validateAlpha2(apellido2) &&
            this.validateNumber(telefono) &&
            this.validateAlpha(correo) &&
            this.validateID(id) &&
            this.validateMonto(monto)
            
        ){
            return true
        }
    }


    static validateAlpha(data){
        return (v.isAlpha(data) && v.isLength(data, 1, 45))
    }

    static validateAlpha2(data){
        return (v.isLength(data, 0, 45) && v.isAlpha(data) )
    }

    static validateNumber(data){
        return (v.isNumeric(data.toString()) && v.isLength(data.toString(), 7,12) )
    }

    static validateMail(data){
        return (v.isEmail(data) && v.isLength(data,1,45) )
    }

    static validateMonto(data){
        return (v.isNumeric(data.toString) && data > 5000 && data < 500000)
    }

    static validateID(data){
        return (v.isLength(data,1,20))
    }
}

var estudiante = Controlador.createStudent('profe', '', 'cardona', 'nose', 3340543, 'soyelprofe@eia.edu.co', '123456789', '', 0, false)

var valido = EstudianteBO.validateAll(estudiante)

console.log(valido)