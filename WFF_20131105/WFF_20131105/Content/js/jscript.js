var myTimer;
var doctor_index = 0;
var doctor_detail_index;

$("div#index").live('pageinit',function(event, ui){
                    $(".clickDiv1").unbind('click').click(function(){
                                                          $.mobile.changePage("navigate.html", {transition: "pop"});
                                                          });
                    
                    $(".clickDiv2").unbind('click').click(function(){
                                                          $.mobile.changePage("navigate.html", {transition: "pop"});
                                                          });
                    
                    $(".clickDiv3").unbind('click').click(function(){
                                                          $.mobile.changePage("navigate.html", {transition: "pop"});
                                                          });
                    
                    $(".clickDiv4").unbind('click').click(function(){
                                                          $.mobile.changePage("navigate.html", {transition: "pop"});
                                                          });
                    
                    $(".swipeArea").die('swipeleft').live('swipeleft',function(){
                                                          swithDoctor();
                                                          });
                    
                    $(".doctor").unbind('click').click(function(){
                                                       doctor_detail_index = doctor_index;
                                                       $.mobile.changePage("doctor_detail_"+doctor_detail_index+".html", {transition: "slideup"});
                                                       });
                    
                    }).live('pageshow',function(event, ui){
                            swithDoctor();
                            }).live('pagehide',function(event, ui){
                                    self.clearTimeout(myTimer);
                                    $(".doctorInfo").css('opacity','0');
                                    $(".doctor").css('opacity','0');
                                    });

function swithDoctor(){
    if($(".doctor").is(":animated")){
        $(".doctor").stop(true, false);
    }
    
    doctor_index==3?doctor_index=1:doctor_index++;
    
    self.clearTimeout(myTimer);
    $(".doctorInfo").css({'background-image':'url(images/info'+doctor_index+'.png)',
                         'opacity':'0',
                         'top':'693px'
                         });
    $(".doctor").css({'background-image':'url(images/doctor'+doctor_index+'.png)',
                     'opacity':'0',
                     'left':'594px'
                     }).animate({left: '58px', opacity:'1'},
                                'slow',
                                function(){
                                $(".pagefooter").css('background-image','url(images/page3_'+doctor_index+'.png)');
                                $(".doctorInfo").animate({top: '633px', opacity:'1'},
                                                         'slow',
                                                         function(){
                                                         myTimer = self.setTimeout(function(){
                                                                                   swithDoctor();
                                                                                   }, 3000);
                                                         });
                                });
}

$("div#doctor_detail").live('pageinit',function(event, ui){
                            $("div#doctor_detail").unbind('click').click(function(){
                                                                         $.mobile.changePage("index.html", {transition: "slideup", reverse:true});
                                                                         }).die('swipeleft').live('swipeleft',function(){
                                                                                                  swithDoctorDetail(true);
                                                                                                  }).die('swiperight').live('swiperight',function(){
                                                                                                                           swithDoctorDetail(false);
                                                                                                                           });
                            });

function swithDoctorDetail(isLeft){
    if(isLeft){
        if(doctor_detail_index == 3) return;
        doctor_detail_index++;
    }else{
        if(doctor_detail_index == 1) return;
        doctor_detail_index--;
    }
    $.mobile.changePage("doctor_detail_"+doctor_detail_index+".html", {transition: "slide", reverse: !isLeft});
}

$("div#navigate").live('pageshow',function(event, ui){
                       $(".navigate_bg2").show().animate({top: '118px'},
                                                         'normal',
                                                         function(){
                                                         $(".board_left_wb").show().animate({top: '133px'}, 'normal');
                                                         $(".main_board").show().animate({top: '123px'},
                                                                                         'normal',
                                                                                         function(){
                                                                                         $(".board_left_color").animate({opacity:'1'},
                                                                                                                        'slow',
                                                                                                                        function(){
                                                                                                                        
                                                                                                                        });
                                                                                         $(".board_right").animate({opacity:'1'},
                                                                                                                   'slow');
                                                                                         });
                                                         });
                       });



$("div#video1").live('pageinit',function(event, ui){
                     alert('video2 alert');
                     var mainVideo = $("video#mainVideo")[0];
                     $(".videoloop1").unbind('click').click(function(){
                                                            mainVideo.currentTime = 30;
                                                            //                                                               mainVideo.load();
                                                        //                                                               alert($("video#mainVideo")[0].currentTime);
                                                            $.mobile.changePage("index.html", "slideup");
                                                            });
                     //                        var mainVideoTimeListener = self.setInterval(function(){
                     //                                                                     alert($("video#mainVideo")[0].currentTime);
                     //                                                                     }, 500);
                     });