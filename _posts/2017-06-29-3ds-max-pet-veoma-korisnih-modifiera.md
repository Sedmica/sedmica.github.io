---
layout: page
title: 'Autodesk 3ds Max - 5 Veoma Korisnih Modifiera'
published: true
author: Marko
comments: true
date: 2012-12-05 12:12:52
tags: [ ]
categories:
    - modeling
permalink: blog/:title
---
U današnjem tutorialu ?emo nau?iti kako da primenimo 5 veoma korisnih modifier-a za modeling u 3ds Max-u i kako uz pomo? njih da olakšamo kreaciju nekih modela.

* * *

**1. Shell modifier**

Shell modifier je modifier koji jednostranoj površini daje debljinu tako što extrudira njenu unutrašnju i spoljašnju stranu (npr. _Plane_ ?e postati kvadar). Druga?ije može da se objasni kao modifier koji objektu koji ima dužinu i širinu i visinu daje i debljinu

![][1]

Sa Inner ammount biramo koliko da extrudira unutrašnju stranu a sa Outer ammount kolko spoljašnju. Segments nam odre?uje kolko edge loop-ova ?emo imati izme?u spoljašnje i unutrašnje strane, tj. kolko segmenata ?e imati krajevi.

![][2]

Ovaj alat se najviše primenjuje kod ode?e i generalno kod tkanine jer je to najprakti?niji na?in da ode?i dodamo potrebnu debljinu.

* * *

**2. Bend modifier**

Bend modifier – sam naziv efektivno ilustruje svrhu alata, a i njegovu primenu smo mogli videti u tutorialu za pravljenje automobilskih guma. On služi za savijanje modela u bilo kom pravcu i uglu, bez da moramo da manualno pomeramo vertekse.

![][3]

Angle nam odre?uje koli?inu savijanja tj. ugao pod kojim se savija objekat, a direction na koju stranu se savija objekat u odnosu na njegovu osu. Bend Axis nam služi da odaberemo u po kojoj osi ?emo da savijamo objekat a limits da ograni?imo kolko ?e se donja i gornja strana modela saviti u odnosu na osu.

![][4]

* * *

**3. Twist modifier**

Twist modifer nam služi za uvrtanje modela, poput uvrtanja koje se dešava kada cedimo mokru krpu.

![][5]

Podešavanja funkcionišu poput onih kod Bend modifiera s tim što umesto direction imamo Bias koji odre?uja ka kojoj strani modela teži uvrtanje.

* * *

**4. Taper modifier**

Taper modifier nam služi da ostvarimo postepeno sužavanje, proširivanje i modifikovanje oblika modela duž odabrane ose.

![][6]

I ova podešavanju su napravljena poput onih kod Bend i Twist modifier-a s tim što imamo Curve opciju koja nam omogu?uje da se promena oblika dešava nelinearno.

![][7]

* * *

**5. Path Deform (WSM)**

Na kraju, ovaj fantasti?an modifier nam omogu?uje da naš model pozicioniramo i pomeramo u odnosu na putanju koju smo napravili. Veoma koristan modifier za patternizovane modele koji se kre?u u nelinearnom pravcu poput lanaca, konopaca, dekoracije i mnogih drugih.

![][8]

Funkcioniše tako što prvo sa _Line_ alatom ili drugim alatima za crtanje krivih linija nacrtamo željenu putanju po kojoj želimo da se kre?e model. Zatim na model stavimo _Path Deform (WSM)_ Modifier i kliknemo _Pick Path_. Odaberemo prethodno nacrtanu krivu i kliknemo na _Move to Path_.

Sada se naš model nalazi na našoj putanji i sa dodatnim komandama Percent, Stretch, Rotation i Twist možemo da ga animiramo ili pozicioniramo kako nam odgovara.

![][9]

Percent odre?uje procenat putanje koji je model dostigao. Korisno ako želimo da animiramo kretanje modela po putanji. Stretch razvla?i model po putanji. Rotation rotira objekat oko svoje ose a twist uvr?e model kao twist modifier.

Pomo?u ovog modifer-a možemo fantasti?ne slike i animacije da napravimo sa lako?om

![][10]

 [1]: {{site.baseurl}}/images/post/uploads/2012/12/01.jpg
 [2]: {{site.baseurl}}/images/post//uploads/2012/12/02.jpg
 [3]: {{site.baseurl}}/images/post//uploads/2012/12/03.jpg
 [4]: {{site.baseurl}}/images/post//uploads/2012/12/04.jpg
 [5]: {{site.baseurl}}/images/post//uploads/2012/12/05.jpg
 [6]: {{site.baseurl}}/images/post//uploads/2012/12/06.jpg
 [7]: {{site.baseurl}}/images/post//uploads/2012/12/07.jpg
 [8]: {{site.baseurl}}/images/post//uploads/2012/12/08.jpg
 [9]: {{site.baseurl}}/images/post//uploads/2012/12/09.jpg
 [10]: {{site.baseurl}}/images/post//uploads/2012/12/10.jpg