(function(){
    
    var app = angular.module('ListApp', []);
    
    app.controller('ListController', ['$scope', function ($scope) {    
        
        $scope.list = [];
        $scope.list[0] = [];
        $scope.list[1] = [];

        index = 0;

        this.add = function() {  
            var col = Number($scope.colSelect);            
            $scope.list[col].push({ id: index, item: $scope.itemToAdd, col: col});
            $scope.itemToAdd = "";
            $scope.colSelect = "";
            index++;
        };
        
        this.delete = function(item) {             
            var targetColIndex = item.col;
            var targetColLength = $scope.list[targetColIndex].length;            
            var current;
            
            for (var i = 0; i < targetColLength; i++) {
                
                current = $scope.list[targetColIndex][i];                
                
                if (item.id === current.id ) {
                    index = i;
                    break;
                }
            }            
            $scope.list[targetColIndex].splice(index, 1);
        };
    }]);    
})();
            
