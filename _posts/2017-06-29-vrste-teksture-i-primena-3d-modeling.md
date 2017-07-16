---
layout: page
title: 'Vrste Teksture i Primena - 3D Modeling'
published: true
author: Marko
comments: true
date: 2013-05-08 12:05:18
tags: [ ]
categories:
    - modeling
permalink: blog/:title
---
U ovom tutorialu ?emo nau?iti vrste tekstura i njihovu primenu u kreaciji realnog 3D modela. Postoji mnogo vrsta tekstura koje na svoj na?in uti?u na rendering materijala. Neke slike bi?e prikazane iz 3ds Max-a ali ovo ڑto ?ete nau?iti je neڑto ڑto va‍i i za druge programe poput Autodesk Maya, Cinema 4D, Blender i drugih.

* * *

Teksture mogu da uti?u na materijal na mnogobrojne na?ine: Definiڑu mu boju, sjajsnost, reflekcije, Providnost, Reljef, itd. 

Vrste teksturalnih mapa zavise od vrste materijala, me?utim slede?a lista sadr‍i naj?eڑ?e vrste tekstura koje se generalno koriste za definisanje materijala:

-Diffuse Map (ili Color map)
  
-Specular i Glosiness Map
  
-Bump, Normal i Displacement Map
  
-Transparency ili Opacity map 

![][1]

* * *

**DIFFUSE MAP**

Diffuse ili Color map-a je mapa koja definiڑe osnovne boje i vrednosti modela. 

Primer diffuse mape: ljudksa faca

![][2]

Render primer: Izgrebana Lopta

![][3]

* * *

**SPECULAR, GLOSINESS MAP**

Specular mapa je mapa koja sa vrednostima crne i bele definiڑe ja?inu spekularne komponente materijala. Spekularna komponenta simulira reflektovanje izvora svetla i stvara odsjaj na materijalu i jeftina je zamena za kalkulaciju egzaktnih reflekcija, za koju je zadu‍ena ina?e Reflect mapa. Glosiness Map-a vrednostima crne i bele odre?uje kolko je oڑtra reflektivnost ili spekularnost materijala. Maksimalni glosiness zna?i da materijal totalno precizno reflektuje kao ogledalo, tj spekularni odsjaj mu je sitna ta?ka, dok minimalna vrednost zna?i da se reflekcije totalno mute, ili da je skroz ڑirok spekularni odsjaj.

Primer Specularne Mape: Ljudska Glava

![][4]

Render Primer Spekularne Mape: Lopta (Spekularna Mapa sa Glosiness-om 10% i sa glosiness-om 30%)

![][5]

* * *

**BUMP, NORMAL & DISPLACEMENT MAP**

Ove sve tri mape slu‍e za generisanje sitnih detalja koje ina?e nije isplatljivo modelovati. Postoje naravno razlike izme?u njih:

Bump mapa je najosnovniji nivo reljefne mape, ona se slu‍i crno belim vrednostima za definisanje iluzije reljefnih detalja, bela predstavlja ispup?avanje, crna udubljenje. Limitacija Bump mape je ڑto ima samo visinu, tj crnu i belu.

![][6]

Normal mapa je naprednija od Bump mape jer se ona slu‍i R,G,B vrednostima da definiڑe ne samo visinu, ve? i pravac ispup?enja i dakle mogu da se postignu bolji rezultati. Mana Normal mape je ڑto je skoro ne mogu?e ru?no je nacrtati ve? mora da se generiڑe pomo?u odre?enog softvera.

![][7]

Ove dve mape imaju zajedni?ku limitaciju a to je da samo stvaraju ilziju detalja, ali ne menjaju konturu tj oblik modela, tako da se uglavnom koriste za sitnije detalje, osim kada su u pitanju modeli za video igre.

Displacement mapa za razliku od prethodne dve mape zapravo menja oblik modela pri renderovanju pomo?u crnih i belih vrednosti. Mana displacement mape, i razlog zaڑto se treba po mogu?nosti izbegavati, je ڑto znatno usporava rendering.

![][8]

Postoje i Vector Displacement Mape ali one su prili?no nova pojava i nisu baڑ koriڑtene ?esto joڑ. Funkcioniڑu na principu Normal Mapa ali menjaju oblik kao displacement mape. 

* * *

**OPACITY / TRANSPARENCY MAP**

Opacity ili Transparency mape slu‍e da se crno-belim vrednostima definiڑe providnost tj transparentnost objekta.

Render Primer: Lopta

![][9]

![][10]

* * *

Zajedni?ko delovanje svih ovih tekstura je ono ڑto ?ini realan materijal, svaka ova komponenta je od jednake va‍nosti u misiji da se napravi realan model:

![][11] 

Ako ‍elite da u ve?im detaljima obradimo jednu od ovih tekstura u narednim tutorialima napiڑite u komentarima, a za displacement i normal mape tutoriale ve? mo‍ete prona?i u sekciji 3D Modeling.

 [1]: {{site.baseurl}}/images/post/uploads/2013/05/01.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/05/02.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/05/03.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2013/05/04.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2013/05/05b.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2013/05/06.jpg
 [7]: {{site.baseurl}}/images/post/uploads/2013/05/07.jpg
 [8]: {{site.baseurl}}/images/post/uploads/2013/05/08.jpg
 [9]: {{site.baseurl}}/images/post/uploads/2013/05/09.jpg
 [10]: {{site.baseurl}}/images/post/uploads/2013/05/10.jpg
 [11]: {{site.baseurl}}/images/post/uploads/2013/05/11.jpg