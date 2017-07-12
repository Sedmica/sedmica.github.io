---
layout: page
title: '4 Vray Materiala - Autodesk 3ds Max'
published: true
author: Marko
comments: true
date: 2013-07-24 12:07:39
tags: [ ]
categories:
    - modeling
permalink: blog/:title
image:
    feature: 1061.jpg
---
Kod ovog materiala klju?no je kao prvo podesiti reflekciju i refrakciju na belu boju tj. da material bude maksimalno reflektivan i providan. Tip reflekcije je fresnel, jer staklo ne reflektuje po svojstvu ogledala. U Opcijama materiala bitno je uklju?iti opciju Reflect on back side jer je ovo providan material dakle mora da dobija reflekcije i sa unutraۮje tj zadnje strane. 

U ovom tutorialu dobi?ete uputstvo za podeۡvanje 4 korisna vray materiala unutar autodesk 3ds Max-ovog material editora. Za podeۡvanje render-a kliknite ovde.

* * *

**1. Realisti?no Staklo**

![][1]

Kod ovog materiala klju?no je kao prvo podesiti reflekciju i refrakciju na belu boju tj. da material bude maksimalno reflektivan i providan. Tip reflekcije je fresnel, jer staklo ne reflektuje po svojstvu ogledala. U Opcijama materiala bitno je uklju?iti opciju Reflect on back side jer je ovo providan material dakle mora da dobija reflekcije i sa unutraۮje tj zadnje strane. Glosiness podeۡvanja se ne diraju jer staklo bistro reflektuje. Za dodatne fresnel opcije koje moߥte videti da su podeۥne na slici kliknite na L dugme pored fresnel opcije. Podesite Exit color i Fog podeۡvanja kao na slici i dobi?ete realisti?an material stakla.

![][2]

* * *

**2. Plastika**

![][3]

Ono ۴o je karakteristi?no za ovaj material, pored podeۡvanja koja moߥte videti na slici, je falloff mapa u diffuse slot-u. Moߥte na slici videti da je Falloff podeۥn na Perpendicular/Parallel ۴o zna?i da ?e imati prelaz iz jedne u drugu boju od unutraۮjosti ka spoljaۮjosti modela na slici. Ovde su podeۥne dve nijanse narandߡste/ߵte ali vi moߥte staviti koju god boju ߥlite s tim da im odnos ostane isti.

![][4]

* * *

**3. Tkanina**

![][5]

Reflekcije tkanine ne?e biti fresnel, ali ?e zato biti veoma malog intenziteta, vrednosti svega R=22 G=22 B=22, dok je glosiness tako?e veoma niske vrednosti, jer ne ߥlimo o۴re reflekcije na tkanini, poput ogledala, ve? ne߮e kao ۴o moߥte videti na tkanini. Svaki objekat reflektuje do odre?ene mere, odrediti te vrednosti je klju? dobijanja odre?enog materiala iz realnog sveta.

![][6]

* * *

**4. Crna automobilska farba******

![][7]

Ovo je najkomplikovaniji material od ova ?etiri, jer se sastoji od dva materiala spojena u jednom Shellac materialu. Zapo?injete ga tako ۴o prvo ubacite u material library jedan Shellac material, zatim odradite material broj jedan koji se nalazi u Base slot-u, pa material broj dva koji se nalazi u dodatnom Shellac slot-u.

![][8]

Opet upotrebljavamo Falloff mapu u oba ova materiala, s tim da ovog puta je podeۥn na Fresnel, koji sli?no deluje kao parallel ali je prelaz sabijeniji ka ivicama modela, poput fresnel reflekcija, reflekcijama vidljivijim pod odre?enim uglom. Sva ostala podeۡvanja su ona s kojima smo se upoznali ve? i moߥte ih pogledati na slikama ispod. Slike su numerisane 1. za Base slot i 2. za Shellac slot. 

![][9]

![][10]

![][7]

* * *

![][11]

 [1]: {{site.baseurl}}/images/post//uploads/2013/07/00.jpg
 [2]: {{site.baseurl}}/images/post//uploads/2013/07/013.jpg
 [3]: {{site.baseurl}}/images/post//uploads/2013/07/023.jpg
 [4]: {{site.baseurl}}/images/post//uploads/2013/07/033.jpg
 [5]: {{site.baseurl}}/images/post//uploads/2013/07/043.jpg
 [6]: {{site.baseurl}}/images/post//uploads/2013/07/053.jpg
 [7]: {{site.baseurl}}/images/post//uploads/2013/07/092.jpg
 [8]: {{site.baseurl}}/images/post//uploads/2013/07/063.jpg
 [9]: {{site.baseurl}}/images/post//uploads/2013/07/073.jpg
 [10]: {{site.baseurl}}/images/post//uploads/2013/07/082.jpg
 [11]: {{site.baseurl}}/images/post//uploads/2013/07/106.jpg