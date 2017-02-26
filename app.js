angular.module("app", ["chart.js"])

.controller("BarCtrl", function($scope) {

    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];


    $scope.options = {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                    beginAtZero: true // minimum value will be 0.
                }
            }]
        }
    };
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
});