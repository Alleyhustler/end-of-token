function checkPswd() {
        var confirmPassword = "voxel";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="CCXXX.html";
        }
        else{
            alert("Incorrect Password");
        }
    }