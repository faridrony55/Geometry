

function appendData(calcualte,title){

    //calculate output style
    let block = document.createElement("div");
    block.classList.add('col-span-4','pr-2','flex','justify-between');
    let span1 = document.createElement("span");
    span1.innerText = count+". "+ title;
    let span2 = document.createElement("span");
    span2.innerText = calcualte+"cm"; 
    let span3 = document.createElement("sup");
    span3.innerText = "2";
    span2.append(span3); 

    //convert button
    let btn = document.createElement("button");
    btn.classList.add('col-span-3','text-sm','px-2','py-2','rounded','text-white','bg-blue-600');
    let sup = document.createElement("sup"); 
    sup.innerText = 2;
    btn.append('Convert to m',sup);


    //final output
    block.append(span1, span2);

    const displayLocation = document.getElementById('AreaCalculate');
    displayLocation.append(block, btn);
    return displayLocation;
}

// first value functions
function areaValueFirst(input){
    const input_value =  document.getElementById(input); 
    const input_value_string = input_value.value;
    const input_value_int = parseFloat(input_value_string).toFixed(2)   ;
    input_value.value = '';
    return input_value_int;
}
// second value functions
function areaValueSecond(input){
    const input_value =  document.getElementById(input); 
    const input_value_string = input_value.value;
    const input_value_int = parseFloat(input_value_string).toFixed(2)   ;
    input_value.value = '';
    return input_value_int;
}

//counter for list
let count = 0;
document.getElementById('triangle_cal').addEventListener('click', function(){
    //increament
    count++; 
 
    let title = 'Triangle';

    // get first input value
    const input_value_one = areaValueFirst('triangle_b');
    // get second input value
    const input_value_two = areaValueSecond('triangle_h');
    // get calculation
    const calcualte = 0.5 * input_value_one * input_value_two;
    

    appendData(calcualte,title);
 
}); 

 

document.getElementById('rectangle_cal').addEventListener('click', function(){
    //increament
    count++; 
 
    let title = 'Rectangle';

    // get first input value
    const input_value_one = areaValueFirst('rectangle_w');
    // get second input value
    const input_value_two = areaValueSecond('rectangle_l');
    // get calculation
    const calcualte =  input_value_one * input_value_two;
    

    appendData(calcualte,title);
 
}); 
  
 

// Hover effect
/*
var elements = document.querySelector('.diagram');
const Color = ['red','seagreen','sky','blue','orange'];
 

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mouseover', function (event) { 
    let rand = Math.round(Math.random() * 5) ;   
    console.log(this);
    this.style.backgroundColor = Color[rand];
  });
 
  elements[i].addEventListener('mouseleave', function (event) {    
    this.style.backgroundColor = ' ';
  });

}
*/

 