// Business Logic



// User Interface Logic

$(document).ready(function () {
  $("form#whereWillTheCodeRun").submit(function (event) {
    event.preventDefault();
    const answerWhereCodeRuns = $("input:radio[name=choiceWhereCodeRuns]:checked").val();
    let result1;
    if (answerWhereCodeRuns === "mobileFriendlyWebsite") {
        $("#whereWillTheCodeRun").hide();
        $("#mobileFriendlyWebsite").show();
    } else if (answerWhereCodeRuns === "mobile-app") {
        $("#whereWillTheCodeRun").hide();
        $('#mobileApp').show();
    } else if (answerWhereCodeRuns === "bothWebsiteAndMobileApp") {
        $("#whereWillTheCodeRun").hide();
        $("#bothWebsiteAndMobileApp").show();
    } else if (answerWhereCodeRuns === "neitherWebsiteNorMobileApp") {
        $("#whereWillTheCodeRun").hide();
        $("#neitherWebsiteNorMobileApp").show();
      }
    
  });
});

