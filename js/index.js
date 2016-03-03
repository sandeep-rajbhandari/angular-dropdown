var app = angular.module('myapp', []);
app.controller('NotebookListCtrl', ['$scope','$timeout','$q','$filter',function ($scope,$timeout,$q,$filter) {
    var notebooks = [
        {
            "name": "Lenovo",
            "procesor": "Intel i5",
            "age": 2011
        },
        {
            "name": "Toshiba",
            "procesor": "Intel i7",
            "age": 2010
        },
        {
            "name": "Toshiba",
            "procesor": "Intel core 2 duo",
            "age": 2008
        },
        {
            "name": "HP",
            "procesor": "Intel core 2 duo",
            "age": 2012
        },
        {
            "name": "Acer",
            "procesor": "AMD",
            "age": 2006
        },
        {
            "name": "Lenovo",
            "procesor": "Intel i5",
            "age": 2009
        },
        {
            "name": "Toshiba",
            "procesor": "Intel i7",
            "age": 2008
        },
        {
            "name": "Lenovo",
            "procesor": "Intel i5",
            "age": 2011
        },
        {
            "name": "Toshiba",
            "procesor": "Intel i7",
            "age": 2010
        },
        {
            "name": "Toshiba",
            "procesor": "Intel core 2 duo",
            "age": 2008
        },
        {
            "name": "HP",
            "procesor": "Intel core 2 duo",
            "age": 2012
        },
        {
            "name": "Acer",
            "procesor": "AMD",
            "age": 2006
        },
        {
            "name": "Lenovo",
            "procesor": "Intel i5",
            "age": 2009
        },
        {
            "name": "Toshiba",
            "procesor": "Intel i7",
            "age": 2008
        },
        {
            "name": "Lenovo",
            "procesor": "Intel i5",
            "age": 2011
        },
        {
            "name": "Toshiba",
            "procesor": "Intel i7",
            "age": 2010
        },
        {
            "name": "Toshiba",
            "procesor": "Intel core 2 duo",
            "age": 2008
        },
        {
            "name": "HP",
            "procesor": "Intel core 2 duo",
            "age": 2012
        },
        {
            "name": "Acer",
            "procesor": "AMD",
            "age": 2006
        },
        {
            "name": "Lenovo",
            "procesor": "Intel i5",
            "age": 2009
        },
        {
            "name": "Toshiba",
            "procesor": "Intel i7",
            "age": 2008
        }
    ];
    $scope.getNotebooks = function (data) {
        var deferred = $q.defer();
        $timeout(function () {
            var result = [];
            deferred.resolve($filter('filter')(notebooks,data));
        }, 1000);
        return deferred.promise;
    }
    $scope.orderList = "name";
}]);

app.directive('dropDown', function () {
    return {
        restrict: 'EA',
        scope: {
            ngModel: '=',
            listItems: "&",
        },
        replace: true,
        templateUrl: 'template.html',
        link: function ($scope, elm, attrs) {
            $scope.hide='false';
            $scope.key=attrs.key;
            console.log("key: " + $scope.key);
            $scope.update = function () {
                console.log("update" + $scope.ngModel);
                $scope.listItems({$search:$scope.ngModel}).then(function(data){
                    $scope.array=data;
                });
            }
        }
    }
})