// JavaScript Document

function popup() {						
			window.open('../../popups/contentwindow.php', 'win1', 'status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no');
}

function deleteConfirm(url){
	if(window.confirm("Are you sure to delete?")){
		window.location = url;
	}else{return false};
}



// JavaScript Document
<!--
function echeck(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail Address! Please re-enter.")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail Address! Please re-enter.")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail Address! Please re-enter.")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail Address! Please re-enter.")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail Address! Please re-enter.")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail Address! Please re-enter.")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail Address! Please re-enter.")
		    return false
		 }

 		 return true					
	}

function ValidateEmail(emailID){
	//var emailID=document.frmemail.email;	
	if (echeck(emailID)==false){		
		return false;
	}
	return true;
 }
 
function checkEmail(str) {	
	var myform = document.frmemail;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)){
		return (true);
	}
	alert("Invalid E-mail Address! Please re-enter.")
	return (false)
} 


function isString(val){
	if(!isNaN(val)){
			alert("Invalid Input! Please re-enter.");
			return false;
	}
}

function isNumber(val){
	if(isNaN(val)){
			alert("Invalid Input! Please re-enter.");
			return false;
	}
}


function IsNumeric(sText){   
   var Char;   
   for (i = 0; i < sText.length; i++){ 
	  Char = sText.charAt(i); 		  
	  if(!isNaN(Char)){
		  alert("Invalid Input! Please re-enter.");
		  return false;
	  }
   }
}

function IsString(sText){  
   var Char; 
   for (i = 0; i < sText.length; i++){ 
	 Char = sText.charAt(i); 
	 if(isNaN(Char)){
		alert("Invalid Input! Please re-enter.");
		return false;
	}
   }
	
}

-->
