var preloader = document.getElementById("loading");
var x = document.getElementById("login");
var y = document.getElementById("signin");
var z = document.getElementById("btn");
const nav = document.querySelector(".nav-links"); 
const menu_bar = document.querySelector(".fa-bars");
	menu_bar.addEventListener("click", () => {
		menu_bar.classList.toggle("fa-xmark");
		nav.classList.toggle("nav-links-active");
	})
    function load() {
        preloader.style.display = 'none';
    }
    function clickme(smallImg) {
      var fullImg = document.getElementById("imagebox");
      fullImg.src = smallImg.src;
    }
    function bought(){
        window.alert("Your game wil be downloaded soon...")
    }
		function signin() {
			x.style.left = "-400px";
			y.style.left = "50px";
			z.style.left = "110px";
		}
		function login() {
			x.style.left = "50px";
			y.style.left = "450px";
			z.style.left = "0px";
		}
    	var preloader = document.getElementById("loading");
    	function load() {
      	preloader.style.display = 'none';
    	}
    	function logg(){
    		window.alert("Sucessfully logged in")
    	}
    	function signn(){
    		window.alert("Sucessfully signed in")
    	}