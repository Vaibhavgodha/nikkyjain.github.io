
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿मार्ग और मार्ग-फल</option>");
  mySel.append("<option value='003.html'><b>003</b></option>");
  mySel.append("<option value='004.html'><b>004</b></option>");
  mySel.append("<option value='005.html'><b>005</b></option>");
  mySel.append("<option value='006.html'><b>006</b></option>");
  mySel.append("<option value='007.html'><b>007</b></option>");
  mySel.append("<option value='008.html'><b>008</b></option>");
  mySel.append("<option value='009.html'><b>009</b></option>");
  mySel.append("<option value='010.html'><b>010</b></option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
