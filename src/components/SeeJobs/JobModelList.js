import React from 'react';
import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { getRequest } from "../../api/getRequest";
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';


// shows a list of models assigned to a specific job!
function JobModelList({ jobId }) {
    const [modelList, setModelList] = useState([]);
    const getModels_URL = "api/jobs/" + jobId;

    useEffect(() => {
        getRequest({ apiEndPoint: getModels_URL })
            .then(value => {
                console.log(value);
                //console.log(value.jobModels);
                if (value.models !== null) {
                    setModelList(value.models);
                }
            });
    }, []);


    const handleDelete = (id) => {
        console.log("Delete Clicked! With id: " + id);
        var url = "api/jobs/" + id;

/*         deleteRequest({ apiEndPoint: url }).then(status => {
            console.log("status for delete request: " + status);
            if (status == 200) { // successfully deleted
                const newJobList = jobsList.filter((job) => job.jobId !== id);
                setJobsList(newJobList);
            }
        });; */

    }



    return (
        <div>
            <h3>Modeller til tilhørende job!</h3>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>LastName</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {modelList.map((model, index) => {
                        return <tr key={index}>
                            <td>{model.firstName}</td>
                            <td>{model.lastName}</td>
                            <td>
                                <FaMinusCircle
                                    onClick={() => handleDelete(model.jobId)}
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

export default JobModelList
