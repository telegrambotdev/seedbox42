
app.controller('dashboardCtrl', function ($scope, $rootScope, $timeout, $location, $filter, RequestHandler, socket, Tools) {

	console.log("dashboardCtrl");

	$scope.newMessage = "";
	$scope.content = [];
	var roles = {
		"1" : "user",
		"0": "admin",
	};

	Tools.getConfig(true).then(function(result){
		Tools.getUser().then(function(user){
			for (var key in result.dashboard.panels){
				if (result.dashboard.panels[key].enabled == "all" || result.dashboard.panels[key].enabled == roles[user.role])
					$scope.content.push(result.dashboard.panels[key]);
			}
			$scope.content = $filter('orderBy')($scope.content, 'order', false);
		});
	});

});
