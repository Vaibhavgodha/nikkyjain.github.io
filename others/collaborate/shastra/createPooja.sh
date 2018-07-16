#!/bin/sh


#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
export dbDir=$(cd ../../.. && echo $PWD)
echo "DB Dir $dbDir"
. $dbDir/others/collaborate/shastra/common.sh
for group in $(ls -d $dbDir/others/collaborate/poojas/*/)
do
    mygroup=$(basename $group)
    OIFS="$IFS"
    IFS=$'\n'
    for pooja in $(ls -d $group/*/)
    do
      myPooja=$(basename $pooja)
      myInDir=$dbDir/others/collaborate/poojas/$mygroup/$myPooja
      myOutDir=$dbDir/jainDataBase/poojas/$mygroup/$myPooja
      myHtml=$myOutDir/html/index.html
      echo $(dirname $myHtml)
      mkdir -p $(dirname $myHtml)
      if [ "$headerCreated" = "" ]; then
        ## ---- Header -----
        createHeader '../../../../../'
        headerCreated=$(cat $myHtml)
      else
        echo "$headerCreated" > $myHtml
      fi

      echo "<div class=main>$(basename $pooja | perl -pe 's/.*_//g' | perl -pe 's/--.*//')</div>" >> $myHtml
      audioFileName="${myPooja}.mp3"
      if [ -f $myOutDir/audio/$audioFileName ]; then
        cat <<EOF >> $myHtml
        <div align=center><audio controls>
          <source src="../audio/$audioFileName" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio></div><br>
EOF
      fi
      for cFile in $(ls $pooja/main/*)
      do
        curFile=$myInDir/main/$(basename $cFile)
        [ ! -f "$curFile" ] && echo "Didnt find $curFile" && exit 1
        curFile=$myInDir/title/$(basename $cFile)
        if [ -f $curFile ]; then
          echo "<div class=title>" >> $myHtml 
          cat $curFile >>  $myHtml 
          echo "</div>" >> $myHtml
        fi
        curFile=$myInDir/main/$(basename $cFile)
        echo "<div class=pooja>" >> $myHtml 
        c="$(cat $curFile)"
        c=$(echo "$c" | perl -pe 's/\n/<br>/g')
        c=$(echo "$c" | perl -pe 's/\(\(/<span class=comment>/g' | perl -pe 's/\)\)/<\/span>/g')
        c=$(echo "$c" | perl -pe 's/ॐ ह्रीं/<span class=om>ॐ ह्रीं/g')
        c=$(echo "$c" | perl -pe 's/निर्वपामीति स्वाहा/निर्वपामीति स्वाहा<\/span>/g')
        c=$(echo "$c" | perl -pe 's/संवौषट् आह्वाननं/संवौषट् आह्वाननं<\/span>/g')
        c=$(echo "$c" | perl -pe 's/ठः स्थापनं/ठः स्थापनं<\/span>/g')
        c=$(echo "$c" | perl -pe 's/वषट् सन्निधि करणं/वषट् सन्निधि करणं<\/span>/g')
        echo $c >>  $myHtml
        echo "</div>" >> $myHtml
        curFile=$myInDir/arth/$(basename $cFile)
        if [ -f $curFile ]; then
          c="$(cat $curFile)"
          c=$(echo "$c" | perl -pe 's/\(\(/<div class=comment>/g' | perl -pe 's/\)\)/<\/div>/g')
          c=$(echo "$c" | perl -pe 's/\[/<span class=gatharth>[/g' | perl -pe 's/\]/]<\/span>/g'); 
          echo "<div class=poojarth><font color=maroon><b>अन्वयार्थ : </b></font>$c</div><br>" >>  $myHtml
        fi
      done
      echo "<div></body></html>" >> $myHtml
    done
    echo "Pooja group $(basename $group) Done"
done