// Business Logic

// let language;

function chooseLanguage(answer) {

  if (answer <= 1) {
    language = "#ruby";
  } else if (answer <= 3) {
    language = "#csharp";
  } else if (answer <= 5) {
    language = "#javascript";
  }
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
    chooseLanguage(answer);
    $(".language").hide();
    $(language).show();
  });
});
