function createList {
  myType=$1
  myCatDir=$2
  myFile=$3
  myTypeCap="$(tr '[:lower:]' '[:upper:]' <<< ${myType:0:1})${myType:1}"
cat << EOF >> $myFile
  <div data-history=false data-role=popup id=popup$myTypeCap data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
EOF

for myCat in $(ls -d $myCatDir/*/)
do
    myCategoryL=$(basename $myCat)
    myCategoryL=$(echo $myCategoryL | sed 's/.*_//')
    cat <<EOF >> $myFile
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>$myCategoryL</h2>
          <ul data-role=listview id=${myType}ListView-$myCategoryL></ul>
        </div>
EOF
done
echo "   </div></div>" >> $myFile
}

function createMiscList {
  myFile=$1
  myRelPath=$2
if [ "$myMiscListVar" = "" ]; then
#cat << EOF >> $myFile
read -r -d '' myMiscListVar << EOF
  <div data-history=false data-role=popup id=popupMisc data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>गुणस्थान</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanTable.html>गुणस्थान-विभाजन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanKarmUdayTable.html>गुणस्थान में उदय</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanToAndFrom.html>गुणस्थान-गमनागमन</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanKaalTable.html>गुणस्थान-काल-संख्या</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>कर्म</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/karmUdayTable.html>कर्म-उदय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/karmBandhTable.html>कर्म-बन्ध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/karmSattaTable.html>कर्म-सत्ता</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>बंध</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/prakratiBandhPrarupana.html>प्रकृति-बंध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/stithiSaarani.html>स्थिति-बंध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/anubhagBandhPrarupana.html>अनुभाग-बंध</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>प्रमाण</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/kshetraPramaan.html>क्षेत्र-प्रमाण</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/sankhyaPramaan.html>संख्याप्रमाण</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Other</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/alpBahutva.html>अल्प बहुत्व</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GatiAgati.html>गति-आगति</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/nyaay.html>न्याय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/moolSanghPattavali.html>मूल संघ पट्टावली</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Download</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/Jain-Bhajan.pdf>जैन भजन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/Jain-Pooja-Paath.pdf>जैन पूजा-पाठ</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/gathaa-ratnakarandShraavakaachaar.pdf>रत्नकरंड-श्रावकाचार--गाथा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/gathaa-samaysaar.pdf>समयसार--गाथा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/gathaa-labdhisaar.pdf>लब्धिसार--गाथा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/gathaa-gommatSaarJeevKand.pdf>गोम्मटसार-जीवकांड--गाथा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/gathaa-panchastikay.pdf>पंचास्तिकाय--गाथा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/JeevSamas.pdf>JeevSamas</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/bookmark.pdf>Bookmark</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/gathaa-yogsaar.pdf>योगसार--गाथा</a></li>
          </ul>
        </div>
    </div>
  </div>

  <div data-history=false data-role=popup id=popupGames data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Kids Games</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}kidsGames1.html>Arrange Names</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Crossword Puzzle</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/crosswords/crossword1.html>Puzzle-1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/crosswords/crossword2.html>Puzzle-2</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/crosswords/crossword3.html>Puzzle-3</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Word Search</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/wordSearch/WordSearch-1.pdf>Puzzle-1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/wordSearch/WordSearch-2.pdf>Puzzle-2</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/wordSearch/WordSearch-3.pdf>Puzzle-3</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Exam</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/GunsthanVivechan.html>गुणस्थान विवेचन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/TattvarthSutra-1.html>तत्वार्थ मंजुषा - अध्याय 1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/jeevSamas.html>JeevSamas</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/karmUdayBandh.html>Karm Uday Bandh</a></li>
          </ul>
        </div>
    </div>
  </div>
EOF
fi
echo "$myMiscListVar" >> $myFile
}

function createHeader {
  myOutFile=$1
  myRelPath=$2

if [ "$myHeaderVar" = "" ]; then
#cat <<EOF > $myOutFile
read -r -d '' myHeaderVar << EOF
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Jai Jinendra</title>
  <link rel="icon" type="image/png" href="${myRelPath}images/default/jainFlag-short.jpg"/>
  <link rel="stylesheet" href="${myRelPath}js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css">
  <script type="text/javascript" src="${myRelPath}js/jquery.js"></script>
  <script type="text/javascript" src="${myRelPath}js/jquery-mobile/1.5-alpha/jquery.mobile.js"></script>
  <script type="text/javascript" src="${myRelPath}js/$myjsFile"></script>
<style>
img {
    border-radius: 10px 10px 10px 10px;
}
div.title {
    font-size: 15px;
    color: red;
    font-weight: bold;
    text-align: center;
}
div.main {
    font-size: 35px;
    color: maroon;
    font-weight: bold;
    text-align: center;
}
div.pooja {
    font-size: 25px;
    color: darkBlue;
    font-weight: bold;
    text-align: center;
}
div.arth {
    font-size: 20px;
    color: darkBlue;
    width: 90%;
    text-align: justify;
    margin: 0 auto;
}
span.om {
    font-size: 20px;
    color: maroon;
    width: 90%;
    text-align: center;
    margin: 0 auto;
}
div.poojarth {
    font-size: 20px;
    color: darkGreen;
    width: 90%;
    text-align: justify;
    margin: 0 auto;
}
</style>
</head>
<body>
<div data-role="header" data-position="fixed">
    <!--h1 align=center>Jai Jinendra</h1-->
    <p align=center><img src="${myRelPath}images/jain-saint.jpg" height=100 width=110></img></p>
    <div data-role="navbar" data-maxbutton="3" class="ui-body-a">
        <ul>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupBhajan">भजन</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupPooja">पूजा-पाठ</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupGranth">Full Granth</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupShastra">Granth Gaatha-By-Gatha</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupGames">Play / Test</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupMisc">Misc</a></li>
        </ul>
    </div>
</div>

<script>
  relPath="$myRelPath";
</script>
EOF
fi
echo "$myHeaderVar" > $myOutFile
}
