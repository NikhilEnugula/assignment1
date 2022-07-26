var app = angular.module("myApp", []);
app.controller("foodCon", function ($scope) {
  $scope.foodlist = "";
  $scope.message = "";
  $scope.color = "";

  $scope.countItems = function () {
    if ($scope.foodlist == "") {
      $scope.message = "please enter items";
      $scope.color = getColor(0);
      return;
    }
    var listSize = calculateLunch($scope.foodlist);
    function calculateLunch(string) {
      var listOfItems = string.split(",");
      return listOfItems.length;
    }

    if (listSize <= 0) $scope.message = "please Enter data first";
    if (listSize > 0 && listSize <= 3) $scope.message = "Enjoy";
    if (listSize > 3) $scope.message = "Too Much..!";

    $scope.color = getColor(listSize);
    function getColor(listSize) {
      var colorValue = "green";
      if (listSize <= 0) colorValue = "red";
      return { color: colorValue };
    }
  };
});
