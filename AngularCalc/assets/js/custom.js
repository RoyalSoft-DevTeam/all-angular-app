var app = angular.module('smileCalc', []);

let first, second, operator;
let flag = false;

app.service('smileService', function() {
    this.compare = (x, y) => {
        if(x == y) return true;
        else return false;
    }
});

app.controller('smileCalcCtrl', ($scope, smileService) => {
    $scope.arrayRow1 = ['7', '8', '9', '/'];
    $scope.arrayRow2 = ['4', '5', '6', '*'];
    $scope.arrayRow3 = ['1', '2', '3', '-'];
    $scope.arrayRow4 = ['0', '.', '=', '+'];

    $scope.setNumber = (symbol) => {
        let numberTypes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let operatorTypes = ['*', '/', '+', '-'];

        if(numberTypes.indexOf(symbol) != -1) {
            if(flag) {
                clear();
                flag = false;
            }
            $scope.valueInput += symbol;
        } else if(operatorTypes.indexOf(symbol) != -1) {
            first = $scope.valueInput;
            operator = symbol;
            flag = true;
        } else if(smileService.compare(symbol, "="))  {
            second = $scope.valueInput;
            $scope.valueInput = sum(first, second, operator);
            flag = false;
        }
        else {
            alert('You must give correct symbol.')
        }
    }

    let clear = () => {
        $scope.valueInput = '';
    }

    let sum = (x, y, op) => {
        if(op == '+')
            return String(Number(x) + Number(y));
        else if(op == '-')
            return String(Number(x) - Number(y));
        else if(op == '*')
            return String(Number(x) * Number(y));
        else return String(Number(x) / Number(y));
    }
})