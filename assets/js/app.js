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

let tax_type = document.getElementById("tax_type");

let tax_category = document.getElementById("tax_category");

btn_calculate.addEventListener("click", e =>{
    alert("Clicked!");

    const select_value_1 = tax_type.selectedIndex;
    const select_value_2 = tax_category.selectedIndex;

    switch(select_value_1){

        case 1: 
            if(select_value_2===1) {rent_tax();}
            else if(select_value_2===2){bank_interest_tax();}
            else{dividend_tax();}
            break;
        case 2: payable_tax(); break;
        case 3:
        case 4:
        default : console.log("Not yet implemented");
        
    }
    
})