import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import { getRequest } from "../../api/getRequest";
import { deleteRequest } from "../../api/deleteRequest";
import { useHistory } from "react-router-dom";

function SeeJobs() {
    const [jobsList, setJobsList] = useState([]);
    const getJobs_URL = "api/Jobs";
    const history = useHistory();

    useEffect(() => {
        console.log("Go for get request!");
        getRequest({ apiEndPoint: getJobs_URL })
            .then(value => {
                console.log(value);
                setJobsList(value);
            });
    }, []);

    const handleDetails = (id) => {
        console.log("Details Clicked! " + id);
        
        history.push("/ExpensesPage", { jobId: id });
    }
    const handleDelete = (id) => {
        console.log("Delete Clicked! With id: "+id);
        var url = "api/jobs/"+id;

        deleteRequest({apiEndPoint: url}).then(status => {
                console.log("status for delete request: "+ status);
                if(status == 200){ // successfully deleted
                    const newJobList = jobsList.filter((job)=> job.jobId !== id);
                    setJobsList(newJobList);
                }
                    
        });;
          
    }

    return (
        <div>
            <h3>Synlige Jobs</h3>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Start date</th>
                        <th>Location</th>
                        <th>Days</th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {jobsList.map(item => {
                        return <tr key={item.jobId}>
                            <td>{item.jobId}</td>
                            <td>{item.customer}</td>
                            <td>{item.startDate}</td>
                            <td>{item.location}</td>
                            <td>{item.days}</td>
                            <td>
                                <FaMinusCircle
                                    onClick={() => handleDelete(item.jobId)}
                                    role="button"
                                    tabIndex="0"
                                />
                            </td>
                            <td>
                            <FaPlusCircle
                                    onClick={() => handleDetails(item.jobId)}
                                    role="button"
                                    tabIndex="0"
                                />

                            </td>
                        </tr>;
                    })}
                </tbody>

            </Table>
        </div>
    )
}
export default SeeJobs