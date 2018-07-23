#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
export dbDir=$(cd ../../.. && echo $PWD)
echo "DB Dir $dbDir"
myHtml=$dbDir/allBhajans.html
#. $dbDir/others/collaborate/shastra/common.sh
cat << EOF > $myHtml
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JainBhajan</title>
  <link rel="icon" type="image/png" href="${myRelPath}images/default/jainFlag-short.jpg"/>
  <!--link rel="stylesheet" href="${myRelPath}css/myJqueryMobile.css">
  <link rel="stylesheet" href="${myRelPath}js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css">
  <script type="text/javascript" src="${myRelPath}js/jquery.js"></script>
  <script type="text/javascript" src="${myRelPath}js/jquery-mobile/1.5-alpha/jquery.mobile.js"></script-->
  <style>
    td {
      text-align: left; 
      vertical-align: middle;
      height : 40px;
      font-size: 25px;
      color : darkblue;
    }
    td a {
      text-decoration: none !important;
    }
    .hdr {
      font-size: 200px;
      color : darkred;
      font-weight:bold;
    }
    .index {
      color:blue;
      float:right;
    }
    hr {
      border: none;
      height: 3px;
      color: #333;
      background-color: #333;
      width:50%;
    }
    div.adhikaar {
        font-size: 60px;
        color: saddlebrown;
        text-align: center;
        font-weight: bold;
        margin: 0 auto;
    }
    h1 {
        position: relative;
        font-size: 50px;
        z-index: 1;
        overflow: hidden;
        text-align: center;
    }
    h1:before, h1:after {
        position: absolute;
        top: 51%;
        overflow: hidden;
        width: 50%;
        height: 1px;
        content: '\a0';
        background-color: red;
    }
    h1:before {
        margin-left: -50%;
        text-align: right;
    }
    .adhikaar {
        background-color: #ccc;
    }
    div.main {
        font-size: 50px;
        color: maroon;
        font-weight: bold;
        text-align: center;
    }
    div.pooja {
        font-size: 30px;
        color: darkBlue;
        text-align: center;
        line-height: 140%;
    }
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
    .index {
        font-size: 20px;
    }
  </style>
  <!--script>
    relPath="$myRelPath";
  </script>
  <script type="text/javascript" src="${myRelPath}js/myMobile.js"></script-->
</head>
<body>
<div align=center><img src="images/jain-saint.jpg" height=240 width=270></img></div>
<br><br><br>
<div class=hdr align=center>जैन भजन</div>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<div align=right><font size=2 color=darkRed>nikkyjain@gmail.com<br>
Date : $(date +%d-%m-%y)</font></div>
EOF

# Create Anchors
myGrCntr=1
echo "  <div class=adhikaar id=home><h1>Index</h1></div><br>" >> $myHtml
for group in $(ls -d $dbDir/jainDataBase/bhajans/*/)
do
    echo "  <div class=main>$(basename $group | perl -pe 's/.*_//g') भजन</div><br>" >> $myHtml
    echo "    <table align=center width=90%>" >>  $myHtml
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    for bhajan in $(ls $group/main/*)
    do
        myBhajanName=$(basename $bhajan | perl -pe 's/.txt//g')
        myBjn=$(echo $myBhajanName | perl -pe 's/\s/_/g')
        echo "      <td><a href='#gr$myGrCntr-bh$myCntr'>$myCntr) $myBhajanName</a>" >> $myHtml
        [ $((myCntr%2)) -eq 0 ] && echo "      <tr>" >> $myHtml
        myCntr=$(($myCntr+1))
    done
    IFS="$OIFS"
    echo "    </table>" >> $myHtml
    myGrCntr=$(($myGrCntr+1))
done

echo "<br><br><br><br><br>" >> $myHtml
myGrCntr=1
for group in $(ls -d $dbDir/jainDataBase/bhajans/*/)
do
    echo "<br><br><div class=adhikaar><h1>$(basename $group | perl -pe 's/.*_//g') भजन</h1></div><br>" >>  $myHtml
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    [ ! -d $group/main ] && continue
    for bhajan in $(ls $group/main/*)
    do
      myBhajanName=$(basename $bhajan | perl -pe 's/.txt//g')
      myBjn=$(echo $myBhajanName | perl -pe 's/\s/_/g')
      echo "<br><div class=main id='gr$myGrCntr-bh$myCntr'>$myBhajanName<a href='#home' class=index>&#x1f3e0;</a></div>" >> $myHtml
      c="$(cat $bhajan)"
      c=$(echo "$c" | perl -pe 's/\n/<br>/g')
      echo "<br><br>    <div class=pooja>$c" >>  $myHtml
      echo "  </div><br>" >> $myHtml
      echo "<hr align=center>" >>  $myHtml
      myCntr=$(($myCntr+1))
    done
    IFS="$OIFS"
    echo "Bhajan group $(basename $group) Done"
    myGrCntr=$(($myGrCntr+1))
done
echo "</body></html>" >> $myHtml