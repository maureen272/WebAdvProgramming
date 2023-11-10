function login() {
	// write your code to ask pass(word)  
	const PASS = "pass";
	var input = prompt("Input the password");

	while (input != PASS) {
        alert("Wrong (You entered: " + input + ")");
        input = prompt("Input the password", "");
    }

    alert("Pass (You entered: pass)");
}

function explainDays() {
	// write your code to ask days and explain
	var day = prompt("Input from Mon to Sun", "ex) Mon");

    if (day == "Mon" || day == "Tue" || day == "Wed" || day == "Thu" || day == "Fri") {
        document.write(day + ", to go to work!");
    }
    else if (day == "Sat" || day == "Sun") {
        document.write("Weekend, and take a rest!");
    }
}
