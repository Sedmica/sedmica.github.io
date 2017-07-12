---
layout: page
title: '3ds Max 2012 - Modelovanje Automobilske Gume'
published: true
author: Marko
comments: true
date: 2012-11-07 12:11:37
tags: [ ]
categories:
    - modeling
permalink: blog/:title
image:
    feature: 151.jpg
---

U ovom tutorialu ?emo nau?iti korak po korak kako se pravi kompleksni kružni pattern gume od automobilskog to?ka unutar 3ds Max-a 2012.
  


* * *

![][1]

Krenu?emo sa dva plane-a, jedan okrenut ka front view-u a drugi ka top view-u, sa nalepljenim nacrtima za gumu. Ovo je slika koju koristimo u ovom tutorialu kao nacrt:

![][2]

* * *

Sa Line alatom kreira?emo konturu gume u front view-u.

![][3]

* * *

Doda?emo extrude modifier da produžimo liniju u oblik.

![][4]

* * *

Sada ?emo dodati i pomerati edge-ove tako da prate pattern dizajna gume. (Da bi ste napravili objekat da bude providan, kliknite desnim klikom na objekat, zatim Object Properties, i pod general tabom otka?ite See Through)

![][5]

* * *

Doda?emo edge loop-ove oko klju?nih delova potrebnih da definišemo pattern gume. Ovo možete najlakše odraditi sa Swift Loop alatom u Graphite modeling tools, ili sa connect alatom.

![][6]

* * *

Zatim ?emo pomeriti sve vertex-e u top view-u tako da se podudaraju sa nacrtom.

![][7]

* * *

Selektova?ete slede?e poligone i ekstrudovati ih ka spoljašnjosti.

![][8]

* * *

Selektova?ete poligone u rupama na strani i Scale alatom ?ete ih poravnati, zatim rotirati i udubiti tako da dobijete oblik na sledecoj slici.

![][9]

* * *

Obrisa?ete krajne poligone koji su nastali posledicom extrude-ovanja.

![][10]

* * *

Dalje, kopiramo ceo oblik jedno 45 puta u dužinu.

![][11]

* * *

Pomo?u Attach List-e, spoji?emo sve kopije u jednan model. (Desni klik na model, Kockica pored Attach komande nam otvori Attach List)

![][12]

* * *

Selektova?emo sve vertexe u ovom modelu i komandom Weld spojiti odvojene ivi?ne vertekse ovih kopija. Koristi?emo threshold koji je dovoljan da se spoje ivi?ni verteksi a da se ne uništi model.

![][13]

* * *

Na kraju ?emo bend modifier-om saviti ovaj model i dobi?emo savršenu automobilsku gumu.

![][14]

* * *

Mogli smo u ovom tutorialu videti primer jedne automobilske gume, me?utim tok rada je u ve?ini isti za sve gume. Sve što nam je potrebno je dobar nacrt i za kratko vreme možete izmodelovati gumu po želji.

Rezultat:

![][15]

 [1]: {{site.baseurl}}/images/post//uploads/2012/11/02.jpg
 [2]: {{site.baseurl}}/images/post//uploads/2012/11/01.jpg
 [3]: {{site.baseurl}}/images/post//uploads/2012/11/03.jpg
 [4]: {{site.baseurl}}/images/post//uploads/2012/11/04.jpg
 [5]: {{site.baseurl}}/images/post//uploads/2012/11/05.jpg
 [6]: {{site.baseurl}}/images/post//uploads/2012/11/06.jpg
 [7]: {{site.baseurl}}/images/post//uploads/2012/11/07.jpg
 [8]: {{site.baseurl}}/images/post//uploads/2012/11/08.jpg
 [9]: {{site.baseurl}}/images/post//uploads/2012/11/09.jpg
 [10]: {{site.baseurl}}/images/post//uploads/2012/11/101.jpg
 [11]: {{site.baseurl}}/images/post//uploads/2012/11/111.jpg
 [12]: {{site.baseurl}}/images/post//uploads/2012/11/121.jpg
 [13]: {{site.baseurl}}/images/post//uploads/2012/11/131.jpg
 [14]: {{site.baseurl}}/images/post//uploads/2012/11/141.jpg
 [15]: {{site.baseurl}}/images/post//uploads/2012/11/151.jpg