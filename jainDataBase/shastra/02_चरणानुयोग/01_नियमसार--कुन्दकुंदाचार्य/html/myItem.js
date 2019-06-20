
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
    $optgrp=$('<optgroup label="﻿जीव-अधिकार">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿मार्ग और मार्ग-फल</option>");
       $optgrp.append("<option value='003.html'><b>003</b> - ﻿स्वभाव रत्नत्रय</option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿रत्नत्रय के भेद और लक्षण</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿व्यवहार सम्यक्त्व</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿१८ दोषों का स्वरूप</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿तीर्थंकर का स्वरूप</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿आगम का स्वरूप</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿द्रव्यों के नाम</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿उपयोग लक्षण</option>");
       $optgrp.append("<option value='011-012.html'><b>011-012</b> - ﻿ज्ञान के भेद</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿दर्शनोपयोग </option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿दर्शानोपयोग के भेद</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿स्वभाव-विभाव पर्याय</option>");
       $optgrp.append("<option value='016-017.html'><b>016-017</b> - ﻿चार-गति का स्वरूप</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿आत्मा का कर्तत्व-भोक्तृत्व</option>");
       $optgrp.append("<option value='019.html'><b>019</b> - ﻿दोनों नयों की उपयोगिता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अजीव-अधिकार">')
       $optgrp.append("<option value='020.html'><b>020</b> - ﻿पुद्गल-द्रव्य के भेद</option>");
       $optgrp.append("<option value='021-024.html'><b>021-024</b> - ﻿पुद्गल के भेद</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿कारण और कार्य-परमाणु द्रव्य</option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿परमाणु का विशेष कथन</option>");
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿स्वभाव-पुद्गल</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿पुद्गल-पर्याय</option>");
       $optgrp.append("<option value='029.html'><b>029</b> - ﻿पुद्गल-द्रव्य - उपसंहार</option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿धर्म-अधर्म-आकाश</option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿व्यवहारकाल और उसके भेद</option>");
       $optgrp.append("<option value='032.html'><b>032</b></option>");
       $optgrp.append("<option value='033.html'><b>033</b></option>");
       $optgrp.append("<option value='034.html'><b>034</b></option>");
       $optgrp.append("<option value='035-036.html'><b>035-036</b></option>");
       $optgrp.append("<option value='037.html'><b>037</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शुद्ध-भाव-अधिकार">')
       $optgrp.append("<option value='038.html'><b>038</b></option>");
       $optgrp.append("<option value='039.html'><b>039</b></option>");
       $optgrp.append("<option value='040.html'><b>040</b></option>");
       $optgrp.append("<option value='041.html'><b>041</b></option>");
       $optgrp.append("<option value='042.html'><b>042</b></option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
