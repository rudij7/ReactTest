import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Value</th>
            </tr>
        </thead>
    )
};

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.value}</td>
                <td>
                    <button onClick={() => props.removeData(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
};

const Table = (props) => {
    const { tableData, removeData } = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={tableData} removeData={removeData} />
        </table>
    )
}

export default Table;