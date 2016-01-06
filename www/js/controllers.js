angular.module('app.controllers', [])
  
.controller('mainCtrl', function($scope) {
	$scope.exitApp = function(){
		ionic.Platform.exitApp();
	};
})
   
.controller('categoryCtrl', function($scope) {
	// $scope.changeInitQues = function(cat){
	// 	if (cat == "it"){
	// 		$("#poq").text('What will she do? Keep it to herself?');
	// 	}else if (cat == "cb"){
	// 		$("#poq").text('What will she do? Do you want to report it?');
	// 	}else if (cat == "oh"){
	// 		$("#poq").text('What will she do?  Seek help to NBI / PNP Cybercrime Division?');
	// 	}
	// };
})
   
.controller('identityTheftCtrl', function($scope) {
	$scope.page = "itstart";
	$scope.changePage = function(ans){
		if ($scope.page == "itstart" && ans == "yes"){
			$("#itscene2").show();
			$("#itstart").hide();
			$scope.page = "itscene2";
		}else if ($scope.page == "itstart" && ans == "no"){
			$("#itscene1").show();
			$("#itstart").hide();
			$scope.page = "itscene1";
		}else if ($scope.page == "itscene1" && ans == "yes"){
			$("#itend2").show();
			$("#itscene1").hide();
			$(".btnExit").show();
			$(".btnNext").hide();
			$scope.page = "itend2";
		}else if ($scope.page == "itscene1" && ans == "no"){
			$("#itscene2").show();
			$("#itscene1").hide();
			$scope.page = "itscene2";
		}else if ($scope.page == "itscene2" && ans == "yes"){
			$("#itscene3").show();
			$("#itscene2").hide();
			$scope.page = "itscene3";
		}else if ($scope.page == "itscene2" && ans == "no"){
			$("#itend2").show();
			$("#itscene2").hide();
			$(".btnExit").show();
			$(".btnNext").hide();
			$scope.page = "itend2";
		}else if ($scope.page == "itscene3" && ans == "yes"){
			$("#itscene4").show();
			$("#itscene3").hide();
			$scope.page = "itscene4";
		}else if ($scope.page == "itscene3" && ans == "no"){
			$("#itend2").show();
			$("#itscene3").hide();
			$(".btnExit").show();
			$(".btnNext").hide();
			$scope.page = "itend2";
		}else if ($scope.page == "itscene4" && ans == "yes"){
			$("#itend1").show();
			$("#itscene4").hide();
			$(".btnExit").show();
			$(".btnNext").hide();
			$scope.page = "itend1";
		}else if ($scope.page == "itscene4" && ans == "no"){
			$("#itend2").show();
			$("#itscene4").hide();
			$(".btnExit").show();
			$(".btnNext").hide();
			$scope.page = "itend2";
		}
	};
	$scope.changeQues = function(){
		if ($scope.page == "itscene1"){
			$("#poq").text("Are you still keep it?");
		}else if ($scope.page == "itscene2"){
			$("#poq").text("Do you want to gather evidences and other information?");
		}else if ($scope.page == "itscene3"){
			$("#poq").text("Report to PNP-Anti VAWC Desk and City Social Welfare office?");
		}else if ($scope.page == "itscene4"){
			$("#poq").text("Filing a case against the perpetrator?");
		}
	};
	$scope.exit = function(){
		$scope.page = "itstart";
		$("#itend1").hide();
		$("#itend2").hide();
		$("#itstart").show();
		$(".btnExit").hide();
		$(".btnNext").show();
	};
})
   
