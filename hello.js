$(document).ready(function () {

    var main = $(".resultmain");
    var maintwo = $(".resultwo");


    $.ajax({
        url: 'http://pure-forest-79660.herokuapp.com/footballers',
        type: "GET",
        dataType: 'JSON',

        success: function (response) {


            if (response.success) {
                var footballers = response.footballers;


                for (var i = 0; i < footballers.length; i++) {

                    //var imageUrl = footballers[i].imageUrl;

                    var slicestwo = footballers.slice(0, 3);

                    var slices = footballers.slice(4, 7);

                    var listItem =
                        '<li class="nav-item col-md-2 " onclick = "pbaPop()" >' +
                        '<a class="nav-link "  onClick="Test(\'' + slices[i].imageUrl + '\')"> <img src=" ' + slices[i].imageUrl + ' "></a>' +
                        '</li>';

                            main.append(listItem);

                    var listItemtwo =
                        '<li class="nav-item col-md-2 " onclick = "pbaPop()" >' +

                        
                        '<a class="nav-link"  onClick="Test(\'' + slicestwo[i].imageUrl + '\')"> <img src=" ' + slicestwo[i].imageUrl + ' "></a>' +
                        '</li>';

                          maintwo.append(listItemtwo);
                    }
            }

            else {
                alert("Oops, an error occured fetching the remote data.");
            }
        }

    });

});

function Test(imageUrl) {
    console.log('ok ' + imageUrl);
    $('.info').html('<span >x</span><img src = "' + imageUrl + '">');
}


document.getElementById('content').style.display="none";
function pbaPop(){
   
    document.getElementById('thisinfo').style.display="block";
    document.getElementById('content').style.display="block";
}//end iconPop JS function

function pbaUnPop(){
    document.getElementById('thisinfo').style.display="none";
   document.getElementById('content').style.display="none";
}



