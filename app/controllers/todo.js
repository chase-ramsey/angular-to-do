app.controller("TodoCtrl", function($scope) {

	$scope.title = "Uberproductify!!";
	$scope.textIN = "";
	$scope.anotherTextIN = "";
	$scope.testCheck = false;

	$scope.newTodo = "";

	$scope.tasks = [
		{
			name: "Make the bed",
			type: "home"
		},
		{
			name: "Eat breakfast",
			type: "home"
		},
		{
			name: "Check the network",
			type: "work"
		},
		{
			name: "Start up Slack",
			type: "work"
		}
	];

	$scope.addTodo = () => {
		$scope.tasks.push({name: $scope.newTodo, type: "home"});
		$scope.newTodo = "";
	}

	$scope.removeTodo = (task) => {
		const taskIndex = $scope.tasks.indexOf(task);
		$scope.tasks.splice(taskIndex, 1);
	}

});
