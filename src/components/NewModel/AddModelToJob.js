import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useState, useEffect} from "react";
import { Table } from 'react-bootstrap';
import { getRequest } from "../../api/getRequest";
import { postRequest } from "../../api/postRequest";

function AddModelToJob({jobId}) {
    const [modelList, setModelList] = useState([]);
    const getModels_URL = "api/models";
    const postModelToJob_URL = "api/jobs/"+jobId+"/model/";

    useEffect(() => {
        getRequest({ apiEndPoint: getModels_URL })
            .then(value => {
                console.log(value);
                setModelList(value);
            });
    }, []);


    const handleAdd = (id) => {
        console.log("Add Clicked! " + id);
        console.log(postModelToJob_URL+id);
         postRequest({
          apiEndPoint: postModelToJob_URL+id
        }).then(status => {
            console.log("status for post request: "+ status);
            if(status === 201){ // status code for success = 201
                console.log("blah");
                alert("successfully added model to Job. \nGo to Info to see more.")
            }
            else if(status = 500) {
                alert("Model is already in database!")
            }
            else{
                alert('Something bad happened! Status code:' + status)
            }
        
        });
    }


  return (
    <div>
    <h3>Alle modeller</h3>
    <Table striped hover>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>LastName</th>
                <th>Tilføj model til job</th>
            </tr>
        </thead>
        <tbody>
            {modelList.map((model,index) => {
                return <tr key={index}>
                    <td>{model.efModelId}</td>
                    <td>{model.firstName}</td>
                    <td>{model.lastName}</td>
                    <td>
                    <FaPlusCircle
                            onClick={() => handleAdd(model.efModelId)}
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

export default AddModelToJob