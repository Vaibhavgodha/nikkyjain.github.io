# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import mkdirs



if not os.path.isdir('./main'):
  print("This doesnt seem to be shastra directory")
  sys.exit(1)


dbDir=os.path.abspath('../../../../../')
print("DB Dir ",dbDir)
pdir=os.path.basename(os.path.abspath('./'))
gdir=os.path.basename(os.path.abspath('../'))
myHtmlName=os.path.basename(os.path.abspath('./'))
myHtmlName=re.sub(r'.*_', "", myHtmlName)
myHtmlName=re.sub(r'--.*', "", myHtmlName)
myWriter=re.sub(r'.*--', "", os.path.basename(os.path.abspath('./')))
if (len(sys.argv) > 1):
    myHtmlDir=dbDir+"/jainDataBase/teeka/"+gdir+"/"+pdir+"/html"
    myImgDir=dbDir+"/jainDataBase/teeka/"+gdir+"/"+pdir+"/images"
    myHtml=myHtmlDir+"/index.html"
    myTitle=myHtmlName
else:
    myHtmlDir=dbDir+"/jainDataBase/gatha/"+gdir+"/"+pdir+"/html"
    myImgDir=dbDir+"/jainDataBase/gatha/"+gdir+"/"+pdir+"/images"
    myHtml=myHtmlDir+"/index.html"
    myTitle=myHtmlName+"--Gatha"
print("HTML : ", myHtml)
mkdirs(myHtmlDir)
myRelPath="../../../../../"
hasImages=0
if os.path.isdir(myImgDir):
    hasImages=1
indexCol2=os.path.isfile('./config/indexCol2.txt')
html=open(myHtml, "w")
html.write("""<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>"""+myTitle+"""</title>
  <link rel="icon" type="image/png" href='"""+myRelPath+"""images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='"""+myRelPath+"""css/myJqueryMobile.css'>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myFontSzCtrl.js'></script>
  <style>
    body {
      background-color: #fcf5e8;
    }
    a {
      text-decoration: none !important;
    }
    .hdr {
      font-size: 14vw;
      color : darkred;
      font-weight:bold;
    }
    .index {
      color:blue;
      float:right;
    }
    hr.type_7 {
      border: 0;
      height: 55px;
      background: url("""+myRelPath+"""images/type_7.png) no-repeat top center;
      display: block;
      position: relative;
    }
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
    div.teeka {
      width:90%;
    }
  </style>
</head>
<body>""")
if not os.path.isfile('./config/NoJainSaint.txt'):
  html.write("<div align=center><a href='"+myRelPath+"index.html'><img src='"+myRelPath+"images/jain-saint.jpg' height=270 width=300></img></a></div>")
else:
  html.write("<div align=center><a href='"+myRelPath+"index.html'><img src='"+myRelPath+"images/stories.png' height=270 width=300></img></a></div>")
html.write("""
<br><br><br>
<div class=hdr align=center>"""+myHtmlName+"""</div>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<div align=right><b><font size=20>- """+myWriter+"""</font></b></div>
<br><br><br><font size=2 color=darkRed>
<div align=right>nikkyjain@gmail.com</div>
<div align=right>Date : """+datetime.now().strftime('%d')+"-"+datetime.now().strftime('%h')+"-"+datetime.now().strftime('%Y')+"</font></div>")

