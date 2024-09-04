import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './style.css'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'
const CheacKoutSideMenu = () => {

    const { isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts,
        setOrder,
        order,
        count,
        setCount,
        setSearchByTitle,

    } =
        useContext(ShoppingCartContext)
        const handleDelete = (id) =>{
            const filtereProductos = cartProducts.filter(product => product.id != id)
            setCount(count -1)
            setCartProducts(filtereProductos)
        }
        const handleCheackout = () =>{
            const orderToAdd = {
                date : '01.02.23',
                products: cartProducts,
                totalproducts: cartProducts.length,
                totalPrice: totalPrice(cartProducts),
            }
            setOrder([...order , orderToAdd])
            setCartProducts([])
            closeCheckoutSideMenu()
            setSearchByTitle(null)
            setCount(0)
        }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} cheakout-side-menu product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>MY Order</h2>
                <div > <XCircleIcon onClick={closeCheckoutSideMenu} className="size-6 text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                cartProducts.map((product)=>(
                    <OrderCard 
                    key={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    id={product.id}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
            <p className='flex justify-between items-center mb-2'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
            <button className='bg-black py-3 text-white w-full rounded-lg ' onClick={()=> handleCheackout()}>Cheackout</button>
            </Link>
            </div>
        </aside>
    )
}
export default CheacKoutSideMenu
