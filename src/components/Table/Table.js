import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import TableRow from "../TableRow/TableRow";

const Table = ()=>{
    const [rows, setRows] = useState([

    ]);
    const handleFormData = (data)=>{
        setRows((prevData)=>{
            return[data, ...prevData]
        })
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pavadinimas</th>
                    <th>Kaina</th>
                    <th>Kiekis</th>
                </tr>
            </thead>
            {rows.map((row)=>
                <TableRow key={row.id} title={row.title} price={row.price} amount={row.amount}/>
            )}
        </table>
    )
}

export default Table