import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA_V from "../data/MOCK_DATA_V.json"
import COLUMNS from "./VCOLUMNS.jsx"
import '../css/empTable.css'

export default function VacationsTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA_V, [])


    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    

    return (
        <div>
            <h1>Vacations demande</h1>
            <div className="table-container">
            
            <table {...getTableProps}>
                <thead >
                    {
                        headerGroups.map((headerGroup) => (
                            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th key={column.id} {...column.getHeaderProps()}>{column.render('header')}</th>
                                ))} 
                            </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr key={rows.id }{...row.getRowProps()}>
                                    {
                                        row.cells.map((cell,i) => {
                                            if (i === row.cells.length - 1) {
                                                return <td key={i} {...cell.getCellProps()}>
                                                    <button style={{
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        marginRight: '5px'
                                                    }}>Accept</button>
                                                    <button style={{
                                                        backgroundColor: 'red',
                                                        color: 'white',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                    }}>Reject</button>
                                                </td>
                                            }
                                            return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                                    
                            )
                        })}
                </tbody>
            </table>
        </div>
        </div>
    )
}