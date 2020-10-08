import React, {Component} from 'react'
import Sidebar from './Sidebar'
import Slider from './Slider'

class Formulario extends Component{
    nombreRef = React.createRef()
    apellidoRef = React.createRef()
    biografiaRef = React.createRef()
    sexoHombreRef = React.createRef()
    sexoMujerRef = React.createRef()
    sexoOtroRef = React.createRef()
    state = {
        user: {}
    }
    recibirFormularo = (e) =>{
        e.preventDefault()
        var genero = "Masculino"
        if(this.sexoHombreRef.current.checked){
            genero = this.sexoHombreRef.current.value
        }else if(this.sexoMujerRef.current.checked){
            genero = this.sexoMujerRef.current.value
        }else{
            genero = this.sexoOtroRef.current.value
        }
        var user = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            bio: this.biografiaRef.current.value,
            genero: genero
        }
        this.setState({
            user: user
        })
        console.log(user)
    }
    render(){
        if(this.state.user.nombre){
            var user = this.state.user
        }
        return(
            <div id="formulario">
                <Slider
                    titulo = "Formulario"
                    size = "slider-small"
                />
                <div className="center">
                    <div className="content">
                        {/* Mostrar datos de form */}
                        {
                            this.state.user.nombre &&
                                <div id="user-data">
                                    <p>
                                       <strong> Nombre:</strong> {user.nombre}
                                    </p>
                                    <p>
                                       <strong> Apellido:</strong> {user.apellido}
                                    </p>
                                    <p>
                                       <strong> Biografia:</strong> {user.bio}
                                    </p>
                                    <p>
                                       <strong> Sexo:</strong> {user.genero}
                                    </p>
                                </div>
                        }
                        
                        {/* formulario */}
                        <form action="" onSubmit={this.recibirFormularo} onChange={this.recibirFormularo} className="mid-form">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" id="nombre" ref={this.nombreRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" name="apellido" id="apellido" ref={this.apellidoRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biografía</label>
                                <textarea name="bio" id="bio" ref={this.biografiaRef}></textarea>
                            </div>
                            <div className="form-group radio-btn">
                                <input type="radio" name="genero" id="genero" ref={this.sexoMujerRef} value="femenino"/>Femenino
                                <input type="radio" name="genero" id="genero" ref={this.sexoHombreRef} value="maculino"/>Masculino
                                <input type="radio" name="genero" id="genero" ref={this.sexoOtroRef} value="otro"/>Otro
                            </div>
                            <input type="submit" value="enviar" className="btn2 btn-success"/>
                        </form>
                    </div>
                    <Sidebar
                        blog = "false"
                    />
                </div>
            </div>
        )
    }
}
export default Formulario