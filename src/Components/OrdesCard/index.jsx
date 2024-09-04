import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {


    const {totalPrice , totalProducts} = props


    return (
        <div className="flex  items-center mb-3 border-black flex-col 
        justify-items-center bg-black text-white rounded-lg w-56 h-36 justify-center">
                <span className="font-medium">Dia : 01.02.23 </span>
                <span className="font-medium">Productos : { totalProducts } </span>
                <span className="font-semibold">${ totalPrice } </span>
                <ChevronRightIcon className="size-6 text-black-500 cursor-pointer"/>
        </div>
    )
}
export default OrdersCard;
