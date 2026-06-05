const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWE0MjcwQHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM3NzExLCJpYXQiOjE3ODA2MzY4MTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI2OTAyM2RiZS04NWEwLTRiNjYtOTk2Ny0yMGY2MTRjZDU2MTAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ0YW51amEganllc3RhIiwic3ViIjoiMTcxYzc5ZTctMjUwNi00OTNhLTljMmQtZTI2ZTc5MjZiM2IxIn0sImVtYWlsIjoiMjNicTFhNDI3MEB2dml0Lm5ldCIsIm5hbWUiOiJ0YW51amEganllc3RhIiwicm9sbE5vIjoiIDIzYnExYTQyNzAiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiIxNzFjNzllNy0yNTA2LTQ5M2EtOWMyZC1lMjZlNzkyNmIzYjEiLCJjbGllbnRTZWNyZXQiOiJza3htUVF6VmhuaHN5S0NrIn0.HbDgUM1JNZyf4W5eFSBQG8r5E_xw3qfdR-jGlB3Hf3w";
async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message
        })
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = Log;