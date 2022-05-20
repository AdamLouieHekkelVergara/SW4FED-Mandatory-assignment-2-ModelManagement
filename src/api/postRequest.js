
export async function postRequest({ apiEndPoint, object }) {
    console.log("post request!");
    console.log("end point is: " + apiEndPoint);
    console.log("\n");
    var postBody = null;
    if(object !== undefined){
        console.log("object is: ");
        console.log(object)
        postBody = JSON.stringify(object)
    }
    
    var url = "https://localhost:7181/" + apiEndPoint;
    var response = await fetch(url, {
        method: 'POST', // Or PUT
        body: postBody, // assumes your data is in a
        // form object on your instance.
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    });
    
    return response.status;

}