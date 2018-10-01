<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js">
</script>

<!-- Zoom Image JS -->
<script type = "text/javascript">
$(document).ready(function() {
  $('.zoom-image').hover(function() {
    $(this).siblings('.zoom-image').css('z-index', 10);
    $(this).css('z-index', 99);
  })
})
</script>



<script type = "text/javascript">
var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
  var number = current * -height;
  first.css('margin-top', number + 'px');
  if (current === numberDivs) {
      first.css('margin-top', '0px');
      current = 1;
  } else current++;
}, 2000);
</script>


<script type = "text/javascript">
jQuery(document).ready(function(){
  //Initialize animation
  var animation = 0;

  jQuery(window).scroll(function(){
    //Get position of the scrollbar
    var pos = $(window).scrollTop();

    //Get position of the #skills element
    var skills = $('#skills').offset().top;
    skills = skills - 200;

    //Check if user has scrolled to the #skills element and if the animation has not been fired yet.
    if(pos > skills && animation ==  0 ){
      animation = 1;
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2500);
      });
    }
  });
});
</script>
