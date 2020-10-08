import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar'
import imaDefault from '../assets/img/unnamed.png'
import Moment from 'react-moment'
import 'moment/locale/es'
import swal from 'sweetalert'

class Article extends Component{

    url = Global.url
    state={
        article:false,
        status: null

    }
    componentDidMount(){
        this.getArticle()
    } 

    getArticle = () =>{
        var id = this.props.match.params.id
        axios.get(this.url + "article/"+id).then(res=>{
            this.setState({
                article: res.data.article,
                status: "success"
            })
        }).catch(err=>{
            this.setState({
                article:false,
                status:"success"
            })
        })
    }

    deleteArticle = (id) =>{

        swal({
            title:'¿Esta seguro que desea eliminar este articulo?',
            text:'Una vez eliminado no podra recuperarlo',
            icon:'warning',
            buttons:true,
            dangerMode: true
        }).then((willDelete) =>{
            if(willDelete){
                swal(
                    'Artículo eliminado',
                    'El articulo ha sido eliminado correctmente',
                    'success'
                )
            }else{
                swal('Peticion cancelada',
                'El articulo esta a salvo')
            }
        })

        axios.delete(this.url+'article/'+id).then(res =>{
            this.setState({
                article: res.data.article,
                status:'deleted'
            })            
        })
    }

    render(){
       
        if(this.state.status === 'deleted'){
            return <Redirect to="/blog" />
        }

        var article = this.state.article
        return(
            <div className="sec">
                <div className="center">
                    <section id="content" className="content">
                    {
                        this.state.article &&

                        <article className="article-item article-detail">                
                            <div className="image-wrap">
                                {
                                    article.image !== null ?(
                                        <img src={this.url+"get-image/"+article.image} alt={article.title}/>
                                    ):(
                                        <img src={imaDefault} alt={article.title}/>
                                    )
                                }
                            </div>
                            <h1 className="subheader">{this.state.article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>
                            <div className="btn-div">
                                <button onClick={
                                    () =>{
                                        this.deleteArticle(article._id)
                                    }
                                } className="btn btn-danger">Eliminar</button>
                                <Link to={'/blog/editar/'+article._id} className="btn btn-warning">Editar</Link>
                            </div>                           
                        </article>
                    }             
                    {
                        !this.state.article && this.state.status === "succes" &&
                        <div id="article">
                            <h2 className="subheader">No existe</h2>
                            <p>Intenta mas tarde</p>
                        </div>
                    }
                                {
                        !this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segundos</p>
                        </div>
                    }           
                    </section>
                    <Sidebar/>
                </div>     
            </div>   
        )
    }
}
export default Article