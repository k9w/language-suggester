// Business Logic

function returnLanguage(answer) {

}

// User Interface Logic

$(document).ready(function () {
  $("form#questions").submit(function (event) {
    event.preventDefault();
    let question0 = $("input:radio[name=question0]:checked").val();
    let question1 = $("input:radio[name=question1]:checked").val();
    let question2 = $("input:radio[name=question2]:checked").val();
    let question3 = $("input:radio[name=question3]:checked").val();
    let question4 = $("input:radio[name=question4]:checked").val();
    let answer = 0;
    if (question0 === "choice1") {
      answer++;
    }
    if (question1 === "choice1") {
      answer++;
    }

    if (question2 === "choice1") {
      answer++;
    }

    if (question3 === "choice1") {
      answer++;
    }

    if (question4 === "choice1") {
      answer++;
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