if (os.path.isdir('./main') or os.path.isdir('./ftitle')):
    html.write("""<br><br><div class=adhikaar id=index><h1>Index</h1></div><br>
<div align=center><img src='"""+myRelPath+"""images/brownOm.png' width='5%'></img></div>
    <table align=center width=90% class=mainIndex>
<tr><th>गाथा / सूत्र<th>विषय""")
    if (indexCol2):
      html.write("<th>गाथा / सूत्र<th>विषय")
    html.write("</tr>\n")
    myCntr=0
    for bcFile in sorted(os.listdir('./main')):
        if os.path.isfile('./adhikaar/'+bcFile):
            with open('./adhikaar/'+bcFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write("<tr><th colspan=4><h2>"+fData+"</h2><tr>\n")
        if os.path.isdir('./ftitle'):
            curFile="./ftitle/"+bcFile
            if os.path.isfile(curFile):
                if (not(myCntr%2 and indexCol2)):
                  html.write("    <tr>\n")
                myFName=re.sub(r'.txt',"", bcFile)
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\n', '')
                    fData=fData.replace('\xef\xbb\xbf', '')
                html.write("<td><b>"+myFName+")<b> <td><a href=#gatha-"+myFName+">"+fData+"</a>")
                myCntr+=1
        else:
            curFile="./title/"+bcFile
            if (os.path.isfile('./header/'+bcFile) or os.path.isfile(curFile)):
                if os.path.isfile('./header/'+bcFile):
                    curFile='./header/'+bcFile
                if (not(myCntr%2 and indexCol2)):
                  html.write("    <tr>\n")
                myFName=re.sub(r'.txt',"", bcFile)
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\n', '')
                    fData=fData.replace('\xef\xbb\xbf', '')
                html.write("<td><b>"+myFName+")<b> <td><a href=#gatha-"+myFName+">"+fData+"</a>")
                myCntr+=1
    html.write("    </table><br><br><br>\n")
html.write("<div align=center><img src='"+myRelPath+"images/hrim.png' width='20%'></img></div>\n");

for bcFile in sorted(os.listdir('./main')):
    # Handle Adhikaar
    curFile="./adhikaar/"+bcFile
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '')
            fData=fData.replace('\xef\xbb\xbf', '')
        html.write("<br><br><div class=adhikaar><h1>"+fData+"</h1></div><br>")
        html.write("<div align=center><img src='"+myRelPath+"images/ahinsaParmoDharm.png' width='15%'></img></div>\n");
    # Handle Title
    if os.path.isdir('./ftitle'):
        curFile="./ftitle/"+bcFile
        myFName=re.sub(r'.txt',"", bcFile)
        if os.path.isfile(curFile):
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write("<br><div class=title id=gatha-"+myFName+"><span class=incFontSz>+ </span><a href=#index>"+fData+"</a><span class=decFontSz> -</span></div>")
        else:
            html.write("<br>")
    else:
        curFile="./title/"+bcFile
        myFName=re.sub(r'.txt',"", bcFile)
        if (os.path.isfile(curFile) or os.path.isfile('./header/'+bcFile)):
            html.write("<br><div class=title id=gatha-"+myFName+"><span class=incFontSz>+ </span><a href=#index>") 
            if os.path.isfile('./header/'+bcFile):
                curFile='./header/'+bcFile
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write(fData)
            html.write("</a><span class=decFontSz> -</span></div>")
    # Handle images
    if hasImages:
      iFile=re.sub(r'.txt',".png", bcFile)
      curFile=myImgDir+"/"+iFile
      if os.path.isfile(curFile):
        html.write("<div align=center><img class=png src='../images/"+iFile+"'></div>\n")
    # Handle Main
    curFile="./main/"+bcFile
    html.write("<div class=gatha>")
    with open(curFile, 'r') as myfile:
        fData=myfile.read().replace('\n', '<br>')
        fData=fData.replace('\xef\xbb\xbf', '')
    html.write(fData)
    html.write("</div>\n")
    # Handle Padya 
    curFile="./mainH/"+bcFile
    if os.path.isfile(curFile):
        html.write("<div class=gadya>")
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '<br>')
            fData=fData.replace('\xef\xbb\xbf', '')
        html.write(fData)
        html.write("</div>\n")
    # Handle arth 
    curFile="./arth/"+bcFile
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '<br>')
            fData=fData.replace('\xef\xbb\xbf', '')
        fData=fData.replace('[', '<b><font color=darkRed>[')
        fData=fData.replace(']', ']</font></b>')
        fData=fData.replace('(', '<span class=comment>(')
        fData=fData.replace(')', ')</span>')
        html.write("<div class=arth><b><font color=darkmagenta>अन्वयार्थ : </font></b>"+fData+"</div>")
    # Handle Teeka
    if (len(sys.argv) > 1):
        for teeka in sorted(glob.glob('teeka[0-9]*')):
            if bool('notes' in teeka):
                continue
            bottomFile=teeka+"/"+bcFile
            bottomFileS=re.sub(r'\..*', "", bottomFile)
            teekakaar=re.sub(r'.*?-', '', teeka)
            teekakaar=re.sub(r'_', ' ', teekakaar)
            teekaNum=re.search(r'teeka(.*)', teeka)
            for curFile in sorted(glob.glob(bottomFileS+'*')):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\xef\xbb\xbf', '')
                fData=re.sub('\n+','\n',fData)
                fData=fData.replace('\n', '<br><br>\n')
                fData=re.sub(r'\(\(.*?\)\)', lambda m: m.group().replace("<br><br>", "<br>"), fData, flags=re.DOTALL)
                fData=re.sub(r'<table.*?table>', lambda m: m.group().replace("<br>", ""), fData, flags=re.DOTALL)
                fData=re.sub(r'प्रतिशंका [-–—]', '<b></font><font color=darkgreen>उत्तर –</font></b>', fData)
                fData=re.sub(r'शंका [-–—]', '<b><font color=red>शंका –', fData); 
                fData=re.sub(r'प्रश्न [-–—]', '<b><font color=red>प्रश्न –', fData); 
                fData=re.sub(r'समाधान [-–—]', '</font><font color=darkGreen>समाधान –</font></b>', fData); 
                fData=re.sub(r'उत्तर [-–—]', '</font><font color=darkGreen>उत्तर –</font></b>', fData); 
                fData=re.sub(r'अर्थ [-–—]', '<b><font color=maroon>अर्थ –</font></b>', fData); 
                fData=re.sub(r'विशेषार्थ [-–—]', '<b><font color=maroon>विशेषार्थ –</font></b>', fData); 
                fData=re.sub(r'भावार्थ [-–—]', '<b><font color=maroon>भावार्थ –</font></b>', fData); 
                fData=fData.replace('((', '<b><div align=center>')
                fData=fData.replace('))', '</div></b>'); 
                fData=fData.replace('[[', '<b><font color=blue>')
                fData=fData.replace(']]', '</font></b>')
                fData=fData.replace('[', '<b>[<font color=maroon>')
                fData=fData.replace(']', '</font></b>]'); 
                fData=fData.replace('(', '<font color=DarkSlateGray>(')
                fData=fData.replace(')', ')</font>')
                fData=fData.replace('</div></b><br><br>', '</div></b>')
                html.write("<br><div class=teeka><b><font color=darkgreen>"+teekakaar+" :</font></b><br><br>"+fData+"</div>")
    ##
    html.write("<hr class=type_7>\n")
    print ("\rDone - "+bcFile, end="")
if (len(sys.argv) > 1) and not os.path.isfile('./config/NoShrutSkandh.txt'):
    html.write("<div align=center><img src='"+myRelPath+"images/Srutskandh.jpg' width='70%'></img></div>\n");
html.write("</body></html>")
html.close()
print("Done")

