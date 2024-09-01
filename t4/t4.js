function fetchData (url,options,user){
return fetch(url,options,user);
}


async function post() {
    

try {
    const user = {
       name: 'John Doe',
       job: 'Developer'
    };
    const url = 'https://reqres.in/api/users';
    const options = {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
       body: JSON.stringify(user)
    }
    const userData = await fetchData(url, options,user);
    const result = await userData.json();
    console.log(userData);
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

post();