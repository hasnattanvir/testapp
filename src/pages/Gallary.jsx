import React from 'react';
import { useState,useEffect } from 'react';
import Commonpart1 from '../component/Commonpart1';
import {SRLWrapper} from 'simple-react-lightbox';

const Gallary = () => {

const imges =[
    {id:'1', imgname:'img1.jpg', tag:'free'},
    {id:'2', imgname:'img2.jpg', tag:'new'},
    {id:'3', imgname:'img3.jpg', tag:'free'},
    {id:'4', imgname:'img4.jpg', tag:'new'},
    {id:'5', imgname:'img5.jpg', tag:'free'},
    {id:'6', imgname:'img6.jpg', tag:'free'},
    {id:'7', imgname:'img7.jpg', tag:'new'},
    {id:'8', imgname:'img8.jpg', tag:'free'},
    {id:'9', imgname:'img9.jpg', tag:'pro'},
    {id:'10', imgname:'img10.jpg', tag:'free'},
    {id:'11', imgname:'img11.jpg', tag:'free'},
    {id:'12', imgname:'img12.png', tag:'new'},
    {id:'13', imgname:'img13.jpg', tag:'free'},
    {id:'14', imgname:'img14.jpg', tag:'pro'},

];


const [tag,setTag]=useState('new');
const [filterimg,setFilterimg]=useState([]);


useEffect(() => {
    tag === 'all'? setFilterimg(imges): setFilterimg(imges.filter(image =>image.tag===tag))
}, [tag]);



    const data =
    {
        title:'',
        head:'Portfolio Showcase',
        para:'Lorem ipsum is simply dummy text of the printing and',
    }

    return (
        <>
            <div className="main_div bg-color-photo-gal">
                <Commonpart1 data={data}/>
                <div className="container-fluid">
                    <div className="button-div">
                        <TagButton  name="all" clickhandelar={setTag}/>
                        <TagButton name="new" clickhandelar={setTag}/>
                        <TagButton name="free" clickhandelar={setTag}/>
                    </div>
                </div>
               <SRLWrapper>
                <div className="container-fluid control-conti-photo">
                            {
                            filterimg.map(image =>
                                <div className="card-img" key={image.id}>
                                    <a href={`/photogallary/${image.imgname}`}>
                                    <img className="p-g-img" src={`/photogallary/${image.imgname}`} alt="photo"/>
                                    </a>
                                </div>)
                            }
                </div>
               </SRLWrapper>
            </div>
        </>
    );
}


const TagButton =({name,clickhandelar})=>{

    return <button onClick={()=>clickhandelar(name)}>{name}</button>;

}
export default Gallary;
