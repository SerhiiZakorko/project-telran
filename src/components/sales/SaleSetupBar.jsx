import classes from "../products/components/SetupBar.module.css"
import filterByPrice from "../../utils/filtration/filterByPrice"
let filtredProducts
function SaleSetupBar({arrayOfProducts}){
    function changeHandlerFrom(e){
        filtredProducts = (filterByPrice(arrayOfProducts, e.target.value, Infinity))
        console.log("filtred products from ", filtredProducts)
    }
    function changeHandlerTo(e){
        filtredProducts = (filterByPrice(filtredProducts, 0, e.target.value))
        console.log("filtred products to ", filtredProducts)
    }
    
    return(
        <div className={classes.setupBar}>
                <div className={classes.priceSetup}>
                    <h5>Price</h5>
                    <input placeholder="from" onBlur={(e) => changeHandlerFrom(e)}/>
                    <input placeholder="to" onBlur={(e) => changeHandlerTo(e)} />
                </div>
                <div className={classes.sortSetup}>
                    <h5>Sorted</h5>
                    <select>
                        <option value="default">by default</option>
                        <option value="priceUp">by price up</option>
                        <option value="priceDown">by price down</option>
                        <option value="AZ">A-Z</option>
                        <option value="new">new</option>
                        <option value="old">old</option>
                    </select>
                </div>
            </div>
    )
}
export { SaleSetupBar, filtredProducts}