import { useContext } from "react";
import Layout from "../../Components/Layout/inde";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
// import { totalPrice } from "../../utils";
const MyOrder = () => {

    const {order} = useContext(ShoppingCartContext)

    const currentpath = window.location.pathname
    let index = currentpath.substring(currentpath.lastIndexOf('/') + 1)
    if(index === 'last') index = order?.length-1
    return (
        <>
            <Layout>
            <div className="flex items-center justify-center w-80 text-black relative cursor-pointer">
                    <Link to='/my-orders' className="obsolute letf-0" >
                        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
                    </Link>
                    <h1>My Order</h1>
                </div>
            <div className='px-6 flex flex-col w-80 mb-6'>
            {
                order?.[index]?.products.map((product)=>(
                    <OrderCard 
                    key={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    id={product.id}
                    />
                ))
            }
            </div>
            </Layout>
        </>
    )
}

export default MyOrder;