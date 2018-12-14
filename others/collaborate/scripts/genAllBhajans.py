# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import mkdirs


dbDir=os.path.abspath('../../../')
print("DB Dir ",dbDir)
myHtmlDir=dbDir+"/jainDataBase/genBooks"
myHtml=myHtmlDir+"/jainBhajans.html"
mkdirs(myHtmlDir)
myRelPath="../../"

html=open(myHtml, "w")
html.write("""
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JainBhajan</title>
  <link rel="icon" type="image/png" href='"""+myRelPath+"""images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='"""+myRelPath+"""css/myJqueryMobile.css'>
  <!--link rel="stylesheet" href='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css'>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/jquery.mobile.js'></script-->
  <style>
    body {
      background-color: #fcf5e8;
    }
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
      font-size: 4vw;
    }
    hr {
      border: none;
      height: 3px;
      color: #333;
      background-color: #333;
      width:50%;
    }
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
  </style>
  <!--script>
    relPath='"""+myRelPath+"""';
  </script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myMobile.js'></script-->
</head>
<body>
<div align=center><a href='"""+myRelPath+"""index.html'><img src='"""+myRelPath+"""images/jain-saint.jpg' height=240 width=270></img></a></div>
<br><br><br>
<div class=hdr align=center>जैन भजन</div>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<div align=right><font size=2 color=darkRed>nikkyjain@gmail.com<br>
<div align=right>Date : """+datetime.now().strftime('%d')+"-"+datetime.now().strftime('%h')+"-"+datetime.now().strftime('%Y')+"""</font></div>
   <div class=adhikaar id=home><h1>Index</h1></div><br>\n""")

# Create Anchors
myGrCntr=1
for group in sorted(glob.glob(dbDir+"/jainDataBase/bhajans/*/")):
    myGroup=os.path.basename(os.path.dirname(group)).replace('-', ' ')
    myGroup=re.sub('.*_', '', myGroup)
    html.write("  <div class=main>"+myGroup+" भजन</div><br>\n")
    html.write("    <table align=center width=90%>\n")
    myCntr=1
    # Loop for all bhajans in a group
    for bhajan in sorted(glob.glob(group+"/main/*")):
        myBhajanName=os.path.basename(bhajan).replace('.txt','')
        myBhajanName=myBhajanName.replace('-', ' ')
        myBjn=myBhajanName.replace('\s', '_')
        html.write("      <td><a href='#gr"+str(myGrCntr)+"-bh"+str(myCntr)+"'>"+str(myCntr)+") "+myBhajanName+"</a>\n")
        if myCntr%2==0:
            html.write("      <tr>\n")
        myCntr+=1
    html.write("    </table>\n")
    myGrCntr+=1

html.write("<br><br><br><br><br>\n")
myGrCntr=1
for group in sorted(glob.glob(dbDir+"/jainDataBase/bhajans/*/")):
    myGroup=os.path.basename(os.path.dirname(group)).replace('-', ' ')
    myGroup=re.sub('.*_', '', myGroup)
    html.write("<br><br><div class=adhikaar><h1>"+myGroup+" भजन</h1></div><br>\n")
    myCntr=1
    if not os.path.isdir(group+'./main'):
        continue
    for bhajan in sorted(glob.glob(group+"/main/*")):
        myBhajanName=os.path.basename(bhajan).replace('.txt','')
        myBhajanName=myBhajanName.replace('-',' ')
        myBjn=myBhajanName.replace('\s' ,'_')
        html.write("<br><div class=main id='gr"+str(myGrCntr)+"-bh"+str(myCntr)+"'>"+myBhajanName+"<a href='#home' class=index>&#x1f3e0;</a></div>\n")
        with open(bhajan, 'r') as myfile:
            fData=myfile.read().replace('\xef\xbb\xbf', '')
            fData=fData.replace('\n', '<br>')
            fData=fData.replace('((', '<span class=tarj>')
            fData=fData.replace('))', '</span>')
        html.write("<div class=pooja>"+fData+"\n  </div><br>\n<hr align=center>\n")
        myCntr+=1
    print ("\rDone - Bhajan Group "+os.path.basename(group), end="")
    myGrCntr+=1
html.write("</body></html>\n")
