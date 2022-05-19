export async function deleteRequest({ apiEndPoint}) {
    console.log("delete request!");
    console.log("end point is: " + apiEndPoint);

    console.log("\n");

    
    var url = "https://localhost:7181/" + apiEndPoint;
    var response = await fetch(url, {
        method: 'DELETE', 
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok){    alert('Something bad happened: ' + response)}
    
    return response.status;
}