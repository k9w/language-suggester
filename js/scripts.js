// Business Logic



// User Interface Logic

$(document).ready(function () {
  $("form#questions").submit(function (event) {
    event.preventDefault();
    let question0;
    let question1;
    let question2;
    let question3;
    let question4;
    let answer = 0;
    if (question0 === "choice1") {
      answer = answer + 1;
    }
    if (question1 === "choice1") {
      answer = answer + 1;
    }

    if (question2 === "choice1") {
      answer = answer + 1;
    }

    if (question3 === "choice1") {
      answer = answer + 1;
    }

    if (question4 === "choice1") {
      answer = answer + 1;
    }
    alert(answer);
  });
});


/*

        $("#whereWillTheCodeRun").hide();
        $('#mobileApp').show();
    } else if (answerWhereCodeRuns === "bothWebsiteAndMobileApp") {
        $("#whereWillTheCodeRun").hide();
        $("#bothWebsiteAndMobileApp").show();
    } else if (answerWhereCodeRuns === "neitherWebsiteNorMobileApp") {
        $("#whereWillTheCodeRun").hide();
        $("#neitherWebsiteNorMobileApp").show();
      }
    

        $("#whereWillTheCodeRun").hide();
        $("#mobileFriendlyWebsite").show();
*/


