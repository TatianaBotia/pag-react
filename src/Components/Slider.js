import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Slider extends Component{
    render(){
        return(
            <div className={this.props.size} id="slider">
                <h1>{this.props.titulo}</h1>
                {this.props.btn &&
                    <Link className="btn" to="/blog">{this.props.btn}</Link>
                }
            </div>
        )
    }
}
export default Slider