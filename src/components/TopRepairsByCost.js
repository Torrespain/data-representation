import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class TopRepairsByCost extends Component {
    state = {
        charData:{
            labels: [Object.keys(this.props.data)[0], Object.keys(this.props.data)[1], Object.keys(this.props.data)[2], Object.keys(this.props.data)[3], Object.keys(this.props.data)[4], Object.keys(this.props.data)[5]],
            datasets: [
                {
                    label: 'Top Repairs by Cost',
                    data: [this.props.data[Object.keys(this.props.data)[0]], this.props.data[Object.keys(this.props.data)[1]],this.props.data[Object.keys(this.props.data)[2]], this.props.data[Object.keys(this.props.data)[3]], this.props.data[Object.keys(this.props.data)[4]], this.props.data[Object.keys(this.props.data)[5]]],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132)',
                    ]
                }
            ]
        }
    }
    
    render() {
        return (
            <div className = "chart"> 
            <Bar
                data={this.state.charData}
                    width={100}
                    height={650}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Top Repairs by Cost',
                            fontSize:25,
                        },
                        legend: {
                            display: false,
                            position: 'right,'
                        }
                    }}
            />
            </div>
        );
      }
}

export default TopRepairsByCost;
