import Estudiante from './Estudiante'

class Controlador {

    static createStudent(nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado){
        return new Estudiante(nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado)
    }

    sendStudent(){

    }

}

export { Controlador }