function checkPassword() {
  const input = document.getElementById('pw-input').value;

  if (input === "password") { //password
    window.location.href = 'Input.html'; 
  } else if (input === "herpassword") { //password
    window.location.href = 'Output.html'; 
  } else {
    alert("wrong password!");
  }
}