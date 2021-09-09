//TEXT CHANGE
function textChange(){
  document.getElementById('ali').innerHTML="Hello boys welcome to our campus.";

}

//text change
function textChangee(){
  document.getElementById('amar').innerHTML="Welcome to our office";
}

//textchange
function textChangeo(){
  document.getElementById('love').innerHTML=Date();
}

// date 
function textChanges(){
  var data ="Bangladesh is a beautiful country";

  document.getElementById('lov').innerHTML= data.repeat(4);
}
// alert 
function cAlert(){
  alert('page  loading time out');
}
function cAlert(){
 window.alert('Do You want delete it?');
}


// array 
const students =["foisal","bahadur","bullet",]
document.getElementById('osm').innerHTML = students[0];


// repeat 
function textRepeat(){
  var data ="welcome to our external office";

  document.getElementById('riad').innerHTML =data.repeat(4);
}
  // image change 
  function imageChangeOne(){
    document.getElementById('img').src = "images/ali.jpg";
  }

function imageChangeTwo(){
  document.getElementById('img').src = "images/ayan.jpg";
}






// jquery start 

$(document).ready(function(){

  
  $('#hide').click(function(){
    $('.hope').hide();
    
    });
    
    $('#show').click(function(){
        $('.hope').show();
        });
    
        $('#show').click(function(){
            $('.hope').show();
            });
    
            $('#h_s').click(function(){
                $('.hope').toggle();
                });  
                
                $('#fade').click(function(){
                    $('.hope').fadeOut();
                    });
                    
                    $('#fadein').click(function(){
                        $('.hope').fadeIn();
                        });
                        
                        $('#fadeboth').click(function(){
                            $('.hope').fadeToggle();
                            });   
                            $('#slideup').click(function(){
                                $('.hope').slideUp();
                                });       
                                $('#slidedown').click(function(){
                                    $('.hope').slideDown();
                                    });      
    
                                    $('#slideboth').click(function(){
                                        $('.hope').slideToggle();
                                        });
                                        $('#addclass').click(function(){ 
                                            $('.hope').addClass('hope_two');
                                            });
    
                                            $('#removeclass').click(function(){ 
                                                $('.hope').removeClass('hope_two');
                                                });
    
                                                $('#bothclass').click(function(){ 
                                                    $('.hope').toggleClass('hope_two');
                                                    });   
                                                    

                                                    $('#amari').click(function(){
                                                      alert("welcome sssb");
                                                    })
                                                
                                                    $('#hide').click(function(){
                                                      $('.sathi').hide();
                                                    });


})

// ====================================================
// coding practice 


$(document).ready(function(){
  $('#hid').click(function(){
    $('.sathi').hide();
  });


$('#sho').click(function(){
  $('.sathi').show();
});
$('#h_ss').click(function(){
  $('.sathi').toggle();
});

$('#fadeinn').click(function(){
  $('.sathi').fadeIn();
});
$('#fadeoutt').click(function(){
  $('.sathi').fadeOut();
});



$('#fadebothh').click(function(){
  $('.sathi').fadeToggle();
});

$('#slideupp').click(function(){
$('.sathi').slideUp();
});

$('#slidedownn').click(function(){
$('.sathi').slideDown();
});
$('#slidebothh').click(function(){
$('.sathi').slideToggle();
});





$('#addclasss').click(function(){
  $('.sathi').addClass('sathi_two');
});
$('#removeclasss').click(function(){
  $('.sathi').removeClass('sathi_two');
});

$('#bothclasss').click(function(){
  $('.sathi').toggleClass('sathi_two');
});


// click the image and show the alert message

$('#bg').click(function(){
  alert("welcome to our university");
});



// slidedown 
$('.one').click(function(){
$('.two').slideToggle(1000);
});
// =========================


$('.ahsan').click(function(){
$('.hasan').slideToggle(1000);
});
// ==========================================
$('.muller').click(function(){
$('.musiala').slideToggle(1000);
});


})