window.addEventListener("load", start, false);

function start() {

    console.log("event starting....");
    
    registerListeners()
}




//rawajax
// var asyncRequest;

// function getContent( url ) {
//       console.log(" getContent Starting...")
//       try {
//         asyncRequest = new XMLHttpRequest();
//         asyncRequest.addEventListener("readystatechange", stateChange, false);
//         asyncRequest.open("GET", url, true);
//         asyncRequest.send(null);
//       }
//         catch(exception){
//           alert(exception);
//         }
// }

// function stateChange(){
        
//     if(asyncRequest.readyState == 4 && asyncRequest.status == 200){
//       document.getElementById("contentArea").innerHTML = asyncRequest.responseText;

//     }

// }

// reactjs
var url = "Rohan1.html";
$(
    function(){
        $("#Rohan1").click(
            function(event){
                $("#contentArea").load(url);

            }
        );
    }
)

$(
    function() {
        $("#Rohan1.jpg").click(
            function(event) {

                animatePicture()


                function animatePicture() {
                    $("#Rithwik1").animate({height : 250} , "slow" );
                    $("#Rithwik1").animate({width : 250} , "slow" );

                    $("#pic").css("background-color", "blue");

                    $("#Rithwik1").animate({height : 150 , width:150} , "slow" );

                    $("#Rithwik1").animate({height : 100} , "slow" );
                    $("#Rithwik1").animate({width : 100} , "slow", animatePicture());
                }
            }
        );

        // $("#stopanimateButton").click(
        //     function(event) {
        //         $("#Rithwik1").stop(1);
        //         $("#pic").stop(1);
        //     }
        // );

    }
);