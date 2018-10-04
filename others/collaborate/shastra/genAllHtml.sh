#!/bin/sh

convert=
[ "$1" = "-c" ] && convert="-c"
launchDir=$PWD

export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
curDir=$dbDir/others/collaborate/shastra
# CD to 'shastra' directory
cd $curDir

while read oDir; do
    oDir=$(echo "$oDir" | tr -d '\r')
    echo $curDir/$oDir
    cd $curDir/$oDir
    while read iDir; do
        iDir=$(echo "$iDir" | tr -d '\r')
        cd $curDir/$oDir/$iDir
        echo $PWD
        $curDir/createHtml.sh
        $curDir/genFullGranth.sh
        $curDir/genFullGranth.sh -f
    done < "index.txt"
    cd $curDir
done < "index.txt"

# Go back from where you started
cd $launchDir
