function fetchCompetences(callBack) { 
    $.get(applicationConfiguration.backendUrl +"/competences", function(response){
        callBack(response);
      }).fail(function(xhr) {
            console.log(xhr);
            alert('An unknown error occured.');
      });
}

function fetchStudents(callBack) { 
    $.get(applicationConfiguration.backendUrl +"/students", function(response){
        callBack(response);
      }).fail(function(xhr) {
            console.log(xhr);
            alert('An unknown error occured.');
      });
}

function fetchStudentsForSchoolClass(schoolClassId, callBack) { 
    $.get(applicationConfiguration.backendUrl +"/students/schoolclass/" + schoolClassId, function(response){
        callBack(response);
      }).fail(function(xhr) {
            console.log(xhr);
            alert('An unknown error occured.');
      });
}

function fetchEvaluations(callBack) { 
    $.get(applicationConfiguration.backendUrl +"/evaluations", function(response){
        callBack(response);
      }).fail(function(xhr) {
            console.log(xhr);
            alert('An unknown error occured.');
      });
}

function fetchEvaluation(id, callBack) { 
    $.get(applicationConfiguration.backendUrl +"/evaluations/" + id, function(response){
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

function saveEvaluationResults(evaluationResults, callBack) { 
    $.ajax({
        url:applicationConfiguration.backendUrl + "/evaluationresults/save",
        type:"POST",
        data:JSON.stringify(evaluationResults),
        contentType:"application/json; charset=utf-8",
        success: function () { callBack(); },
        error: function(error) {
            console.log(error);
            alert('An unknown error occured.');
        }
      }) 
}

function generateEvaluationResultsFromEvaluationTemplate(evaluation, callBack) { 
    $.ajax({
        url:applicationConfiguration.backendUrl + "/evaluations/generate",
        type:"POST",
        data:JSON.stringify(evaluation),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function (data) { callBack(data) },
        error: function(error) {
            console.log(error);
            alert('An unknown error occured.');
        }
      }) 
}

function getHtmlForSelectSchoolClasses(classesToRender) {
    var html = "";
    for(var i = 0; i < classesToRender.length; i++) {
        html += "<option value=\"" + classesToRender[i].id + "\">" + classesToRender[i].name + "</option>";
    }
    return html;
}