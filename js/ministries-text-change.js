function changeText (selectedIndex){
	var selected = selectedIndex;
	
	switch(selected){
		case 0:
			document.getElementById("miniDiscription").innerHTML = "First summary";
			document.getElementById("ministryHeader").innerHTML = "Voices of Deliverance";
		break;
		case 1:
			document.getElementById("miniDiscription").innerHTML = "Second summary";
			document.getElementById("ministryHeader").innerHTML = "StrongMan Ministries";
		break;
		case 2:
			document.getElementById("miniDiscription").innerHTML = "Third summary";
			document.getElementById("ministryHeader").innerHTML = "Daughters of Deliverance";
		break;
		case 3:
			document.getElementById("miniDiscription").innerHTML = "Forth summary";
			document.getElementById("ministryHeader").innerHTML = "Peculiar People";
		break;
		case 4:
			document.getElementById("miniDiscription").innerHTML = "Fifth summary";
			document.getElementById("ministryHeader").innerHTML = "Gatekeepers Ministry";
		break;
		case 5:
			document.getElementById("miniDiscription").innerHTML = "Sixth summary";
			document.getElementById("ministryHeader").innerHTML = "New Members Ministry";
		break;
		case 6:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "Technology/Media Ministry";
		break;
		case 7:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "Arts & Drama Ministry";
		break;
		case 8:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "One Flesh";
		break;
		case 9:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "My House My People";
		break;
		case 10:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "Bible Basics";
		break;
		case 11:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "Word of Truth";
		break;
		case 12:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "Kingdom Builders";
		break;
		case 13:
			document.getElementById("miniDiscription").innerHTML = "Seventh summary";
			document.getElementById("ministryHeader").innerHTML = "Fish and Loaves";
		break;
	}
}
