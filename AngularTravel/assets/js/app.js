var smileArray = angular.module('smileArray', []);

smileArray.directive('smileDirective', () => {
    return {
        restrict: "E",
        template: "<h1>This program made by smile.</h1>"
    }
});

smileArray.controller('smileFormCtrl', ($scope) => {
    $scope.master = {firstName: 'smile', lastName: 'sgh'};
    $scope.reset = () => {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
})

smileArray.controller('smileSelectCtrl', ($scope) => {
    // $scope.items = ['Aston Martin', 'Audi', 'Bentley', 'BMW', 'Fod'];
    $scope.items = {
        car01: 'Ford',
        car02: 'Audi',
        car03: 'Bentley',
        car04: 'BMW'
    }
    $scope.show = false;
    $scope.showMe = () => {
        $scope.show = !$scope.show;
    }
    $scope.count = 0;
})

smileArray.controller('smileCtrl', ($scope) => {
    $scope.fullName = 'Smile';
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
    ];
    $scope.changeName = () => {
        $scope.fullName = 'HUN';
    }
    $scope.orderByMe = (x) => {
        $scope.myOrderBy = x;
    }
})

smileArray.controller('smileCtrlTwo', ($scope) => {
    $scope.address = 622;
})

smileArray.controller('smileCtrlThree', ($scope) => {
    let carSet = ['Aston Martin', 'Audi', 'Bentley', 'BMW', 'Fod', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Fod'];
    let newSet = carSet.filter((car, index) => index % 2 == 1);
    console.log(newSet)
    $scope.cars = newSet;
})

smileArray.controller('smileServerCtrl', ($scope, $location, $http) => {
    $scope.service = $location.absUrl();
    $http({
        method: 'GET',
        url: 'http://localhost/server.php'
    }).then(function mySuccess(response) {
            $scope.server = response.data;
        }, function myError(response) {
            $scope.server = response.name;
        })
})

smileArray.run(($rootScope, $interval) => {
    $rootScope.title = new Date().toLocaleTimeString();
    $interval(() => {
        $rootScope.title = new Date().toLocaleTimeString();
    }, 1000);
})

smileArray.filter('myFormat', () => {
    return function(x) {
        var i, c, txt = "";
        
        for(i=0;i<x.length;i++) {
            c = x[i];
            if(i%2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    }
})