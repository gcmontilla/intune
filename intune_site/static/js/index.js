$(document).ready(function () {
   $("input").focus(function () {
       $(this).attr('placeholder', 'selected');
   }).blur(function () {
       $(this).attr('placeholder', 'spotify username');
   })
});