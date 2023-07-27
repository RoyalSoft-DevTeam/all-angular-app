var app = angular.module('myShoppingList', []);
app.controller('myCtrl', ($scope) => {
    $scope.products = ['Milk', 'Bread', 'Cheese'];
    $scope.addProduct = () => {
        $scope.errorText = ""
        if(!$scope.newProduct) {
            return;
        }
        if($scope.products.indexOf($scope.newProduct) == -1) {
            $scope.products.push($scope.newProduct);
        } else {
            $scope.errorText = "Sorry, this item is already existed in your shopping list."
        }
    };
    $scope.removeProduct = (index) => {
        $scope.errorText = "";
        $scope.products.splice(index, 1);
    }
});
