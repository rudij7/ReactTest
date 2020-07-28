import React, { Component } from 'react';
import Table from './Table';
import tableData from './tableData7Records.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData
            
        };

    }

    handleChange = (value, index, id) => {    
        const { tableData } = this.state;
        const newTableData = [
            ...tableData.slice(0, index),{id:id, value:value},
            ...tableData.slice(index+1)
          ];
        this.setState({tableData: newTableData});  
    }


    removeData = (index) => {
        const { tableData } = this.state;
        const newTableData = [
            ...tableData.slice(0, index),
            ...tableData.slice(index+1)
          ];
        this.setState({tableData: newTableData});
    };

    render() {
        const { tableData } = this.state;

        return (
            <div className="container">
                <Table tableData={tableData} removeData={this.removeData} handleChange={this.handleChange} />
            </div>
        )
    };
}

export default App;