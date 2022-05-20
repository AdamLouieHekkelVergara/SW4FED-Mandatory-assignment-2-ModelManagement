import jwt_decode from 'jwt-decode';


export async function loginRequest({ object }) {
    const url = "https://localhost:7181/api/Account/login";
    let response = null;
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(object), // Assumes data is in an object called form
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });

        // save the information in local storage!
        if (response.ok) {
            let token = await response.json();
            console.log(token);
            localStorage.setItem("token", token.jwt);
            // we save the role type as well!
            var decoded = jwt_decode(token.jwt);
            for (var property in decoded) {
                if (decoded[property] === "Model") {
                  console.log("Vi har en model!: " + decoded[property]);
                  localStorage.setItem("role", decoded[property])
                }
                else if (decoded[property] === "Manager") {
                  console.log("Vi har en Manager!: " + decoded[property]);
                  localStorage.setItem("role", decoded[property])
                }
              }    

        } else {
            alert("Server returned: " + response.status);
        }
    } catch (err) {
        alert("Error: " + err);
    }
    return response;

}