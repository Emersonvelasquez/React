import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
const Navbar = () =>{
    const activeStyle = 'underline underline-offset-4' 

    const { count ,setSearchByCategory} = useContext(ShoppingCartContext)

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm  bg-white font-light ">
            <ul className="flex itms-center gap-3 ">
                <li className="font-semibold text-ls">
                    <NavLink to='/' >
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setSearchByCategory('')} to='/' className={({ isActive })=> isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink  onClick={() => setSearchByCategory('clothes')}to='/clothes' className={({ isActive })=> isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink  onClick={() => setSearchByCategory('electronics')}to='/electronics' className={({ isActive })=> isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink  onClick={() => setSearchByCategory('furniture')}to='/furnitures' className={({ isActive })=> isActive ? activeStyle : undefined}>
                    Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink  onClick={() => setSearchByCategory ('shoes')}to='/shoes' className={({ isActive })=> isActive ? activeStyle : undefined}>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink  onClick={() => setSearchByCategory('miscellaneous')}to='/miscellaneous'className={({ isActive })=> isActive ? activeStyle : undefined}>
                    Miscellaneous
                    </NavLink>
                </li>
            </ul>
            <ul className="flex itms-center  gap-3">
            <li className="text-black/60">
                    @gmail.com
                </li>
                <li>
                    <NavLink to='/my-order' className={({ isActive })=> isActive ? activeStyle : undefined}>
                    MyOrder
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={({ isActive })=> isActive ? activeStyle : undefined}>
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sig-nin' className={({ isActive })=> isActive ? activeStyle : undefined}>
                        SignIn
                    </NavLink>
                </li>
                <li className="flex gap-2 ">
                    <ShoppingCartIcon className="size-5 text-black-500"/>
                    {count}
                </li>
            </ul>
        </nav>
    )
}
export default Navbar