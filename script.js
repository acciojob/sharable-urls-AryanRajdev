// your code here
let h3El = document.getElementById("url");
document.querySelector(".form").addEventListener(('submit'),(e)=>{
	e.preventDefault();
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;

	if(name === ""){
		h3El.textContent = `https://localhost:8080/?year=${year}`
	}
	else if(year === ""){
		h3El.textContent = `https://localhost:8080/?name=${name}`
	}
	else if(name === "" && year === ""){
		h3El.textContent = `https://localhost:8080/`
	}
	else{
		h3El.textContent = `https://localhost:8080/?name=${name}&year=${year}`
	}
})