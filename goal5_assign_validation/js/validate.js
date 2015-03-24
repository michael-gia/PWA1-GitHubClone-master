/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){




    var button = document.getElementById("f_submit");



    myform.onSubmit = function(e){

        var username = document.querySelector("#f_username");
        var email = document.querySelector("#f_email");
        var phone = document.querySelector("#f_phone");
        var ssn = document.querySelector("#f_ssn");
        var password = document.querySelector("#f_password");

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(username);  //id = is the form input field ID
        validateField(email);
        validateField(phone);
        validateField(ssn);
        validateField(password);


        e.preventDefault();
        return false;
    };

    var validateField = function(inputName){

        if (inputName.name === 'username'){
        var pattern = /^[a-zA-Z0-9.\-_$@*!]{3,15}$/;

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.
        }

        else if (inputName.name === 'email'){
        var pattern = /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/
        }

        else if (inputName.name === 'phone'){
        var pattern = /^[0-9]\d{3}-\d{3}-\d{4}$/;
        }

        else if (inputName.name === 'ssn'){
        var pattern = /^[0-9]\d{3}-\d{2}-\d{4}$/;
        }

        else if (inputName.name === 'password'){
        var pattern = /^[a-zA-Z0-9.\-_$@*!]{4,15}$/;
        }



        var pass = /^[a-zA-Z0-9.\-_$@*!]{4,15}$/;
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    };

    button.onclick= myform.onSubmit;



})();  // end wrapper



