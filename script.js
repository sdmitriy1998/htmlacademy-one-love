(function(){

	var button = document.getElementById('circle_button'),
	circle_menu = document.getElementById('circle_menu'),
	wrapper = document.getElementById('circle_list');
	

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
		wrapper.classList.add("circle-menu__list_opened");
		circle_menu.classList.add("circle-menu_margin");
	  }
	  else{
		wrapper.classList.remove("circle-menu__list_opened");
		circle_menu.classList.remove("circle-menu_margin");
	  }
	  open = !open;
	}
	function closeWrapper(){
		wrapper.classList.remove("circle-menu__list_opened");
		circle_menu.classList.remove("circle-menu_margin");
	}

})();
