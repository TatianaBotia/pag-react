import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Content from './Components/Content'
import Error from './Components/Error'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Blog from './Components/Blog';
import Peliculas from './Components/Peliculas'
import Formulario from './Components/Formulario'
import Search from './Components/Search'
import Article from './Components/Article'
import CreateArticle from './Components/CreateArticle'
import Editar from './Components/Editar'

class Router extends Component{
    render(){
        return(
            // Configurar rutas y paginas
            <BrowserRouter>
                <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/blog/busqueda/:search" component={Search}/>
                        <Route exact path="/redirect/:search" render={(props) =>{
                            var search = props.match.params.search
                            return <Redirect to={"/blog/busqueda/"+search}/>
                        }}/>
                        <Route exact path="/blog/articulo/:id" component={Article}/>
                        <Route exact path="/blog/crear" component={CreateArticle}/>
                        <Route exact path="/blog/editar/:id" component={Editar}/>
                        <Route exact path="/formularios" component={Formulario}/>
                        <Route exact path="/peliculas" component={Peliculas}/>
                        <Route exact path="/segunda-ruta" component={Content}/>
                        {/* OTRA FORMA */}
                        <Route exact path="/hola" render={() =>(
                            <h1>Hola desde hola</h1>
                        )}/>
                        {/* PASAR PARAMETROS */}
                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                            var nombre =props.match.params.nombre
                            var apellidos = props.match.params.apellidos
                            return(
                                <div className = "content">
                                    <h1>Pag de prueba</h1>
                                    {/* Condicional */}
                                    <h2>
                                        {
                                            nombre && !apellidos &&
                                                nombre
                                        }
                                        {
                                            nombre && apellidos &&
                                                nombre + ' ' + apellidos
                                        }
                                    </h2>
                                </div>
                                )
                            }
                        }/>
                        {/* RUTA DE ERROR */}
                        <Route component={Error}/>
                    </Switch>                    
                <Footer/>
            </BrowserRouter>
        )
    }
}
export default Router