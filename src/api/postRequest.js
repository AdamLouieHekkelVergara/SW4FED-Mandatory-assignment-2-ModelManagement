import axios from "./axios";


export async function postRequest({ apiEndPoint, object }) {
    console.log("post request!");
    console.log("end point is: " + apiEndPoint);
    console.log("object is: " + object);
    console.log("\n");

    
    var url = "https://localhost:7181/" + apiEndPoint;
    await fetch(url, {
        method: 'POST', // Or PUT
        body: JSON.stringify(object
        ), // assumes your data is in a
        // form object on your instance.
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    }).then(responseJson => {
        console.log(responseJson.status);
    })
        .catch(error => alert('Something bad happened: ' + error))
}