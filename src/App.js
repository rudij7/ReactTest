import React, { Component } from 'react';
import Table from './Table';
import tableData from './tableData7Records.json';

class App extends Component {
    state = {
        tableData
    };

    removeData = (index) => {
        const { tableData } = this.state;

        this.setState({
            tableData: tableData.filter((data, i) => {
                return i !== index
            })
        })
    };

    render() {
        const { tableData } = this.state;

        return (
            <div className="container">
                <Table tableData={tableData} removeData={this.removeData} />
            </div>
        )
    };
}

export default App;