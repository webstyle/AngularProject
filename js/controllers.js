var newsApp = angular.module('newsApp', []);

newsApp.controller('mainCtrl', function($scope) {
	$scope.appName = 'News24';
});

newsApp.controller('theLastNewsCtrl', function ($scope, $http) {
  $http.get('news/theLastNews.json').success(function(data) {
    $scope.newsList = data;
  });

  $scope.orderProp = 'age';
});