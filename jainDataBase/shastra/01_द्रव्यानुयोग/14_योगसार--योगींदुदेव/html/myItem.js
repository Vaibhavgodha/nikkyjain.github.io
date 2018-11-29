
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
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿सिद्धों को नमस्कार</option>");
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿अरहंत भगवान को नमस्कार</option>");
       $optgrp.append("<option value='003.html'><b>003</b> - ﻿ग्रन्थ को कहने का प्रयोजन</option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿मिथ्यादर्शन संसार का कारण है</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿मोक्ष-सुख का कारण आत्मध्यान है</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿आत्मा तीन प्रकार है</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿बहिरात्मा का स्वरूप</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿अन्तरात्मा का स्वरूप</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿परमात्मा का स्वरूप</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿बहिरात्मा का लक्षण</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿भेद-ज्ञान की प्रेरणा</option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿आत्म-ज्ञानी ही निर्वाण पाता है</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿इच्छा रहित ताप ही निर्वाण का कारण</option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿परिणामों से ही बंध व मोक्ष</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿आत्म-ज्ञान शून्य पुण्य कर्म से मोक्ष नहीं </option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿आत्म-दर्शन ही मोक्ष का कारण</option>");
       $optgrp.append("<option value='017.html'><b>017</b> - ﻿मार्गणा व गुणस्थान आत्मा नहीं</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿गृहस्थी भी मोक्षमार्गी</option>");
       $optgrp.append("<option value='019.html'><b>019</b> - ﻿जिनेन्द्र का स्मरण परम पद का कारण है</option>");
       $optgrp.append("<option value='020.html'><b>020</b> - ﻿अपनी आत्मा और जिनेन्द्र में भेद नहीं</option>");
       $optgrp.append("<option value='021.html'><b>021</b> - ﻿आत्मा ही जिन है, यही सिद्धांत का सार है</option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿मैं ही परमात्मा हूँ</option>");
       $optgrp.append("<option value='023-024.html'><b>023-024</b> - ﻿आत्मा निश्चय से असंख्यात-प्रदेशी लोकप्रमाण, व्यवहार से शरीरप्रमाण </option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿सम्यक्त्व बिना अनन्त संसार में भ्रमण</option>");
       $optgrp.append("<option value='026-027.html'><b>026-027</b> - ﻿शुद्धात्मा का चिंतन ही मोक्षमार्ग</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿त्रिलोक-पूज्य जिन शुद्धात्मा ही है</option>");
       $optgrp.append("<option value='029.html'><b>029</b> - ﻿आत्मानुभव बिना मिथ्यादृष्टि के व्रत-संयम द्वारा मोक्ष नहीं</option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿व्रत-संयम युक्त शुद्धात्मा के ध्यान से सिद्धि</option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿अकेला व्यवहार चारित्र वृथा है</option>");
       $optgrp.append("<option value='032.html'><b>032</b> - ﻿शुद्धोपयोग में पुण्य-पाप हेय</option>");
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿निश्चय चारित्र ही मोक्ष का कारण</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿आपसे आपको ध्याओ</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿व्यवहार में नौ पदार्थों का ज्ञान आवश्यक</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿सारभूत चेतानेवाला एक जीव ही है</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿सर्व व्यवहार को त्यागकर शुद्धात्मा को ध्याओ</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿जीव-अजीव का भेद जानो</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿आत्मा केवलज्ञान स्वाभावी है</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿ज्ञानी को हर जगह आत्मा ही दिखता है</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿अनात्मज्ञानी कुतीर्थों में भ्रमता है</option>");
       $optgrp.append("<option value='042.html'><b>042</b> - ﻿निज शरीर रुपी मंदिर में ही निश्चय से देव रहता है  </option>");
       $optgrp.append("<option value='043.html'><b>043</b> - ﻿देवालय में साक्षात् देव नहीं है</option>");
       $optgrp.append("<option value='044.html'><b>044</b> - ﻿समभावरूप चित्त से अपने देह में जिनदेव को देख</option>");
       $optgrp.append("<option value='045.html'><b>045</b> - ﻿ज्ञानी ही शरीररुपी मंदिर में परमात्मा को देखता है</option>");
       $optgrp.append("<option value='046.html'><b>046</b> - ﻿धर्मामृत के पान से अमरता</option>");
       $optgrp.append("<option value='047.html'><b>047</b> - ﻿बाहरी क्रिया में धर्म नहीं</option>");
       $optgrp.append("<option value='048.html'><b>048</b> - ﻿राग-द्वेष रहित आत्मस्थ होना ही धर्म</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿आशा तृष्णा ही संसार-भ्रमण का कारण है</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿आत्म-प्रेमी ही निर्वाण का पात्र</option>");
       $optgrp.append("<option value='051.html'><b>051</b> - ﻿शरीर को नरक सामान जानो</option>");
       $optgrp.append("<option value='052.html'><b>052</b> - ﻿जगत के धंधों में मत उलझ</option>");
       $optgrp.append("<option value='053.html'><b>053</b> - ﻿शास्त्र पाठ आत्मज्ञान बिना निष्फल है</option>");
       $optgrp.append("<option value='054.html'><b>054</b> - ﻿इन्द्रिय और मन को छोड़कर सहज आत्मज्ञान</option>");
       $optgrp.append("<option value='055.html'><b>055</b> - ﻿पुद्गल व जगत के व्यवहार से आत्मा को भिन्न जानो </option>");
       $optgrp.append("<option value='056.html'><b>056</b> - ﻿आत्मानुभवी ही संसार से मुक्त होता है</option>");
       $optgrp.append("<option value='057.html'><b>057</b> - ﻿आत्मा के ज्ञान के लिए नौ दृष्टांत</option>");
       $optgrp.append("<option value='058.html'><b>058</b> - ﻿देहादिरूप मैं नहीं -- यही ज्ञान मोक्ष का बीज है</option>");
       $optgrp.append("<option value='059.html'><b>059</b> - ﻿आकाश के सामान होकर भी मैं सचेतन हूँ</option>");
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿अपने भीतर ही मोक्ष-मार्ग है</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿निर्मोही होकर अपने अमूर्तिक आत्मा को देखें</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿आत्मानुभव का फल केवलज्ञान व अविनाशी सुख</option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿परभाव का त्याग संसार त्याग का कारण है</option>");
       $optgrp.append("<option value='064.html'><b>064</b> - ﻿धन्य हैं वे जिन्होंने समस्त पर-भावों को त्याग दिया</option>");
       $optgrp.append("<option value='065.html'><b>065</b> - ﻿गृहस्थ हो या मुनि आत्मा में वास की प्रेरणा </option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿तत्त्वश्रद्धानी विरले होते हैं</option>");
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿कुटुम्ब मोह त्यागने योग्य है</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿अशरण भावना</option>");
       $optgrp.append("<option value='069-070.html'><b>069-070</b> - ﻿एकत्व भावना</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿पुण्य को भी पाप जाने वही ज्ञानी</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿पुण्य और पाप में बन्ध की अपेक्षा समानता</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿भाव से नग्न हो सच्चा मोक्ष-मार्गी</option>");
       $optgrp.append("<option value='074.html'><b>074</b> - ﻿इसी देह में त्रिलोक-प्रधान भगवान रहता है</option>");
       $optgrp.append("<option value='075.html'><b>075</b> - ﻿आप स्वयं ही जिन है -- यही भावना मोक्ष का उपाय</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿आत्मा को लक्षण द्वारा जान</option>");
       $optgrp.append("<option value='077.html'><b>077</b> - ﻿दो को छोड़ दो गुण सहित आत्मा में वास करो</option>");
       $optgrp.append("<option value='078.html'><b>078</b> - ﻿तीन को छोड़ तीन गुण सहित आत्मा में वास करो</option>");
       $optgrp.append("<option value='079.html'><b>079</b> - ﻿चार को छोड़ चार गुण सहित आत्मा में वास करो</option>");
       $optgrp.append("<option value='080.html'><b>080</b> - ﻿पांच-पांच को छोड़ पांच-पांच गुण सहित आत्मा में वास करो</option>");
       $optgrp.append("<option value='081.html'><b>081</b> - ﻿आत्मरमण में तप-त्यागादि सब कुछ है</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿पर-भावों का त्याग ही संन्यास है</option>");
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿रत्नत्रय धर्म ही उत्तम तीर्थ है</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿रत्नत्रय का स्वरूप</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿आत्मानुभव में सब गुण हैं</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿एकाकी होकर एक आत्मा का ही मनन कर</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿सहज स्वरूप में रमण कर</option>");
       $optgrp.append("<option value='088.html'><b>088</b> - ﻿सम्यग्दृष्टि सुगति पाता है</option>");
       $optgrp.append("<option value='089.html'><b>089</b> - ﻿सर्व व्यवहार छोड़कर आत्मा में रमण ही सम्यग्दर्शन</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿सम्यक्त्वी ही पंडित व प्रधान है</option>");
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿आत्मा में स्थिरता संवर व निर्जरा का कारण है</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿अलिप्त भाव ही कर्मों से अलिप्तता का कारण</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿सम-सुख भोगी निर्वाण का पात्र है</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿आत्मा को पुरुषाकार पवित्र गुणों की खान जानो</option>");
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿जो आत्मा को जानता है वह सब शास्त्रों का ज्ञाता होता है</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿भेद-विज्ञान ही कार्यकारी है</option>");
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿परम समाधि शिव-सुख का कारण है</option>");
       $optgrp.append("<option value='098.html'><b>098</b> - ﻿आत्म-ध्यान चार प्रकार का</option>");
       $optgrp.append("<option value='099-100.html'><b>099-100</b> - ﻿सामायिक चारित्र कथन</option>");
       $optgrp.append("<option value='101.html'><b>101</b> - ﻿छेदोपस्थापना चारित्र कथन</option>");
       $optgrp.append("<option value='102.html'><b>102</b> - ﻿परिहार-विशुद्धि चारित्र कथन</option>");
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿यथाख्यात चारित्र कथन</option>");
       $optgrp.append("<option value='104-105.html'><b>104-105</b> - ﻿शुद्धात्मा के कई नाम</option>");
       $optgrp.append("<option value='106.html'><b>106</b> - ﻿परमात्मा अपनी ही देह में स्थित है</option>");
       $optgrp.append("<option value='107.html'><b>107</b> - ﻿आत्म-दर्शन ही सिद्ध होने का उपाय</option>");
       $optgrp.append("<option value='108.html'><b>108</b> - ﻿ग्रंथकर्त्ता की अंतिम भावना</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
