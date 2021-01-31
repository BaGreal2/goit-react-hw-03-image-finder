import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem'


class ImageGallery extends Component {
    render(){
        const {images}=this.props;
        return (
            <ul className="ImageGallery">
                {images.map((image)=>(
                    <>
                    <ImageGalleryItem
                        key={image.id}
                        smallImg={image.webformatURL}
                        bigImg={image.largeImageURL}
                    />

                    </>
                ))}
            </ul>
        )
    }
}

ImageGallery.propTypes={
    images: PropTypes.array.isRequired,
}

export default ImageGallery;