import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="col-md-6 col-lg-4 col-10 mx-auto">
                 <div className="warrper_box">
                     <div className="photo_div">
                        <img src={props.imgsrc} alt="photo"/>
                     </div>
                    <div className="text_content">
                        <h3 className="h3">{props.title}</h3>
                        <p className="parac"> {props.para}</p>
                        <div className="language">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>BOOTSTRAP</li>
                                <li>REACT JS</li>
                                <li>JAVA SCRIPT</li>



                            </ul>
                        </div>
                        <a className="btn btn-outline-dark">view</a>
                     </div>
                 </div>
            </div>
        </>
    );
}

export default Card;
