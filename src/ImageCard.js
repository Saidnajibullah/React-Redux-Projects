import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { rowSpan: 0, colSpan: 0};
        this.elementRef = React.createRef();
    }
    componentDidMount(){
        if(this.elementRef.current !== null)
        this.elementRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = ()=> {   
        this.setState(
            { 
                rowSpan: Math.ceil(this.elementRef.current.naturalHeight / 700), 
                colSpan: Math.ceil(this.elementRef.current.naturalWidth / 700)
            });
    }
    render(){
        return( 
            <div style={{gridColumnEnd: `span ${this.state.colSpan}`, gridRowEnd: `span ${this.state.rowSpan}`}} >
                <img ref={this.elementRef} src={this.props.image.urls.regular} alt={this.props.image.alt_description} />
            </div>
        )
    }
}
export default ImageCard;