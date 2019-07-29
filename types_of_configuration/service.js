$(document).ready(function () {

    var main = $(".resultmain");
    var maintwo = $(".resultwo");


    $.ajax({
        url: 'http://api.cdu.com.ph/infocenter/news/curl/entertainment_curl.php',
        type: "GET",
        dataType: 'JSON',

        success: function (response) {


            if (response.success) {
                var result = response.result;


                for (var i = 0; i < result.length; i++) {

                    // var thumbnail = result[i].thumbnail;

                    // var slicestwo = footballers.slice(0,4);

                   // var slices = footballers.slice(0,3);

                    var listItem =
                        '<li class="nav-item col-md-2 " onclick = "promoPop()" >' +
                        '<a class="nav-link "  onClick="Test(\'' + result[i].image + '\')"><img src=" ' + result[i].thumbnail + ' " class = "thumbnail"> </a>' +
                        '<p>'+ result.headline + '<p>'
                        '</li>';
               
                    main.append(listItem);

                    // var listItemtwo =
                    //     '<li class="nav-item col-md-2 " onclick = "pbaPop()" >' +


                    //     '<a class="nav-link"  onClick="Test(\'' + slicestwo[i].imageUrl + '\')"> <img src=" ' + slicestwo[i].imageUrl + ' "></a>' +
                    //     '</li>';

                    //       maintwo.append(listItemtwo);
                }
            }

            else {
                alert("Oops, an error occured fetching the remote data.");
            }
        }

    });

});

function Test(image) {
    console.log('ok ' + image);
    $('.info').html('<span >x</span><img src = "' + image + '" class = "infoimg">');
}


// document.getElementById('content').style.display = "none";
function promoPop() {

    document.getElementById('thisinfo').style.display = "block";
    document.getElementById('content').style.display = "block";
}//end iconPop JS function

function promoUnPop() {
    document.getElementById('thisinfo').style.display = "none";
    document.getElementById('content').style.display = "none";
}



