import React from 'react';

const Commonpart1 = (props) => {
const data =props.data || {}

    return (
       <>
        <div className="padding-div">
            <div className="para_box">
                <p className="par-s" para="hi i am hasnat tanvir" >{data.title}</p>
                <h1 className="hed-s">{data.head}</h1>
                <p className="par-s1">{data.para}</p>
            </div>
            <div className="commonborder"></div>
        </div>
       </>
    );
}

export default Commonpart1;
