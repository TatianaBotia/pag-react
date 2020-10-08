import React, {Component} from 'react'
// Componentes
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'

class Home extends Component{
    render(){
        return(
            <div id="home">
                <Slider
                    titulo = "Bienvenido al master en Frameworks para JavaScript"
                    btn = "Ir al blog"
                    size = "slider"
                />
                <div className="sec">
                    <div className="center">
                        <div className="content">
                            <h1 className="subheader">Últimos artículos</h1>
                            <Articles
                                home = "true"
                            />
                        </div>
                        <Sidebar/>
                    </div>
                </div>
            </div>            
        )
    }
}
export default Home