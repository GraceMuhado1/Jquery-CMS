$(document).ready(function (response) {

    var imageDisplay = response.footballers;
 
    $('.action-button').click(function (e) {
        e.preventDefault();
      
        $('.info').html('<h2>ok</h2> ');
       
        
       
        console.log("succes");
        //  resultDisplay = $('.info');
    });
    //Logic goes here
    var main = $(".main");
    // var getResult = resultDisplay;

    $.ajax({
        url: 'http://pure-forest-79660.herokuapp.com/footballers',
        type: "GET",
        dataType: 'JSON',

        success: function (response) {

            // getResult.html('result:' + response.footballers[0].imageUrl);

            if (response.success) {
                var footballers = response.footballers;
                var profileurl = response.imageUrl;
                //  resultimg.html('result:' + footballers[0].imageUrl ); href="'+footballers[i].imageUrl+'" 

                for (var i = 0; i < footballers.length; i++) {

                    var listItem =
                        '<div class="footballer-card">' +
                        '<div class="row">' +
                        '<div class="col-md-3">' +
                        '<a  class = "action-button" ><img src=" ' + footballers[i].imageUrl + ' " class="footballer-img"></a>' +
                        '</div>' +
                        '<div class = "info"> </div>' +
                        // ' <img src=" '+ footballers[0].imageUrl +' " class="footballer-img" id = "resultDiv" ></img>'
                        '<div class="col-md-8">' +
                        '<p class="footballer-details">' +
                        '<p class="name"><b>Name: </b>' + footballers[i].name + '<p/>' +
                        '<p class="club"><b>Club: </b>' + footballers[i].club + '<p/>' +
                        '</p>'
                    '</div>' +
                        '</div>' +
                        '</div>'
                        ;
                    main.append(listItem);
                }

            }


            else {
                alert("Oops, an error occured fetching the remote data.");
            }
        }

    });


    //for ( var i = 0; i < 5; i++ ) {
    //  $( "#clickview" ).eq( i ).on( "click", { value: i }, function( event ) {
    // var msgs = [
    //  "button = " + $( this ).index(),
    //  "event.data.value = " + event.data.value,
    //     "i = " + i
    // ];
    // logDiv.append( msgs.join( ", " ) + "<br>" );
    // });
    //  }




});


