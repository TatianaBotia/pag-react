import React,{Component} from 'react'
import logo from '../assets/img/logo.svg'
import {NavLink} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <header id="header" className="header">
                <div className="center">
                    <div id="logo" className="logo">
                        <img src={logo} className="app-logo" alt="Logotipo"/>
                        <span className="brand">Frameworks - React</span>
                    </div>
                    <nav id="menu" className="menu">
                        <ul>
                            <li><NavLink to="/home" activeClassName="active">Inicio</NavLink></li>
                            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                            <li><NavLink to="/formularios" activeClassName="active">Formulario</NavLink></li>
                            <li><NavLink to="/peliculas" activeClassName="active">Películas</NavLink></li>
                            <li><NavLink to="/pruebas/tats" activeClassName="active">Pagina 2</NavLink></li>
                        </ul>
                    </nav>
                </div> 
            </header>
        )
    }
}
export default Header