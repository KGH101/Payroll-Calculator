// get element form to Js
let form= document.getElementById("formhtml")

// get the element table to Js 
let table= document.getElementById("table")

// add an event
form.addEventListener("submit",function(event){
    // prevent form from refereshing
    event.preventDefault();

    // get form data
    let basic_salary= Number(document.getElementById("basic_salary").value)
    let benefits= Number (document.getElementById("benefits").value)

    // calculate gross salary

    

    function calc_gross(a,b){
        let gross= a+b
        return gross
    }
    let gross_salary= calc_gross(basic_salary,benefits)
    document.getElementById('gross_salary').innerHTML = gross_salary.toFixed(2);

    // calculate nhif

    function get_nhif(gross_salary){
        let nhif=0
        if (gross_salary <= 5999) nhif = 150;
        else if (gross_salary<= 7999) nhif = 300;
        else if (gross_salary<= 11999) nhif = 400;
        else if (gross_salary <= 14999) nhif = 500;
        else if (gross_salary <= 19999) nhif = 600;
        else nhif = 1700; 

        return nhif
    }
    let nhif = get_nhif(gross_salary)
    document.getElementById('nhif').innerHTML = nhif.toFixed(2);

        
    // NSSF calculation (6% capped at 1080 KES)
    function get_nssf(a){

        let nssf=0
            if (a>=0 && a<=18000){
                nssf= a*0.06
            }else{
                nssf=18000*0.06
            }
            return nssf
    }
    let nssf = get_nssf(gross_salary );
    document.getElementById('nssf').innerHTML = nssf.toFixed(2);

    // calculate nhdf

    function get_nhdf(gross_salary){

        let nhdf = gross_salary * 0.015;
    
        return nhdf;
    
    }
    let nhdf= get_nhdf(gross_salary)
    document.getElementById("nhdf").innerHTML= nhdf.toFixed(2)

    // calculate payee

    function get_payee(){
        let payee;
        if (gross_salary <= 24000) {
            payee = gross_salary* 0.1;
        } else if (gross_salary <= 32333) {
            payee = 2400 + (gross_salary - 24000) * 0.25;
        } else {
            payee = 2400 + (32333 - 24000) * 0.25 + (gross_salary - 32333) * 0.3;
        }

        return payee
    }
    let payee= get_payee()
    document.getElementById('Final_payee').textContent = payee.toFixed(2);

    // calculate net pay
    
    let netpay = gross_salary - nssf - nhdf - nhif - payee;
    document.getElementById("net_payee").textContent= netpay.toFixed(2)

    // clear the form after submission
    form.reset();

})