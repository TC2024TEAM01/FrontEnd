import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA_I from "../data/MOCK_DATA_I.json"

import '../css/empTable.css'

export default function InoutTab() {
    const ICOLUMNS = [
        {
            header: "Id",
            accessor: "id"
        },
        {
            header: "first name",
            accessor: "first_name"
        },
        {
            header: "last name",
            accessor: "last_name"
        },
        {
            header: "check-in",
            accessor: "check-in"
        },
        {
            header: "check-out",
            accessor: "check-out"
        },
        {
            header: "status",
            accessor: "status"
        },
    ]

   
        
    const columns = useMemo(() => ICOLUMNS, [])
    const data = useMemo(() => MOCK_DATA_I, [])


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
                                            console.log()
                                            if(i === row.cells.length - 1){
                                                if (row.cells[3].value[1] == ':') {
                                                    if (row.cells[3].value[0] > 8 ) {
                                                        return <td key={i} {...cell.getCellProps()} style={{backgroundColor: 'red'}}>late</td>
                                                    }
                                                    else{
                                                        return <td key={i} {...cell.getCellProps()} style={{backgroundColor: 'blue'}}>on time</td>
                                                    }
                                                }
                                                else{
                                                    return <td key={i} {...cell.getCellProps()} style={{backgroundColor: 'red'}}>late</td>
                                                }
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
     </>
    )
            
    
}