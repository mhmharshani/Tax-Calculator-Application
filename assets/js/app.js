console.log("JS Loaded!");

let input = document.getElementById("input");

let btn_calculate = document.getElementById("button-addon2");

let display = document.getElementById("display");

// Calculation for Withholding Tax

function rent_tax() {
    let num = Number(input.value);
    if (!isNaN(num)) {

        if (num <= 100000) {
            display.innerText="You don't have to pay Rent tax ...";
        }
        else {
            display.innerText="You have to pay rent tax : " + (num * 10.0 / 100);
        }
    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }
}

function bank_interest_tax() {
    let num = Number(input.value);
    if (!isNaN(num)) {
        display.innerText="You have to pay bank interest tax per year : " + (num * 5.0 / 100);
    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");

    }
}

function dividend_tax() {

    let num = Number(input.value);
    if (!isNaN(num)) {

        if (num <= 100000) {
            display.innerText="You don't have to pay Dividend tax ...";
        }
        else {
            display.innerText="You have to pay Divident Tax per year : "+ (num * 14.0 / 100);
        }
    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");

    }
}

// Calculation for Payable Tax

function payable_tax() {

    let salary = Number(input.value);
    if (!isNaN(salary)) {

        if (salary <= 100000) {
            display.innerText="You don't have to pay Payable tax ...";
        }
        else {
            let tax = (salary > 100000 & salary <= 141667) ? ((salary - 100000) * 6.0 / 100) : (salary > 141667 & salary <= 183333) ? ((41667 * 6.0 / 100) + ((salary - 141667) * 12.0 / 100)) : (salary > 183333 & salary <= 225000) ? ((41667 * 18.0 / 100) + ((salary - 183333) * 18. / 100)) : (salary > 225000 & salary <= 266667) ? ((41667 * 36.0 / 100) + ((salary - 225000) * 24.0 / 100)) : (salary > 266667 & salary <= 308333) ? ((41667 * 60.0 / 100) + ((salary - 266667) * 30.0 / 100)) : ((41667 * 90.0 / 100) + ((salary - 308333) * 36.0 / 100));
            display.innerText="You have to pay Payable Tax per month : " + tax;
        }
    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");

    }
}

// Calculation for Income Tax

function income_tax() {
    let income = Number(input.value);
    if (!isNaN(income)) {
        if (income <= 1200000) {
            display.innerText="You don't have to pay income tax ...";
        }
        else {
            let tax = (income <= 1700000) ? ((income - 1200000) * 6.0 / 100) : (income > 1700000 & income <= 2200000) ? ((500000 * 6.0 / 100) + ((income - 1700000) * 12.0 / 100)) : (income > 2200000 & income <= 2700000) ? ((500000 * 18.0 / 100) + ((income - 2200000) * 18.0 / 100)) : (income > 2700000 & income <= 3200000) ? ((500000 * 36.0 / 100) + ((income - 2700000) * 24.0 / 100)) : (income > 3200000 & income <= 3700000) ? ((500000 * 60.0 / 100) + ((income - 3200000) * 30.0 / 100)) : ((500000 * 90 / 100) + ((income - 3700000) * 36 / 100));
            
            display.innerText="You have to pay Income Tax per year : " + tax;
        }
    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }
}

// Calculation for SSCL Tax

function sscl_tax() {
    let good_or_service = Number(input.value);
    if (!isNaN(good_or_service)) {
        if (good_or_service > 0) {
            let tax = (good_or_service * 2.5) / 100;
            tax += ((tax + good_or_service) * 15.0 / 100);
            display.innerText="You have to pay SSCL Tax : " + tax;
        }
        else {
            display.innerText="You don't have to pay SSCL tax ...";
        }
    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }
}

let input_amount = document.getElementById("input");

let input_rate = document.getElementById("input_rate");

let input_year = document.getElementById("input_year");

// Calculation for Leasing Payment

