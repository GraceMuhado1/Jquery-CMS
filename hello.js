$(document).ready(function () {

   
    //  $('.action-button').click(function (e) {
    //         e.preventDefault();
          
    //         $('.info').html('<h2>ok</h2> ');
           
            
           
    //         console.log("succes");
    //         //  resultDisplay = $('.info');
    //     });
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
                   
                  //  var profileurl = response.imageUrl;
                    //  resultimg.html('result:' + footballers[0].imageUrl ); href="'+footballers[i].imageUrl+'" 
    
                    for (var i = 0; i < footballers.length; i++) {
    
                        var imageUrl = footballers[i].imageUrl;
                        var listItem =
                            '<div class="footballer-card">' +
                            '<div class="row">' +
                            '<div class="col-md-3">' +
                            '<a  class = "'+footballers[i].nationality+'" onClick="Test(\''+imageUrl+'\')"><img src=" ' + footballers[i].imageUrl + ' " class="footballer-img"></a>' +
                            '</div>' +
                           
                            // ' <img src=" '+ footballers[0].imageUrl +' " class="footballer-img" id = "resultDiv" ></img>'
                            '<div class="col-md-8">' +
                            '<p class="footballer-details">' +
                            '<p class="name"><b>Name: </b>' + footballers[i].name + '<p/>' +
                            '<p class="club"><b>Club: </b>' + footballers[i].club + '<p/>' +
                            '</p>'
                        '</div>' +
                            '</div>' +
                            '<div class = "info"> </div>' +
                            '</div>'
                            ;
                        
                        main.append(listItem);
                      
                       //$('.'+footballers[i].nationality).click(function (footballers) {
     
                          //console.log('ok' +  footballers[i].name );
                     //  console.log($this)
                     //});
    
    
                       // $('.'+i).click( createCallBack( footballers ));
    
                    // $('.'+footballers[i].nationality).click(function () {
                    //    // e.preventDefault();
                      
                    //   //  $('.info').html('<h2>ok</h2> ');
                       
                    //   var footballers = response.footballers;
                    // //    alert(footballers[i].name);
                    //     console.log(footballers[i].name);
                    //     //  resultDisplay = $('.info');
                    // });  
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
    
    function Test(imageUrl) {
        console.log('ok ' + imageUrl);
        $('.info').html('<img src = "'+imageUrl+'">');
    }
      
    // function createCallBack( footballers ){
    //     return function(){
    //        alert('ok' + i);
    // console.log('ok');
    //         //console.log(footballers[i].name);
    //     }
    // }
    
    