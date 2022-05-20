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
        });
        window.location.reload(true); 

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