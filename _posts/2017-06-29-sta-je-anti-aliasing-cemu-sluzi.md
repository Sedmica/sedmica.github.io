---
layout: page
title: ٹta je to Anti-Aliasing i ?emu slu‍i
published: true
author: Marko1
comments: true
date: 2014-10-27 09:10:58
tags: [ ]
categories:
    - photoshop
permalink: blog/:title
image:
    feature: cover-2.jpg
---
Pozdrav svima!
  
U ovom tutorijalu ?u vam pokazati ڑta je to Anti-Aliasing, ?emu slu‍i i kako se koristi. Za po?etak ?u vam objasniti ڑta je to Anti-Aliasing. Poڑto se u Photoshop-u radi sa rasterskom grafikom, odnosno sa pikselima, svaka kosa linija ili kru‍nica zapravo nikada nije pravilna jer je na?injena od piksela koji su kvadrati?i.
  
Ti kvadrati?i, se postavljaju u stepenastom obliku kako bi napravili kosu liniju ili kru‍nicu, jer svaki piksel mo‍e biti uklju?en ili isklju?en, ne postoji niڑta izme?u, kao ڑto je trougao ili neڑto sli?no kako bi popunilo prazno mesto izme?u dva piksela.
  
I zato mi vidimo to stepenasto predstavljene objekte. Ako nam je rezolucija mala onda nam je i broj piksela manji ڑto zna?i da ?e te stepenice biti ve?e i te‍e ?e se predstaviti prethodno pomenuti oblici.
  
Zato je napravljena tehnika kojom se stepenasto predstavljanje objekata ubla‍ava i upravo se ona zove Anti-Aliasing.

![Pozdrav svima! U ovom tutorijalu ?u vam pokazati ڑta je to Anti-Aliasing, ?emu slu‍i i kako se koristi. Za po?etak ?u vam objasniti ڑta je to Anti-Aliasing. Poڑto se u Photoshop-u radi sa rasterskom grafikom, odnosno sa pikselima, svaka kosa linija ili kru‍nica zapravo nikada nije pravilna jer je na?injena od piksela koji su kvadrati?i.  
Ti kvadrati?i, se postavljaju u stepenastom obliku kako bi napravili kosu liniju ili kru‍nicu, jer svaki piksel mo‍e biti uklju?en ili isklju?en, ne postoji niڑta izme?u, kao ڑto je trougao ili neڑto sli?no kako bi popunilo prazno mesto izme?u dva piksela.  
I zato mi vidimo to stepenasto predstavljene objekte. Ako nam je rezolucija mala onda nam je i broj piksela manji ڑto zna?i da ?e te stepenice biti ve?e i te‍e ?e se predstaviti prethodno pomenuti oblici.  
Zato je napravljena tehnika kojom se stepenasto predstavljanje objekata ubla‍ava i upravo se ona zove Anti-Aliasing.][2] 

* * *

Sada ?u vam pokazati kako Anti-Aliasing ubla‍ava stepenasto predstavljanje objekata.
  
Napravi?u novi dokument kako bih vam pokazao. Veli?ina dokumenta ?e biti **1200 x 800** piksela i nazva?u ga „**anti-aliasing**“:

![][3]

Zatim ?emo uzeti **Pencil Tool**:

![][4]

Podesimo mu veli?inu na **20** **piksela** i **Hardness** na **0%**:

![][5]

I nacrtajte krivu liniju proizvoljne veli?ine sa tako podeڑenom alatkom:

![][6]

Zatim uzmite **Brush Tool** koji ?ete podesiti ovako:

![][7]

I sa tako podeڑenom alatkom nacrtajte liniju ispod linije koju ste nacrtali **Pencil Tool**-om takva da bude sli?nog oblika kako bi bolje primetili razliku:

![][8]

Ako pogledate liniju nacrtanu sa **Pencil Tool**-om vide?ete da je na mestima gde je zakrivljena veoma stepenasto prikazana.
  
To je zato ڑto ova alatka ne koristi **Anti-Aliasing** opciju.

A ako pogledate drugu liniju koju ste nacrtali Brush Tool-om vide?ete da su mesta na kome je zakrivljena ubla‍ena.
  
Sada ste iskoristili **Anti-Aliasing** opciju i koristili ste je mnogo puta do sada i ako to niste znali.
  
Ako zumiramo linije, vide?emo joڑ jasnije kao ova tehnika radi. Za svaku stepenicu je dodato joڑ nekoliko piksela sa spoljne strane linije, a pikselima se vidljivost smanjuje sa udaljavanjem od linije i zbog toga nam daje utisak da je linija glatka kada se odaljimo.

![][9]

Sada ?emo videti kaka izgleda anti-aliasing na tekstu. Uzmimo **Horizontal** **Type** **Tool**:

![][10]

U podeڑavanjima alatke podesite **Anti-Aliasing** metodu na „**None**“ kako bi isklju?ili tu opciju:

![][11]

I napiڑimo re? sa tako podeڑenom alatkom, ja sam napisao „**Anti-Aliasing**“:

![][12]

Vidimo da su slova dosta krzava i nisu glatka, kao i kada smo radili sa **Pencil Tool**-om.
  
Sada od nekoliko ponu?enih **Anti-Aliasing** opcija, uklju?imo opciju na **Sharp**, jer je u ovom slu?aju ona najbolja, za neki drugi font ?e mo‍da biti bolja neka druga od ponu?enih tako da je najbolje da ih sve isprobate:

![][13]

I sa tako podeڑenom alatkom napiڑite re?:

![][1]

Mo‍emo videti veliku razliku izme?u ova dva teksta:

![][14]

Da ponovimo ukratko. Anti-Aliasing opcija je veoma korisna i bez nje bi sva grafika, uklju?uju?i i prikaz na ekranima, bila u vidu malih stepenasto pore?anih kvadrati?a. Jedina mana koja mo‍e da kvari kvalitet grafike je to ڑto koriڑ?enjem Anti-Aliasing-a tekst i objekti dobiju pomalo zamu?ene ivice, ali to je samo primetno kada se tekst zumira i svakako je bolja ta opcija nego tekst bez Anti-Aliasing opcije. Idealno bi bilo kada ni samo ubla‍avao krive delove te slova, a ne i ravne. Kod manjih objekata je to zamu?enje viڑe izra‍eno pa je nekada bolje i ne koristiti Anti-Aliasing opciju.
  
Poڑto sada znate ڑta je Anti-Aliasing, gde se koristi i kako se koristi nadam se da ?e vam pomo?i u daljem radu sa rasterskom grafikom. Pozdrav do slede?eg tutorijala.

* * *

Posetite nas slede?e nedelje i nau?ite joڑ neڑto novo, postavljajte pitanja i komentariڑite :)

 [1]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.12.anti_aliasing_rec.jpg
 [2]: .jpg
 [3]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.1.new_.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.2.pencil_tool.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.3.pencil_tool_podesavanja.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.4.pencil_tool_linija.jpg
 [7]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.5.brush_tool_podesavanja.jpg
 [8]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.6.linije.jpg
 [9]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.7.uvcane_linije.jpg
 [10]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.8.type_tool.jpg
 [11]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.9.none_.jpg
 [12]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.10.aliasing_rec.jpg
 [13]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.11.sharp_.jpg
 [14]: {{site.baseurl}}/images/post/uploads/2014/10/anti_aliasing.13.razlika.jpg