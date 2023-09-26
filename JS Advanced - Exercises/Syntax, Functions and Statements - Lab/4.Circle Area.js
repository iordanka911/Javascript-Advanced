function circleArea(radius){
    let radiusType=typeof radius;

    if (radiusType==="string"){
        console.log(`We can not calculate the circle area, because we receive a ${radiusType}.`);
        return;
    }
    let area=radius*radius*Math.PI;
    console.log(area.toFixed(2));
}

circleArea(50);