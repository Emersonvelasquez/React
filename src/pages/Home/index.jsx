
import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout/inde";
import ProductDetail from "../../Components/ProductDatail";
import { ShoppingCartContext } from "../../Context";
import './style.css'
const Home = () => {
    const {   setSearchByTitle  ,filterdItems} = useContext(ShoppingCartContext)

const renderView = () => {
        if(filterdItems?.length > 0){
            return (
                filterdItems?.map(item => (
                    <Card key={item.id} data={item}/>
                ))
            )
        }else{
            return(
                <div className=" absolute w-full left-0 text-center flex justify-center">
                    {/* we don't have anything :) */}
                    No se encontraron coincidiencias :) 
                </div>
            )
        }
}
    return (
        <>
            <Layout>
            <div className="flex items-center justify-center w-80 text-black cursor-pointer">
                    <h1>exclusive Products</h1>
                </div>
                <input className=" input items-center search-input rounded-ls border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(e)=> setSearchByTitle(e.target.value) } 
                type="text" placeholder="search a product" />
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {renderView()}
                </div>
                <ProductDetail />
            </Layout>
        </>
    )
} 

export default Home;