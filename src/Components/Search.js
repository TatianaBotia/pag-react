import React, {Component} from 'react'
// Componentes
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'


class Search extends Component{
    
    render(){
    
        var searched = this.props.match.params.search
        return(
            <div id="blog">
                <Slider
                    titulo = {"Busqueda: "+ searched }
                    size = "slider-small"
                />
                <div className="sec">
                    <div className="center">
                        <div className="content">
                            <Articles
                                search={searched}
                            />
                        </div>
                        <Sidebar
                            blog = "true"
                        />
                    </div>
                </div>
            </div>            
        )
    }
}
export default Search