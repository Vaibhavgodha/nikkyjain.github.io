
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
  mySel.append("<option value='002.html'><b>002</b> - ﻿संक्षिप्त और मध्यम रुचि वाले शिष्य की अपेक्षा प्ररूपणा - २ (अभेद विवक्षा) और २० (भेद विवक्षा)</option>");
  mySel.append("<option value='003.html'><b>003</b></option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿गुणस्थान का लक्षण</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿१४ गुणस्थान</option>");
  mySel.append("<option value='010.html'><b>010</b></option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿प्रमाद के अन्य ५ प्रकार</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿संख्या (भंग का जोड़) कैसे लाए</option>");
  mySel.append("<option value='037.html'><b>037</b> - ﻿प्रस्तार - प्रथम प्रकार</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿प्रस्तार - द्वितीय प्रकार</option>");
  mySel.append("<option value='039.html'><b>039</b> - ﻿प्रथम प्रस्तार का परिवर्तन</option>");
  mySel.append("<option value='040.html'><b>040</b> - ﻿दूसरे प्रस्तार का परिवर्तन</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿नष्ट लाने की विधि</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿उद्दिष्ट लाने की विधि</option>");
  mySel.append("<option value='043.html'><b>043</b> - ﻿प्रथम प्रस्तार का गूढ़ यन्त्र</option>");
  mySel.append("<option value='044.html'><b>044</b> - ﻿दूसरे प्रस्तार का गूढ़ यंत्र</option>");
  mySel.append("<option value='045.html'><b>045</b> - ﻿अप्रमत्त विरत (सातवां)</option>");
  mySel.append("<option value='046.html'><b>046</b> - ﻿स्वस्थान अप्रमत्त विरत की विशषेता</option>");
  mySel.append("<option value='047.html'><b>047</b> - ﻿सातिशय अप्रमत्त विरत का स्वरूप</option>");
  mySel.append("<option value='048.html'><b>048</b> - ﻿तीन करण की विशषेता</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿अपूर्वकरण गुणस्थान</option>");
  mySel.append("<option value='051.html'><b>051</b> - ﻿अपूर्वकरण का निरुक्तिपूर्वक लक्षण</option>");
  mySel.append("<option value='052.html'><b>052</b> - ﻿अपूर्वकरण - विशेष स्वरूप</option>");
  mySel.append("<option value='053.html'><b>053</b></option>");
  mySel.append("<option value='054.html'><b>054</b> - ﻿अपूर्वकरण परिणामों के कार्य</option>");
  mySel.append("<option value='055.html'><b>055</b></option>");
  mySel.append("<option value='056-057.html'><b>056-057</b> - ﻿अनिवृत्ति-करण गुणस्थान</option>");
  mySel.append("<option value='058.html'><b>058</b> - ﻿सूक्ष्मसांपराय (दसवाँ)</option>");
  mySel.append("<option value='059.html'><b>059</b> - ﻿कृष्टि किस क्रम से होती है ?</option>");
  mySel.append("<option value='060.html'><b>060</b> - ﻿पूर्व और अपूर्व स्पर्धक में अंतर</option>");
  mySel.append("<option value='061.html'><b>061</b> - ﻿उपशांत-कषाय (ग्यारहवाँ)</option>");
  mySel.append("<option value='062.html'><b>062</b> - ﻿क्षीण-कषाय (बारहवां)</option>");
  mySel.append("<option value='063-064.html'><b>063-064</b> - ﻿सयोग केवली जिन (तेरहवाँ गुणस्थान)</option>");
  mySel.append("<option value='065.html'><b>065</b> - ﻿अयोग केवली जिन (चौदहवाँ) गुणस्थान</option>");
  mySel.append("<option value='068-069.html'><b>068-069</b></option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-1')
  mySel.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
