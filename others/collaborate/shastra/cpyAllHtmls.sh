#!/bin/sh

outDir=$(cd ../../../jainDataBase && echo $PWD)
export dbDir=$(cd ../../../../jaindb/jainDataBase && echo $PWD)
echo "DB Dir $dbDir"

# Copy Bhajans
find $outDir/bhajans/. -name "html" -type d -exec \rm -rf {} \;
for group in $(ls -d $dbDir/bhajans/*/) 
do
  myGroup=$(basename $group)
  mkdir -p $outDir/bhajans/$myGroup/html
  cp $group/html/* $outDir/bhajans/$myGroup/html/.
done
echo "Copy Done - bhajans"

# Copy Poojas
find $outDir/poojas/. -name "html" -type d -exec \rm -rf {} \;
for group in $(ls -d $dbDir/poojas/*/) 
do
  myGroup=$(basename $group)
  for subgroup in $(ls -d $group/*/)
  do
      mySubGroup=$(basename $subgroup)
      mkdir -p $outDir/poojas/$myGroup/$mySubGroup/html
      cp $subgroup/html/* $outDir/poojas/$myGroup/$mySubGroup/html/.
  done
done
echo "Copy Done - poojas"

# Copy Shastra
/bin/rm -rf $outDir/shastra
cp -r $dbDir/shastra $outDir/shastra
echo "Copy Done - shastra"
# Copy Scripts
cp -r $dbDir/../others/collaborate/scripts/* $outDir/../others/collaborate/scripts/.
echo "Copy Done - scripts"
# Copy Downloads
cp -r $dbDir/downloads/*.pdf $outDir/downloads/.
echo "Copy Done - downloads"

# Copy Teeka
/bin/rm -rf $outDir/teeka
cp -r $dbDir/teeka $outDir/teeka
echo "Copy Done - teeka"

# Copy Gatha
/bin/rm -rf $outDir/gatha
cp -r $dbDir/gatha $outDir/gatha
echo "Copy Done - gatha"

# Copy genBooks
/bin/rm -rf $outDir/genBooks
cp -r $dbDir/genBooks $outDir/genBooks
echo "Copy Done - genBooks"

# Copy genBooks
/bin/rm -rf $outDir/genBooksWithTeeka
cp -r $dbDir/genBooksWithTeeka $outDir/genBooksWithTeeka
echo "Copy Done - genBooksWithTeeka"

# Copy Index
cp $dbDir/../index.html $outDir/../.
# Copy JS
cp $dbDir/../js/*.js $outDir/../js/.
cp $dbDir/../css/*.css $outDir/../css/.
