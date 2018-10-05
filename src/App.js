import React, { Component } from 'react';
import './App.css';
import DataBase from './db/maintainence_data.json';
import CostByServiceType from './components/CostByServiceType';
import TopRepairsByCost from './components/TopRepairsByCost';
import TopRepairsByTime from './components/TopRepairsByTime';
import FormatedTable from './components/Table'

class App extends Component {
  state = {
    CostByServiceType: {
      data: {},
      show: false
    },
    TopRepairsByCost: {
      data: {},
      show: false
    },
    TopRepairsByTime: {
      data: {},
      show: false
    },
    FormatedTable: {
      show: false
    }
  }

  //This part is going to fill the state for all the options
  displayInfo = (selection, group) => {
    const newState =  {...this.state[selection]};
    newState.show=!newState.show;
    newState.data=group;
    this.setState ({[selection]: newState});
  }

  costByServiceMap = () => {
    console.log(DataBase)
    let group = {};
 
    for (let key in DataBase) {
      if (group[DataBase[key].sr_type] === undefined) {
        group[DataBase[key].sr_type] = DataBase[key].extended_cost_$ + DataBase[key].labour_cost_$;
      }
      else {
        group[DataBase[key].sr_type] += DataBase[key].extended_cost_$ + DataBase[key].labour_cost_$;
      }
    }
    this.displayInfo("CostByServiceType", group);
  }

  topRepairsByCost = () => {
    let group = {};

    for (let key in DataBase) {
      if (group[DataBase[key].service_req_description] === undefined) {
        group[DataBase[key].service_req_description] = DataBase[key].extended_cost_$ + DataBase[key].labour_cost_$;
      }
      else {
        group[DataBase[key].service_req_description] += DataBase[key].extended_cost_$ + DataBase[key].labour_cost_$;
      }
    }
    let props = Object.keys(group).map(function(key) {
      return { key: key, value: this[key] };
    }, group);
    props.sort(function(p1, p2) { return p2.value - p1.value; });
    let six = props.slice(0, 6);
    let newGroup = six.slice(0, 6).reduce(function(obj, prop) {
      obj[prop.key] = prop.value;
      return obj;
    }, {});
    
    this.displayInfo("TopRepairsByCost", newGroup);
  }

  topRepairsByTime = () => {
    let group = {};

    for (let key in DataBase) {
      if (group[DataBase[key].service_req_description] === undefined) {
        group[DataBase[key].service_req_description] = DataBase[key].duration_mins;
      }
      else {
        group[DataBase[key].service_req_description] += DataBase[key].duration_mins;
      }
    }
    let props = Object.keys(group).map(function(key) {
      return { key: key, value: this[key] };
    }, group);
    props.sort(function(p1, p2) { return p2.value - p1.value; });
    let six = props.slice(0, 6);
    let newGroup = six.slice(0, 6).reduce(function(obj, prop) {
      obj[prop.key] = prop.value;
      return obj;
    }, {});
    this.displayInfo("TopRepairsByTime", newGroup);
  }

  formatedTable = () => {
    this.displayInfo("FormatedTable");
  }

  render() {
    console.log(this.state);
    return (
      <div className='App'>
       <img className="logo" src="../pic.jpg"></img>  
        <div className='App-header'>
          <div className="headerContainer">
            <h1>Company Dashboard</h1>
            <span onClick={this.costByServiceMap}>Cost by Service Type</span>
            <span onClick={this.topRepairsByCost}>Top Repairs by Cost</span>
            <span onClick={this.topRepairsByTime}>Top Repairs by Time</span>
            <span onClick={this.formatedTable}>Database</span>
          </div> 
          
        </div>
        <div className='Board'>
          {this.state.FormatedTable.show ? 
            <FormatedTable/> : null}
          {this.state.CostByServiceType.show ? 
            <CostByServiceType
              data = {this.state.CostByServiceType.data}
            /> : null}
          {this.state.TopRepairsByCost.show ? 
            <TopRepairsByCost
              data = {this.state.TopRepairsByCost.data}
            /> : null}
          {this.state.TopRepairsByTime.show ? 
            <TopRepairsByTime
              data = {this.state.TopRepairsByTime.data}
            /> : null}
        </div>
      </div>
    )
  }
}
export default App;