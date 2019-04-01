
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿देन</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿जीवन एक सराय</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿मालिक  कौन</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿सीख खुद को भी दो</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿मोह विचार को छुड़ा देता है</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿वासना के आधार से सुनना</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿भेडचाल</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿अपने मतलब की बात</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿पक्ष</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿लंबा समय</option>");
  mySel.append("<option value='011.html'><b>011</b></option>");
  mySel.append("<option value='012.html'><b>012</b></option>");
  mySel.append("<option value='013.html'><b>013</b></option>");
  mySel.append("<option value='014.html'><b>014</b></option>");
  mySel.append("<option value='015.html'><b>015</b></option>");
  mySel.append("<option value='016.html'><b>016</b></option>");
  mySel.append("<option value='017.html'><b>017</b></option>");
  mySel.append("<option value='018.html'><b>018</b></option>");
  mySel.append("<option value='019.html'><b>019</b></option>");
  mySel.append("<option value='020.html'><b>020</b></option>");
  mySel.append("<option value='021.html'><b>021</b></option>");
  mySel.append("<option value='022.html'><b>022</b></option>");
  mySel.append("<option value='023.html'><b>023</b></option>");
  mySel.append("<option value='024.html'><b>024</b></option>");
  mySel.append("<option value='025.html'><b>025</b></option>");
  mySel.append("<option value='026.html'><b>026</b></option>");
  mySel.append("<option value='027.html'><b>027</b></option>");
  mySel.append("<option value='028.html'><b>028</b></option>");
  mySel.append("<option value='029.html'><b>029</b></option>");
  mySel.append("<option value='030.html'><b>030</b></option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
