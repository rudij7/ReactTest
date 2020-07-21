import React from 'react';
import Table from './table.jsx';
import data from './json/itemstest.json'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tableData: data
    }
  }
  
  
  render() {
      
      
      return (
        <div className="App">
          <Table data={this.state.tableData}/>
        </div>
        
      );
  }
  
 
}
