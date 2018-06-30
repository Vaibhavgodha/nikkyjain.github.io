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

function createBhajan {
  relPath=$1
  createSearch=$2
  [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
  <div data-history=false data-role=popup id=popupBhajan data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
EOF
  for category in $(ls -d $dbDir/jainDataBase/bhajans/*/)
  do
      myCategory=$(basename $category)
      myCategory=$(echo $myCategory | sed 's/.*_//')
      [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>$myCategory</h2>
        <ul data-role=listview>
EOF
      OIFS="$IFS"
      IFS=$'\n'
      myCntrL=1;
      for item in $(ls $category/main/*)
      do
          myItem=$(basename $item)
          myItem=$(echo $myItem | sed 's/.txt//');
          echo "          <li data-theme=b><a data-ajax=false href=${relPath}jainDataBase/bhajans/$(basename $category)/html/bhajan-${myCntrL}.html>$myItem</a></li>" >> $myHtml
          myCntrL=$(($myCntrL+1))
  
      done
      [ "$createSearch" = "" ] && cat << EOF >> $myHtml 
        </ul>
      </div>
EOF
      IFS="$OIFS"
      if [ "$createSearch" = "" ]; then 
        echo "  Category $(basename $category) Done"
      else
        echo "  Search $(basename $category) Done"
      fi
  done
  [ "$createSearch" = "" ] && cat << EOF >> $myHtml 
    </div>
  </div>
EOF
}

function createPooja {
  relPath=$1
  createSearch=$2
  [ "$createSearch" = "" ] && cat << EOF >> $myHtml
  <div data-history=false data-role=popup id=popupPooja data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
EOF
for category in $(ls -d $dbDir/others/collaborate/poojas/*/)
do
    myCategory=$(basename $category)
    myCategory=$(echo $myCategory | sed 's/.*_//')
    [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>$myCategory</h2>
        <ul data-role=listview>
EOF
    OIFS="$IFS"
    IFS=$'\n'
    for item in $(ls -d $category/*/)
    do
        myItem=$(basename $item)
        myItem=$(echo $myItem | sed 's/.*_//');
        echo "          <li data-theme=b><a data-ajax=false href=${relPath}jainDataBase/poojas/$(basename $category)/$(basename $item)/html/index.html>$myItem</a></li>" >> $myHtml
    done
    #echo "  \$(\"\#poojaListView-$myCategory\").listview('refresh');" >> $jsFile
    IFS="$OIFS"
     [ "$createSearch" = "" ] &&  cat << EOF >> $myHtml 
        </ul>
      </div>
EOF
   if [ "$createSearch" = "" ];then
      echo "  Category $(basename $category) Done"
   else
      echo "  Search $(basename $category) Done"
   fi
done

  [ "$createSearch" = "" ] && cat << EOF >> $myHtml 
    </div>
  </div>
EOF
}

function createGranth {
  relPath=$1
  myType=$2
  createSearch=$3
  myTypeCap="$(tr '[:lower:]' '[:upper:]' <<< ${myType:0:1})${myType:1}"
  [ "$createSearch" = "" ] && cat << EOF >> $myHtml
  <div data-history=false data-role=popup id=popup$myTypeCap data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
EOF
for category in $(ls -d $dbDir/others/collaborate/shastra/*/)
do
    myCategory=$(basename $category)
    myCategory=$(echo $myCategory | sed 's/.*_//')
    [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>$myCategory</h2>
        <ul data-role=listview>
EOF
    OIFS="$IFS"
    IFS=$'\n'
    for item in $(ls -d $category/*/)
    do
        myItem=$(basename $item)
        myItem=$(echo $myItem | sed 's/.*_//');
        echo "          <li data-theme=b><a data-ajax=false href=${relPath}jainDataBase/$myType/$(basename $category)/$(basename $item)/html/index.html>$myItem</a></li>" >> $myHtml
    done
    IFS="$OIFS"
    [ "$createSearch" = "" ] &&  cat << EOF >> $myHtml 
        </ul>
      </div>
EOF
    if [ "$createSearch" = "" ]; then
      echo "  Search $(basename $category) Done"
    else
      echo "  Search $(basename $category) Done"
    fi
done

 [ "$createSearch" = "" ] &&  cat << EOF >> $myHtml 
    </div>
  </div>
EOF
}

function createMiscList {
  myRelPath=$1
cat << EOF >> $myHtml
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
}

function createHeader {
  myRelPath=$1

cat <<EOF > $myHtml
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
  <script type="text/javascript" src="js/notify.js"></script>
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
span.gatharth {
    font-size: 20px;
    color: darkBlue;
    font-weight: bold;
}
div.comment {
    font-size: 15px;
    color: darkgray;
    width: 90%;
    text-align: center;
    margin: 0 auto;
}
#demo-page :not(INPUT):not(TEXTAREA) {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
/* Content styling. */
dl { font-family: "Times New Roman", Times, serif; padding: 1em; }
dt { font-size: 2em; font-weight: bold; }
dt span { font-size: .5em; color: #777; margin-left: .5em; }
dd { font-size: 1.25em; margin: 1em 0 0; padding-bottom: 1em; border-bottom: 1px solid #eee; }
.back-button { float: right; margin: 0 2em 1em 0; }
</style>
</head>
<body>
<script>
  relPath="$myRelPath";
  \$( document ).on( "pagecreate", "#demo-page", function() {
    //\$( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
    \$( document ).on( "swiperight", "#demo-page", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( \$( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            //if ( e.type === "swipeleft" ) {
            //    \$( "#right-panel" ).panel( "open" );
            //} else if ( e.type === "swiperight" ) {
            if ( e.type === "swiperight" ) {
                \$( "#leftPanel" ).panel( "open" );
            }
        }
    });
  });
</script>
<div data-role="page" id=demo-page>
  <div data-role="panel" id="leftPanel">
    <div data-role="navbar" data-maxbutton="1" class="ui-body-a">
        <ul>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupBhajan">भजन</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupPooja">पूजा-पाठ</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupTeeka">Full Granth</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupShastra">Granth Gaatha-By-Gatha</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupGames">Play / Test</a></li>
            <li><a data-rel="popup" data-icon="ui-icon-star" data-transition="pop" href="#popupMisc">Misc</a></li>
        </ul>
    </div>
    <div>
      <form>
        <input data-type="search" id="searchTitleIn" placeholder="Search in Hindi..">
      </form>
      <ul id=searchTitle data-role="listview" data-filter="true" data-input="#searchTitleIn" data-filter-reveal="true" data-filter-placeholder="Search Bhajan / Pooja / Shastra">
EOF
    createBhajan $myRelPath 1
    createPooja $myRelPath 1
    createGranth $myRelPath 'teeka' 1
    cat << EOF >> $myHtml
      </ul>
    </div>
  </div> <!-- Panel -->
  <div data-role="header" data-position="fixed">
      <!--h1 align=center>Jai Jinendra</h1-->
      <figure align=center>
        <a href="#leftPanel" class="ui-button ui-shadow ui-corner-all ui-button-inline">
          <img id=enPanel src="${myRelPath}images/jain-saint.jpg" height=80 width=90></img>
          <figcaption>Click Here</figcaption>
        </a>
      </figure>
  </div> <!-- Header -->

EOF

## ---- Bhajan Div -----
createBhajan $myRelPath
## ---- Pooja Div -----
createPooja $myRelPath
## ---- Granth Div -----
createGranth $myRelPath 'teeka'
## ---- Shastra Div -----
createGranth $myRelPath 'shastra'
## ---- Misc Div ----
createMiscList $myRelPath
}
