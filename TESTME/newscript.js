// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Make an AJAX request to the server-side signup endpoint
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/signup', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('Signup successful.');
        } else {
          console.error('Signup failed.');
        }
      }
    };
  
    var payload = JSON.stringify({
      username: username,
      password: password
    });
  
    xhr.send(payload);
  });
  
  // Handle login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Make an AJAX request to the server-side login endpoint
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('Login successful.');
        } else {
          console.error('Login failed.');
        }
      }
    };
  
    var payload = JSON.stringify({
      username: username,
      password: password
    });
  
    xhr.send(payload);
  });
  