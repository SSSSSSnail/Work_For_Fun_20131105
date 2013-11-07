$("div#index").live('pageshow',function(event, ui){
                    var i = 0;
                    var myTimer;
                    
                    $(".clickDiv1").unbind('click').click(function(){
                                                          $.mobile.changePage("navigate.html");
                                                          });
                    
                    $(".clickDiv2").unbind('click').click(function(){
                                                          $(".pagefooter").css('background-image','url(images/page3_2.png)');
                                                          });
                    
                    $(".clickDiv3").unbind('click').click(function(){
                                                          $(".pagefooter").css('background-image','url(images/page3_3.png)');
                                                          });
                    
                    $(".clickDiv4").unbind('click').click(function(){
                                                          alert('Div4');
                                                          });
                    
                    $(".swipeArea").die('swipeleft').live('swipeleft',function(){
                                                          swithDoctor();
                                                          });
                    
                    swithDoctor();
                    
                    function swithDoctor(){
                    if($(".doctor").is(":animated")){
                    $(".doctor").stop(true, false);
                    }
                    i==3?i=1:i++;
                    self.clearTimeout(myTimer);
                    $(".doctorInfo").css({'background-image':'url(images/info'+i+'.png)',
                                         'opacity':'0',
                                         'top':'693px'
                                         })
                    $(".doctor").css({'background-image':'url(images/doctor'+i+'.png)',
                                     'opacity':'0',
                                     'left':'594px'
                                     }).animate({left: '58px', opacity:'1'},
                                                'slow',
                                                function(){
                                                $(".pagefooter").css('background-image','url(images/page3_'+i+'.png)');
                                                $(".doctorInfo").animate({top: '633px', opacity:'1'},
                                                                         'slow',
                                                                         function(){
                                                                         myTimer = self.setTimeout(function(){
                                                                                                    swithDoctor();
                                                                                                    }, 3000);
                                                                         });
                                                });
                    }
                    });




$("div#video1").live('pageshow',function(event, ui){
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