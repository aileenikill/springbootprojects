(function() {

	'use strict';

	var app = angular.module('app', []);

	app
			.controller(
					'NavigationController',
					function($scope) {
						// Must use a wrapper object, otherwise "activeItem"
						// won't
						// work
						$scope.onloadFun = function() {

							// Set Up Values Array
							var values = [];

							// Get Values and save to Array
							$('#dashboard-stats .bar').each(
									function(index, el) {
										values.push($(this).data('value'));
									});

							// Get Max Value From Array
							var max_value = Math.max.apply(Math, values);

							// Set width of bar to percent of max value
							$('#dashboard-stats .bar').each(
									function(index, el) {
										var bar = $(this), value = bar
												.data('value'), percent = (bar
												.data('value') * 100);

										// Set Width & Add Class
										bar.width(value + '%');
										bar.addClass('in');
									});
						}

						$scope.items = [ {
							title : 'Profile',
							link : '#profile'
						}, {
							title : 'Experience',
							link : '#experience'
						}, {
							title : 'Skills',
							link : '#skills'
						}, {
							title : 'Resume',
							link : '#resume'
						}, {
							title : 'Contact',
							link : '#contact'
						} ];

						var theater = theaterJS()

						theater.on(
								'type:start, erase:start',
								function() {
									var actor = theater.getCurrentActor()
									actor.$element.classList
											.add('actor__content--typing')
								}).on('type:end, erase:end', function() {
							var actor = theater.getCurrentActor()
							actor.$element.classList.remove('is-typing')
						})

						theater.addActor('introName', {
							speed : 1.3,
							accuracy : 1.0
						})
						theater
								.addScene('introName: Hi! Welcome! I\'m Aileen Kill')

						theater.addActor('introDesc', {
							speed : 1.3,
							accuracy : 1.0
						})
						theater
								.addScene('introDesc: Software Engineer | Web Developer')

						var items = document.querySelectorAll(".timeline li");

						// check if an element is in viewport
						// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
						function isElementInViewport(el) {
							var rect = el.getBoundingClientRect();
							return (rect.top >= 0
									&& rect.left >= 0
									&& rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
						}

						function callbackFunc() {
							for (var i = 0; i < items.length; i++) {
								if (isElementInViewport(items[i])) {
									items[i].classList.add("in-view");
								}
							}
						}

						if (window.height > 3000) {
							alert("test")
						}

						// listen for events
						window.addEventListener("load", callbackFunc);
						window.addEventListener("resize", callbackFunc);
						window.addEventListener("scroll", callbackFunc);
					});
})();
