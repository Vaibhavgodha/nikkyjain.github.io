#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
outDir=$(cd ../../../ && echo $PWD)
export dbDir=$(cd ../../../../jaindb-dev && echo $PWD)
echo "DB Dir $dbDir"
. $dbDir/others/collaborate/shastra/common.sh
for group in $(ls -d $dbDir/jainDataBase/bhajans/*/)
do
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    myGroup=$(basename $group);
    [ ! -d $group/main ] && continue
    mkdir -p $outDir/jainDataBase/bhajans/$myGroup/html
    for bhajan in $(ls $group/main/*)
    do
      if ! test -f $bhajan; then
        continue
      fi
      mkdir -p $group/html
      myBhajanName=$(echo $(basename $bhajan) | perl -pe 's/.txt//g');
      myHtml=$outDir/jainDataBase/bhajans/$myGroup/html/${myBhajanName}.html
      if [ "$headerCreated" = "" ]; then
        ## ---- Header -----
        createHeader '../../../../'
        headerCreated=$(cat $myHtml)
      else
        echo "$headerCreated" > $myHtml
      fi


      echo "<br><div class=main>$(echo $myBhajanName | perl -pe 's/-/ /g')<br></div>" >> $myHtml
      audioFileName=$(basename $bhajan | perl -pe 's/\.txt/.mp3/g')
      if [ -f $outDir/jainDataBase/bhajans/$myGroup/audio/$audioFileName ]; then
        cat <<EOF >> $myHtml
        <div align=center><audio controls>
            <source src="../audio/$audioFileName" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio></div>
EOF
      fi
      c="$(cat $bhajan)"
      c=$(echo "$c" | perl -pe 's/\n/<br>/g')
      echo "<br>    <div class=pooja>$c" >>  $myHtml
      echo "  </div></div></body></html>" >> $myHtml
      myCntr=$(($myCntr+1))
    done
    echo "Bhajan group $(basename $group) Done"
done
