function fetchCompetences(callBack) { 
    $.get(applicationConfiguration.backendUrl +"/competences", function(response){
        callBack(response);
      }).fail(function(xhr) {
            console.log(xhr);
            alert('An unknown error occured.');
      });
  }

function deleteCompetence(id, callBack) {
    $.post(applicationConfiguration.backendUrl +"/competences/delete/" + id, function(response){
        callBack();
    }).fail(function(xhr) {
        console.log(xhr);
    });
}

function fetchClasses(callBack) { 
    $.get(applicationConfiguration.backendUrl +"/classes", function(response){
        callBack(response);
      }).fail(function(xhr) {
            console.log(xhr);
            alert('An unknown error occured.');
      });
  }