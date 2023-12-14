import { useState } from "react";
let productID = 0;
const InputForm = (props)=>{
    const [formData, setFormData] = useState({
        'id':'',
        'title':'',
        'price':'',
        'amount':''
    })
    const handleChange = (event)=>{
        setFormData(
            {
                ...formData,
                [event.target.name]:event.target.value
            }
        )
    }
    const submitHandle = (event)=>{
        console.log("id: " + productID)
        formData.id = productID;
        productID += 1
        event.preventDefault();
        props.onSave(formData)
        console.log(setFormData);
    }
    return(
        <form className="form" onSubmit={submitHandle}>
            <div className="form-group">
                <input type="text" name="title" placeholder="Prekes pavadinimas" className="m-1 form-control" onChange={handleChange} value={formData.title}/>
            </div>
            <div className="form-group">
                <input type="text" name="price" placeholder="Prekes kaina" className="m-1 form-control" onChange={handleChange} value={formData.price}/>
            </div>
            <div className="form-group">
                <input type="text" name="amount" placeholder="Prekes kiekis" className="m-1 form-control" onChange={handleChange} value={formData.amount}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>
        </form>
    )
}

export default InputForm;