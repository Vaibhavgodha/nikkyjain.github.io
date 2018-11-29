
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿गुणस्थानों में विभाजन</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿गुणस्थानों में गमनागमन</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿गुणस्थानों में कर्म के उदय</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿गुणस्थानों में कर्म के बन्ध</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿गुणस्थानों में कर्म की सत्ता</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿प्रकृति-बन्ध प्ररूपणा</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿स्तिथि सारिणी</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿गुणस्थानों का काल और उनमें जीवों की संख्या</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿प्रकृति-बन्ध प्ररूपणा</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿संहनन की अपेक्षा गति प्राप्ति</option>");
  mySel.append("<option value='011.html'><b>011</b> - ﻿अनुभाग बन्ध सारणी</option>");
  mySel.append("<option value='012.html'><b>012</b> - ﻿गति-आगति</option>");
  mySel.append("<option value='013.html'><b>013</b> - ﻿जीव कहाँ तक जा सकता है</option>");
  mySel.append("<option value='014.html'><b>014</b> - ﻿जीव नियमत: कहाँ जाते हैं</option>");
  mySel.append("<option value='020.html'><b>020</b> - ﻿आयु</option>");
  mySel.append("<option value='030.html'><b>030</b> - ﻿न्याय-वाक्य</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
