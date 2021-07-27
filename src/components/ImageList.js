import React from 'react'

export default function ImageList(props) {
    const renderPictures = props.picturesList.map(picture => {
        return (
            <img className="img" src={picture.src} alt="cannot load picture" />
        );
    })
    return (
        <div className="image-container">
            {renderPictures}
        </div>
    )
}
