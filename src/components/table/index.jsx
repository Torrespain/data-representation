import React from 'react'

const Table = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th className="clickable" onClick={() => props.sortBy('service_req_number')}>Service Req Number</th>
                    <th className="clickable" onClick={() => props.sortBy('pk')}>PK</th>
                    <th className="clickable" onClick={() => props.sortBy('labour_cost_$')}>Labour Cost</th>
                    <th className="clickable" onClick={() => props.sortBy('extended_cost_$')}>Extended Cost</th>
                    <th className="clickable" onClick={() => props.sortBy('duration_mins')}>Duration Mins</th>
                    <th>Turbine Name</th>
                    <th>Windfarm Name</th>
                    <th>Service Type</th>
                    <th>Service Description</th>
                    <th>Service Date</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </tbody>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.service_req_number}</td>
                            <td>{row.pk}</td>
                            <td>{row.labour_cost_$}</td>
                            <td>{row.extended_cost_$}</td>
                            <td>{row.duration_mins}</td>
                            <td>{row.turbine_name}</td>
                            <td>{row.windfarm_name}</td>
                            <td>{row.sr_type}</td>
                            <td>{row.service_req_description}</td>
                            <td>{row.service_date}</td>
                            <td>{row.start_date}</td>
                            <td>{row.end_date}</td>
                        </tr>
                    ))
                }
            
            </tbody>
        </table>
    )
}

export default Table;