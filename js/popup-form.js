var mainForm = document.querySelector(".main-form");
var openFormBtn = document.querySelector(".find-button");

openFormBtn.addEventListener("click", function(event){
	event.preventDefault();
	if(!mainForm.classList.contains("main-form-active")){
		mainForm.classList.add("main-form-active");
	}
	else {
	mainForm.classList.remove("main-form-active");	}

})