
class AirlineTicketing{
    static userDetails = new Map([
        ["rax", 123],
        ["max", 123],
        ["jack", 123]
      ]);
    static validate(){
        alert(AirlineTicketing.userDetails.size);
        var username = document.getElementById("user").value;
        var password = document.getElementById("pass").value;
        if(AirlineTicketing.userDetails.has(username) && AirlineTicketing.userDetails.get(username) == password){
            alert("succsuffuly logged in as "+AirlineTicketing.userDetails.has(username));
            document.getElementById("div3").style.display = 'none'; 
            document.getElementById("menu").style.display = 'block'; 
        }
        else{
            alert("invalid user");
        }
    }
    static adduser(){
        var newusername = document.getElementById("newuser").value;
        var newpassword = document.getElementById("newpass").value;
        AirlineTicketing.userDetails.set(newusername,newpassword);
        alert(AirlineTicketing.userDetails.size);
        alert("user added with username: "+newusername);

    }  
}
//commit first
