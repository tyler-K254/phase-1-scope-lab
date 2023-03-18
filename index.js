var customerName = "bob"

function nameOfCustomer(){
    return customerName
}


function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

// let bestCustomer = "bob";

function setBestCustomer(){
    bestCustomer = "not bob"
    return(bestCustomer)
}

function overwriteBestCustomer(updatedBest){
    bestCustomer = updatedBest
}

const leastFavouriteCustomer = "Karen"

function changeLeastFavoriteCustomer(updatedLeast){
    leastFavouriteCustomer = updatedLeast
}