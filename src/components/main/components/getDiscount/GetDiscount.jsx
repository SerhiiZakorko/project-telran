import { useState } from "react"
import classes from "./GetDiscount.module.css"
import handWithPlant from "../../images/hand-with-plant.svg"
import {createDiscountReceiver} from "./createDiscountReceiver"
import { postDiscount } from "../../../../store/slices/getDiscountSlice"

function GetDiscount(){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
    function getDiscount(){
        createDiscountReceiver(name, phone, email)
        postDiscount()        // не вызывается функция при запуске ф-и getDiscount
        setName('')
        setEmail('')
        setPhone('')
    }
    

    return(
        <section className={classes.getDiscount}>
            <h4>5% off on the first order</h4>
            <div className={classes.sectionWrrapper}>
                <img src={handWithPlant}/>
                <div className={classes.formWrapper}>
                    <input value = {name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    <input value = {phone} type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)}/>
                    <input value = {email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={() => getDiscount()}>Get a discount</button>
                </div>
            </div>
        </section>
    )
}
export default GetDiscount