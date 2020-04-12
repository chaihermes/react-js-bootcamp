import React from 'react';
import GifItem from '../Itens/index';

const GifList = (props) => {
    const items = props.gifs.map((image) => {
        return(
            <GifItem key={image.id} gif={image} onGifSelect={props.onGifSelect} />
        );
    })
    return(
        <div>{items}</div>
    );
}

export default GifList;
