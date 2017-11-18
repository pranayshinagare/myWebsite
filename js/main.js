var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();

function imagePreload(){
  img1.src = './img/03-backgroud.jpg';
  img2.src = './img/my-pic.png';
  img3.src = './img/buzzle-01.png';
  img4.src = './img/hmx-logo.png';
  img5.src = './img/bg-skills.jpg';
  img5.onload = sucPreload;
}

function sucPreload(){
  var inT = new Date().getTime();
  $('#ot-ldr').css('display','none');
  $('#select-all').css('display','block');
  console.log('load '+inT);
}

imagePreload();

$(document).ready(function(){
  // element animate from left - test
  var outT = new Date().getTime();
  console.log('ready '+outT);
  function animation(){
    var left = $('.skill-progress').offset().left;
    $(".skill-progress, .skill-col h4").css({
      'left':-left,
      'opacity':'0'
    }).animate({
      "left":"0",
      "opacity":'1'
    }, 1300);
    $('.skill-content-col').css({
      'right': -left,
      'opacity':'0.1'
    }).animate({
      'right':'0',
      'opacity':'1'
    }, 1300);
  }
  function filling_bar(){
    var html_fill_bar = document.getElementById('html_count');
    var css_fill_bar = document.getElementById('css_count');
    var bs_fill_bar = document.getElementById('bs_count');
    var js_fill_bar = document.getElementById('js_count');
    var jquery_fill_bar = document.getElementById('jquery_count');
    var json_fill_bar = document.getElementById('json_count');

    var html_fill_bar_content = document.getElementById('html_count_id');
    var css_fill_bar_content = document.getElementById('css_count_id');
    var bs_fill_bar_content = document.getElementById('bs_count_id');
    var js_fill_bar_content = document.getElementById('js_count_id');
    var jquery_fill_bar_content = document.getElementById('jquery_count_id');
    var json_fill_bar_content = document.getElementById('json_count_id');

    var html_width = 1;
    var css_width = 1;
    var bs_width = 1;
    var js_width = 1;
    var jquery_width = 1;
    var json_width = 1;

    var html_id = setInterval(html_filling_frame, 10);
    var css_id = setInterval(css_filling_frame, 13);
    var bs_id = setInterval(bs_filling_frame, 16);
    var js_id = setInterval(js_filling_frame,18);
    var jquery_id = setInterval(jquery_filling_frame, 16);
    var json_id = setInterval(json_filling_frame, 17);

    function html_filling_frame(){
      if (html_width >= 90){
        clearInterval(html_id);
      }else{
        html_width++;
        html_fill_bar.style.width = html_width + '%';
        html_fill_bar_content.textContent = 'html ' + html_width +'%';
      }
    }
    function css_filling_frame(){
      if (css_width >= 85) {
        clearInterval(css_id);
      }else{
        css_width++;
        css_fill_bar.style.width = css_width + '%';
        css_fill_bar_content.textContent = 'css, sass ' + css_width +'%';
      }
    }
    function bs_filling_frame(){
      if (bs_width >= 75) {
        clearInterval(bs_id);
      }else{
        bs_width++;
        bs_fill_bar.style.width = bs_width + '%';
        bs_fill_bar_content.textContent = 'bootstrap '+ bs_width +'%';
      }
    }
    function js_filling_frame(){
      if (js_width >= 70) {
        clearInterval(js_id);
      }else{
        js_width++;
        js_fill_bar.style.width = js_width + '%';
        js_fill_bar_content.textContent = 'JS, jquery '+ js_width +'%';
      }
    }
    function json_filling_frame(){
      if (json_width >= 80) {
        clearInterval(json_id);
      }else{
        json_width++;
        json_fill_bar.style.width = json_width + '%';
        json_fill_bar_content.textContent = 'json, xml '+ json_width +'%';
      }
    }
    function jquery_filling_frame(){
      if (jquery_width >= 100) {
        clearInterval(jquery_id);
      }else{
        jquery_width++;
        jquery_fill_bar.style.width = jquery_width + '%';
        jquery_fill_bar_content.textContent = 'learining angular, react, es6 js* ';
      }
    }
  }
  // animate do when element visible in viewport
  $(document).bind('scroll', function(ev){
    var scrollOffset = $(document).scrollTop();
    var skillwrapperOffset = $('#skills-hotspot').offset().top - window.innerHeight;
    if (scrollOffset > skillwrapperOffset) {
      animation();
      filling_bar();
      $(document).unbind('scroll');
    };
  });

  var myName = ['Web Developer', 'UI Developer', 'Front End Developer'];
  var name_id = document.getElementById('name_id');
  var nameCounter = 0;
  setInterval(nameChange, 3500);
  function nameChange() {
    $('#name_id').fadeOut(1000, function(){
      name_id.textContent = myName[nameCounter];
    }).fadeIn(900);
    nameCounter++;
    if (nameCounter>=myName.length) {
      nameCounter = 0;
    }
  }
});