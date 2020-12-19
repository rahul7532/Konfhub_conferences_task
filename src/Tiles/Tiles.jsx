import React, {Component} from 'react'
import Tile from './TileUI';

import img1 from '../assets/rising_sun.jpg';
import img2 from '../assets/clean_sky.jpg';
import img3 from '../assets/monsoon.jpg'

class Tiles extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Tile img src={props.imgsrc} defaultSource={img1} title="rising_sun"/></div>
                        <div className="col-md-4">
                        <Tile img src={props.imgsrc} defaultSource={img2} title="clean_sky"/></div>
                        <div className="col-md-4">
                        <Tile img src={props.imgsrc} defaultSource={img3} title="monsoon"/></div>               
                 </div>
            </div>
        )
    }
}

export default Tiles;