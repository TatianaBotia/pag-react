import React, {Component} from 'react'
import Pelicula from './Pelicula'
import Sidebar from './Sidebar'
import Slider from './Slider'

class Peliculas extends Component{

    state ={
        peliculas:[
            {
                titulo: 'Monsters inc',
                imagen: 'https://lumiere-a.akamaihd.net/v1/images/image_3c4add40.jpeg'
            },
            {
                titulo: 'Los increibles',
                imagen: 'https://eresmama.com/wp-content/uploads/2018/08/pelicula-los-increibles-2-instagram.png'
            }
        ],
        nombre:'Tatiana Botia',
        favorita: ''
    }

    cambiarTitulo = () =>{
        var {peliculas} = this.state
        peliculas[0].titulo = "Mountros"
        this.setState({
            peliculas: peliculas
        })
    }
    favorita = (pelicula) =>{
        console.log(pelicula)
        this.setState({
            favorita:pelicula
        })
    }

    render(){
        return(
            <React.Fragment>
                <Slider
                        titulo = "Peliculas"
                        size = "slider-small"
                />
                <div className="center">
                        <div className="content">
                        <div id="peliculas" className="peliculas">
                            <p>Selección de peliculas favoritas de {this.state.nombre}</p>
                            <h2 className="subheader">Listado de películas</h2>
                            <p>
                                <button onClick ={this.cambiarTitulo}>cambia</button>
                            </p>
                            {
                                // Como si fuese un if con && o ternario
                                this.state.favorita.titulo ? (
                                <p className="favorita">
                                    <strong>Mi pelicula fav es:</strong>
                                    <span>{this.state.favorita.titulo}</span>
                                </p>
                                ):(
                                    <p>No hay peli fav</p>
                                )
                            }
                            

                            <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula,i) =>{
                                    return(
                                        <Pelicula 
                                            key={i} 
                                            pelicula={pelicula}
                                            marcarFav = {this.favorita}
                                        />
                                    )
                                })
                            }        
                            </div>
                        </div>
                    </div>
                    <Sidebar
                        blog = "false"
                    />
                </div>
            </React.Fragment>
        )
    }
}
export default Peliculas