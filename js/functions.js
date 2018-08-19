function fetchCompetences(callBack) { 
    $.get(applicationConfiguration.backendUrl +"/competences", function(response){
        callBack(response);
      }).fail(function(xhr) {
            console.log(xhr);
            alert('An unknown error occured.');
      });
}

function fetchDetailCompetence(id, callBack) { 
    $.get(applicationConfiguration.backendUrl +"/competences/" + id, function(response){
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

function generateEvaluationResultsFromEvaluationTemplate(evaluation, callBack) { 
    $.ajax({
        url:applicationConfiguration.backendUrl + "/evaluations/generate",
        type:"POST",
        data:JSON.stringify(evaluation),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: callBack(),
        error: function(error) {
            console.log(error);
            alert('An unknown error occured.');
        }
      }) 
}