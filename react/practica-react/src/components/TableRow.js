import React from 'react'
import PropTypes from 'prop-types'

function TableRow(props) {
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.desccription}</td>
            <td>{props.data.price}</td>
            <td>
                <ul>
                    <li>{props.data.categories.first}</li>
                    <li>{props.data.categories.second}</li>
                    <li>{props.data.categories.third}</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><span className="text-danger">{props.data.colors.first}</span></li>
                    <li><span className="text-primary">{props.data.colors.second}</span></li>
                    <li><span className="text-success">{props.data.colors.third}</span></li>
                </ul>
            </td>
            <td>{props.data.stock}</td>
        </tr>
    )
}



export default TableRow
