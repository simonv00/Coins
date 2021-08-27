import Estudiante from './Estudiante.js'
import EstudianteBO from './EstudianteBO.js'
// eslint-disable-next-line import/no-anonymous-default-export
export default function sendStudent (nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado){
    const student = new Estudiante(nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado)
    return EstudianteBO.validateAll(student) 
}