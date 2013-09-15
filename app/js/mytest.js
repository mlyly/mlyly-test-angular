
var app = angular.module("MyTest", ["ngRoute", "ngResource", "ngAnimate"]);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/', {templateUrl: 'partials/home.html'}).
                when('/about', {templateUrl: 'partials/about.html'}).
                when('/contact', {templateUrl: 'partials/contact.html'}).
                when('/login', {templateUrl: 'partials/login.html'}).
                when('/search', {templateUrl: 'partials/search.html'}).
                otherwise({redirectTo: '/'});
    }]);


app.controller("MyTestCtrl", function($scope, $log) {
    $log.debug("MyTestCtrl()");

    $scope.searchText = "";
    $scope.color = null; 
    $scope.colors = [{name: "red", shade: "dark"}, {name: "white", shade: "bright"}]; 

    $scope.$on("testEvent", function($event) {
        console.log($event);
        $scope.searchText = "WHAAT!";    
    });
    
});

app.controller("MySearchCtrl", function($scope, $log) {
    $log.debug("MySearchCtrl()");

    $scope.sendEvent = function () {
      $scope.$emit("testEvent", { foo: "bar" });
    };
});



app.filter("reverse", function() {
   return function(input) {
        return input.split("").reverse().join("");
   }    
});
