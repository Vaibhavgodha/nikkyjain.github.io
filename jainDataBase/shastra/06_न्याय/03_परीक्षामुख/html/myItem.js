
$( document ).ready(function() {
  $('.teekakaar').change(function() {
    window.location.href = $(this).val()
  })
})
function toggleTeeka(teeka) {
  $('#teeka'+teeka).toggle();
  if($('.teeka'+teeka).css('color')=='rgb(255, 0, 0)') {
    $('.teeka'+teeka).css('color', 'green')
  }else{
    $('.teeka'+teeka).css('color', 'red')
  }
}
function toggleSTeeka(teeka) {
  $('#steeka'+teeka).toggle();
  if($('#stitle'+teeka).css('color')=='rgb(255, 0, 0)') {
    $('#stitle'+teeka).css('color', 'green')
  }else{
    $('#stitle'+teeka).css('color', 'red')
  }
}
$( document ).ready(function() {
  mySel=$('select#select-native-0')
  mySel.append("<option value='001.html'><b>001</b> - ﻿प्रमाण का लक्षण</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿प्रमाण-लक्षण में ज्ञान विशेषण की सार्थकता</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿प्रमाण का निश्चायकपना</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿अपूर्वार्थ का लक्षण</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
