$(document).ready(function () {
  $("form.where-will-the-code-run_form").submit(function (event) {
    event.preventDefault();
    const where-will-the-code-run = $("input.where-will-the-code-run_answer").val();

      if (where-will-the-code-run === "mobile-friendly-website") {
        $('.mobile-friendly-website').show();
        $('.mobile-app').hide();
        $('.both-website-and-mobile-app').hide();
        $('.neither-website-nor-mobile-app').hide();
        $('.where-will-the-code-run_no-answer').hide();

      }

      if (where-will-the-code-run === "mobile-app") {
        $('.mobile-friendly-website').hide();
        $('.mobile-app').show();
        $('.both-website-and-mobile-app').hide();
        $('.neither-website-nor-mobile-app').hide();
        $('.where-will-the-code-run_no-answer').hide();

      }

      if (where-will-the-code-run === "both-website-and-mobile-app") {
        $('.mobile-friendly-website').hide();
        $('.mobile-app').hide();
        $('.both-website-and-mobile-app').show();
        $('.neither-website-nor-mobile-app').hide();
        $('.where-will-the-code-run_no-answer').hide();

      }

      elseif (where-will-the-code-run === "neither-website-nor-mobile-app") {
        $('.mobile-friendly-website').hide();
        $('.mobile-app').hide();
        $('.both-website-and-mobile-app').hide();
        $('.neither-website-nor-mobile-app').show();
        $('.where-will-the-code-run_no-answer').hide();

      }

      else {
        $('.mobile-friendly-website').hide();
        $('.mobile-app').hide();
        $('.both-website-and-mobile-app').hide();
        $('.neither-website-nor-mobile-app').hide();
        $('.where-will-the-code-run_no-answer').show();
      }
    
  });
});

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#age").val());
    const hand = $("select#hand").val();

    let match = (100 - age) * 3;
    if (hand === "right" && age < 26) {
      match += 50;
    }
    
    if (favoriteFood === "pizza" ) {
      match += 15;
    }
  
    if (favoriteColor === "turquoise" ) {
      match += 15;
    }
  
    
    if (ageJs >= 18) {
      $('#over18').show();
    }

    else {
      $('#under18').show();
    }

  });
});
