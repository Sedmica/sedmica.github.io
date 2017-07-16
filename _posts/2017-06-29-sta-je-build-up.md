---
layout: page
title: ٹta je Build Up
published: true
author: Branislav
comments: true
date: 2014-05-16 09:05:29
tags:
    - Build Up
    - Muzika
    - Reason
    - Sound FXs
categories:
    - audio
permalink: blog/:title
image:
    feature: heder3.jpg
---
?ao svima! Dobrodoڑli na Sedmicu! Sa vama je Branislav Vajagi?. U danaڑnje vreme, kada se pri?a o muzici, ?esto mo‍ete da ?ujete termine Build Up i Drop. O tome ڑta su oni, kako ih prepoznati i kako ih napraviti mi ?emo pri?ati danas.

![][1]

Termin _Build Up_ se koristi za deo pesme kada muzika nema neki poseban ritam ve? samo jedan ili viڑe sintisajzera kojima se konstanto pove?ava frekvencija i taj zvuk ljudi opisuju kao &#8222;poletanje aviona&#8220;. Taj deo u pesme slu‍i kako bi se kod publike ili sluڑaoca podigla napetost u is?ekivanju glavnog dela pesme. Odmah posle Build Up-a sledi _Drop_ koji radi sve suprotno. On traje vrlo kratko, naj?eڑ?e 1 ili 2 bara i tu je kako bi sluڑaoca “ Velikom brzinom vratio nazad na zemlju” i prodrmao ga izazivaju?i u njemu ‍elju da sko?i kada ?uje prvu notu glavnog dela pesme. Build Up i Drop se koriste u EDM-u i karakteristi?ni su za ovaj ‍anr.


  
![][2]

Sada kad znate ڑta su Build Up i Drop mo‍emo pre?i na pravljenje istih.
  
Ja ?u za demonstaricu koristiti **Propellerhead Reason 5** jer je on moja desna ruka ڑto se ti?e produkcije ali sli?an, ako ne i isti, efekat mo‍e da se postigne u **Massive VST PlugIn-u**. Isti je princip samo su druga?ije organizovani dugmi?i i potenciometri. Na kraju tutorijala ?ete dobiti neڑto ovako:

 

Pa da po?nemo!

* * *

Otvorite novi dokument i BPM postavite na ‍eljenu veli?inu. Recimo 128. Zatim ispod **Miksete 14:2** napravite **Combinator**, nazovite ga Build Up i unutar njega napravite **Thor**.

![][3]

Pritisnite desni klik miڑa bilo gde na praznu povrڑinu Thor-a i odaberite **Initalize Patch** pa potom otvorite programer Thor-a

![][4]

Mi ?emo u ovom slu?aju napraviti Build Up koji traje 8 barova i zato ?emo na **Vremenskom delu** napraviti blok koji traje 8 barova i unutar njega jednu jedinu notu koja traje isto tolko (A2)

![][5]

Vratimo se na **Programski deo** Thor-a. Kod njega napravite 3 oscilatora: **WaveTable** i **2 Multi OSC**-a pa ih potom propustite kroz **Filter 1**

![][6]

Kod prvog Osc-a odaberite _Mixed Waves 3_ i _POS_ stavite na 52

![][7]

Kod drugog Osc-a smao _AMT_ stavite na 42.
  
Tre?i prebacite na na petu mofulaciju i _AMT_ stavite na 40.

![][8]

Zatim kod malog **Mixer**-a unutar Thor-a samo _Balance 1-2_ stavite na 30

![][9]

Sada na mesto Filter-a 1 stavite **Comb Filter**.

![][10]

Kod njega _Freq_ stavite na 118 Hz, _Res_ na 88 i _Env_ na 48.

![][11]

Sada kod **Amp Env**-a _D_ i _S_ podignite skroz do kraja; _A_ stavite na 620ms i _R_ na 2,48s

![][12]

Kako bi smo dobili efekat “Poletanja aviona” koristi?emo LFO (Pogledajte viڑe u tutorijalu “ٹta je to LFO”). Kod **LFO**-a 1 Uklju?ite samo _Key Sync_.

![][13]

Sada uradite slede?u modulaciju:

![][14]

Kod **Global Env**-a; A, D i S podignite skrz do kraja, R stavite na 3 sekunde i uklju?ite Loop.

![][15]

Zatim kod **LFO**-a **2** uklju?ite _Key Sync_, _Tempo Sync_ i _Rate_ stavite na 3/1

![][16]

Ostalo je joڑ da uklju?ite **Chorus**, _Dry/Wet_ podignite skroz do kraja i zatvorite programer Thor-a.

![][17]

**Range** stavite na 24. Pritisnite desni klik miڑa na kliza? Pitch na Comibator-u i odaberite _Edit Automation_.

![][18]
  
![][19]

Sada nam se na Vremenskom delu pojavila nova linija kojom mo‍emo da kontroliڑemo kliza? Pitch na Combinatoru koji smo nazvali Build Up pa ?emo to i da uradimo.

![][20]

Na tom delu za modulaciju nacrtajte neku rastu?u krivu ili pravu. Recimo neڑto ovako

![][21]
  
![][22]
  


Ovim smo zavrڑili danaڑnji tutorijal. Mo‍ete se igrati sa efekrima kako bi ste dobili razli?ite zanimljive zvukove. Recimo, u red sa Thor-om koji smo pravili povezao sam Scream i RV-7 i dobio ovakav zvuk:

 

**U?ite, ve‍bajte, zabavite se i isprobavajte nove stvari!**

 [1]: {{site.baseurl}}/images/post/uploads/2013/05/13.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/05/22.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/05/31.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2013/05/41.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2013/05/5.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2013/05/6.jpg
 [7]: {{site.baseurl}}/images/post/uploads/2013/05/7.jpg
 [8]: {{site.baseurl}}/images/post/uploads/2013/05/8.jpg
 [9]: {{site.baseurl}}/images/post/uploads/2013/05/9.jpg
 [10]: {{site.baseurl}}/images/post/uploads/2013/05/102.jpg
 [11]: {{site.baseurl}}/images/post/uploads/2013/05/112.jpg
 [12]: {{site.baseurl}}/images/post/uploads/2013/05/121.jpg
 [13]: {{site.baseurl}}/images/post/uploads/2013/05/131.jpg
 [14]: {{site.baseurl}}/images/post/uploads/2013/05/14.jpg
 [15]: {{site.baseurl}}/images/post/uploads/2013/05/15.jpg
 [16]: {{site.baseurl}}/images/post/uploads/2013/05/16.jpg
 [17]: {{site.baseurl}}/images/post/uploads/2013/05/17.jpg
 [18]: {{site.baseurl}}/images/post/uploads/2013/05/18.jpg
 [19]: {{site.baseurl}}/images/post/uploads/2013/05/19.jpg
 [20]: {{site.baseurl}}/images/post/uploads/2013/05/20.jpg
 [21]: {{site.baseurl}}/images/post/uploads/2013/05/211.jpg
 [22]: {{site.baseurl}}/images/post/uploads/2013/05/221.jpg