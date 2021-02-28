import React from 'react'
import "./leftimgcontent.css"
import truck from '../../../assets/truck-460432_1920.jpg'

const leftimgcontent = () => {
    return (
        <div className="leftimgcontent">
            <div className="the-left-img">
                <img className="content-section-image" src={truck} alt="shipping"/>
            </div>
            <div className="the-right-content" >
                <h2>The title here</h2>
                <h3>subtitle here</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default leftimgcontent
