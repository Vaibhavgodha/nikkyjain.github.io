#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
export dbDir=$(cd ../../.. && echo $PWD)
echo "DB Dir $dbDir"
inDir=$dbDir/../jaindb-dev
. $inDir/others/collaborate/shastra/common.sh
for group in $(ls -d $inDir/jainDataBase/bhajans/*/)
do
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    myGroup=$(basename $group);
    [ ! -d $group/main ] && continue
    for bhajan in $(ls $group/main/*)
    do
      mkdir -p $group/html
      myBhajanName=bhajan-$myCntr
      myHtml=$dbDir/jainDataBase/bhajans/$myGroup/html/${myBhajanName}.html
      if [ "$headerCreated" = "" ]; then
        ## ---- Header -----
        createHeader '../../../../'
        headerCreated=$(cat $myHtml)
      else
        echo "$headerCreated" > $myHtml
      fi


      echo "<br><div class=main>$(basename $bhajan | perl -pe 's/.txt//g')<br></div>" >> $myHtml
      audioFileName=$(basename $bhajan | perl -pe 's/\.txt/.mp3/g')
      if [ -f $dbDir/jainDataBase/bhajans/$myGroup/audio/$audioFileName ]; then
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