.controller('cyberBullyingCtrl', function($scope, $state) {
	$scope.page = "cbstart";
	// $("#cbstart div").hide(0).delay(2000).fadeIn("slow");
	// $("#cbstart div p").typed({
	// 	strings: [$("#cbstart p").text()],
	// 	typeSpeed: 0,
	// 	startDelay: 2000
	// });
	// $("#cb").click(function(event){
	// 	$("#cbstart div p").data('typed').reset();
	// });
	$scope.changePage = function(ans){
		if ($scope.page == "cbstart" && ans == "yes"){
			$("#cbscene2").show();
			$("#cbstart").hide();
			$scope.page = "cbscene2";
			$("#cbscene2 div").hide(0).delay(2000).fadeIn("slow");
			$("#cbscene2 div p").typed({
				strings: [$("#cbscene2 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}else if ($scope.page == "cbstart" && ans == "no"){
			$("#cbscene1").show();
			$("#cbstart").hide();
			$scope.page = "cbscene1";
			$("#cbscene1 div").hide(0).delay(2000).fadeIn("slow");
			$("#cbscene1 div p").typed({
				strings: [$("#cbscene1 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}else if ($scope.page == "cbscene1" && ans == "yes"){
			$("#cbend1").show();
			$("#cbscene1").hide();
			$(".btnNext").hide();
			$(".btnNext1").show();
			$scope.page = "cbend1";
			$("#cbend1 div").hide(0).delay(2000).fadeIn("slow");
			$("#cbend1 div p").typed({
				strings: [$("#cbend1 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}else if ($scope.page == "cbscene1" && ans == "no"){
			$("#cbscene2").show();
			$("#cbscene1").hide();
			$scope.page = "cbscene2";
			$("#cbscene2 div").hide(0).delay(2000).fadeIn("slow");
			$("#cbscene2 div p").typed({
				strings: [$("#cbscene2 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}else if ($scope.page == "cbscene2" && ans == "yes"){
			$("#cbend2").show();
			$("#cbscene2").hide();
			$(".btnNext").hide();
			$(".btnNext1").show();
			$scope.page = "cbend2";
			$("#cbend2 div").hide(0).delay(2000).fadeIn("slow");
			$("#cbend2 div p").typed({
				strings: [$("#cbend2 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}else if ($scope.page == "cbscene2" && ans == "no"){
			$("#cbend1").show();
			$("#cbscene2").hide();
			$(".btnNext").hide();
			$(".btnNext1").show();
			$scope.page = "cbend1";
			$("#cbend1 div").hide(0).delay(2000).fadeIn("slow");
			$("#cbend1 div p").typed({
				strings: [$("#cbend1 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}else if (($scope.page == "cbend1" || $scope.page == "cbend2") && ans == "next"){
			$("#cbinfo1").show();
			$("#cbend1").hide();
			$("#cbend2").hide();
			$scope.page = "cbinfo1";
			$("#cbinfo1 div").hide(0).delay(1000).fadeIn("slow");
			$("#cbinfo1 div p").typed({
				strings: [$("#cbinfo1 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}else if ($scope.page == "cbinfo1" && ans == "next"){
			$("#cbinfo2").show();
			$("#cbinfo1").hide();
			$(".btnNext1").hide();
			$(".btnExit").show();
			$scope.page = "cbinfo2";
			$("#cbinfo2 div").hide(0).delay(1000).fadeIn("slow");
			$("#cbinfo2 div p").typed({
				strings: [$("#cbinfo2 p").text()],
				typeSpeed: 0,
				startDelay: 2000
			});
		}
	};
	$scope.changeQues = function(){
		if ($scope.page == "cbstart"){
			$("#poq").text("What will she do? Do you want to report it?");
		}else if ($scope.page == "cbscene1"){
			$("#poq").text("Do you want to keep it?");
		}else if ($scope.page == "cbscene2"){
			$("#poq").text("Would you like to report this case to the Guidance Counselor or School Administrator?");
		}
	};
	$scope.exit = function(){
		$scope.page = "cbstart";
		$state.go('category');
		$("#cbinfo2").hide();
		$("#cbstart").show();
		$(".btnExit").hide();
		$(".btnNext").show();
	};
})
   
.controller('onlineHarassmentCtrl', function($scope) {

})

.controller('popoverCtrl', function($scope, $ionicPopover) {

	// .fromTemplate() method
	var template = '';

	$scope.popover = $ionicPopover.fromTemplate(template, {
		scope: $scope
	});

	// .fromTemplateUrl() method
	$ionicPopover.fromTemplateUrl('templates/my-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.popover = popover;
	});

	$scope.openPopover = function($event) {
		$scope.popover.show($event);
	};
	$scope.closePopover = function() {
		$scope.popover.hide();
	};
	//Cleanup the popover when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.popover.remove();
	});
	// Execute action on hide popover
	$scope.$on('popover.hidden', function() {
	// Execute action
	});
	// Execute action on remove popover
	$scope.$on('popover.removed', function() {
	// Execute action
	});
});
 