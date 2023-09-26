function largest(x,y,z){
    let largestNumber=0;

    if(x>=y&&x>=z){
        largestNumber=x;
    }else if(y>=x&&y>=z){
        largestNumber=y;
    }else{
        largestNumber=z;
    }
    console.log(`The largest number is ${largestNumber}.`);
}

largest(10,20,30);