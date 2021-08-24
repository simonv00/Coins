export default class Estudiante {
    constructor(nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado) {
        this.nombre1 = nombre1
        this.nombre2 = nombre2
        this.apellido1 = apellido1
        this.apellido2 = apellido2
        this.telefono = telefono
        this.correo = correo
        this.id = id
        this.tipoID = tipoID
        this.monto = monto
        this.estado = estado
    }

    get nombre1() {
        return this.nombre1
    }

    set nombre1(newNombre1) {
        this.nombre1 = newNombre1
    }

    get nombre2() {
        return this.nombre2
    }

    set nombre2(newNombre2) {
        this.nombre2 = newNombre2
    }

    get apellido1() {
        return this.apellido1
    }

    set apellido1(newApellido1) {
        this.apellido1 = newApellido1
    }

    get apellido2() {
        return this.apellido2
    }

    set apellido2(newApellido2) {
        this.apellido2 = newApellido2
    }

    get telefono() {
        return this.telefono
    }

    set telefono(newTelefono) {
        this.telefono = newTelefono
    }

    get correo() {
        return this.correo
    }

    set correo(newCorreo) {
        this.correo = newCorreo
    }

    get estado() {
        return this.estado
    }

    set estado(newEstado) {
        this.estado = newEstado
    }

    get monto() {
        return this.monto
    }

    set monto(newMonto) {
        this.monto = newMonto
    }

    get tipoID() {
        return this.tipoID
    }

    set tipoID(newTipoID) {
        this.tipoID = newTipoID
    }

    get id() {
        return this.id
    }

    set id(newId) {
        this.id = newId
    }
}