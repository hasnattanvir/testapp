import React from 'react';
import Commonpart1 from '../component/Commonpart1';
import About_info from '../component/About_info';
import Myphoto from '../images/tanvir.png';

const About = () => {
    const datas=[
        {
            title:"Name",
            name:"Abul Hasnat Tanvir",
        },
        {
            title:"Phone",
            name:"01625-010631",
        },
        {
            title:"Linkedin",
            name:"www.linkedin.com/in/hasnat-tanvir",
        },
    ]


const data = 
   
    {
        title:'',
        head:'ABOUT',
        para:'Lorem ipsum is simply dummy text of the printing and',
    }


    return (
       <>
        <div className="main_div bg-color About_id">
            <div className="container-fluid">
                <div className="row">
                    <Commonpart1 data={data}/>
                </div>
                <div className="row aboutsect">
                    <div className="col-md-6 col-sm-12">
                        <div className="img_about">
                            <img src={Myphoto} alt="photo" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="inner_box">
                            <h1 className="h1">Hi There</h1>
                            <p className="paraone">Hi! I am Abul Hasnat Tanvir, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2016. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                            <p className="paratwo">For over past 4 years, I have worked for some of the best digital agencies and wonderful clients to create some award winning works. And, I can make this happen for your business as well.</p>
                            <div className="row gutter">
                                {
                                    datas.map((val,index)=>{
                                        return<About_info 
                                            key={index}
                                            title={val.title}
                                            name={val.name}
                                            />
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default About;
