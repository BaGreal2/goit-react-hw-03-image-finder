import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal/Modal'

class ImageGalleryItem extends Component{
    state={
        modal: false,
    }
    onElementClick=(e)=>{
        this.setState({
            modal: true,
        })
    }
    onCloseClick=(e)=>{
        this.setState({
            modal: false,
        })
    }
    render(){
        const {smallImg, bigImg} = this.props;
        const {modal} = this.state;
    return(
        <li className="ImageGalleryItem">
            <img src={smallImg} alt=""  onClick={this.onElementClick} className="ImageGalleryItem-image" />
            {modal&&<Modal onClose={this.onCloseClick}>
                <img src={bigImg} alt="" />
            </Modal>}
        </li>
    )
    }
}

ImageGalleryItem.propTypes={
    smallImg: PropTypes.string.isRequired,
    bigImg: PropTypes.string.isRequired,
}

export default ImageGalleryItem;