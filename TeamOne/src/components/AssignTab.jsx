import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA_A from "../data/MOCK_DATA_A.json"

import '../css/empTable.css'

export default function InoutTab() {
    const ICOLUMNS = [
        {
            header: "task",
            accessor: "task"
        },
        {
            header: "description",
            accessor: "description"
        },
        {
            header: "assigned to",
            accessor: "assigned to"
        },
        {
            header: "due date",
            accessor: "due date"
        },
        {
            header: "status",
            accessor: "status"
        },
        {
            header: "action",
            accessor: "action"
        },
    ]

   
        
    const columns = useMemo(() => ICOLUMNS, [])
    const data = useMemo(() => MOCK_DATA_A, [])


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
    
        <h1>Check-in \ Check-out List</h1>
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