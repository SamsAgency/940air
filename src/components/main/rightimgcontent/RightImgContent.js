import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './RightImgContent.css'

const RightImgContent = () => {
    return (
        <div className="right-img-content">
            <div className="right-img-content-left">
                <div className="right-img-content-text">
                    <h4 className="right-img-content-text-h4">
                        Testimonials
                    </h4>
                    <h2 className="right-img-content-text-h2">
                        Some Content here
                    </h2>
                    <p className="right-img-content-text-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
                <div className="right-img-content-card">
                    <p className="right-img-content-card-quote">
                        <q>
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                        </q>
                    </p>
                </div>
            </div>
            <div className="right-img-content-right">
                
            </div>
        </div>
    )
}

export default RightImgContent
