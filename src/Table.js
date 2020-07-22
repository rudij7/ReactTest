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
                <td><input type="text" value={row.value} disabled={true}></input></td>
                <td>
                    &nbsp;<button type="button" onClick={Table.editText}>Edit</button>&nbsp;&nbsp;
                    <button type="button">Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
};

class Table extends Component {

    constructor(props) { 
        super(props);
        this.state = {disabled: true}   
        
    }
    

    editText() {
        this.setState({disabled: !this.state.disabled})
    }
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