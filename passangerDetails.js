// const {bookingDetails} = require('./booking.js');

var passangerDetails = new Map();

class passanger{
    setname(name){
        this.name = name;
    }
    getname(){
        return this.name;
    }
    setage(age){
        this.age = age;
    }
    getage(){
        return this.age;
    }
    static gettingPassangerDetails(){
        var passangerName = document.getElementById("pname").value;
        var passangerAge = document.getElementById("age").value;
        // alert(passangerAge+passangerName);
        let pass = new passanger();
        pass.setname(passangerName);
        pass.setage(passangerAge);
        alert("passanger Added Succesfully");
        // alert(bookingDetails.get("FID-690").getadultcount());
    
        var index = "PID-"+passangerName[0]+passangerName[2]+(passangerAge*16)*69;
        passangerDetails.set(index,pass);
        alert("booking is completed with the passanger ID: "+index);
        document.getElementById("pname").value = "";
        document.getElementById("age").value = "";
        if(passangerDetails.size == sum){
            document.getElementById("passDetails").style.display = 'none';
        }

        

    }
}