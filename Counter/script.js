var a = 0;
var add = function(valueToAdd) {
    a += valueToAdd;
    document.getElementById('Value').innerHTML = a;
}

var reset = function() {
	a = 0;
	document.getElementById('Value').innerHTML = 0;
}
var subtract = function (valuetoSubtract) {
    a -= valuetoSubtract;
    document.getElementById('Value').innerHTML = a;
}

var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset");
var subtractButton = document.querySelector("#subtract") 

addButton.addEventListener("click", function() {
	add(1);
})

resetButton.addEventListener("click", function() {
	reset();
})

subtractButton.addEventListener("click", function() {
	subtract(1);
})