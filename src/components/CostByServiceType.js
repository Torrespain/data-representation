import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class CostByService extends Component {
    state = {
        charData:{
            labels: ['Warranty', 'O&M - Non PM', 'O&M - PM', 'TI/Retrofit', 'Customer Request'],
            datasets: [
                {
                    label: 'Total cost by type of service',
                    data: [this.props.data["Warranty"], this.props.data["O&M - Non PM"], this.props.data["O&M - PM"],this.props.data[
                        "TI/Retrofit"], this.props.data["Customer Request"]],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                    ]
                }
            ]
        }
    }
    // componentWillMount() {
    //     this.fillDataState()
    // }

    // fillDataState = () => {
    //     const charData = {...this.state.charData};
    //     console.log(this.state.charData)
    //     console.log(this.props.data)
    //     console.log(charData);
        
    //     let newDataArr = [];

    //     for (let key in this.props.data) {
    //         newDataArr.push(this.props.data[key])
    //     }
    //     console.log(newDataArr)
    //     charData.datasets.data = newDataArr;
    //     this.setState({charData: charData});
    // }
    
    render() {
        return (
            <div className = "chart"> 
            <Bar
                data={this.state.charData}
                    width={100}
                    height={350}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Total cost by type of service',
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

export default CostByService;
