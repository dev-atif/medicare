import Image from 'next/image'
import React from 'react'
import bodypain from '../../../../public/body pain.jpg'
import diabties from '../../../../public/diabaties.jpg'
import kidny from '../../../../public/kidny.jpg'
import liver from '../../../../public/liver.jpg'
import respiratory from '../../../../public/respiratory.jpg'
import eye from '../../../../public/eye.jpg'
const Data =[
    {
        image:bodypain,
        slug:'Body & Joint Pain'
    },
    {
        image:diabties,
        slug:'Diabaties care'
    },
    {
        image:kidny,
        slug:'Kidny care'
    },
    {
        image:liver,
        slug:'Liver care'
    },
    {
        image:respiratory,
        slug:'Respiratory Care'
    },
    {
        image:eye,
        slug:'Eye Care'
    },

]
const CareSection = () => {
  return (
    <div className='xl:py-20 py-10 px-12 bg-white rounded-t-3xl z-50'>
        <div className='flex xl:gap-8 gap-3 lg:flex-nowrap flex-wrap justify-center'>
       {
        Data.map((itm,idx)=>(
            <div  key={idx}>
            <Image src={itm.image} alt={itm.slug}   className='xl:h-48 h-36 hover:scale-105 transform transition-all duration-300 object-cover xl:w-48 w-36 rounded-xl  '/>
            <h1 className='text-[#232458] font-semibold text-center mt-3'>
                {itm.slug}
            </h1>
        </div>
        ))
       }
    </div>
    </div>
  )
}

export default CareSection