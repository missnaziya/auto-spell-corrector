document.getElementById('loginBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
      document.getElementById('authForms').style.display = 'none';
    }
  } catch (error) {
    console.error('Error:', error);
    alert(`There was an error processing your request: ${error.message}`);
  }
});

document.getElementById('registerBtn').addEventListener('click', async () => {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error('Error:', error);
    alert(`There was an error processing your request: ${error.message}`);
  }
});

document.getElementById('correctBtn').addEventListener('click', async () => {
  const inputText = document.getElementById('inputText').value;

  if (!inputText) {
    alert("Please enter some text to correct.");
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/correct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: inputText })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById('outputText').value = data.correctedText;
  } catch (error) {
    console.error('Error:', error);
    alert(`There was an error processing your request: ${error.message}`);
  }
});
