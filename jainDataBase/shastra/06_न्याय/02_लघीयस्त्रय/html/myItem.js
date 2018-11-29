
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿अंतरंग, बहिरंग लक्ष्मी से सहित, अमेय-प्रमेयरूपी मणियों को अपने उदर में धारण करने वाले, अति गंभीर ऐसे इस न्याय-शास्त्र-रूपी रत्नाकर में अल्पज्ञानी जनों को अवगाहन करना कठिन है इसलिए तथा हिताहित विशेष को जानने के लिए प्रवचन के अर्थ को निकाल करके प्रतिपादन करने की इच्छा करते हुए, संपूर्ण तार्किक-जनों की चूड़ामणि की किरणों से जिनके चरण नख की किरणों का उल्लेख चित्रित हो रहा है ऐसे भगवान भट्टाकलंकदेव उन भव्यजीवों के लिए जहाज के समान इस लघीयस्त्रय प्रकरण को प्रारंभ करते हुए ग्रंथ की आदि में निर्विघ्नता आदि फल चतुष्टय से युक्त परम मंगल को करते हैं</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿शंकाकार कहता है कि सर्वथैकांतवादी भी सुगत आदि को धर्म का तीर्थंकर मानना अविरुद्ध ही है क्योंकि बाधक प्रमाण का अभाव है । उनके तीर्थ में भी तो प्रमाण आदि के लक्षण का प्रतिपादन संभव है । ऐसे पक्ष का निराकरण करते हुए स्याद्वादमार्ग की निष्वंâटक शुद्धि के लिए आचार्य कहते हैं</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿इस प्रकार से कण्टक शुद्धि को करके संबंध अभिधेय, अनुष्ठान और इष्टप्रयोजन के निर्देशपूर्वक प्रमाण के लक्षण और भेदों को बतलाने के लिए आगे का सूत्र कहते हैं</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿आपने ‘प्रत्यक्ष का लक्षण विशद है’ ऐसा कहा है, वह ज्ञान की विशदता कैसी है ? ऐसी आशंका होने पर आचार्य कहते हैं</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿अब सांव्यवहारिक प्रत्यक्ष के कारण और भेद का निर्णय करने के लिए आचार्य कहते हैं -</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿अब ज्ञान के भेद और प्रमाण तथा फल के व्यवहार को बतलाते हैं -</option>");
  mySel.append("<option value='007.html'><b>007</b> - अब प्रमाण के विषय के विसंवाद को दूर करने के लिए आगे कहते हैं - </option>");
  mySel.append("<option value='008.html'><b>008</b> - एकांत में अर्थक्रिया का विरोध ही है, इसी बात को और स्पष्ट करते हैं -</option>");
  mySel.append("<option value='009.html'><b>009</b> - एक में अनेकाकार को व्याप्त करके रहना और अनेक अर्थक्रिया को करना कैसे है ? अथवा अनेकत्व में एकत्व कैसे होगा ? क्योंकि विरोध आता है। इस प्रकार की आशंका को निवारण करते हुए श्री भट्टाकलंक देव अनेकांत में विरोध के स्वभाव को दिखलाते हैं -</option>");
  mySel.append("<option value='010.html'><b>010</b> - वस्तु के इसी अनेकांत स्वरूप का सौगत के द्वारा मान्य चित्रज्ञान के दृष्टांत के बल से समर्थन करते हैं </option>");
  mySel.append("<option value='011.html'><b>011</b> - अब इस समय परोक्ष प्रमाण के कारण और भेद को कहते हैं।</option>");
  mySel.append("<option value='012.html'><b>012</b> - अविनाभाव का प्रत्यक्ष अथवा अनुमान से निर्णय हो जाता है। पुन: तर्क नाम के एक भिन्न प्रमाण को क्यों आपने कल्पित किया है ? ऐसी आशंका होने पर आचार्य कहते हैं -
</option>");
  mySel.append("<option value='013.html'><b>013</b> - पुन: अनुमान प्रमाण क्या है ? ऐसा प्रश्न होने पर इस सूत्र को कहते हैं -</option>");
  mySel.append("<option value='014.html'><b>014</b> - तादात्म्य और तदुत्पत्ति से अविनाभाव होता है इसलिए व्यापक का व्याप्य ही लिंग है  और कारण का कार्य ही लिंग है। इस प्रकार विधि हेतु दो प्रकार के ही हैं। इस तरह सौगत के विसंवाद का निराकरण करते हुए कारण को भी लिंगत्व हेतुपना सिद्ध करते हैं</option>");
  mySel.append("<option value='015.html'><b>015</b> - अब पूर्वचर को भी हेतुपना सिद्ध करते हुए कहते हैं
</option>");
  mySel.append("<option value='016.html'><b>016</b> - अब दृश्यानुपलब्धि ही निषेध साधन है, अदृश्यानुपलब्धि नहीं है, इस एकांत का निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='017.html'><b>017</b> - स्याद्वादियों के यहाँ भी अनेकांतात्मक तत्त्व प्रत्यक्ष प्रमाण से सिद्ध होने से अनुमान प्रमाण की विफलता का प्रसंग आ जाता है, इस प्रकार की आशंका होने पर आचार्य अगली कारिका को कहते हैं</option>");
  mySel.append("<option value='018.html'><b>018</b> - बौद्ध के मत में ‘अनुपलब्धि हेतु मत सिद्ध होवे किन्तु कार्य हेतु और स्वभाव हेतु ये दो हेतु होवेंगे परन्तु वे दोनों हेतु भी नहीं घटते हैं, आचार्य ऐसा कहते हैं
</option>");
  mySel.append("<option value='019.html'><b>019</b> - और दूसरी बात यह है कि अनुमान विकल्पात्मक है वह सौगत के मत में सिद्ध ही नहीं हो सकता है, ऐसा प्रतिपादन करते हैं</option>");
  mySel.append("<option value='020.html'><b>020</b> - आप जैन के यहाँ भी प्रमाण के दो विध का नियम नहीं टिकता है क्योंकि आपने उपमान नाम के एक भिन्न प्रमाण को संगृहीत नहीं किया है। इस प्रकार से कहने वाले नैयायिक आदि की व्यवस्था को आड़े हाथ लेते हुए उनके मत में भी संख्या के नियम को विघटित करते हैं
</option>");
  mySel.append("<option value='021.html'><b>021</b> - इसी उपर्युक्त कथन का ही समर्थन करते हैं</option>");
  mySel.append("<option value='022.html'><b>022</b> - न केवल ये ही प्रमाणांतर है अपितु अन्य भी हैं, ऐसा दिखलाते हैं</option>");
  mySel.append("<option value='023.html'><b>023</b> - इस प्रकार सम्यग्ज्ञान लक्षण प्रमाण, प्रत्यक्ष-परोक्ष भेद, द्रव्य पर्यायात्मक अर्थ विषय और अज्ञाननिव्रत्ति आदि फल, इन चारों को प्रतिपादित करके इस समय प्रमाणाभास का निरूपण करते हुए कहते हैं -
</option>");
  mySel.append("<option value='024.html'><b>024</b> - इस समय जो सौगतों ने विकल्पज्ञान को प्रत्यक्षाभास कल्पित किया है, उसका निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='025.html'><b>025</b> - स्वसंवेदन आदि प्रत्यक्ष ज्ञान में विकल्प नहीं हैं क्योंकि वे दिखते नहीं हैं, इस पक्ष का निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='026.html'><b>026</b> - इसी का समर्थन करते हुए कहते हैं -</option>");
  mySel.append("<option value='027.html'><b>027</b> - अब इस समय श्रुतज्ञान में प्रमाण आरै प्रमाणाभास की व्यवस्था को प्रतिपादित करते हैं -
</option>");
  mySel.append("<option value='028.html'><b>028</b> - श्रुत को सर्वत्र अप्रमाण की आशंका करने पर अतिप्रसंग दोष को दिखलाते हैं
</option>");
  mySel.append("<option value='029.html'><b>029</b> - सर्वत्र श्रुत में अविश्वास होने पर और भी अनिष्ट को बताते हैं</option>");
  mySel.append("<option value='030.html'><b>030</b> - सुगत के वचन को भी अप्रमाणता हो जावे क्योंकि प्रत्यक्ष और अनुमान को ही प्रमाणता है क्योंकि पुरुषों के विचित्र अभिप्राय होने से अर्थ में व्यभिचार आता है, इस प्रकार की दाशबल की शंका का निरसन करते हैं</option>");
  mySel.append("<option value='031.html'><b>031</b> - अब इस समय प्रमाण और प्रमाणाभास की परीक्षा करके नय और नयाभास के लक्षण की परीक्षा के लिए कहते हैं</option>");
  mySel.append("<option value='032.html'><b>032</b> - देश, काल और आकार के भेद से अत्यंत भिन्न ही भाव परमार्थसत् हैं किन्तु सत् सामान्य नहीं हैं। इस प्रकार की बौद्ध की मान्यता का निराकरण करते हुए कहते हैं-</option>");
  mySel.append("<option value='033.html'><b>033</b> - उस सत्सामान्य के नय का निरूपण करते हैं</option>");
  mySel.append("<option value='034.html'><b>034</b> - प्रत्यक्ष से भेद सिद्ध है पुन: अभेद नयरूप संग्रह मिथ्या है क्योंकि प्रत्यक्ष से बाधित है। इस प्रकार की सौगत की विचारधारा का निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='035.html'><b>035</b> - इस प्रकार सत्सामान्य लक्षण शुद्ध द्रव्य का समर्थन करके अब ऊध्र्वता सामान्य लक्षण अशुद्ध द्रव्य का समर्थन करते हैं</option>");
  mySel.append("<option value='036.html'><b>036</b> - कार्य कारण का भिन्न काल होने से क्षणिक में ही अर्थक्रिया संभव है नित्य में नहीं, इस प्रकार के बौद्ध के वाक्यों को शोधन करते हुए कहते हैं</option>");
  mySel.append("<option value='037.html'><b>037</b> - एक ही अनेक कार्य को करने वाला और धर्मों में व्याप्त होकर रहने वाला कैसे हो सकता है क्योंकि परस्पर में विरोध है ? इस आशंका का निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='038.html'><b>038</b> - इस प्रकार सत्सामान्य रूप पर द्रव्य को और उत्पाद, व्यय, ध्रौव्य से युक्त अपर द्रव्य को प्रतिपादित करके उसमें पर द्रव्य को विषय करने वाले परसंग्रह को और तदाभास को दिखलाते हुए कहते हैं</option>");
  mySel.append("<option value='039.html'><b>039</b> - अब इस समय नैगमनय और तदाभास का निरूपण करते हैं</option>");
  mySel.append("<option value='040.html'><b>040</b> - गुण-गुणी आदि में समवाय संबंध है ही है इस प्रकार के यौगमत का निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='041.html'><b>041</b> - ब्रह्मवाद और भेदवाद में भी प्रमाण आदि व्यवहार संभव हैं अत: वे संग्रहावास और नैगमाभास कैसे हैं ? इस प्रकार के आक्षेप को समाप्त करते हुए कहते हैं</option>");
  mySel.append("<option value='042.html'><b>042</b> - अब उनके सुनयत्व को प्रतिपादित करते हैं</option>");
  mySel.append("<option value='043.html'><b>043</b> - अब ऋजुसूत्र नय का निरूपण करते हैं</option>");
  mySel.append("<option value='044.html'><b>044</b> - अब शब्द, समभिरूढ़ और इत्यंभूत इन तीनों नयों का भी निरूपण करते हैं</option>");
  mySel.append("<option value='045.html'><b>045</b> - शब्द और अर्थ में संकेत ग्रहण का अभाव होने से शब्द के भेद से अर्थ में भेद कैसे हो सकता है ? प्रत्यक्ष से संकेत का ग्रहण होने पर भी वह व्यवहार में उपयोगी नहीं है क्योंकि गृहीत और संकेत उसी समय नष्ट हो जाते हैं। स्मृति भी संकेत को विषय नहीं करती है क्योंकि वे दोनों अतीत हो चुके हैं। इस प्रकार सौगत की आशंका का निराकरण करते हुए आचार्य कहते हैं </option>");
  mySel.append("<option value='046.html'><b>046</b> - शब्द और अर्थ में संबंध का अभाव होने से शब्द की प्रमाणता कैसे होगी ? कि जिससे उसके विषय में शब्दादिक नय समीचीन होवें ? ऐसी आशंका का निराकरण करते हुए आचार्य कहते है
</option>");
  mySel.append("<option value='047.html'><b>047</b> - काल, कारक और लिंग के भेद से शब्द अर्थ में भेद करने वाला है यह कहना ठीक नहीं है क्योंकि उसको ग्रहण करने वाले प्रमाण का अभाव है। ऐसी आशंका का निरसन करते हुए आचार्य कहते हैं</option>");
  mySel.append("<option value='048.html'><b>048</b> - एकांत में भी एक में षट्कारक की व्यवस्था का होना कैसे घट सकता है ? ऐसी आशंका के होने पर आचार्य कहते हैं</option>");
  mySel.append("<option value='049.html'><b>049</b> - नय विकल्पात्मक है इसलिए वे तत्त्वों के ज्ञान की सिद्धि नहीं करा सकते हैं। जैसेस्मृति आदि तत्त्वों के ज्ञान को कराने में असमर्थ हैं, इस प्रकार की सौगत की आशंका का निरसन करते हुए प्रकरण के उपसंहार को कहते हैं</option>");
  mySel.append("<option value='050.html'><b>050</b> - सौगत आदि के मत में भी तत्त्वों का ज्ञान होता है, इस प्रकार की आशंका के होने पर कहते हैं</option>");
  mySel.append("<option value='051.html'><b>051</b> - अब इस समय आगम के स्वरूप का निरूपण करते हुए प्रवचन प्रवेश की आदि में और ग्रंथ के मध्य में मंगलभूत इष्ट देवता के गुणों की स्तुति करते हैं</option>");
  mySel.append("<option value='052.html'><b>052</b> - अब कहे गये प्रमाण आदि का लक्षण कहते हैं -</option>");
  mySel.append("<option value='053.html'><b>053</b> - ‘विषय अकारण नहीं होता है’ इस बौद्धमत का निराकरण करने के लिए अर्थ को कारण मानने का खंडन करते हैं</option>");
  mySel.append("<option value='054.html'><b>054</b> - अनुमान से ज्ञान की उत्पत्ति की सिद्धि हो जावेगी, ऐसी आशंका होने पर आचार्य कहते हैं -
</option>");
  mySel.append("<option value='055.html'><b>055</b> - अज्ञानरूप भी सन्निकर्ष प्रमाण है इस आशंका का निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='056.html'><b>056</b> - अब आलोक को ज्ञान के कारणपने का निराकरण करते हुए कहते हैं</option>");
  mySel.append("<option value='057.html'><b>057</b> - अर्थ से ज्ञान की उत्पत्ति न मानने पर संपूर्ण अर्थ को प्रकाशित करने का प्रसंग हो जावेगा क्योंकि इनमें कोई अंतर नहीं है, ऐसी आशंका होने पर आचार्य कहते हैं</option>");
  mySel.append("<option value='058.html'><b>058</b> - ज्ञान जिस अर्थ से उत्पन्न होता है, जिस आकार का अनुकरण करता है और जिसके विषय में निश्चय को उत्पन्न करता है, उसी विषय में उस ज्ञान की प्रमाणता है किन्तु सर्वत्र नहीं है, ऐसी सौगत की आशंका का आचार्य खंडन करते हैं</option>");
  mySel.append("<option value='059.html'><b>059</b> - इसलिए अपने कारण समूहों से उत्पन्न होता हुआ प्रकाशरूप ज्ञान स्वत: ही अर्थ को ग्रहण करने वाला है, अब आचार्य इस बात को कहते है -
</option>");
  mySel.append("<option value='060.html'><b>060</b> - ‘ज्ञानं प्रमाणं आत्मादे:’- अब ज्ञान प्रमाण है वह आत्मा आदि को विषय करता है, इसी ही अर्थ को और स्पष्ट करते हैं</option>");
  mySel.append("<option value='061.html'><b>061</b> - इस समय उस प्रमाण की संख्या को कहते हैं</option>");
  mySel.append("<option value='062.html'><b>062</b> - अब श्रुत के व्यापार भेद को दिखाते हैं</option>");
  mySel.append("<option value='063.html'><b>063</b> - ‘सम्यग्दर्शनज्ञानचारित्राणि मोक्षमार्ग:’ इत्यादि वाक्यों में, शास्त्र में अथवा लोक में स्यात्कार का प्रयोग क्यों नहीं किया गया है कि जिससे सर्वत्र वाक्य का अर्थ अनेकांत होवे ? इस प्रकार का आक्षेप होने पर आचार्य कहते हैं</option>");
  mySel.append("<option value='064.html'><b>064</b> - वर्ण, पद और वाक्यात्मक शब्द विवक्षा के विषय हैं, पुन: स्यात्कार अर्थापत्ति से कैसे प्रतीति का विषय होगा ? ऐसी आशंका होने पर आचार्य कहते हैं</option>");
  mySel.append("<option value='065.html'><b>065</b> - अब नय के भेदों को कहते हैं</option>");
  mySel.append("<option value='066.html'><b>066</b> - अब पहले कहे गये भी नैगम आदि नयों को मंदमति वाले शिष्यों के अनुग्रह के लिए पुन: कहने की इच्छा रखते हुए पहले नैगम और नैगमाभास का निरूपण करते हैं</option>");
  mySel.append("<option value='067.html'><b>067</b> - अब संग्रहनय और संग्रहाभास को कहते हैं</option>");
  mySel.append("<option value='068.html'><b>068</b> - अब व्यवहारनय का निरूपण करते हैं -</option>");
  mySel.append("<option value='069.html'><b>069</b> - अब ऋजुसूत्रनय और तदाभास का प्ररूपण करते हैं</option>");
  mySel.append("<option value='070.html'><b>070</b> - अब उक्त नयों के विशेषण और विशेष नय स्वरूप को प्रतिपादित करते हैं</option>");
  mySel.append("<option value='071.html'><b>071</b> - अब निक्षेप के स्वरूप को निरूपण करते हुए शाध्Eा अध्ययन के फल का निर्देश करते हैं</option>");
  mySel.append("<option value='072.html'><b>072</b> - अब पुन: शास्त्र के अध्ययन के फल को दिखलाते हैं -</option>");
  mySel.append("<option value='073.html'><b>073</b> - अब पुन: परार्थ संपत्ति का निर्देश करते हैं</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
