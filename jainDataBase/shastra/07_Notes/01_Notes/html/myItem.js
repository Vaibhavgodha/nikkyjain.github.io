
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
  mySel.append("<option value='011.html'><b>011</b> - ﻿अनुभाग बन्ध के स्वामी</option>");
  mySel.append("<option value='012.html'><b>012</b> - ﻿गति-आगति</option>");
  mySel.append("<option value='013.html'><b>013</b> - ﻿जीव कहाँ तक जा सकता है</option>");
  mySel.append("<option value='014.html'><b>014</b> - ﻿जीव नियमत: कहाँ जाते हैं</option>");
  mySel.append("<option value='015.html'><b>015</b> - ﻿आयु</option>");
  mySel.append("<option value='016.html'><b>016</b> - ﻿गुणस्थानों में आलाप</option>");
  mySel.append("<option value='017.html'><b>017</b> - ﻿नरक में गुणस्थानों में आलाप</option>");
  mySel.append("<option value='018.html'><b>018</b> - ﻿तिर्यन्चों में गुणस्थानों में आलाप</option>");
  mySel.append("<option value='019.html'><b>019</b> - ﻿मनुष्यों में गुणस्थानों में आलाप</option>");
  mySel.append("<option value='021.html'><b>021</b> - ﻿गुणस्थानों में समुद्घात</option>");
  mySel.append("<option value='022.html'><b>022</b> - ﻿गुणस्थानों में स्पर्श</option>");
  mySel.append("<option value='023.html'><b>023</b> - ﻿गुणस्थानों में अंतर</option>");
  mySel.append("<option value='024.html'><b>024</b> - ﻿गुणस्थानों में काल</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿स्पर्शानुगम</option>");
  mySel.append("<option value='026.html'><b>026</b> - ﻿कालानुगम</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿भावानुगम</option>");
  mySel.append("<option value='029.html'><b>029</b></option>");
  mySel.append("<option value='031.html'><b>031</b> - ﻿स्वामित्व</option>");
  mySel.append("<option value='032.html'><b>032</b> - ﻿कालानुगम</option>");
  mySel.append("<option value='033.html'><b>033</b> - ﻿अन्तरानुगम</option>");
  mySel.append("<option value='034.html'><b>034</b> - ﻿भंग-विचय</option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿द्रव्य-प्रमाणानुगम</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿क्षेत्रानुगम</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿अल्प-बहुत्व</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿गुणस्थानों में बंध प्रत्यय</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿कर्म की १४८ प्रकृतियाँ</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿न्याय-वाक्य</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
