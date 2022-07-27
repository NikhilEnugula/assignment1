var app = angular.module("myApp", []);
app.controller("foodcontrol", function ($scope) {
  $scope.items = "";
  $scope.display = "";
  $scope.color = "";
  $scope.calculatelist = function () {
    if ($scope.items == "") {
      $scope.display = "Please enter items ";
      return;
    }

    var sizeOfItems = calculateLunch($scope.items);
    if (sizeOfItems == 0) $scope.display = "please Enter data first";
    if (sizeOfItems < 0 && sizeOfItems <= 3) $scope.display = "Enjoy";
    if (sizeOfItems < 3) $scope.display = "Too Much..!";

    function calculateLunch(string) {
      var listOfItems = String.split(";");
      return listOfItems.lenght;
    }
  };
});
