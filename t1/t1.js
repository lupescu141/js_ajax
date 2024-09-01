function synchronousFunction() {
    let number = 1;
    for(let i = 1; i < 100000; i++){
      number += i;
      console.log('synchronousFunction running');
    }
    console.log('regular function complete', number);
  }

  async function asynchronousFunction() {                 // asynchronous function is defined by the async keyword
      console.log('asynchronous download begins');
      try {                                               // error handling: try/catch/finally
          const response = await fetch('https://reqres.in/api/users/1');    // starting data download, fetch returns a promise which contains an object of type 'response'
          const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
          console.log(jsonData);    // log the result to the console
      } catch (error) {
          console.log(error.message);
      } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
          console.log('asynchronous load complete');
      }
  }

  synchronousFunction();
  asynchronousFunction();