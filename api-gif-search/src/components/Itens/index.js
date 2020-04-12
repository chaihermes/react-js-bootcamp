import React from 'react';

const GifItem = (image) => {
    return(
        <div >
            <img src={image.gif.images.downsized.url} />
        </div>
    );
}

export default GifItem;