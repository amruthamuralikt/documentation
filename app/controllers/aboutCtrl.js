app.controller("aboutCtrl",function($scope,$http){
    
    $scope.msg="welcome";
    $scope.data=[];
  getResultsPage();
   function getResultsPage()
    {
        $http({
            url: URL + '/api/index.php',
            mathod:'GET'

        }).then(function(res){
            $scope.data = res.data.data;
        });
    }
});
