console.log("JS Loaded!");

let input = document.getElementById("input");

let btn_calculate = document.getElementById("button-addon2");

// Calculation for Withholding Tax

function rent_tax(){
    let num = Number(input.value);
    if(!isNaN(num)){
        					
        if(num<=100000){
            console.log("You don't have to pay Rent tax ...");
        }
        else{
            console.log("You have to pay rent tax : "+ (num*10.0/100));
        }	
	}
    else{
        alert("Invalid Input!");
        console.log("Invalid Input!");
        
    }
}

function bank_interest_tax(){
    let num = Number(input.value);
    if(!isNaN(num)){ 					
        console.log("You have to pay bank interest tax per year : "+(num*5.0/100));
	}
    else{
        alert("Invalid Input!");
        console.log("Invalid Input!");
        
    }
}

function dividend_tax(){
    
    let num = Number(input.value);
    if(!isNaN(num)){
        					
        if(num<=100000){
            console.log("You don't have to pay Dividend tax ...");
        }
        else{
            console.log("You have to pay Divident Tax per year : ",(num*14.0/100));
        }	
	}
    else{
        alert("Invalid Input!");
        console.log("Invalid Input!");
        
    }
}

// Calculation for Payable Tax

function payable_tax(){
    
    let salary = Number(input.value);
    if(!isNaN(salary)){
        					
        if(salary<=100000){
            console.log("You don't have to pay Payable tax ...");
        }
        else{
            let tax=(salary>100000 & salary<=141667)?((salary-100000)*6.0/100):(salary>141667 & salary<=183333)?((41667*6.0/100)+((salary-141667)*12.0/100)):(salary>183333 & salary<=225000)?((41667*18.0/100)+((salary-183333)*18./100)):(salary>225000 & salary<=266667)?((41667*36.0/100)+((salary-225000)*24.0/100)):(salary>266667 & salary<=308333)?((41667*60.0/100)+((salary-266667)*30.0/100)):((41667*90.0/100)+((salary-308333)*36.0/100));
            console.log("You have to pay Payable Tax per month : "+tax);
        }	
	}
    else{
        alert("Invalid Input!");
        console.log("Invalid Input!");
        
    }
}

// Calculation for Income Tax

function income_tax(){
	let income = Number(input.value);	
    if(!isNAN(income)){
        if(income<=1200000){
            console.log("You don't have to pay income tax ...");
        }	
        else{
            let tax=(income<=1700000)?((income-1200000)*6.0/100):(income>1700000 & income<=2200000)?((500000*6.0/100)+((income-1700000)*12.0/100)):(income>2200000 & income<=2700000)?((500000*18.0/100)+((income-2200000)*18.0/100)):(income>2700000 & income<=3200000)?((500000*36.0/100)+((income-2700000)*24.0/100)):(income>3200000 & income<=3700000)?((500000*60.0/100)+((income-3200000)*30.0/100)):((500000*90/100)+((income-3700000)*36/100));	
            console.log("You have to pay Income Tax per year : "+tax);				
        }
    }
    else{
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }
}

function sscl_tax(){
	let good_or_service = Number(input.value);	
    if(!isNAN(good_or_service)){
        if(good_or_service>0){
            let tax=(good_or_service*2.5)/100;
			tax+=((tax+good_or_service)*15.0/100);
            console.log("You have to pay SSCL Tax : "+tax);				
        }
        else{
            console.log("You don't have to pay SSCL tax ...");
        }	
    }
    else{
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }
}

function find_installment(){

}

function lease_category(){

}

function find_lease_amount(){
    
}

let tax_type = document.getElementById("tax_type");

let tax_category = document.getElementById("tax_category");

let tax_leasing_details = document.getElementById("leasing_details");

btn_calculate.addEventListener("click", e =>{
    alert("Clicked!");

    const select_value_1 = tax_type.selectedIndex;
    const select_value_2 = tax_category.selectedIndex;
    const select_value_3 = tax_leasing_details.selectedIndex;

    switch(select_value_1){

        case 1: 
            if(select_value_2===1) {rent_tax();}
            else if(select_value_2===2){bank_interest_tax();}
            else{dividend_tax();}
            break;
        case 2: payable_tax(); break;
        case 3: income_tax(); break;
        case 4: sscl_tax(); break;
        case 5: 
            if(select_value_3===1) {find_installment();}
            else if(select_value_3===2){lease_category();}
            else{find_lease_amount();}
            break;
        default : console.log("Not yet implemented");
        
    }
    
})