import { useEffect } from "react";
import { createContext , useState } from "react"; 
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [count  , setCount] = useState(0)
    
    //Porduct Detail - Open/Close
    const [isProductDetailOpen  , setIsProcuctDetailOpen] = useState(false)
    const openProductDetail = () => setIsProcuctDetailOpen (true)
    const closeProductDetail = () => setIsProcuctDetailOpen (false)


        //Porduct Detail - Open/Close
        const [isCheckoutSideMenuOpen  , setIsCheckoutSideMenuOpen] = useState(false)
        const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (true)
        const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (false)
    
    //Product Detail - Show product

    const [ productToShow , setProductShow] = useState({})
    //Product Cart - Add products to cart
    const [cartProducts , setCartProducts] = useState([])

    //shopping cart - order
    const [order , setOrder] = useState([])

    //get products
    const [items , setItems] = useState(null)
    
    const [filterdItems , setFilterdItems] = useState(null)


    //set products 
    const [searchByTitle , setSearchByTitle] = useState(null)

    const filterdItemsByTitle  = (items, searchByTitle) => {
        return items?.filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    //Category
    const [searchByCategory , setSearchByCategory] = useState(null)

    const filterdItemsCategory  = (items, searchByCategory) => {
        return items?.filter( item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => data)
        .then( data => setItems(data) )
    }, [])

    useEffect (()=>{
        if(searchByTitle)setFilterdItems(filterdItemsByTitle(items , searchByTitle))
    },[items, searchByTitle])


    const filterBy = (searchType, items , searchByTitle , searchByCategory) =>{
        if(searchType === "BY_TITLE"){
            return filterdItemsByTitle(items , searchByTitle)
        }

        if(searchType === "BY_CATEGORY"){
            return filterdItemsCategory(items , searchByCategory)
        }

        if(searchType === "BY_TITLE_AND_CATEGORY"){
            return filterdItemsCategory(items , searchByCategory).filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if(!searchType){
            return items
        }
    }

    useEffect (()=>{
        if(searchByTitle && searchByCategory) setFilterdItems (filterBy('BY_TITLE_AND_CATEGORY' ,items , searchByTitle , searchByCategory))
        if(searchByTitle && !searchByCategory )setFilterdItems (filterBy('BY_TITLE' ,items , searchByTitle , searchByCategory))
        if(!searchByTitle && searchByCategory) setFilterdItems (filterBy('BY_CATEGORY' ,items , searchByTitle , searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilterdItems (filterBy(null ,items , searchByTitle , searchByCategory))
    },[items , searchByTitle , searchByCategory])
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filterdItems,
            searchByCategory,
            setSearchByCategory,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}
