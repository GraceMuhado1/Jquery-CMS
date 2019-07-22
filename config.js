$(document).ready(function (){


    var maintwo = $(".api-content");



    $.ajax({
        url: 'http://api.cdu.com.ph/infocenter/news/curl/entertainment_curl.php',
        success: function(resp) {
            //do stuff to the array based on response
            $.ajax({
                url: 'http://api.cdu.com.ph/infocenter/news/curl/entertainment_curl.php',
                success: function(data) {
                    //do more stuff based on other response
                    
                        var result = data.result;
        
        
                        for (var i = 0; i < result.length; i++) {
                            
                    var thisresult = result[i].headline;

                //    var thiscategory = result[i].category

                    console.log(thisresult);

                    var listItem =

                    '<a   onClick="Test( '+ thisresult[i].headline +')" class="post-title"> '+ result[i].headline +'</a>' ;
                    // '<button onClick = "'+thisresult[i].headline +'"  type="submit" class="btn newsbox-btn w-100">Subscribe</button>';

                    maintwo.append(listItem);
                        }
                
            }
            });
        }
    }); 
})

function Test(headline){
    console.log('ok');
    $('.api-headline').html('<p> ' + headline +' </p>');
}