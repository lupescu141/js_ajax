async function post(request) {
    try {
      const response = await fetch(request);
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const request1 = new Request("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "Lupe" , job: "engineer"}),
  });
  
  post(request1);
 
 