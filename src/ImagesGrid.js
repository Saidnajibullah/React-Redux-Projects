import React from 'react';
import ImageCard from './ImageCard';
import './ImagesGrid.css';

class ImagesGird extends React.Component {
    render(){
        if(this.props.images !== null){
            let images = this.props.images.data.results;
            return( 
                <div className='grid-container'>
                    {images.map((image, i) => <ImageCard image={image} key={i} /> )}
                </div> 
            )
        }
        else return null;
    }
}

export default ImagesGird;