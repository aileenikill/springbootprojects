(function() {

	'use strict';

	var app = angular.module('app', []);

	app
			.controller(
					'NavigationController',
					function($scope) {

						$scope.init = function() {
							loadName();
						};

						$scope.loadName = function() {
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
							theater.addScene('introName: I\'m Aileen Kill')

							theater.addActor('introDesc', {
								speed : 1.3,
								accuracy : 1.0
							})
							theater
									.addScene('introDesc: Welcome to my Online Resume')
						};

						$scope.items = [ {
							title : 'Profile',
							link : '#profile',
							click : ''
						}, {
							title : 'Experience',
							link : '#experience',
							click : ''
						}, {
							title : 'Skills',
							link : '#skills',
							click : ''
						}, {
							title : 'Resume',
							link : '#resume',
							click : 'loadResume()'
						}, {
							title : 'Contact',
							link : '#contact',
							click : ''
						} ];

						$scope.loadResume = function(value) {
							if (value == 'Resume') {
								var url = "/resume";
								var strWindowFeatures = "menubar=no,location=no,width=800,height=500";
								window.open(url, "#resume",
										"location=0,height=500,width=800");
							}
						}
					});
})();