function find_installment() {
    let amount = Number(input_amount.value);
    let rate = Number(input_rate.value);
    let year = Number(input_year.value);
    if (!(isNaN(amount) | isNaN(rate) | isNaN(year))) {
        if ((amount > 0) & (rate > 0) & (year > 0) & (year <= 5)) {
            let installment = (amount * (rate / 100) / 12) / (1 - (1 / (Math.pow((1 + ((rate / 100) / 12)), (year * 12)))));
            display.innerText="Your monthly installment : " + installment;
        }
        else {
            alert("Invalid Input!");
            console.log("Invalid Input!");
        }

    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }
}

function lease_category() {
    let amount = Number(input_amount.value);
    let rate = Number(input_rate.value);
    if (!(isNaN(amount) | isNaN(rate))) {
        if ((amount > 0) & (rate > 0)) {
            display.innerText=("Your monthly installment for 3 year leasing plan - " + ((amount * rate / 100 / 12) / (1 - (1 / (Math.pow((1 + (rate / 100 / 12)), (3.0 * 12)))))))+("\nYour monthly installment for 4 year leasing plan - " + ((amount * rate / 100 / 12) / (1 - (1 / (Math.pow((1 + (rate / 100 / 12)), (4.0 * 12))))))) + ("\nYour monthly installment for 5 year leasing plan - " + ((amount * rate / 100 / 12) / (1 - (1 / (Math.pow((1 + (rate / 100 / 12)), (5.0 * 12)))))));
        }
        else {
            alert("Invalid Input!");
            console.log("Invalid Input!");
        }

    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }

}

function find_lease_amount() {

    let amount = Number(input_amount.value);
    let rate = Number(input_rate.value);
    let year = Number(input_year.value);
    if (!(isNaN(amount) | isNaN(rate) | isNaN(year))) {
        if ((amount > 0) & (rate > 0) & (year > 0) & (year <= 5)) {
            display.innerText=("You can get lease amount - "+ (amount * (1 - (1 / (Math.pow((1 + (rate / 100 / 12)), (year * 12))))) / (rate / 100 / 12))+"");

        }
        else {
            alert("Invalid Input!");
            console.log("Invalid Input!");
        }

    }
    else {
        alert("Invalid Input!");
        console.log("Invalid Input!");
    }


}

let tax_type = document.getElementById("tax_type");

let tax_category_dd = document.getElementById("tax_category_dd");

tax_type.addEventListener("change", e => {
    console.log("changed tax type!");
    if(tax_type.selectedIndex==1){
        
        tax_category_dd.innerHTML=`<select class="form-select" aria-label="Default select example" id="tax_category">
            <option selected>Select withholding tax category</option>
            <option value="1">Rent Tax</option>
            <option value="2">Bank Interest Tax</option>
            <option value="3">Dividend Tax</option>
        </select>`;
    }
    else if(tax_type.selectedIndex==5){
        tax_category_dd.innerHTML=`<select class="form-select" aria-label="Default select example" id="tax_category">
        <option selected>Select Leasing Payment Detail</option>
                    <option value="1">Calculate Monthly Installment</option>
                    <option value="2">Search Leasing Category</option>
                    <option value="3">Find Leasing Amount</option>`;
    }
    else{
        tax_category_dd.innerHTML="";
    }
})

//let tax_leasing_details = document.getElementById("leasing_details");

// Calculate button click event

btn_calculate.addEventListener("click", e => {

    let tax_category = document.getElementById("tax_category");
    const select_value_1 = tax_type.selectedIndex;
    let select_value_2;
    if(select_value_1==1|select_value_1==5){
        select_value_2 =tax_category.selectedIndex;
    }
    else{
        select_value_2 =0;
    }

    switch (select_value_1) {

        case 1:
            if (select_value_2 === 1) { rent_tax(); }
            else if (select_value_2 === 2) { bank_interest_tax(); }
            else { dividend_tax(); }
            break;
        case 2: payable_tax(); break;
        case 3: income_tax(); break;
        case 4: sscl_tax(); break;
        case 5:
            if (select_value_2 === 1) { 
                
                find_installment(); 
            }
            else if (select_value_2 === 2) { 
                
                lease_category(); 
            }
            else { find_lease_amount(); }
            break;
        default: console.log("Not yet implemented");

    }

})