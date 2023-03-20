function AreaCal_One(input_one, input_two){ 
    const area_one =  document.getElementById(input_one);
    const area_one_string = area_one.value;
    const area_one_int = parseFloat(area_one_string).toFixed(2)  ; 
  
    
    const area_two =  document.getElementById(input_two);
    const area_two_string = area_two.value;
    const area_two_int = parseFloat(area_two_string).toFixed(2)   ;
   

    const Area =  area_one_int * area_two_int;
    return Area;
}
 

function triangleAreaCalculation(area){
    const areaCal = 0.5 * area ;
    const result =  "<span>1. Triangle</span> <span>"+ areaCal + "cm <sup>2</sup></span>";   
    return result;
}

function rectangleAreaCalculation(area){
    const result =  "<span>2. Rectangle</span> <span>"+ area + "cm <sup>2</sup></span>";   
    return result;
}



document.getElementById('triangle_cal').addEventListener('click', function(){
    const area_value = AreaCal_One('triangle_b','triangle_h');
    console.log(area_value); 

    const AreaCal = triangleAreaCalculation(area_value );
    const areaDisplay = document.getElementById('AreaCal'); 
    areaDisplay.innerHTML = AreaCal;
 
 
})

 

document.getElementById('rectangle_cal').addEventListener('click', function(){
    const area_value = AreaCal_One('rectangle_w','rectangle_l');
    console.log(area_value); 

    const AreaCal = rectangleAreaCalculation(area_value );
    const areaDisplay = document.getElementById('RectangleAreaCal'); 
    areaDisplay.innerHTML = AreaCal;
 
 
})
