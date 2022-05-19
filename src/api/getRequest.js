
export async function getRequest({ apiEndPoint }) {
    console.log("get request!");
    console.log("end point is: " + apiEndPoint);
    console.log("\n");


    var url = "https://localhost:7181/" + apiEndPoint;
    let response = await fetch(url, {
        method: 'GET', // Or DELETE
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    });
    if(!response.ok){    alert('Something bad happened: ' + response)}
    let body = await response.json();
    return body;
}