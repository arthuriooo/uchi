

$(document).ready(function(){

  var a, b, sum, firstArr, secondArr;

  var all = [[6,7,8,9],[11,12,13,14]];

  var error = false;

  var evaluate = function() {
    $("#firstNum").text(a);
    $("#secondNum").text(b);
  }

  var makeArrows = function() {
    var farrWidth = a * 5 + "%";
    var sarrWidth = b * 5 + "%";

    $("#farr").css({
      'width': farrWidth
    });
    $("#sarr").css({
      'width': sarrWidth,
      'left': farrWidth
    })

    $("#lineProcess").append(firstArr);
  }


  $("#selfChoice").on("click", function(){
    $("#chooseMethod").fadeOut(0);
    $("#chooseSelf").css("display", "flex");
  });

  $("#randomChoice").on("click", function(){
    var rand_a = Math.floor(Math.random() * all[0].length);
    var rand_sum = Math.floor(Math.random() * all[1].length);

    a = all[0][rand_a];
    sum = all[1][rand_sum];

    b = sum - a;

    evaluate();

    makeArrows();

    $("#choose").fadeOut(0);
    $("#task").css("display","flex");
  });

  

  $("#setValues").on("click", function(){
    a = parseInt($("#firstValue").val());
    sum = parseInt($("#secondValue").val()); 

    b = sum - a;

    if(jQuery.inArray(a, all[0]) === -1) {
      $("#aWrong").fadeIn(0);
      error = true;
    } else {
      $("#aWrong").fadeOut(0);
      error = false;
    }
    if(jQuery.inArray(sum, all[1]) === -1) {
      $("#sumWrong").fadeIn(0);
      error = true;
    } else {
      $("#sumWrong").fadeOut(0);
      error = false;
    }
    if (error === false) {
      evaluate();

      makeArrows();

      $("#chooseSelf").fadeOut(0);
      $("#task").css("display","flex");
    }
  });

  $("#aVal").on("focusout", function(){
    if ($("#aVal").val() != a) {
      $("#aVal").css('border-color', 'red');
      $("#firstNum").css('background-color','#f2994a');
    } else {
      $("#firstNum").css('background-color','white');
      $("#aVal").css('border','none').prop('disabled', true);
      $("#sarr").css('display','flex');
    }
  });
  $("#bVal").on("focusout", function(){
    if ($("#bVal").val() != b) {
      $("#bVal").css('border-color', 'red');
      $("#secondNum").css('background-color','#f2994a');
    } else {
      $("#secondNum").css('background-color','white');
      $("#bVal").css('border','none').prop('disabled', true);
      $("#sumNum").css('border', '2px solid grey').val('').prop('disabled', false);
    }
  });
  $("#sumNum").on("focusout", function(){
    if ($("#sumNum").val() != sum) {
      $("#sumNum").css('border-color', 'red');
    } else {
      $("#sumNum").css('border','none').prop('disabled', true);
    }
  });
});