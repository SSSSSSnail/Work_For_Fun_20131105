var myTimer;

var doctor_index = 0;
var doctor_detail_index;

var navigate_index;
var navigate_animate;

var mainVideoTimeListener;

$("div#index").live("pageinit",function (event, ui) {
    $(".clickDiv1").unbind('click').click(function () {
        navigate_index = 1;
        $.mobile.changePage("navigate.html", {transition: "pop"});
    });

    $(".clickDiv2").unbind('click').click(function () {
        navigate_index = 2;
        $.mobile.changePage("navigate.html", {transition: "pop"});
    });

    $(".clickDiv3").unbind('click').click(function () {
        navigate_index = 3;
        $.mobile.changePage("navigate.html", {transition: "pop"});
    });

    $(".clickDiv4").unbind('click').click(function () {
        navigate_index = 4;
        $.mobile.changePage("navigate.html", {transition: "pop"});
    });

    $(".swipeArea").die('swipeleft').live('swipeleft', function () {
        swithDoctor();
    });

    $(".doctor").unbind('click').click(function () {
        doctor_detail_index = doctor_index;
        $.mobile.changePage("doctor_detail_" + doctor_detail_index + ".html", {transition: "slideup"});
    });

}).live('pageshow',function (event, ui) {
        navigate_animate = true;
        swithDoctor();
    }).live('pagehide', function (event, ui) {
        self.clearTimeout(myTimer);
        $(".doctorInfo").css('opacity', '0');
        $(".doctor").css('opacity', '0');
    });

function swithDoctor() {
    if ($(".doctor").is(":animated")) {
        $(".doctor").stop(true, false);
    }

    doctor_index == 3 ? doctor_index = 1 : doctor_index++;

    self.clearTimeout(myTimer);
    $(".doctorInfo").css({'background-image': 'url(images/info' + doctor_index + '.png)',
        'opacity': '0',
        'top': '693px'
    });
    $(".doctor").css({'background-image': 'url(images/doctor' + doctor_index + '.png)',
        'opacity': '0'
    }).animate({opacity: '1'},
        'slow',
        function () {
            $(".pagefooter").css('background-image', 'url(images/page3_' + doctor_index + '.png)');
            $(".doctorInfo").animate({top: '603px', opacity: '1'},
                'slow',
                function () {
                    myTimer = self.setTimeout(function () {
                        swithDoctor();
                    }, 3000);
                });
        });
}

$("div#doctor_detail").live('pageinit', function (event, ui) {
    $("div#doctor_detail").unbind('click').click(function () {
        $.mobile.changePage("index.html", {transition: "slideup", reverse: true});
    }).die('swipeleft').live('swipeleft',function () {
            swithDoctorDetail(true);
        }).die('swiperight').live('swiperight', function () {
            swithDoctorDetail(false);
        });
});

function swithDoctorDetail(isLeft) {
    if (isLeft) {
        if (doctor_detail_index == 3) return;
        doctor_detail_index++;
    } else {
        if (doctor_detail_index == 1) return;
        doctor_detail_index--;
    }
    $.mobile.changePage("doctor_detail_" + doctor_detail_index + ".html", {transition: "slide", reverse: !isLeft});
}

