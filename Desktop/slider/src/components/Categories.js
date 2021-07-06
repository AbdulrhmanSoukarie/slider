import React from 'react';
import Popup from './Popup';
import './categories.css'
import { useState } from 'react';
const slideImages = [
    {

        discrption: "Math",
        discrption_2: "Arbic",
        discrption_3: "Biology",
        title: "Education"
    },
    {

        discrption: "wlooo",
        title: "Sport"
    },
    {
        discrption: "",
        title: "Political"
    }
];

function Categories() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="btn">
            {slideImages.map((imageUrl, index) => (
                <div>
                    <button className="btn-style" onClick={() => setButtonPopup(true)}> {imageUrl.title}</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <button>{imageUrl.discrption}</button>
                    </Popup>
                </div>

            ))}

        </div>


    )
}

export default Categories

