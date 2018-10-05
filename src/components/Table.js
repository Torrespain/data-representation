import React, { Component } from 'react';
import Table from './table/index.jsx'
import data from '../db/maintainence_data.json'

class FormatedTable extends Component {
    state = {
        data: data,
        direction: 'up',
    }

    sortBy = (key) => {
        console.log(typeof(parseInt(key)))
        if (this.state.direction==='up') {
            this.setState({
                data: data.sort(
                    (a, b) => (
                       (b[key]) - (a[key])
                    )
                )
            })
            this.setState({direction: "down"});
        }
        else {
            this.setState({
                data: data.sort(
                    (a, b) => (
                        (a[key]) - (b[key])
                    )
                )
            })
            this.setState({direction: "up"})
        }
    }
    render() {
        return (
            <div className='page-container'>
                <Table 
                    data={this.state.data}
                    sortBy={this.sortBy}
                />
            </div>
        )
    }
        
}

export default FormatedTable;
