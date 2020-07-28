import React, { Component, useState, useEffect } from 'react'

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

    const [buttonText, setButtonText] = useState("Edit");

    const [thing, setThing] = useState(props.thing.value);
    const [disabled, setDisabled] = useState(true);
    function editText() {
        setDisabled(!disabled);
        if(disabled)
        setButtonText("Save");
        else {
            props.handleChange(thing, props.index, props.thing.id)
          
            setButtonText("Edit")

        }
        
        
    }
    useEffect(() => {setThing(props.thing.value)}, [props.thing])
    console.log(props.thing);
    const rows =  (
            <tr>
                <td>{props.thing.id}</td>
        <td><input type="text" value={thing} onChange={e =>setThing(e.target.value)} disabled={disabled}></input></td>
                <td>
                    &nbsp;<button onClick={editText}>{buttonText}</button>&nbsp;&nbsp;
                    <button onClick={() => props.removeData(props.index)}>Delete</button>
                </td>
            </tr>
        )
    

    return <tbody>{rows}</tbody>
};

const Table = (props) => {
    const { tableData, removeData, handleChange } = props
    return (
      
        <table>
            {console.log(tableData)}
            <TableHeader />
    {props.tableData.map((row, index) => <TableBody index={index} key={index} thing={row} removeData={removeData} handleChange={handleChange} /> )}
        
            
        </table>
    )
}

export default Table;