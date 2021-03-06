import Link from 'next/link'
import React, { useState } from 'react';

 const SubCategory = ({subCategories}) => {
    const [subCategory, setSubCategory]=useState([]);
    console.log('subcatecorias', subCategories);

    if(!subCategories){
        return 'No se pudo obtener una subcategoría'
    }

    return (
        <div>
            <ul>
                {
                    subCategories.map(subCategory=>{
                        return (
                            <li key={subCategory.id}>
                                <Link href='/categories/subCategories/articles'>{subCategory.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    );
};

export default SubCategory;

export async function getStaticProps() {
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
        const data = await res.json();
        console.log('subcategorias', data);

        if(!data){
            return{
                notFount:true,
            }
        }
    
        return{
            props:{
                subCategories:data
            }, // will be passed to the component as props
        }
    } catch (error) {
        return{
            notFount:true,
        }
    }  

}