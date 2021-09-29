import React, { Component } from 'react'
import { Button, FormControl, Select, InputGroup, DropdownButton } from 'react-bootstrap'




class Busqueda extends Component {



    render() {
        return (
            <div>
                <InputGroup style={{ width: '600px', maxWidth: '450px' }} >
                    <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                    />
                    <Button 
                        variant="outline-primary" 
                        id="button-addon1"
                        onClick={this.handleSubmit}
                        className="Button"
                        type="submit"
                    >
                        Buscar
                    </Button>
                </InputGroup>
            </div>
        )
    }
}

export default Busqueda
