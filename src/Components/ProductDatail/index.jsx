import { useContext } from 'react'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid' 
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
const {isProductDetailOpen ,
    closeProductDetail ,
    productToShow} = 
    useContext(ShoppingCartContext)

    return (
        <aside className={`${ isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    Detail
                </h2>
                <div > <XCircleIcon onClick={closeProductDetail} className="size-6 text-black-500 cursor-pointer"/>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-ls' src={productToShow.images?.[0]} alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-ms'>{productToShow.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetail