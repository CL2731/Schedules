var textArea = $('textarea')
var nine = $('#nine')
var ten = $('#ten')
var eleven = $('#eleven')
var twelve = $('#twelve')
var thirteen = $('#thirteen')
var fourteen = $('#fourteen')
var fifteen = $('#fifteen')
var sixteen = $('#sixteen')
var seventeen = $('#seventeen')


setInterval (function (){
    for (i=0; i < textArea.length; i++){
        if (moment().hour() === textArea[i].id){
            textArea[i].classList.add('present')
            console.log(moment().hour())
        } else if (moment().hour() < textArea[i].id){
            textArea[i].classList.add('future')
        } else {
            textArea[i].classList.add('past')
        }
    }
}, 1000)

nine.on('click', function(event){
    event.preventDefault();
    console.log(nine);
    var txtNine = $('#9').val();
    console.log(txtNine);
    localStorage.FirstNine = txtNine
})

ten.on('click', function(event){
    event.preventDefault();
    console.log(ten);
    var txtTen = $('#10').val();
    console.log(txtTen);
    localStorage.FirstTen = txtTen
})

eleven.on('click', function(event){
    event.preventDefault();
    console.log(eleven);
    var txtEleven = $('#11').val();
    console.log(txtEleven);
    localStorage.FirstEleven = txtEleven
})

twelve.on('click', function(event){
    event.preventDefault();
    console.log(twelve);
    var txtTwelve = $('#12').val();
    console.log(txtTwelve);
    localStorage.FirstTwelve = txtTwelve
})

thirteen.on('click', function(event){
    event.preventDefault();
    console.log(thirteen);
    var txtThirteen = $('#13').val();
    console.log(txtThirteen);
    localStorage.FirstThirteen = txtThirteen
})

fourteen.on('click', function(event){
    event.preventDefault();
    console.log(fourteen);
    var txtFourteen = $('#14').val();
    console.log(txtFourteen);
    localStorage.FirstFourteen = txtFourteen
})

fifteen.on('click', function(event){
    event.preventDefault();
    console.log(fifteen);
    var txtFifteen = $('#15').val();
    console.log(txtFifteen);
    localStorage.FirstFifteen = txtFifteen
})

sixteen.on('click', function(event){
    event.preventDefault();
    console.log(sixteen);
    var txtSixteen = $('#16').val();
    console.log(txtSixteen);
    localStorage.FirstSixteen = txtSixteen
})

seventeen.on('click', function(event){
    event.preventDefault();
    console.log(seventeen);
    var txtSeventeen = $('#17').val();
    console.log(txtSeventeen);
    localStorage.FirstSixteen = txtSeventeen
})

    var currentDay = moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDay)
    console.log(currentDay)

