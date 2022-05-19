
export async function getRequest({ apiEndPoint }) {
    console.log("get request!");
    console.log("end point is: " + apiEndPoint);
    console.log("object is: " + object);
    console.log("\n");


    var url = "https://localhost:7181/" + apiEndPoint;
    var response = await fetch(url, {
        method: 'GET', // Or DELETE
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    }).then(responseJson => {
        this.response = responseJson;
    })
        .catch(error => alert('Something bad happened: ' + error));
        console.log(response);
    return response;
}