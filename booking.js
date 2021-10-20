var bookingDetails = new Map();
var sum;
class booking{
    setfid(flightid){
        this.flightid = flightid;
    }
    getfid(){
        return this.flightid;
    }
    setclass(fclass){
        this.fclass = fclass;
    }
    getclass(){
        return this.fclass;
    }
    setdoj(doj){
        this.doj = doj;
    }
    getdoj(){
        return this.doj;
    }
    setadultcount(noofadults){
        this.noofadults = noofadults;
    }
    getadultcount(){
        return this.noofadults;
    }
    setchildrencount(noofchildren){
        this.noofchildren =noofchildren;
    }
    getchildrencount(){
        return this.noofchildren;
    }
    static enterBookingDetails(){
        var x = document.getElementById("validoption").value;
        if(x == 1){
            document.getElementById("menu").style.display = 'none';
            document.getElementById("enterbooking").style.display = 'block';
        }
    }
    static gettingBookingDetails(){
        var flightid = document.getElementById("fid").value;
        var fclass = document.getElementById("class").value;
        var doj = document.getElementById("doj").value;
        var noofadults = document.getElementById("noofadults").value;
        var noofchildren = document.getElementById("noofchildren").value;
        // alert(flightid+fclass+doj+noofadults+noofchildren);
        let book = new booking();
        book.setfid(flightid);
        book.setclass(fclass);
        book.setdoj(doj);
        book.setadultcount(noofadults);
        book.setchildrencount(noofchildren);
        var index = "FID-"+(noofadults+noofchildren)*69;
        bookingDetails.set(index,book);
        alert("booking is completed with the booking ID: "+index);
        // alert(passangerDetails.size);
        sum = parseInt(noofadults) +parseInt(noofchildren);
        document.getElementById("enterbooking").style.display = 'none';
        // var data = "<fieldset><legend>passanger Details</legend><table><tr><td> Enter Passanger Name: </td><td> <input type='text' id='pname'/></td></tr><tr><td> Enter Passanger Age: </td><td> <input type='number' id='age'/></td></tr><tr ><td colspan='2' style='text-align: center;'><button onclick='passanger.gettingPassangerDetails()'>submit</button></td></tr></table></fieldset>";
        
        document.getElementById("passDetails").style.display = 'block';

        
        

        
        
        
    }
}



// module.exports = {bookingDetails};