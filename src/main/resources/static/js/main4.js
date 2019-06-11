function clickMe() {
	unlock($(".enter"));
}

function unlock(el) {
	TweenLite.to(el, 0.5, {
		transform : "rotate(90deg)",
		onComplete : function() {
			open($(".door .left"), $(".door .right"), el);
		} // end of onComplete
	})
}

function open(left, right, button) {
	TweenLite.to(left, 1.5, {
		width : 0
	});
	TweenLite.to(right, 1.5, {
		width : 0
	});
	TweenLite.to(button, 1.5, {
		"margin-left" : "-60px",
		onComplete : function() {
			
			$("#intro").hide();
			$("#experience").hide();
			
			left.parent().remove();
			button.remove();
			
			$("#intro").show();
			$("#experience").show();
			loadAboutPage();
			loadExperiencePage();
		}
	});
}

function loadAboutPage() {
	var theater = theaterJS()

	theater.on('type:start, erase:start', function() {
		var actor = theater.getCurrentActor()
		actor.$element.classList.add('actor__content--typing')
	}).on('type:end, erase:end', function() {
		var actor = theater.getCurrentActor()
		actor.$element.classList.remove('is-typing')
	})

	theater.addActor('introName')
	theater.addScene('introName:About Me', 10)
}

function loadExperiencePage(){
	 // define variables
	  var items = document.querySelectorAll(".timeline li");

	  // check if an element is in viewport
	  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	  function isElementInViewport(el) {
	    var rect = el.getBoundingClientRect();
	    return (
	      rect.top >= 0 &&
	      rect.left >= 0 &&
	      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	  }

	  function callbackFunc() {
	    for (var i = 0; i < items.length; i++) {
	      if (isElementInViewport(items[i])) {
	        items[i].classList.add("in-view");
	      }
	    }
	  }

	  // listen for events
	  window.addEventListener("load", callbackFunc);
	  window.addEventListener("resize", callbackFunc);
	  window.addEventListener("scroll", callbackFunc);
}
