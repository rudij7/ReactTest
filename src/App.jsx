import React from 'react';
import Table from './Table.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tableData:[
        {'id': '1', 'value': sfsfdsdf},
        {'id': '2', 'value': fsdfsfs},
        {'id': '3', 'value': sffevv},
        {'id': '4', 'value': fffdvfer},
        {'id': '5', 'value': refregrr},
        {'id': '6', 'value': wefrgr},
        {'id': '7', 'value': gefffsds}
      ],
    }
  }
  
  
  render() {
      
      
      return (
        <div className="App">
          Hello, React
          <br/> Table data
          <Table data={this.state.tableData}/>
        </div>
        
      );
  }
  
 
}
