import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
const Card = ({ data }) => {
    const { count,
        setCount,
        openProductDetail,
        setProductShow,
        setCartProducts,
        cartProducts,
        closeProductDetail,
        openCheckoutSideMenu, }
        = useContext(ShoppingCartContext)

    const showProductDetail = (items) => {
        openProductDetail()
        setProductShow(items)
    }

    const addProductsToCart = (e, productData) => {
        setCount(count + 1)
        e.stopPropagation()
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu()
        closeProductDetail()
    }
    const renderIcon = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <div className=" absolute top-0 right-0 flex justify-center items-center  bg-white w-6 h-6 rounded-full m-2" >
                    <CheckIcon className="size-10 text-black-600" />
                </div>
            )
        } else {
            return (
                <div className=" absolute top-0 right-0 flex justify-center items-center  bg-white w-6 h-6 rounded-full m-2"
                    onClick={(e) => addProductsToCart(e, data)} >
                    <PlusCircleIcon className="size-10 text-black-600" />
                </div>
            )
        }

    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProductDetail(data)}> 
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt="Headphones" />
                {renderIcon(data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-ls font-semibold'>${data.price}</span>
            </p>
        </div>
    )
}
export default Card;
