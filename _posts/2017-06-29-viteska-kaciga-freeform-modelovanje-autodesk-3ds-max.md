---
layout: page
title: 'Viteڑka Kaciga, Freeform Modelovanje - Autodesk 3ds Max'
published: true
author: Marko
comments: true
date: 2013-06-12 12:06:13
tags: [ ]
categories:
    - modeling
permalink: blog/:title
image:
    feature: 231.jpg
---
U ovom tutorialu modelova?emo jednu viteڑku kacigu uglavnom pomo?u Freeform alata koje nudi Autodesk 3ds Max. Prou?avali smo ih ve? u ranijem tutorialu o retopologiji a sad ?emo, pored i drugih alata, ih pokazati u praksi.

* * *

Zapo?e?emo sa loptom (Sphere), 12 segmenta i proizvoljne veli?ine.

![][1]

* * *

Konvertova?emo je u editable poly (desni klik > convert to > editable poly) a zatim pomeriti vertekse sa donje polovine lopte kao na slici.

![][2]

* * *

Dodajte Turbosmooth modifier na ovaj objekat i stavite iterations na 2.

![][3]

* * *

Napravite novu kocku negde sa strane i konvertujte je u editable poly. Ova kocka slu‍i samo kao baza za freeform modeling tako da nije bitna a kasnije ?e biti i obrisana.

![][4]

* * *

U gornjem vrhu interfejsa, otvorite meni pod nazivom Freeform.

![][5]

* * *

Otvorite padaju?i meni na kome piڑe Draw On: Grid i odaberite Draw On: Surface.

![][6]

* * *

Kliknite Pick i odaberite Sphere01, loptu koju smo na po?etku stvorili.

![][7]

* * *

Odaberite topology alat a zatim nacrtajte mre‍u kao na slici koja ?e formirati otvor na kacigi. Ako ne znate kako da koristite ovaj i naredne alate, pogledajte tutorial za Retopologiju koji se nalazi na 3D sekciji sedmice.

![][8]

* * *

Extend alatom izvucite poligone kao na slici sa Shift + povla?enjem miڑa.

![][9]

* * *

Dalje, istim alatom povla?enjem verteksa iz ?oڑkova izvucite poligone kao na narednim slikama.  (Pull = povla?enje)

![][10]

&nbsp;

![][11]

* * *

Istim alatom dalje izvucite poligone kao na narednoj slici sa shift + povla?enjem. Napomena: Sa Ctrl + shift + alt + povla?enjem miڑa mo‍ete pomerati vertekse sa extend alatom. Aktivno modifikujte mre‍u kako pratite ove korake da biste postigli ڑto lepڑu mre‍u.

![][12]

* * *

Bridge alatom zatvorite rupe koje su ostale izme?u ovih poligona.

![][13]

![][14]

* * *

Opet istom procedurom zavrڑiti i gornji deo kacige.

![][15]

![][16]

* * *

Sada ponovo uzmite Topology alat i nacrtajte topologiju kao na slici, formiraju?i pole?inu kacige.

![][17]

* * *

Zatim, zatvorite istim metodama gornji deo kacige.

![][18]

* * *

Sada mo‍ete obrisati kocku koja je bila osnova ovog objekta, jer nam viڑe nije potrebna.

![][19]

* * *

Otvorite Graphite Modeling Tools meni, i Swift Loop alatom dodajte loop-ove koji su selektovani na narednoj slici.

![][20]

* * *

Zatim selektujte poligone na slici, i kopirajte celinu kao element, shift + move alatom.

![][21]

Kao ڑto smo u mnogim tutorialima prethodnim radili, dodajte ova tri modifier-a na model. Symmetry da dobijemo identi?nu drugu polovinu kacige, Shell da predmet dobije debljinu (podesiti segment na 2) i Turbosmooth da objekat izgleda glatko poput kacige, i da se ne vide segmenti.

* * *

![][22]

* * *

Rezultat je jedna ne toliko komplikovana kaciga, ali suڑtina ovih koraka je u efikasnom demonstriranju ove prakti?ne metode modelovanja sa freeform alatima bez suviڑnog komplikovanja i zbunjivanja vas ?itaoca. Ova suڑtina va‍i i mo‍e da se primeni u mnogobrojnim kompleksnijim modelima.

![][23]

 [1]: {{site.baseurl}}/images/post/uploads/2013/06/011.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/06/021.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/06/031.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2013/06/041.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2013/06/052.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2013/06/061.jpg
 [7]: {{site.baseurl}}/images/post/uploads/2013/06/071.jpg
 [8]: {{site.baseurl}}/images/post/uploads/2013/06/081.jpg
 [9]: {{site.baseurl}}/images/post/uploads/2013/06/091.jpg
 [10]: {{site.baseurl}}/images/post/uploads/2013/06/101.jpg
 [11]: {{site.baseurl}}/images/post/uploads/2013/06/11.jpg
 [12]: {{site.baseurl}}/images/post/uploads/2013/06/12.jpg
 [13]: {{site.baseurl}}/images/post/uploads/2013/06/13.jpg
 [14]: {{site.baseurl}}/images/post/uploads/2013/06/14.jpg
 [15]: {{site.baseurl}}/images/post/uploads/2013/06/15.jpg
 [16]: {{site.baseurl}}/images/post/uploads/2013/06/16.jpg
 [17]: {{site.baseurl}}/images/post/uploads/2013/06/17.jpg
 [18]: {{site.baseurl}}/images/post/uploads/2013/06/18.jpg
 [19]: {{site.baseurl}}/images/post/uploads/2013/06/19.jpg
 [20]: {{site.baseurl}}/images/post/uploads/2013/06/20.jpg
 [21]: {{site.baseurl}}/images/post/uploads/2013/06/21.jpg
 [22]: {{site.baseurl}}/images/post/uploads/2013/06/22.jpg
 [23]: {{site.baseurl}}/images/post/uploads/2013/06/23.jpg