import React from 'react';
import Card from '../component/Card';
import Sdata from '../component/Sdata';
import Commonpart1 from '../component/Commonpart1';

const Service = () => {

const data =
    {
        title:'SERVICES',
        head:'My Services',
        para:'Lorem ipsum is simply dummy text of the printing and',
    }
   



    return (
        <>
        <div className="main_div service" id="about">
            <div className="container-fluid">
                <Commonpart1 data={data}/>

                <div className="row gutter">
                    {
                     Sdata.map((val,index)=>{
                        return <Card 
                        key={index}
                        imgsrc={val.photo}
                        title={val.title}
                        para={val.para}
                        link={val.link}
                        />
                     })
                    }
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Service;
