import React, { Component } from 'react';
import Table from './Table';
import tableData from './tableData.json';

const text = "React";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Table tableData={tableData} />
            </div>
        )
    }
}

export default App;