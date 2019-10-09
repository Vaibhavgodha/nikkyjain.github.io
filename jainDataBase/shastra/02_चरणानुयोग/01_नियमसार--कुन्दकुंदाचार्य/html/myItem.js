
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
       $optgrp.append("<option value='032.html'><b>032</b> - ﻿मुख्य काल का स्वरूप</option>");
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿अमूर्त अचेतन द्रव्यों की पर्याय</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿पंचास्तिकाय</option>");
       $optgrp.append("<option value='035-036.html'><b>035-036</b> - ﻿द्रव्यों के प्रदेश</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शुद्ध-भाव-अधिकार">')
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿हेय और उपादेय तत्त्व</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿निर्विकल्प तत्त्व</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿बन्ध-उदय स्थान जीव नहीं</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿चार विभाव-स्वभावों और पंचम-भाव</option>");
       $optgrp.append("<option value='042.html'><b>042</b> - ﻿शुद्ध-जीव को विकार नहीं</option>");
       $optgrp.append("<option value='043.html'><b>043</b> - ﻿शुद्ध-आत्मा को विभाव का अभाव</option>");
       $optgrp.append("<option value='044.html'><b>044</b> - ﻿शुद्ध जीव का स्वरूप</option>");
       $optgrp.append("<option value='045-046.html'><b>045-046</b> - ﻿कारण-परमात्मा का स्वरूप</option>");
       $optgrp.append("<option value='047.html'><b>047</b> - ﻿संसारी और मुक्त जीवों में अन्तर नहीं</option>");
       $optgrp.append("<option value='048.html'><b>048</b> - ﻿कार्य तथा कारण-समयसार में अन्तर नहीं</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿निश्चय और व्यवहारनय की उपादेयता</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿हेय-उपादेय का स्वरूप</option>");
       $optgrp.append("<option value='051-055.html'><b>051-055</b> - ﻿रत्नत्रय का स्वरूप</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿व्यवहार-चारित्र">')
       $optgrp.append("<option value='056.html'><b>056</b> - ﻿अहिंसाव्रत</option>");
       $optgrp.append("<option value='057.html'><b>057</b> - ﻿सत्यव्रत</option>");
       $optgrp.append("<option value='058.html'><b>058</b> - ﻿अचौर्य-व्रत</option>");
       $optgrp.append("<option value='059.html'><b>059</b> - ﻿ब्रह्मचर्य-व्रत</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿चारित्र अधिकार">')
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿परिग्रह-त्याग व्रत</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿ईर्या-समिति</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿भाषा-समिति</option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿एषणा-समिति</option>");
       $optgrp.append("<option value='064.html'><b>064</b> - ﻿आदाननिक्षेपण समिति</option>");
       $optgrp.append("<option value='065.html'><b>065</b> - ﻿प्रतिष्ठापन समिति</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿व्यवहार मनोगुप्ति</option>");
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿वचन-गुप्ति</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿काय-गुप्ति</option>");
       $optgrp.append("<option value='069.html'><b>069</b> - ﻿निश्चय मनोगुप्ति और वचनगुप्ति</option>");
       $optgrp.append("<option value='070.html'><b>070</b> - ﻿निश्चय का्य-गुप्ति</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿अर्हत् परमेश्वर</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿सिद्ध-परमेष्ठि</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿आचार्य</option>");
       $optgrp.append("<option value='074.html'><b>074</b> - ﻿उपाध्याय</option>");
       $optgrp.append("<option value='075.html'><b>075</b> - ﻿साधुओं का स्वरूप</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿व्यवहार-चारित्र-अधिकार का उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परमार्थ प्रतिक्रमण">')
       $optgrp.append("<option value='077-081.html'><b>077-081</b> - ﻿पंचरत्न का स्वरूप</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿भेदविज्ञान द्वारा निश्चय-चारित्र</option>");
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿वचनमय प्रतिक्रमण का निरास</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿आत्माराधक ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿परमोपेक्षा-संयमी को निश्चय प्रतिक्रमण</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿उन्मार्ग का परित्याग और सर्वज्ञ वीतराग-मार्ग को स्वीकार</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿निःशल्यभाव को ही निश्चय प्रतिक्रमण</option>");
       $optgrp.append("<option value='088.html'><b>088</b> - ﻿त्रिगुप्तिगुप्त को निश्चयचारित्र</option>");
       $optgrp.append("<option value='089.html'><b>089</b> - ﻿ध्यान के भेद</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿अनासन्न-भव्य जीव के पूर्वापर परिणाम</option>");
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿निश्चय-रत्नत्रय धारक ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿निश्चय-उत्तमार्थ प्रतिक्रमण</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿ध्यान एक उपादेय</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿व्यवहार प्रतिक्रमण की सफलता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निश्चय प्रत्याख्यान">')
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿निश्चय प्रत्याख्यान का स्वरूप</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿अनंतचतुष्टयात्मक निज-आत्मा के ध्यान का उपदेश</option>");
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿ज्ञानी को शिक्षा</option>");
       $optgrp.append("<option value='098.html'><b>098</b></option>");
       $optgrp.append("<option value='099.html'><b>099</b></option>");
       $optgrp.append("<option value='100.html'><b>100</b></option>");
       $optgrp.append("<option value='101.html'><b>101</b></option>");
       $optgrp.append("<option value='102.html'><b>102</b></option>");
       $optgrp.append("<option value='103.html'><b>103</b></option>");
       $optgrp.append("<option value='104.html'><b>104</b></option>");
       $optgrp.append("<option value='105.html'><b>105</b></option>");
       $optgrp.append("<option value='106.html'><b>106</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परम आलोचना">')
       $optgrp.append("<option value='107.html'><b>107</b></option>");
       $optgrp.append("<option value='108.html'><b>108</b></option>");
       $optgrp.append("<option value='109.html'><b>109</b></option>");
       $optgrp.append("<option value='110.html'><b>110</b></option>");
       $optgrp.append("<option value='111.html'><b>111</b></option>");
       $optgrp.append("<option value='112.html'><b>112</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शुद्धनिश्चय-प्रायश्चित्त">')
       $optgrp.append("<option value='113.html'><b>113</b></option>");
       $optgrp.append("<option value='114.html'><b>114</b></option>");
       $optgrp.append("<option value='115.html'><b>115</b></option>");
       $optgrp.append("<option value='116.html'><b>116</b></option>");
       $optgrp.append("<option value='117.html'><b>117</b></option>");
       $optgrp.append("<option value='118.html'><b>118</b></option>");
       $optgrp.append("<option value='119.html'><b>119</b></option>");
       $optgrp.append("<option value='120.html'><b>120</b></option>");
       $optgrp.append("<option value='121.html'><b>121</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परम-समाधि">')
       $optgrp.append("<option value='122.html'><b>122</b></option>");
       $optgrp.append("<option value='123.html'><b>123</b></option>");
       $optgrp.append("<option value='124.html'><b>124</b></option>");
       $optgrp.append("<option value='125.html'><b>125</b></option>");
       $optgrp.append("<option value='126.html'><b>126</b></option>");
       $optgrp.append("<option value='127.html'><b>127</b></option>");
       $optgrp.append("<option value='128.html'><b>128</b></option>");
       $optgrp.append("<option value='129.html'><b>129</b></option>");
       $optgrp.append("<option value='130.html'><b>130</b></option>");
       $optgrp.append("<option value='131-132.html'><b>131-132</b></option>");
       $optgrp.append("<option value='133.html'><b>133</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परम-भक्ति">')
       $optgrp.append("<option value='134.html'><b>134</b></option>");
       $optgrp.append("<option value='135.html'><b>135</b></option>");
       $optgrp.append("<option value='136.html'><b>136</b></option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
