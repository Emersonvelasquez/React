import { useContext } from "react";
import Layout from "../../Components/Layout/inde";
import OrdersCard from "../../Components/OrdesCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
const MyOrders = () => {

    const { order } = useContext(ShoppingCartContext)
    return (
        <>
            <Layout>

                <div className="flex items-center justify-center w-80 text-black cursor-pointer">
                    <h1>My Orders</h1>
                </div>
                {
                    order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard 
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalproducts} />
                        </Link>
                    ))
                }
            </Layout>
        </>
    )
}

export default MyOrders;