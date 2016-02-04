//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
                  
    console.log('ready') 
      var clicked1,clicked2,clicked3,clicked4=false;

$('.game').hide(),$('.chat').hide(),$('.life').hide(),$('.event').hide();
    
    $('#first').hover(function() { // first function

      //turn on the tool tip
      $('.game').show(),$('.game').css('color','#f37832');

    }, function() { // second function
          if (!clicked1) { // second function
      $('.game').hide();
    }

    });
        $('#second').hover(function() { // first function

      //turn on the tool tip
      $('.life').show(),$('.life').css('color','#006db5');

    }, function() { // second function
          if (!clicked2) { // second function
      $('.life').hide();
    }


    });
    
        $('#third').hover(function() { // first function

      //turn on the tool tip
      $('.chat').show(),$('.chat').css('color','#27bd2b');

    }, function() {
    if (!clicked3) { // second function
      $('.chat').hide();
    }

    });
    
        $('#fourth').hover(function() { // first function

      //turn on the tool tip
      $('.event').show(),$('.event').css('color','#c354d5');

    }, function() { // second function
      if (!clicked4) { // second function
      $('.event').hide();
    }

    });

$('#first').on('click', function() {
        clicked1 = !clicked1;
    });

$('#second').on('click', function() {
        clicked2 = !clicked2;
    });
$('#third').on('click', function() {
        clicked3 = !clicked3;
    });
$('#fourth').on('click', function() {
        clicked4 = !clicked4;
    });


})