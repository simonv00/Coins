class Estudiante {
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
        return this._nombre1
    }

    set nombre1(nombre1) {
        this._nombre1 = nombre1
    }

    get nombre2() {
        return this._nombre2
    }

    set nombre2(newNombre2) {
        this._nombre2 = newNombre2
    }

    get apellido1() {
        return this._apellido1
    }

    set apellido1(newApellido1) {
        this._apellido1 = newApellido1
    }

    get apellido2() {
        return this._apellido2
    }

    set apellido2(newApellido2) {
        this._apellido2 = newApellido2
    }

    get telefono() {
        return this._telefono
    }

    set telefono(newTelefono) {
        this._telefono = newTelefono
    }

    get correo() {
        return this._correo
    }

    set correo(newCorreo) {
        this._correo = newCorreo
    }

    get estado() {
        return this._estado
    }

    set estado(newEstado) {
        this._estado = newEstado
    }

    get monto() {
        return this._monto
    }

    set monto(newMonto) {
        this._monto = newMonto
    }

    get tipoID() {
        return this._tipoID
    }

    set tipoID(newTipoID) {
        this._tipoID = newTipoID
    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }
}

export default Estudiante