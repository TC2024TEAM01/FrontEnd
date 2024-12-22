import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../data/MOCK_DATA.json"
import COLUMNS from "./COLUMNS.jsx"
import '../css/empTable.css'

export default function EmpTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])


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
     <>
        <h1>Employee Table</h1>
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
                                            return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                                    
                            )
                        })}
                </tbody>
            </table>
        </div>
     </>
    )
}