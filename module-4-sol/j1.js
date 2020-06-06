var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0;i<names.length;i++){
	var temp=names[i];
	if(temp[0]=="j" || temp[0]=="J"){
		console.log("Good bye "+temp);
	}
	else{
		console.log("Hello "+temp);
	}
}
