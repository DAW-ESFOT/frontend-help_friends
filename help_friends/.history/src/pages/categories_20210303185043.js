import Link from 'next/link'
import React from 'react';

const Category = ({categories}) => {
    console.log('categorias', categories );
    if(!categories){
        return 'No se pudo obtener una categoría'
    }

    return (
        <div>
            {
                categories.map((category)=>{
                    console.log('identificacion', category.id);
                    return (
                        <ul>
                            <li key={category.id}>
                                <Link href='/categories/subCategories'>{category.name}</Link>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    );
};

export default Category;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`)
    const data = await res.json();
    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            categories:data
        }, // will be passed to the component as props
    }

}
