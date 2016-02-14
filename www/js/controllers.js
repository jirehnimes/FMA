angular.module('app.controllers', [])

.controller('mainCtrl', function($scope) {
	$scope.exitApp = function(){
		ionic.Platform.exitApp();
	};
	// allow native scrollbar in android
	$('html').addClass('android-scroll-bar');
})

.controller('aboutCtrl', function($scope) {

})

.controller('categoryCtrl', function($scope) {
})

.controller('identityTheftCtrl', function($scope) {
	var autoScroll;
	$scope.page = "itstart";

	$scope.asFunc = function(){
		var em = $("#" + $scope.page + " div.typeddiv")[0].scrollHeight;
		$("#" + $scope.page + " div.typeddiv").scrollTop(em);
	};

	$scope.typedFunc = function(){
		$("#" + $scope.page + " div.typeddiv").hide(0).delay(2000).fadeIn("slow");
		$("#" + $scope.page + " div.typeddiv p").typed({
			stringsElement: $("#" + $scope.page + " div.pcontent"),
			typeSpeed: 0,
			contentType: 'html',
			startDelay: 2000,
			callback: function() {
				$scope.btnCon();
				clearInterval(autoScroll);
			}
		});
	};

	$scope.scrollInit = function(){
		autoScroll = setInterval($scope.asFunc, 500);
	};

	$scope.stopAS = function(){
		clearInterval(autoScroll);
	};

	$scope.contAS = function(){
		autoScroll = setInterval($scope.asFunc, 500);
	};

	$scope.btnCon = function(){
		if($scope.page == "itend1" || $scope.page == "itend2"){
			$(".btnSkip").hide();
			$(".btnExit").show();
		}else{
			$(".btnSkip").hide();
			$(".btnNext").show();
		}
	};

	$scope.skip = function(){
		$scope.btnCon();
		$("#" + $scope.page + " div.typeddiv p").typed('stops');
		$("#" + $scope.page + " div.typeddiv").stop().fadeIn();
		// $("#" + $scope.page + " div.typeddiv p").text($("#" + $scope.page + " p").text());
		$("#" + $scope.page + " div.typeddiv").html($("#" + $scope.page + " .pcontent").show());
		clearInterval(autoScroll);
	};

	$scope.changePage = function(ans){
		if ($scope.page == "itstart" && ans == "yes"){
			$("#itscene2").show();
			$("#itstart").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "itscene2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itstart" && ans == "no"){
			$("#itscene1").show();
			$("#itstart").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "itscene1";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene1" && ans == "yes"){
			$("#itend2").show();
			$("#itscene1").hide();
			$(".btnSkip").show();
			$(".btnExit").hide();
			$scope.page = "itend2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene1" && ans == "no"){
			$("#itscene2").show();
			$("#itscene1").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "itscene2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene2" && ans == "yes"){
			$("#itscene3").show();
			$("#itscene2").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "itscene3";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene2" && ans == "no"){
			$("#itend2").show();
			$("#itscene2").hide();
			$(".btnSkip").show();
			$(".btnExit").hide();
			$scope.page = "itend2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene3" && ans == "yes"){
			$("#itscene4").show();
			$("#itscene3").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "itscene4";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene3" && ans == "no"){
			$("#itend2").show();
			$("#itscene3").hide();
			$(".btnSkip").show();
			$(".btnExit").hide();
			$scope.page = "itend2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene4" && ans == "yes"){
			$("#itend1").show();
			$("#itscene4").hide();
			$(".btnSkip").show();
			$(".btnExit").hide();
			$scope.page = "itend1";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "itscene4" && ans == "no"){
			$("#itend2").show();
			$("#itscene4").hide();
			$(".btnSkip").show();
			$(".btnExit").hide();
			$scope.page = "itend2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}
	};

	$scope.changeQues = function(){
		if ($scope.page == "itscene1"){
			$("#poq1").text("If you keep it to yourself, the tarpaulin will still be there. Your reputation will be put in harm. Are you still keep it?");
		}else if ($scope.page == "itscene2"){
			$("#poq1").text("Do you want to gather evidences and other information?");
		}else if ($scope.page == "itscene3"){
			$("#poq1").text("Report  to PNP-Anti VAWC Desk and City Social Welfare office?");
		}else if ($scope.page == "itscene4"){
			$("#poq1").text("Filing a case against the perpetrator?");
		}
	};

	$scope.exit = function(){
		$state.reload();
	};
})

.controller('cyberBullyingCtrl', function($scope, $state, $ionicPlatform, $cordovaMedia) {

	var autoScroll;
	$scope.page = "cbstart";

	$ionicPlatform.ready(function() {
		var src = "/android_asset/www/audio/case21.mp3";
		var media = $cordovaMedia.newMedia(src);

		$scope.playMedia = function() {
			media.play();
		};

		$scope.pauseMedia = function() {
			media.pause();
		};

		$scope.stopMedia = function() {
			media.stop();
		};

		$scope.$on('destroy', function() {
			media.release();
		});
	});

	$ionicPlatform.onHardwareBackButton(function(e){
		$scope.skip();
	});

	$scope.stopMedia();
	$scope.playMedia();

	$scope.asFunc = function(){
		var em = $("#" + $scope.page + " div.typeddiv")[0].scrollHeight;
		$("#" + $scope.page + " div.typeddiv").scrollTop(em);
	};

	$scope.typedFunc = function(){
		$("#" + $scope.page + " div.typeddiv").hide(0).delay(2000).fadeIn("slow");
		$("#" + $scope.page + " div.typeddiv p").typed({
			stringsElement: $("#" + $scope.page + " div.pcontent"),
			typeSpeed: 0,
			contentType: 'html',
			startDelay: 2000,
			callback: function() {
				$scope.btnCon();
				clearInterval(autoScroll);
			}
		});
	};

	$scope.scrollInit = function(){
		autoScroll = setInterval($scope.asFunc, 500);
	};

	$scope.stopAS = function(){
		clearInterval(autoScroll);
	};

	$scope.contAS = function(){
		autoScroll = setInterval($scope.asFunc, 500);
	};

	$scope.btnCon = function(){
		if($scope.page == "cbend1" || $scope.page == "cbend2" || $scope.page == "cbinfo1"){
			$(".btnSkip").hide();
			$(".btnNext1").show();
		}else if($scope.page == "cbinfo2"){
			$(".btnSkip").hide();
			$(".btnExit").show();
		}else{
			$(".btnSkip").hide();
			$(".btnNext").show();
		}
	};

	$scope.skip = function(){
		$scope.btnCon();
		$("#" + $scope.page + " div.typeddiv p").typed('stops');
		$("#" + $scope.page + " div.typeddiv").stop().fadeIn();
		// $("#" + $scope.page + " div.typeddiv p").text($("#" + $scope.page + " p").text());
		$("#" + $scope.page + " div.typeddiv").html($("#" + $scope.page + " .pcontent").show());
		clearInterval(autoScroll);
		$scope.stopMedia();
	};

	$scope.changePage = function(ans){
		if ($scope.page == "cbstart" && ans == "yes"){
			$("#cbscene2").show();
			$("#cbstart").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "cbscene2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
			$scope.stopMedia();
			$scope.playMedia();
		}else if ($scope.page == "cbstart" && ans == "no"){
			$("#cbscene1").show();
			$("#cbstart").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "cbscene1";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "cbscene1" && ans == "yes"){
			$("#cbend1").show();
			$("#cbscene1").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "cbend1";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "cbscene1" && ans == "no"){
			$("#cbscene2").show();
			$("#cbscene1").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "cbscene2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "cbscene2" && ans == "yes"){
			$("#cbend2").show();
			$("#cbscene2").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "cbend2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "cbscene2" && ans == "no"){
			$("#cbend1").show();
			$("#cbscene2").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "cbend1";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if (($scope.page == "cbend1" || $scope.page == "cbend2") && ans == "next"){
			$("#cbinfo1").show();
			$("#cbend1").hide();
			$("#cbend2").hide();
			$(".btnSkip").show();
			$(".btnNext").hide();
			$scope.page = "cbinfo1";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}else if ($scope.page == "cbinfo1" && ans == "next"){
			$("#cbinfo2").show();
			$("#cbinfo1").hide();
			$(".btnNext1").hide();
			// $(".btnExit").show();
			$(".btnSkip").show();
			$scope.page = "cbinfo2";
			autoScroll = setInterval($scope.asFunc, 500);
			$scope.typedFunc();
		}
	};

	$scope.changeQues = function(){
		if ($scope.page == "cbscene1"){
			$("#poq").text("Do you want to keep it?");
		}else if ($scope.page == "cbscene2"){
			$("#poq").text("Would you like to report this case to the Guidance Counselor or School Administrator?");
		}
	};

	$scope.exit = function(){
		$state.reload();
	};
})

.controller('onlineHarassmentCtrl', function($scope) {

})

.controller('popoverCtrl', function($scope, $ionicPopover) {

	// .fromTemplateUrl() method
	$ionicPopover.fromTemplateUrl('templates/my-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.popover = popover;
	});

	$scope.openPopover = function($event, cat) {
		if (cat == 'it'){
			$scope.popover.show($event);
			$('#poq1').show();
		}else if (cat == 'cb'){
			$scope.popover.show($event);
			$('#poq').show();
		}else if (cat == 'oh'){
			$scope.popover.show($event);
			$('#poq2').show();
		}
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
})

// .controller('mediaCtrl', function($scope, $ionicPlatform, $cordovaMedia) {

  	// $ionicPlatform.ready(function() {
//       var src = "/android_asset/www/audio/test.mp3";
//       var media = $cordovaMedia.newMedia(src);

//       $scope.playMedia = function() {
//          media.play();
//       };

//       $scope.pauseMedia = function() {
//          media.pause();
//       };

//       $scope.stopMedia = function() {
//          media.stop();
//       };

//       $scope.$on('destroy', function() {
//          media.release();
//       });

   // });

// })
