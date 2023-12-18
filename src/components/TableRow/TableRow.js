

const TableRow = (props)=> {
    return(
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.price}</td>
                <td>{props.amount}</td>
            </tr>
        </tbody>
    );
}

export default TableRow;