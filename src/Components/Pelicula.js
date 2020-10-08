import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Pelicula extends Component{

    marcar = () =>{
        this.props.marcarFav(this.props.pelicula)
    }
    render(){
       
        const{titulo,imagen} =this.props.pelicula
        return(
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={imagen} alt={titulo}/>
                </div>
                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <Link to="/blog">Leer mas</Link>

                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>
                <div className="clear"></div>
            </article>
        )
    }
}
export default Pelicula