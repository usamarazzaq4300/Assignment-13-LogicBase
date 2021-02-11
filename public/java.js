function hoursToSec() {
    var hours = document.getElementById("q1").value;
    num_of_sec = hours * 60 * 60;
    var result = document.getElementById("result1");
    result.innerHTML = "There are " + num_of_sec + " seconds in " + hours + " hours.";
}
function ageToDays() {
    age = document.getElementById("q2").value;
    age_in_days = age * 365;
    var result = document.getElementById("result2");
    result.innerHTML = "You are " + age_in_days + " days old."
}
function checkAns() {
    var str1 = document.getElementById("q3a").value;
    var str2 = document.getElementById("q3b").value;
    var result = document.getElementById("result3");
    if (str1.length == str2.length) {
        result.innerHTML = "True"
    }
    else {
        result.innerHTML = "False"
    }
}
function leapYear() {
    var year = document.getElementById("q4").value;
    var result = document.getElementById("result4");
    if (year % 4 == 0) {
        result.innerHTML = year + " is a Leap year"
    }
    else {
        result.innerHTML = year + " is not a Leap year"
    }
}
function invertArray() {
    var array = [];
    var invertedArray = []
    negative = -1;
    negative = parseInt(negative)
    for (i = 0; i < 4; i++) {
        var element = prompt("Please add integers to an array one by one:");
        element = parseInt(element);
        invertedArray[i] = element;
        element = element * negative;
        array[i] = element;
    }
    var result = document.getElementById("result5a");
    result.innerHTML = "The original array is: [ " + invertedArray + " ]";
    var result1 = document.getElementById("result5b");
    result1.innerHTML = "The inverted array is: [ " + array + " ]";
}
function endCorona() {
    var number_of_days = 0;
    var average_recovered = document.getElementById("recovered").value;
    var new_cases = document.getElementById("new").value;
    var current_cases = document.getElementById("active").value;
    var reduce_case_per_day = average_recovered - new_cases;
    while (current_cases > 0) {
        current_cases = current_cases - reduce_case_per_day;
        number_of_days = number_of_days + 1
        if (current_cases < 0)
            break;
    }
    var result = document.getElementById("result6");
    result.innerHTML = "Corona cases will be finished after " + number_of_days + " days."
}

function takingArray() {
    var originalArray = [];
    var array = [];
    for (i = 0; i < 4; i++) {
        var element = prompt("Please add number to an array one by one:");
        originalArray[i] = element
        array[i] = '"' + element + '"';
        array = array.toString().split(",");

    }
    var result1 = document.getElementById("result7a");
    result1.innerHTML = "The orignial array is: " + '[ ' + originalArray + ']'
    var result1 = document.getElementById("result7b");
    result1.innerHTML = "The converted array is: " + "[" + array + "]"
}

