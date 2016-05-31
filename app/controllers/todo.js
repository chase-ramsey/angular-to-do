app.controller("TodoCtrl", function($scope, $http) {

	$scope.title = "Uberproductify!!";
	$scope.textIN = "";
	$scope.anotherTextIN = "";
	$scope.testCheck = false;

	$scope.newTodo = "";
	$scope.taskType = "home";

	$http.get("/data/tasks.json")
	.then((response) => {
		$scope.tasks = response.data.tasks;
	});

	$scope.addTodo = () => {
		$scope.tasks.push({name: $scope.newTodo, type: $scope.taskType});
		$scope.newTodo = "";
	}

	$scope.removeTodo = (task) => {
		const taskIndex = $scope.tasks.indexOf(task);
		if (taskIndex >= 0) {
			$scope.tasks.splice(taskIndex, 1);
		}
	}

});
