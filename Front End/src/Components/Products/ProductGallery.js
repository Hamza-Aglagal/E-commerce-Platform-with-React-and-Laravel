import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallery = ({ images }) => {
    return (
        <div>
            <ImageGallery items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                isRTL={true}
                showThumbnails={true}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery