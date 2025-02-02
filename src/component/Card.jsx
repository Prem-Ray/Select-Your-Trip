import './Card.css'
import { useState } from 'react';

function Card({id,name,info,image,price,removetour}){

    const [readmore,setReadmore] = useState(false);
    const description =readmore ? info : `${info.substring(0,200)}....` ;

    function readmoreHandler(){
        setReadmore(!readmore) ;
    }

    return(
        <div className='card w-[400px] max-h-fit m-[1rem] p-[1rem] flex flex-col rounded-[10px] item-center shadow-xl '>
            <img src={image} className='image w-[380px] aspect-square object-cover'/>
            <div className='tour-info my-[20px] mx-[5px]'>
                <div className='tour-details'>
                    <h4 className='tour-price text-green-500 font-bold text-[1.3rem]'>₹{price}</h4>
                    <h4 className='tour-name text-[1.5rem] text-blue-800 font-bold'>{name}</h4>
                </div>
                <div className='description text-justify'>
                    {description}
                    <span className='read-more text-[#12b0e8] cursor-pointer' onClick={readmoreHandler}>
                        {readmore ? 'Show less' : 'Read more'}
                    </span>
                </div>
            </div>
            
            <button onClick={()=>{removetour(id)}} className='bg-red-400 mt-[18px] py-[10px] px-[80px] border-[1px] border-solid border-black cursor-pointer rounded-[10px] text-[18px] font-bold bg-[#b4161b21] inset-2 hover:bg-red-700 hover:text-white hover:transition-all hover:duration-200 hover:ease-in-out'>Not Interested</button>
        </div>
    )
}

export default Card ;