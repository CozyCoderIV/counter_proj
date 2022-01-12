// Attributes
let numTracker = document.getElementById("num");
const btns = document.querySelectorAll(".button");

let count = 0;


// Events
btns.forEach(function (button){
    button.addEventListener("click", function(e){
        let temp = e.currentTarget.classList; 
        if (temp.contains('dec')){
            decrease();
        }
        else if(temp.contains('res')){
            reset();
        }
        else
            increase();
    })
})

// Methods
console.log(numTracker); // Debug

function decrease(){
    count--;
    numTracker.innerText = count;
}
function increase(){
   count++;
   numTracker.innerText = count;
}
function reset(){
    count = 0
    numTracker.innerHTML = count;
}