function scrollto() {
    switch (navigate_index) {
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

$("div#navigate").live('pageinit',function (event, ui) {
    $(".homepage_button").unbind('click').click(function () {
        $.mobile.changePage("index.html", {transition: "pop", reverse: true});
    });

    $(".navigate_bg2").die('swipeleft').live('swipeleft',function () {
        swithIcon(true);
    }).die('swiperight').live('swiperight', function () {
            swithIcon(false);
        });

    $(".icon_middle").unbind('click').click(function () {
        if (navigate_index == 4) {
            $.mobile.changePage("qa.html");
        } else {
            $.mobile.changePage("video.html");
        }
    });

    $(".bottom_text_1").unbind('click').click(function () {
        navigate_index = 1;
        $.mobile.changePage("video.html");
    });

    $(".bottom_text_2").unbind('click').click(function () {
        navigate_index = 2;
        $.mobile.changePage("video.html");
    });

    $(".bottom_text_3").unbind('click').click(function () {
        navigate_index = 3;
        $.mobile.changePage("video.html");
    });

    $(".bottom_text_4").unbind('click').click(function () {
        navigate_index = 4;
        $.mobile.changePage("qa.html");
    });

}).live('pageshow',function (event, ui) {
        if (navigate_animate) {
            $(".navigate_bg2").show().animate({top: '118px'},
                'normal',
                function () {
                    $(".board_left_wb").css('background-image', 'url(images/board_left_wb_' + navigate_index + '.png)').show().animate({top: '133px'}, 'normal');

                    $(".main_board").show().animate({top: '123px'},
                        'normal',
                        function () {
                            $(".board_left_color").css('background-image', 'url(images/board_left_color_' + navigate_index + '.png)')
                                .animate({opacity: '1'},
                                'slow');

                            $(".board_right").css('background-image', 'url(images/board_right_' + navigate_index + '.png)')
                                .animate({opacity: '1'},
                                'slow');

                            $(".icon_middle").css('background-image', 'url(images/icon' + navigate_index + '.png)')
                                .animate({opacity: '1'},
                                'slow');

                            $(".bottom_text").css({'background-image': 'url(images/bottom_text_' + navigate_index + '.png)', 'left': scrollto() + 'px'})
                                .animate({opacity: '1'},
                                'slow');

                        });
                });
        } else {
            $(".navigate_bg2").show().css({top: '118px'});

            $(".board_left_wb").show().css({'background-image': 'url(images/board_left_wb_' + navigate_index + '.png)', top: '133px'});

            $(".main_board").show().css({top: '123px'});

            $(".board_left_color").css('background-image', 'url(images/board_left_color_' + navigate_index + '.png)')
                .animate({opacity: '1'},
                'slow');

            $(".board_right").css({'background-image': 'url(images/board_right_' + navigate_index + '.png)', opacity: '1'});

            $(".icon_middle").css({'background-image': 'url(images/icon' + navigate_index + '.png)', opacity: '1'});

            $(".bottom_text").css({'background-image': 'url(images/bottom_text_' + navigate_index + '.png)', 'left': scrollto() + 'px', opacity: '1'});

        }
    }).live('pagehide', function (event, ui) {
        navigate_animate = false;
    });

function swithIcon(isLeft) {
    if (isLeft) {
        navigate_index == 4 ? navigate_index = 1 : navigate_index++;

        $(".board_left_wb").css('background-image', 'url(images/board_left_wb_' + navigate_index + '.png)');

        $(".board_left_color").css({'background-image': 'url(images/board_left_color_' + navigate_index + '.png)', opacity: '0'})
            .animate({opacity: '1'},
            'slow');

        $(".board_right").css({'background-image': 'url(images/board_right_' + navigate_index + '.png)', opacity: '0'})
            .animate({opacity: '1'},
            'slow');


        $(".icon_middle").animate({top: '375px', left: '374px', opacity: '0'},
            'normal',
            function () {
                $(".icon_middle").css({top: '474px', left: '460px', 'background-image': 'url(images/icon' + navigate_index + '.png)', opacity: '1'});
            });
        $(".icon_right").css('background-image', 'url(images/icon' + navigate_index + '.png)').animate({top: '474px', left: '460px', opacity: '1'},
            'normal',
            function () {
                $(".icon_right").css({top: '375px', left: '553px', opacity: '0'});
            });
        $(".bottom_text").animate({'left': scrollto() + 'px'},
            'normal',
            function () {
                $(".bottom_text").css('background-image', 'url(images/bottom_text_' + navigate_index + '.png)');
            });
    } else {
        navigate_index == 1 ? navigate_index = 4 : navigate_index--;

        $(".board_left_wb").css('background-image', 'url(images/board_left_wb_' + navigate_index + '.png)');

        $(".board_left_color").css({'background-image': 'url(images/board_left_color_' + navigate_index + '.png)', opacity: '0'})
            .animate({opacity: '1'},
            'slow');

        $(".board_right").css({'background-image': 'url(images/board_right_' + navigate_index + '.png)', opacity: '0'})
            .animate({opacity: '1'},
            'slow');

        $(".icon_middle").animate({top: '375px', left: '553px', opacity: '0'},
            'normal',
            function () {
                $(".icon_middle").css({top: '474px', left: '460px', 'background-image': 'url(images/icon' + navigate_index + '.png)', opacity: '1'});
            });
        $(".icon_left").css('background-image', 'url(images/icon' + navigate_index + '.png)').animate({top: '474px', left: '460px', opacity: '1'},
            'normal',
            function () {
                $(".icon_left").css({top: '375px', left: '374px', opacity: '0'});
            });

        $(".bottom_text").animate({'left': scrollto() + 'px'},
            'normal',
            function () {
                $(".bottom_text").css('background-image', 'url(images/bottom_text_' + navigate_index + '.png)');
            });
    }

}

$("div#video").live('pageinit',function (event, ui) {
    $(".homepage_button").unbind('click').click(function () {
        $.mobile.changePage("navigate.html");
    });
    var mainVideo = $("video#mainVideo")[0];

    $(".video_click_area").unbind('click').click(function () {
        mainVideo.controls = true;
    });

    $(".video_button").unbind('click').click(function () {
        if (mainVideo.paused || mainVideo.ended) {
            mainVideo.play();
        } else {
            mainVideo.pause();
        }
    });

    $(".bar_selected_1_1").unbind('click').click(function () {
        mainVideo.currentTime = 0;
    });

    $(".bar_selected_1_2").unbind('click').click(function () {
        mainVideo.currentTime = 207.5;
    });

    $(".bar_selected_1_3").unbind('click').click(function () {
        mainVideo.currentTime = 322;
    });

    $(".bar_selected_2_1").unbind('click').click(function () {
        mainVideo.currentTime = 0;
    });

    $(".bar_selected_2_2").unbind('click').click(function () {
        mainVideo.currentTime = 156.5;
    });

    $(".bar_selected_3_1").unbind('click').click(function () {
        mainVideo.currentTime = 0;
    });

    $(".bar_selected_3_2").unbind('click').click(function () {
        mainVideo.currentTime = 67;
    });

}).live('pageshow',function (event, ui) {
        if (navigate_index == 1) {
            $("div[class^='bar_selected_1_']").show();
        }else if (navigate_index == 2) {
            $("div[class^='bar_selected_2_']").show();
        }else if (navigate_index == 3) {
            $("div[class^='bar_selected_3_']").show();
        }else {

        }

        $(".video_timeflag").show();

        $(".video_title").css('background-image', 'url(images/video_title_' + navigate_index + '.png)');

        mainVideo.src = "videos/video_" + navigate_index + ".mp4";

        mainVideoTimeListener = window.setInterval(function () {
            showPPTonTime(mainVideo);
        }, 500);
    }).live('pagehide', function (event, ui) {
        self.clearInterval(mainVideoTimeListener);
    });

function showPPTonTime(thisVideo) {
    var videoSecond = mainVideo.currentTime;
    var ppt_index;
    if (navigate_index == 1) {
        if (videoSecond >= 0 && videoSecond < 36) ppt_index = 1;
        if (videoSecond >= 36 && videoSecond < 119) ppt_index = 2;
        if (videoSecond >= 119 && videoSecond < 169) ppt_index = 3;
        if (videoSecond >= 169 && videoSecond < 207.5) ppt_index = 4;
        if (videoSecond >= 207.5 && videoSecond < 246) ppt_index = 5;
        if (videoSecond >= 246 && videoSecond < 287) ppt_index = 6;
        if (videoSecond >= 287 && videoSecond < 322) ppt_index = 7;
        if (videoSecond >= 322 && videoSecond < 370) ppt_index = 8;
        if (videoSecond >= 370) ppt_index = 9;

        if (videoSecond >= 0 && videoSecond < 207.5) {
            if (($(".bar_section_bg").css('background-image')).indexOf('images/bar_1_1.png') < 0) {
                $(".bar_section_bg").css('background-image', 'url(images/bar_1_1.png)');
            }
            if (($(".doctor_name").css('background-image')).indexOf('images/doctor_name_1.png') < 0) {
                $(".doctor_name").css('background-image', 'url(images/doctor_name_1.png)');
            }
        } else if (videoSecond >= 207.5 && videoSecond < 322) {
            if (($(".bar_section_bg").css('background-image')).indexOf('images/bar_1_2.png') < 0) {
                $(".bar_section_bg").css('background-image', 'url(images/bar_1_2.png)');
            }
            if (($(".doctor_name").css('background-image')).indexOf('images/doctor_name_2.png') < 0) {
                $(".doctor_name").css('background-image', 'url(images/doctor_name_2.png)');
            }
        } else if (videoSecond >= 322) {
            if (($(".bar_section_bg").css('background-image')).indexOf('images/bar_1_3.png') < 0) {
                $(".bar_section_bg").css('background-image', 'url(images/bar_1_3.png)');
            }
            if (($(".doctor_name").css('background-image')).indexOf('images/doctor_name_3.png') < 0) {
                $(".doctor_name").css('background-image', 'url(images/doctor_name_3.png)');
            }
        } else {

        }

    } else if (navigate_index == 2) {
        if (videoSecond >= 0 && videoSecond < 32) ppt_index = 1;
        if (videoSecond >= 32 && videoSecond < 75) ppt_index = 2;
        if (videoSecond >= 75 && videoSecond < 156.5) ppt_index = 3;
        if (videoSecond >= 156.5) ppt_index = 4;

        if (videoSecond >= 0 && videoSecond < 156.5) {
            if (($(".bar_section_bg").css('background-image')).indexOf('images/bar_2_1.png') < 0) {
                $(".bar_section_bg").css('background-image', 'url(images/bar_2_1.png)');
            }
            if (($(".doctor_name").css('background-image')).indexOf('images/doctor_name_1.png') < 0) {
                $(".doctor_name").css('background-image', 'url(images/doctor_name_1.png)');
            }
        } else if (videoSecond >= 156.5) {
            if (($(".bar_section_bg").css('background-image')).indexOf('images/bar_2_2.png') < 0) {
                $(".bar_section_bg").css('background-image', 'url(images/bar_2_2.png)');
            }
            if (($(".doctor_name").css('background-image')).indexOf('images/doctor_name_2.png') < 0) {
                $(".doctor_name").css('background-image', 'url(images/doctor_name_2.png)');
            }
        } else {

        }

    } else if (navigate_index == 3) {
        if (videoSecond >= 0 && videoSecond < 29) ppt_index = 1;
        if (videoSecond >= 29 && videoSecond < 67) ppt_index = 2;
        if (videoSecond >= 67) ppt_index = 3;

        if (videoSecond >= 0 && videoSecond < 67) {
            if (($(".bar_section_bg").css('background-image')).indexOf('images/bar_3_1.png') < 0) {
                $(".bar_section_bg").css('background-image', 'url(images/bar_3_1.png)');
            }
            if (($(".doctor_name").css('background-image')).indexOf('images/doctor_name_1.png') < 0) {
                $(".doctor_name").css('background-image', 'url(images/doctor_name_1.png)');
            }
        } else if (videoSecond >= 67) {
            if (($(".bar_section_bg").css('background-image')).indexOf('images/bar_3_2.png') < 0) {
                $(".bar_section_bg").css('background-image', 'url(images/bar_3_2.png)');
            }
            if (($(".doctor_name").css('background-image')).indexOf('images/doctor_name_2.png') < 0) {
                $(".doctor_name").css('background-image', 'url(images/doctor_name_2.png)');
            }
        } else {

        }

    } else {

    }

    if (($(".ppt").css('background-image')).indexOf('images/ppt_' + navigate_index + '_' + ppt_index + '.png') < 0) {
        $(".ppt").hide().css('background-image', 'url(images/ppt_' + navigate_index + '_' + ppt_index + '.png)').fadeIn();
    }

    if (thisVideo.paused || thisVideo.ended) {
        if (($(".video_button").css('background-image')).indexOf('images/video_play.png') < 0) {
            $(".video_button").css('background-image', 'url(images/video_play.png)');
        }
    } else {
        if (($(".video_button").css('background-image')).indexOf('images/video_pause.png') < 0) {
            $(".video_button").css('background-image', 'url(images/video_pause.png)');
        }
    }

    var currentSeconds = Math.round(videoSecond);
    var currentminute = parseInt(currentSeconds / 60);
    var leftSeconds = currentSeconds - currentminute * 60;
    var leftSecondsText = leftSeconds < 10 ? '0' + leftSeconds : leftSeconds + '';
    $(".video_timer").text(currentminute + ':' + leftSecondsText);

    if(videoSecond > 0){
    var leftpx = Math.round(203 + (777 - 203) * videoSecond / thisVideo.duration);
        $(".video_timeflag").css({left: leftpx + 'px'});
    }
}

$("div#qa").live('pageinit',function (event, ui) {
    $(".homepage_button").unbind('click').click(function () {
        $.mobile.changePage("navigate.html");
    });

    $("div[class^='q_']").unbind('click').click(function () {
        showAnswerView($("div[class^='q_']").index(this) + 1);
    });

    $(".answer").unbind('click').click(function () {
        $(".answer").fadeOut('fast', function () {
            $(".qa_main").css({opacity: '1'});
        });
    });

    $(".cancel_answer").unbind('click').click(function () {
        $(".answer").fadeOut('fast', function () {
            $(".qa_main").css({opacity: '1'});
        });
    });
}).live('pageshow', function (event, ui) {


    });

function showAnswerView(questionNo) {
    if (questionNo == 3 || questionNo == 5 || questionNo == 10 || questionNo == 12) return;
    $(".qa_main").css({opacity: '0.3'});
    $(".answer").css({'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');

//    $("div[class^='q_']").css({'-webkit-box-shadow': 'none', 'background-color': '#ffffff', opacity: '0.7'});
//    $(".q_" + questionNo).css({'-webkit-box-shadow': '10px 10px 10px #7d7d7d', 'background-color': ''});
//
//
//    switch (questionNo) {
//        case 1:
//            $(".answer").hide().css({top: '190px', left: '243px',
//                '-webkit-box-shadow': '10px 10px 10px #b9b9b9',
//                'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');
//            break;
//        case 2:
//            $(".answer").hide().css({top: '190px', left: '507px',
//                '-webkit-box-shadow': '10px 10px 10px #b9b9b9',
//                'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');
//            break;
//        case 3:
//            return;
//            break;
//        case 4:
//            $(".answer").hide().css({top: '190px', left: '243px',
//                '-webkit-box-shadow': '-10px 10px 10px #b9b9b9',
//                'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');
//
//            break;
//        case 5:
//            break;
//        case 6:
//        case 10:
//            $(".answer").hide().css({top: '347px', left: '507px',
//                '-webkit-box-shadow': '10px 10px 10px #b9b9b9',
//                'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');
//            break;
//        case 7:
//        case 11:
//            $(".answer").hide().css({top: '347px', left: '0px',
//                '-webkit-box-shadow': '-10px 10px 10px #b9b9b9',
//                'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');
//
//            break;
//        case 8:
//        case 12:
//            $(".answer").hide().css({top: '347px', left: '243px',
//                '-webkit-box-shadow': '-10px 10px 10px #b9b9b9',
//                'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');
//
//            break;
//        case 9:
//            $(".answer").hide().css({top: '347px', left: '243px',
//                '-webkit-box-shadow': '10px 10px 10px #b9b9b9',
//                'background-image': 'url(images/answer_' + questionNo + '.png)'}).fadeIn('fast');
//            break;
//    }
}