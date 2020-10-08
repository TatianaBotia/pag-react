import React, {Component} from 'react'
// Componentes
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'


class Blog extends Component{
    
    render(){
    
        return(
            <div id="blog">
                <Slider
                    titulo = "Blog"
                    size = "slider-small"
                />
                <div className="sec">
                    <div className="center">
                        <div className="content">
                            <Articles/>
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
export default Blog