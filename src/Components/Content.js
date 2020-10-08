import React, {Component} from 'react'

class Content extends Component{

    contador = 0
    state = {
        contador : 0
    }

    render(){
        return(
            <section id="content" className="content">
                
                <h2 className="subheader">Últmos artículos</h2>

                <p>
                    contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>


                {/* <script type="text/javascript">
                  


                </script> */}
                {/* <article class="article-item">
                    <div class="image-wrap">
                        <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="articulo"/>
                    </div>
                    <h2>Articulo 1</h2>
                    <span class="date">Hace 5 minutos</span>
                    <a href="#">Mas</a>
                </article> */}
                <div className="clear">
                </div>
            </section>
        )
    }

    sumar = () =>{
        this.setState({
            contador: (this.state.contador + 1)
        })
    }
    restar = () =>{
        this.setState({
            contador: (this.state.contador - 1)
        })
    }
}
export default Content