$(document).ready(function() {

   $('#login-form').submit(function(event) {
     const user = $('#username').val();
     const password = $('#password').val();
 
     if (!validateEmail(user)) {
       alert('Please enter a valid email address.');
       event.preventDefault();
       return;
     }
 
     if (!validatePassword(password)) {
       alert('Password must contain only letters, numbers, and @ symbol.');
       event.preventDefault();
       return;
     }
   });
 
   function validateEmail(email) {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
   }
 
   function validatePassword(password) {
     const re = /^[a-zA-Z0-9@]+$/;
     return re.test(password);
   }
   $('p.message a').click(function() {
     alert('Forgot password not implemented yet.');
   });
 });
 