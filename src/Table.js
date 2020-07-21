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
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
};

class Table extends Component {
    render() {
        const { tableData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={tableData} />
            </table>
        )
    }
}

export default Table;