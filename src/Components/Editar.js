import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar'
import SimpleReactValidator from 'simple-react-validator'
import swal from 'sweetalert'
import imaDefault from '../assets/img/unnamed.png'


class Editar extends Component{

    url = Global.url
    articleId = null
    titleRef = React.createRef()
    contentRef = React.createRef()
    state={
        article:{},
        status:null,
        selectedFile:null
    }
    componentWillMount(){
        this.articleId = this.props.match.params.id
        this.getArticle(this.articleId)
        this.validator = new SimpleReactValidator()
    }

    changeState = ()=>{
        this.setState({
            article:{
                title:this.titleRef.current.value,
                content:this.contentRef.current.value,
                image:this.state.article.image
            }
        })
        this.validator.showMessages()
        this.forceUpdate()
    }
    fileChange = (event) => {
        this.setState({
            selectedFile:event.target.files[0]
        })
    }

    getArticle = (id) => {
        axios.get(this.url+'article/'+id).then(res => {
            this.setState({
                article: res.data.article
            })
        })
    }

    saveArticle = (e)=>{
        e.preventDefault()
        // Rellena state con formulario
        this.changeState()
        if(this.validator.allValid()){
            // peticion  para guardar aricle
            axios.put(this.url+'article/'+this.articleId,this.state.article).then(res=>{
                if(res.data.article){
                    this.setState({
                        article: res.data.article,
                        status:"waiting"
                    })

                    // Alert 
                    swal('Articulo modificado',
                    'El articulo ha sido correctamente modificado',
                    'success')

                    if(this.state.selectedFile !== null){

                        var articleId = this.state.article._id
                        const formData = new FormData()
                        formData.append(
                            'file0',
                            this.state.selectedFile,
                            this.state.selectedFile.name
                        )
                        axios.post(this.url+'/upload-image/'+articleId,formData).then(res =>{
                            if(res.data.article){
                                this.setState({
                                    article:res.data.article,
                                    status:'success'
                                })
                            }else{
                                this.setState({
                                    article:res.data.article,
                                    status:'failed'
                                })
                            }
                        })

                    }else{
                        this.setState({
                            status:"success"
                        })
                    }
                }else{
                    this.setState({
                        status:"failed"
                    })
                }
            })
        }else{
            this.setState({
                status:"failed"
            })
            this.validator.showMessages()
            this.forceUpdate()
        }
    }

    render(){
        if(this.state.status==="success"){
            return <Redirect to="/blog"/>
        }
        var article = this.state.article
        return(
        
            <div className="center">
                <section id="content" className="content">
                    <h1 className="subheader">Editar artículo</h1>
                    {
                        this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" ref={this.titleRef} defaultValue={this.state.article.title} onChange={this.changeState}/>
                                {
                                    this.validator.message('title',this.state.article.title, 'required|alpha_num_space')
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" ref={this.contentRef} defaultValue={this.state.article.content} onChange={this.changeState}></textarea>
                                {
                                    this.validator.message('content',this.state.article.content, 'required')
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange}/>
                                <div className="image-wrap">
                                {
                                    article.image !== null ?(
                                        <img className="thumb" src={this.url+"get-image/"+article.image} alt={article.title}/>
                                    ):(
                                        <img className="thumb" src={imaDefault} alt={article.title}/>
                                    )
                                }
                                </div>
                            </div>
                            <input type="submit" value="Guardar" className="btn btn-success"/>
                        </form>
                    }
                    {
                        !this.state.article.title &&
                        <h1 className="subheader">Cargando</h1>
                    }                    
                </section>
                <Sidebar/>
            </div>
        )
    }
}
export default Editar