import React from 'react';
import Masonry from 'react-masonry-component';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <a 
                href={image.pageURL} 
                key={image.id}
                target='_blank'
                rel='nooopener noreferrer'
            >
                <img src={image.webformatURL} alt={image.tags} />
            </a>
        )
    });

    return (
        <Masonry>
            <p>{images}</p>
        </Masonry>
    );
};

export default ImageList;
