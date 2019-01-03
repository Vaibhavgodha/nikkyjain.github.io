# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import createBhajan
from common import mkdirs
from common import createHeader

outDir=os.path.abspath('../../../')
dbDir=os.path.abspath('../../../../jaindb/')
print("DB Dir ",dbDir)

headerCreated=""
for group in sorted(glob.glob(dbDir+"/others/collaborate/poojas/*/")):
    myGroup=os.path.basename(os.path.dirname(group))
#    if not os.path.isdir(group+'/main'):
#        continue
    for pooja in sorted(glob.glob(group+"/*/")):
        myPooja=os.path.basename(os.path.dirname(pooja))
        myInDir=dbDir+"/others/collaborate/poojas/"+myGroup+"/"+myPooja
        myOutDir=outDir+"/jainDataBase/poojas/"+myGroup+"/"+myPooja+"/html"
        myHtml=myOutDir+"/index.html"
        mkdirs(myOutDir)
        html=open(myHtml, "w")
        if(headerCreated==""):
            createHeader(html, '../../../../../', dbDir)
            html.close();
            with open(myHtml, 'r') as myfile:
                headerCreated=myfile.read()
            html=open(myHtml, "a")
        else:
            html.write(headerCreated)
        myVar=re.sub(r'.*_','',myPooja)
        myVar=re.sub(r'--.*','',myVar)
        html.write("<div class=main>"+myVar+"</div>\n")
        audioFileName="https://nikkyjain.github.io/jainDataBase/poojas/"+myGroup+"/"+myPooja+"/audio/"+myPooja+".mp3"
        html.write("""
            <div align=center id=myAudio><audio controls>
                <source src='../audio/"""+myPooja+""".mp3' type="audio/mpeg">
                <source id=my_audio src='"""+audioFileName+"""'  type="audio/mpeg">
            </audio></div>\n""")
        for cFile in sorted(glob.glob(pooja+"/main/*")):
            curFile=myInDir+"/main/"+os.path.basename(cFile)
            # Handle Title
            curFile=myInDir+"/title/"+os.path.basename(cFile)
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read()
                html.write("<div class=title>\n"+fData+"</div>\n")
            # Handle JPG
            curFile=os.path.basename(cFile).replace('.txt','.jpg')
            if os.path.isfile(outDir+"/jainDataBase/poojas/"+myGroup+"/"+myPooja+"/images/"+curFile):
                html.write("<p align=center><img src=../images/"+curFile+"></img><p>\n")
            # Handle main
            curFile=myInDir+"/main/"+os.path.basename(cFile)
            html.write("<div class=pooja>\n")
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n','<br>')
            fData=fData.replace('((', '<span class=tarj>')
            fData=fData.replace('))', '</span>')
            fData=fData.replace('ॐ ह्रीं','<span class=om>ॐ ह्रीं')
            fData=fData.replace('निर्वपामीति स्वाहा','निर्वपामीति स्वाहा</span>')
            fData=fData.replace('पुष्पांजलिं क्षिपामि','पुष्पांजलिं क्षिपामि<\/span>')
            fData=fData.replace('संवौषट् आह्वाननं','संवौषट् आह्वाननं</span>')
            fData=fData.replace('ठः स्थापनं','ठः स्थापनं</span>')
            fData=fData.replace('वषट् सन्निधि करणं','वषट् सन्निधि करणं</span>')
            html.write(fData+"<br>\n</div>\n")
            # Handle gadya
            curFile=myInDir+"/mainH/"+os.path.basename(cFile)
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\n','<br>')
                html.write("<div class=gadya>"+fData+"\n</div>\n")
            # Handle arth
            curFile=myInDir+"/arth/"+os.path.basename(cFile)
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\n','<br>')
                fData=fData.replace('((', '<span class=tarj>')
                fData=fData.replace('))', '</span>')
                fData=fData.replace('(', '<span class=comment>(')
                fData=fData.replace(')', ')</span>')
                fData=fData.replace('[', '<span class=gatharth>[')
                fData=fData.replace(']', ']</span>')
                html.write("<div class=poojarth><font color=maroon><b>अन्वयार्थ : </b></font>"+fData+"</div><br>\n")
        html.write("<div></body></html>")
    print("Pooja group "+myGroup+" Done")

