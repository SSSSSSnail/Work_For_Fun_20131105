var myTimer;

var doctor_index = 0;
var doctor_detail_index;

var navigate_index;

$("div#index").live('pageinit',function(event, ui){
                    $(".clickDiv1").unbind('click').click(function(){
                                                          navigate_index = 1;
                                                          $.mobile.changePage("navigate.html", {transition: "pop"});
                                                          });
                    
                    $(".clickDiv2").unbind('click').click(function(){
                                                          navigate_index = 2;
                                                          $.mobile.changePage("navigate.html", {transition: "pop"});
                                                          });
                    
                    $(".clickDiv3").unbind('click').click(function(){
                                                          navigate_index = 3;
                                                          $.mobile.changePage("navigate.html", {transition: "pop"});
                                                          });
                    
                    $(".clickDiv4").unbind('click').click(function(){
                                                          navigate_index = 4;
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
                                $(".pagefooter").css('background-image', 'url(images/page3_'+doctor_index+'.png)');
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

function scrollto(){
    switch(navigate_index){
        case 1:
            return 433;
            break;
        case 2:
            return 269;
            break;
        case 3:
            return 109;
            break;
        case 4:
            return 10;
            break;
    }
}

$("div#navigate").live('pageinit',function(event, ui){
                       $(".homepage_button").unbind('click').click(function(){
                                                                   $.mobile.changePage("index.html", {transition: "pop", reverse:true});
                                                                   });
                       
                       $(".navigate_bg2").die('swipeleft').live('swipeleft',function(){
                                                                swithIcon(true);
                                                                }).die('swiperight').live('swiperight',function(){
                                                                                          swithIcon(false);
                                                                                          });
                       
                       $(".icon_middle").unbind('click').click(function(){
                                                               if(navigate_index == 4){
                                                                $.mobile.changePage("qa.html", {transition: "flow"});
                                                               }else{
                                                                $.mobile.changePage("video.html", {transition: "flow"});
                                                               }
                                                               });
                       
                       $(".bottom_text_1").unbind('click').click(function(){
                                                                 navigate_index = 1;
                                                                 $.mobile.changePage("video.html", {transition: "flow"});
                                                                 });
                       
                       $(".bottom_text_2").unbind('click').click(function(){
                                                                 navigate_index = 2;
                                                                 $.mobile.changePage("video.html", {transition: "flow"});
                                                                 });
                       
                       $(".bottom_text_3").unbind('click').click(function(){
                                                                 navigate_index = 3;
                                                                 $.mobile.changePage("video.html", {transition: "flow"});
                                                                 });
                       
                       $(".bottom_text_4").unbind('click').click(function(){
                                                                 navigate_index = 4;
                                                                 $.mobile.changePage("qa.html", {transition: "flow"});
                                                                 });
                       
                       }).live('pageshow',function(event, ui){
                       $(".navigate_bg2").show().animate({top: '118px'},
                                                         'normal',
                                                         function(){
                                                         $(".board_left_wb").css('background-image', 'url(images/board_left_wb_'+navigate_index+'.png)').show().animate({top: '133px'}, 'normal');
                                                         
                                                         $(".main_board").show().animate({top: '123px'},
                                                                                         'normal',
                                                                                         function(){
                                                                                         $(".board_left_color").css('background-image', 'url(images/board_left_color_'+navigate_index+'.png)')
                                                                                         .animate({opacity:'1'},
                                                                                                  'slow');
                                                                                         
                                                                                         $(".board_right").css('background-image', 'url(images/board_right_'+navigate_index+'.png)')
                                                                                         .animate({opacity:'1'},
                                                                                                  'slow');
                                                                                         
                                                                                         $(".icon_middle").css('background-image', 'url(images/icon'+navigate_index+'.png)')
                                                                                         .animate({opacity:'1'},
                                                                                                  'slow');
                                                                                         
                                                                                         $(".bottom_text").css({'background-image':'url(images/bottom_text_'+navigate_index+'.png)', 'left':scrollto()+'px'})
                                                                                         .animate({opacity:'1'},
                                                                                                  'slow');
                                                                                         
                                                                                         });
                                                         });
                       });

function swithIcon(isLeft){
    if(isLeft){
        navigate_index==4?navigate_index=1:navigate_index++;
        
        $(".board_left_wb").css('background-image', 'url(images/board_left_wb_'+navigate_index+'.png)');
        
        $(".board_left_color").css({'background-image':'url(images/board_left_color_'+navigate_index+'.png)', opacity:'0'})
        .animate({opacity:'1'},
                 'slow');
        
        $(".board_right").css({'background-image':'url(images/board_right_'+navigate_index+'.png)', opacity:'0'})
        .animate({opacity:'1'},
                 'slow');
        
        
        $(".icon_middle").animate({top: '375px', left:'374px', opacity:'0'},
                                  'normal',
                                  function(){
                                  $(".icon_middle").css({top: '474px', left:'460px','background-image':'url(images/icon'+navigate_index+'.png)', opacity:'1'});
                                  });
        $(".icon_right").css('background-image', 'url(images/icon'+navigate_index+'.png)').animate({top: '474px', left:'460px', opacity:'1'},
                                                                                                   'normal',
                                                                                                   function(){
                                                                                                   $(".icon_right").css({top: '375px', left:'553px', opacity:'0'});
                                                                                                   });
        $(".bottom_text").animate({'left':scrollto()+'px'},
                                  'normal',
                                  function(){
                                  $(".bottom_text").css('background-image', 'url(images/bottom_text_'+navigate_index+'.png)');
                                  });
    }else{
        navigate_index==1?navigate_index=4:navigate_index--;
        
        $(".board_left_wb").css('background-image', 'url(images/board_left_wb_'+navigate_index+'.png)');
        
        $(".board_left_color").css({'background-image':'url(images/board_left_color_'+navigate_index+'.png)', opacity:'0'})
        .animate({opacity:'1'},
                 'slow');
        
        $(".board_right").css({'background-image':'url(images/board_right_'+navigate_index+'.png)', opacity:'0'})
        .animate({opacity:'1'},
                 'slow');
        
        $(".icon_middle").animate({top: '375px', left:'553px', opacity:'0'},
                                  'normal',
                                  function(){
                                  $(".icon_middle").css({top: '474px', left:'460px','background-image':'url(images/icon'+navigate_index+'.png)', opacity:'1'});
                                  });
        $(".icon_left").css('background-image', 'url(images/icon'+navigate_index+'.png)').animate({top: '474px', left:'460px', opacity:'1'},
                                                                                                   'normal',
                                                                                                   function(){
                                                                                                   $(".icon_left").css({top: '375px', left:'374px', opacity:'0'});
                                                                                                   });
        
        $(".bottom_text").animate({'left':scrollto()+'px'},
                                  'normal',
                                  function(){
                                  $(".bottom_text").css('background-image', 'url(images/bottom_text_'+navigate_index+'.png)');
                                  });
    }
    
}

$("div#video").live('pageinit',function(event, ui){
                    $(".homepage_button").unbind('click').click(function(){
                                                                $.mobile.changePage("navigate.html", {transition: "flow", reverse:true});
                                                                });
//                     var mainVideo = $("video#mainVideo")[0];
//                     $(".videoloop1").unbind('click').click(function(){
//                                                            mainVideo.currentTime = 30;
//                                                            //                                                               mainVideo.load();
//                                                        //                                                               alert($("video#mainVideo")[0].currentTime);
//                                                            $.mobile.changePage("index.html", "slideup");
//                                                            });
                     //                        var mainVideoTimeListener = self.setInterval(function(){
                     //                                                                     alert($("video#mainVideo")[0].currentTime);
                     //                                                                     }, 500);
                    }).live('pageshow',function(event, ui){
                            $(".video_title").css('background-image', 'url(images/video_title_'+navigate_index+'.png)');
                            
                            });

$("div#qa").live('pageinit',function(event, ui){
                 $(".homepage_button").unbind('click').click(function(){
                                                             $.mobile.changePage("navigate.html", {transition: "flow", reverse:true});
                                                             });
                 
                 $("div[class^='q_']").unbind('click').click(function(){
                                                             showAnswerView($("div[class^='q_']").index(this)+1);
                                                             });
                 
                 $(".answer").unbind('click').click(function(){
                                                    $(".answer").fadeOut('fast', function(){
                                                                         $("div[class^='q_']").css('background-color', '');
                                                                         });
                                                    });
                 
                 }).live('pageshow',function(event, ui){
                            
                       
                         });

function showAnswerView(questionNo) {
    if(questionNo == 3 || questionNo == 5) return;
    
    $("div[class^='q_']").css({'-webkit-box-shadow': 'none', 'background-color': '#ffffff', opacity:'0.7'});
    $(".q_"+questionNo).css({'-webkit-box-shadow': '10px 10px 10px #7d7d7d', 'background-color': ''});
    if(questionNo == 1){
        $(".answer").hide().css({top:'190px', left:'243px',
                                '-webkit-box-shadow': '10px 10px 10px #b9b9b9',
                                'background-image': 'url(images/answer_'+questionNo+'.png)'}).slideDown('normal');
    }else if(questionNo == 4){
        $(".answer").hide().css({top:'190px', left:'243px',
                                '-webkit-box-shadow': '-10px 10px 10px #b9b9b9',
                                'background-image': 'url(images/answer_'+questionNo+'.png)'}).slideDown('normal');
    
    }else if(questionNo >= 8){
        $(".answer").hide().css({top:'190px', left:'243px',
                                '-webkit-box-shadow': '-10px -10px 10px #b9b9b9',
                                'background-image': 'url(images/answer_'+questionNo+'.png)'}).slideDown('normal');
    }else if(questionNo == 2 || questionNo == 6){
        $(".answer").hide().css({top:'190px', left:'507px',
                                '-webkit-box-shadow': '10px 10px 10px #b9b9b9',
                                'background-image': 'url(images/answer_'+questionNo+'.png)'}).slideDown('normal');
        
    }else if(questionNo == 7){
        $(".answer").hide().css({top:'190px', left:'0px',
                                '-webkit-box-shadow': '-10px -10px 10px #b9b9b9',
                                'background-image': 'url(images/answer_'+questionNo+'.png)'}).slideDown('normal');
    }else{
    
    }
}