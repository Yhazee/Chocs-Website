document.getElementById("Submit").addEventListener("click", ()=>{
    validateData();
})

function validateData(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var qty = document.getElementById("qty").value;
    var checker = document.getElementById("checker").value;

    if(name.length < 4 || name.length > 16){
        alert("Name must be between 4 and 16 characters long");
        return false;
    }
    else if(isNaN(number)){
        alert("Phone number must be a number");
        return false;
    }
    else if(number.length < 11 || number.length > 13){
        alert("Phone number must be between 11 and 13 number elements");
        return false;
    }
    else if(isNaN(qty)){
        alert("Qty must be a number");
        return false;
    }
    else if(qty < 1){
        alert("Quantity cannot be less than 1");
        return false;
    }
    else if(qty > 100){
        alert("Qty cannot be greater than 100");
        return false;
    }
    else if(checker.checked == false){
        alert("Agree to the term and conditionals!");
        return false;
    }
    return true;
}

if(validateData == true){
    alert("Your purchase was done successfully")
}