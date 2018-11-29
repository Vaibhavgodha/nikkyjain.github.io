
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
       $optgrp.append("<option value='001.html'><b>001</b></option>");
       $optgrp.append("<option value='002-003.html'><b>002-003</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अनित्य अनुप्रेक्षा">')
       $optgrp.append("<option value='004.html'><b>004</b></option>");
       $optgrp.append("<option value='005.html'><b>005</b></option>");
       $optgrp.append("<option value='006.html'><b>006</b></option>");
       $optgrp.append("<option value='007.html'><b>007</b></option>");
       $optgrp.append("<option value='008.html'><b>008</b></option>");
       $optgrp.append("<option value='009.html'><b>009</b></option>");
       $optgrp.append("<option value='010.html'><b>010</b></option>");
       $optgrp.append("<option value='011.html'><b>011</b></option>");
       $optgrp.append("<option value='012.html'><b>012</b></option>");
       $optgrp.append("<option value='013.html'><b>013</b></option>");
       $optgrp.append("<option value='014.html'><b>014</b></option>");
       $optgrp.append("<option value='015.html'><b>015</b></option>");
       $optgrp.append("<option value='016.html'><b>016</b></option>");
       $optgrp.append("<option value='017-018.html'><b>017-018</b></option>");
       $optgrp.append("<option value='019.html'><b>019</b></option>");
       $optgrp.append("<option value='020.html'><b>020</b></option>");
       $optgrp.append("<option value='021.html'><b>021</b></option>");
       $optgrp.append("<option value='022.html'><b>022</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अशरण अनुप्रेक्षा">')
       $optgrp.append("<option value='023.html'><b>023</b></option>");
       $optgrp.append("<option value='024.html'><b>024</b></option>");
       $optgrp.append("<option value='025.html'><b>025</b></option>");
       $optgrp.append("<option value='026.html'><b>026</b></option>");
       $optgrp.append("<option value='027.html'><b>027</b></option>");
       $optgrp.append("<option value='028.html'><b>028</b></option>");
       $optgrp.append("<option value='029.html'><b>029</b></option>");
       $optgrp.append("<option value='030.html'><b>030</b></option>");
       $optgrp.append("<option value='031.html'><b>031</b></option>");
       $optgrp.append("<option value='032-033.html'><b>032-033</b></option>");
       $optgrp.append("<option value='034.html'><b>034</b></option>");
       $optgrp.append("<option value='035.html'><b>035</b></option>");
       $optgrp.append("<option value='036.html'><b>036</b></option>");
       $optgrp.append("<option value='037.html'><b>037</b></option>");
       $optgrp.append("<option value='038.html'><b>038</b></option>");
       $optgrp.append("<option value='039.html'><b>039</b></option>");
       $optgrp.append("<option value='040.html'><b>040</b></option>");
       $optgrp.append("<option value='049.html'><b>049</b></option>");
       $optgrp.append("<option value='050.html'><b>050</b></option>");
       $optgrp.append("<option value='057.html'><b>057</b></option>");
       $optgrp.append("<option value='060.html'><b>060</b></option>");
       $optgrp.append("<option value='061.html'><b>061</b></option>");
       $optgrp.append("<option value='062.html'><b>062</b></option>");
       $optgrp.append("<option value='063.html'><b>063</b></option>");
       $optgrp.append("<option value='064-065.html'><b>064-065</b></option>");
       $optgrp.append("<option value='066.html'><b>066</b></option>");
       $optgrp.append("<option value='067.html'><b>067</b></option>");
       $optgrp.append("<option value='068.html'><b>068</b></option>");
       $optgrp.append("<option value='069.html'><b>069</b></option>");
       $optgrp.append("<option value='070.html'><b>070</b></option>");
       $optgrp.append("<option value='071.html'><b>071</b></option>");
       $optgrp.append("<option value='072.html'><b>072</b></option>");
       $optgrp.append("<option value='074-075.html'><b>074-075</b></option>");
       $optgrp.append("<option value='074-076.html'><b>074-076</b></option>");
       $optgrp.append("<option value='077.html'><b>077</b></option>");
       $optgrp.append("<option value='078.html'><b>078</b></option>");
       $optgrp.append("<option value='079.html'><b>079</b></option>");
       $optgrp.append("<option value='082.html'><b>082</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अशुचि अनुप्रेक्षा">')
       $optgrp.append("<option value='083.html'><b>083</b></option>");
       $optgrp.append("<option value='084.html'><b>084</b></option>");
       $optgrp.append("<option value='085.html'><b>085</b></option>");
       $optgrp.append("<option value='086.html'><b>086</b></option>");
       $optgrp.append("<option value='087.html'><b>087</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आस्रव अनुप्रेक्षा">')
       $optgrp.append("<option value='088.html'><b>088</b></option>");
       $optgrp.append("<option value='089.html'><b>089</b></option>");
       $optgrp.append("<option value='090.html'><b>090</b></option>");
       $optgrp.append("<option value='092.html'><b>092</b></option>");
       $optgrp.append("<option value='093.html'><b>093</b></option>");
       $optgrp.append("<option value='094.html'><b>094</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संवर अनुप्रेक्षा">')
       $optgrp.append("<option value='095.html'><b>095</b></option>");
       $optgrp.append("<option value='096.html'><b>096</b></option>");
       $optgrp.append("<option value='099.html'><b>099</b></option>");
       $optgrp.append("<option value='100.html'><b>100</b></option>");
       $optgrp.append("<option value='101.html'><b>101</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निर्जरा अनुप्रेक्षा">')
       $optgrp.append("<option value='102.html'><b>102</b></option>");
       $optgrp.append("<option value='103.html'><b>103</b></option>");
       $optgrp.append("<option value='104.html'><b>104</b></option>");
       $optgrp.append("<option value='105.html'><b>105</b></option>");
       $optgrp.append("<option value='106-108.html'><b>106-108</b></option>");
       $optgrp.append("<option value='109.html'><b>109</b></option>");
       $optgrp.append("<option value='110-111.html'><b>110-111</b></option>");
       $optgrp.append("<option value='112-113.html'><b>112-113</b></option>");
       $optgrp.append("<option value='114.html'><b>114</b></option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
