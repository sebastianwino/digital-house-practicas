import React from 'react'
import TableRow from './TableRow'

const data = [
    {
        name: "Tiger Nixon",
        desccription: "System Architect",
        price: "$320,800",
        categories: {
            first: "Category 01",
            second: "Category 02",
            third: "Category 03"
        },
        colors: {
            first: "Red",
            second: "Blue",
            third: "Green"
        },
        stock: 245
    },
    {
        name: "Jane Doe",
        desccription: "Fullstack developer",
        price: "$320,800",
        categories: {
            first: "Category 01",
            second: "Category 02",
            third: "Category 03"
        },
        colors: {
            first: "Red",
            second: "Blue",
            third: "Green"
        },
        stock: 245
    },
    {
        name: "Cosme Fulanito",
        desccription: "Inspector de seguridad",
        price: "$-10.000",
        categories: {
            first: "Category 01",
            second: "Category 02",
            third: "Category 03"
        },
        colors: {
            first: "Red",
            second: "Blue",
            third: "Green"
        },
        stock: 245
    }
]

function DataTable(props) {
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Categories</th>
                                <th>Colors</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Categories</th>
                                <th>Colors</th>
                                <th>Stock</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {data.map((row, i) => <TableRow key={i} data={row}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default DataTable


