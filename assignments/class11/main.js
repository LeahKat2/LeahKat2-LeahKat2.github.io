.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('hearings', {
        url: '/hearings',
        controller: 'HearingsController',
        templateUrl: "templates/hearings.html",
    })

    .state('hearing', {
        url: '/hearings/:hearingGUID',
        controller: 'HearingController',
        templateUrl: "templates/hearing.html"
    })
    $urlRouterProvider.otherwise("/hearings");
})
