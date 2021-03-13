import React from 'react'
import "./Cresource.css"

const Cresourse = () => {
    return (
    <div className = "customer-resource">
        <div className="accordionMenu">
            <input type="radio" name="trg1" id="acc1" checked="checked"/>
            <label for="acc1">Privacy Policy</label>
            <div className="content">
                <div className="inner">
                    It is a demo text.
                </div>
            </div>

            <input type="radio" name="trg1" id="acc2"/>
            <label for="acc2">Terms and condition</label>
            <div className="content">
                <div className="inner">
                    It is a demo text.
                </div>
            </div>

            <input type="radio" name="trg1" id="acc3"/>
            <label for="acc3">Rresponsible Disclosure</label>
            <div className="content">
                <div className="inner">
                    It is a demo text.
                </div>
            </div>

            
        </div>
    </div>
    )
}

export default Cresourse
