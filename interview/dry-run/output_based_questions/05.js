let count = 0

function printCount() {
    if (count == 0) {
        let count = 3;
        console.log("count1", count);        
    }
    console.log("count2", count);
    // this will get count = 0 's value, 
    // coz its declared globally - all scopes can access it
}

printCount()