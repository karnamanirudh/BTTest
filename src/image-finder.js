import React, { useState, useEffect } from 'react';

function ImageFinder() {

    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch("https://images-api.nasa.gov/search?q=moon")
            .then(response => response.json())
            .then((data) => setImages(data))
    }, [])


    console.log(images && images.collection.items, "images from api")
    return (
        <>
            <div>Images</div>

            <div style={{ display: "inline-block" }}>
                {images && images.collection.items.map(image => {
                    console.log(image); 
                    return image.links && image.links.filter(imgLink =>
                        imgLink.rel === "preview")
                        .map(imgPreview => {
                            return <img src={imgPreview.href} width="250px" height="250px" style={{ padding: "10px"}} />
                        })
                })
                }

            </div>
        </>
    )


}


export default ImageFinder;