app.directive('lifestyle', function() {
  return {
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/lifestyle.html' 
  }; 
})
    
  