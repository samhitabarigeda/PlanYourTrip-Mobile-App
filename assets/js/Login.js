//Function to check letters and numbers 
function alphanumeric (){
	var UN = document.forms["form"]["name"].value;
	var PW = document.forms ["form"] ["password"].value;
	
	if (UN.length < 3){
		alert('Your enter a username that is more than 3 alphanumeric characters');
		
	}
	if(PW.length < 8){
		alert('Please enter a password that is 8 or more characters');

	}
	
	var JObject = '{"uname" : ' + UN + ' , "pwd" : ' + PW + '}';
	var myJSON = JSON.stringify(JObject);
	
	console.log(myJSON);
	sleepConsole(100);
	
}
 
function sleepConsole (miliseconds){
	var start = new Date().getTime();
	var i = 0;
	for (i;i< 1e10; i++){
		if ((new Date().getTime() - start) > miliseconds){
			break;
		}
	}
}
