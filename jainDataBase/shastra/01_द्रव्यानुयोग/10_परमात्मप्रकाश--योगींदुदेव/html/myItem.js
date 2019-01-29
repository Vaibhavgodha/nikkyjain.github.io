
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
  mySel.append("<option value='002.html'><b>002</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿अरिहंत परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿आचार्य, उपाध्याय, साधु परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿प्रभाकरभट्ट द्वारा विनती</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿विनती</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿परमात्मा के कथन की विनती</option>");
  mySel.append("<option value='011.html'><b>011</b> - ﻿तीन प्रकार के आत्मा को कहने की प्रतिज्ञा</option>");
  mySel.append("<option value='012.html'><b>012</b> - ﻿तीन प्रकार के आत्मा को जानने का प्रयोजन</option>");
  mySel.append("<option value='013.html'><b>013</b> - ﻿बहिरात्मा</option>");
  mySel.append("<option value='014.html'><b>014</b> - ﻿अन्तरात्मा</option>");
  mySel.append("<option value='015.html'><b>015</b> - ﻿परमात्मा</option>");
  mySel.append("<option value='016.html'><b>016</b> - ﻿ध्येय</option>");
  mySel.append("<option value='017.html'><b>017</b> - ﻿लक्ष्य के लक्षण</option>");
  mySel.append("<option value='018.html'><b>018</b> - ﻿शान्त और शिव</option>");
  mySel.append("<option value='019-021.html'><b>019-021</b> - ﻿निरन्जन</option>");
  mySel.append("<option value='022.html'><b>022</b> - ﻿परमात्मा - ध्यान के साधन नहीं</option>");
  mySel.append("<option value='023.html'><b>023</b> - ﻿परमात्मा - ज्ञान का साधन नहीं</option>");
  mySel.append("<option value='024.html'><b>024</b> - ﻿परमात्मा - अनन्त ज्ञान-दर्शन-सुख-वीर्यमयी</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿परमात्मा - शरीर रहित लोक के शिखर पर स्थित</option>");
  mySel.append("<option value='026.html'><b>026</b> - ﻿परमात्मा - शरीर में स्थित</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿परमात्मा - अंतर-दृष्टि के प्रेरणा</option>");
  mySel.append("<option value='028.html'><b>028</b> - ﻿[परमात्मा - शारीरिक और मानसिक सुख-दुःख रहित </option>");
  mySel.append("<option value='029.html'><b>029</b> - ﻿[परमात्मा - देह में रहते हुए भी स्वभाव में स्थित </option>");
  mySel.append("<option value='030.html'><b>030</b> - ﻿भेद-ज्ञान की प्रेरणा</option>");
  mySel.append("<option value='031.html'><b>031</b> - ﻿आत्मा का लक्षण</option>");
  mySel.append("<option value='032.html'><b>032</b> - ﻿ध्यान की विधि और उसका फल</option>");
  mySel.append("<option value='033.html'><b>033</b> - ﻿देह में ही परमात्मा का निवास</option>");
  mySel.append("<option value='034.html'><b>034</b> - ﻿परमात्मा का एक अद्भुत् लक्षण</option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿परमात्मा - समभाव द्वारा परम आनन्द की प्राप्ति</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿आत्मा का परम आत्मा स्वरूप</option>");
  mySel.append("<option value='037.html'><b>037</b> - ﻿पूर्व कथन की पुष्टि</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿परमात्मा - केवलज्ञान में स्वयं प्रतिभासित</option>");
  mySel.append("<option value='039.html'><b>039</b> - ﻿परमात्मा - ध्यान का ध्येय</option>");
  mySel.append("<option value='040.html'><b>040</b> - ﻿परमात्मा - संसार को उपजाता है</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿परमात्मा - संसार में रहते हुए भी संसार से परे</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿परमात्मा - उत्कृष्ट समाधि / तप द्वारा ही जो जाना जाता है</option>");
  mySel.append("<option value='043.html'><b>043</b> - ﻿परमात्मा - उत्पाद-व्यय-ध्रौव्य संयुक्त</option>");
  mySel.append("<option value='044.html'><b>044</b> - ﻿शरीर और आत्मा के दृढ़ सम्बन्ध का सीधे साधे शब्दों में कथन</option>");
  mySel.append("<option value='045.html'><b>045</b> - ﻿देह से आत्मा का विशिष्ट महत्व</option>");
  mySel.append("<option value='046.html'><b>046</b> - ﻿परमात्मा का वीतराग स्वरूप</option>");
  mySel.append("<option value='047.html'><b>047</b> - ﻿परमात्मा के ज्ञान के स्थान का कथन</option>");
  mySel.append("<option value='048.html'><b>048</b> - ﻿कर्म बंधन से मुक्त परमात्मा का स्वरूप</option>");
  mySel.append("<option value='049.html'><b>049</b> - ﻿कर्म बंधन से मुक्त परमात्मा का स्वरूप</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿आत्मा क्या है</option>");
  mySel.append("<option value='051.html'><b>051</b> - ﻿आत्मा का स्वरूप</option>");
  mySel.append("<option value='052.html'><b>052</b> - ﻿आत्मा का सर्वव्यापक स्वरूप</option>");
  mySel.append("<option value='053.html'><b>053</b> - ﻿आत्मा का जड स्वरूप</option>");
  mySel.append("<option value='054.html'><b>054</b> - ﻿आत्मा का चरम शरीर प्रमाणरूप स्वरूप</option>");
  mySel.append("<option value='055.html'><b>055</b> - ﻿आत्मा के शून्य स्वरूप का कथन</option>");
  mySel.append("<option value='056.html'><b>056</b> - ﻿आत्मा के लक्षण</option>");
  mySel.append("<option value='057.html'><b>057</b> - ﻿आत्मा के लक्षण का स्पष्टीकरण</option>");
  mySel.append("<option value='058.html'><b>058</b></option>");
  mySel.append("<option value='059.html'><b>059</b> - ﻿आत्मा और कर्म का परष्पर सम्बन्ध</option>");
  mySel.append("<option value='060.html'><b>060</b> - ﻿सभी जीवों का प्राण कर्म</option>");
  mySel.append("<option value='061.html'><b>061</b> - ﻿कर्म के कारण जीव को स्वभाव-लाभ नहीं</option>");
  mySel.append("<option value='062.html'><b>062</b> - ﻿विषय-कषायों में लिप्तता से कर्म-बंध</option>");
  mySel.append("<option value='063.html'><b>063</b> - ﻿इन्द्रियाँ, मन, समस्त विभाव, दुःख कर्म-जनित</option>");
  mySel.append("<option value='064.html'><b>064</b> - ﻿परमार्थ से दुःख-सुख कर्म जनित</option>");
  mySel.append("<option value='065-1.html'><b>065-1</b></option>");
  mySel.append("<option value='065.html'><b>065</b> - ﻿परमार्थ से बन्ध और मोक्ष कर्मजनित</option>");
  mySel.append("<option value='066.html'><b>066</b> - ﻿कर्म द्वारा ही जीव के लोक में भ्रमण </option>");
  mySel.append("<option value='067.html'><b>067</b> - ﻿द्रव्य-रूप परिवर्तित नहीं होता</option>");
  mySel.append("<option value='068.html'><b>068</b> - ﻿जीव के जन्म-मरण बंध-मोक्ष नहीं</option>");
  mySel.append("<option value='069.html'><b>069</b> - ﻿जीव के जन्म-मरण-रोग, इन्द्रियाँ, वर्ण नहीं</option>");
  mySel.append("<option value='070.html'><b>070</b> - ﻿जन्म-बुढापा-मरण, रोग, वर्ण देह के</option>");
  mySel.append("<option value='071.html'><b>071</b> - ﻿जीव को अमर जानकर भय-मुक्त हो</option>");
  mySel.append("<option value='072.html'><b>072</b> - ﻿शरीर से ममत्व त्यागकर आत्मा को ध्या</option>");
  mySel.append("<option value='073.html'><b>073</b> - ﻿पर-भाव और पर द्रव्य जीव स्वभाव से भिन्न</option>");
  mySel.append("<option value='074.html'><b>074</b> - ﻿ज्ञानमयी भाव को छोड़कर अन्य सभी भाव को त्याग</option>");
  mySel.append("<option value='075.html'><b>075</b> - ﻿रत्नत्रयमयी आत्मा का ध्यान कर</option>");
  mySel.append("<option value='076.html'><b>076</b></option>");
  mySel.append("<option value='077.html'><b>077</b></option>");
  mySel.append("<option value='078.html'><b>078</b></option>");
  mySel.append("<option value='079.html'><b>079</b></option>");
  mySel.append("<option value='080.html'><b>080</b></option>");
  mySel.append("<option value='081.html'><b>081</b></option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
