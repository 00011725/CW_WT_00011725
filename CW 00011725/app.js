var form = document.getElementById('form')
var username = document.getElementById('text');
var email = document.getElementById('email')
var button = document.getElementById('button');

function validate() {
    if (form.value === "") {
    return false;
    }
    else {
       true
    }
}
button.addEventListener("click", validate(), false);
  