//JS class for to-do list


angular.module('gPlus', [])

//Controller for the section that adds new items to the to-do list
.controller('populator',
    function($scope, $http) {
        $scope.test = "Test";
        $http.get('assets/data/data.json')
         .success(function (res) {

            //  $scope.notifs = res.Notifs;
             $scope.news = res.News;
             $scope.tech = res.Tech;
             $scope.others = res.Others;


         })
         .error(function (data, status, headers, config) {
             alert("Couldn't connect to data source.");
         });
})
.controller('formValidationTest',
  function($scope){
    $scope.message = 'The form is not valid. Please fill accordingly.';
     $scope.reqData = {textTest: '', numTest: '', lenTest: ''};
    $scope.check = function(isValid){
      if(isValid){
        alert('The form has been filled correctly');
      }
      if(!isValid){
        alert('The form is terrible!');
      }

    };
  })
;
