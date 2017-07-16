---
layout: page
title: 'VRay Material - Metal'
published: true
author: Marko
comments: true
date: 2013-05-15 12:05:56
tags: [ ]
categories:
    - modeling
permalink: blog/:title
---
U proڑlom tutorialu nau?ili ste vrste tekstura i njihovu primenu, medjutim teksture same po sebi ne posti‍u puno bez prethodno podeڑenog materiala ili shader-a. U ovom tutorialu nau?i?emo kako da napravimo Vray material metala u 3ds Max-u. Imajte na umu da prvo morate da podesite Vray renderer ڑto ako ste propustili mo‍ete pogledati uputstvo .

* * *

Kao ڑto ve? znate svi materiali se podeڑavaju u Material Editoru. Otvori?emo material editor (Rendering > Material Editor) i selektovati prvi slobodan material, zatim ?emo ga prevu?i na loptu koju ?ete napraviti da vam slu‍i kao test objekat za material. Imajte na umu da da bi ste videli kako izgleda material morate renderovati sliku tako da dodatno napravite jedan vrayplane ispod lopte ( U Modify panelu: Create > Geometry > Vray > VrayPlane) i dodajte jedno Vray svetlo (U Modify panel: Create > Lights > Vray > VrayLight). Sada ste pripremili scenu za kreaciju i testiranje materiala.

![][1]

![][2]

* * *

Prvo ?emo podesiti boju materiala, tj diffuse komponentu. Za metal se uglavnom koristi crna boja, jer ono ڑto definiڑe metal su ustvari reflekcije. Naravno, ovo je u slu?aju ?istog metala, me?utim kada o?ete da napravite realan material morate u teksturu da ura?unate i praڑinu, oڑte?enja, r?u itd. U ovom slu?aju pravimo ?ist metal, tako da diffuse boju stavite na crnu.

![][3]

* * *

Reflect boja je ono ڑto ?e odrediti zapravo boju metala, i naravno, koli?inu kolko reflektuje. Poڑto je ?ist metal, stavi?emo reflekciju na maksimalno svetlu vrednost, a boju mo‍ete odabrati sami.

![][4]

* * *

Ispod Reflect boje nalazi se Refl. Glosiness. On odre?uje mutninu reflektivnosti. Za ovaj material stavite 0.7. Sa desne strane imate opciju Fersnel Reflections koja se otka?uje u slu?aju da pravimo material poput plastike ili drveta, koji nema isti oblik reflekcije kao staklo i metal. Ovo sada ostavite ne otka?eno.

![][5]

* * *

Zatim u material editoru otvorite BRDF tab u kom odre?ujemo tip materiala od tri postoje?a tipa Phong, Blinn i Ward. Phong ima najostrije reflekcije, Blinn malo mutnije a Ward najbla‍e reflekcije. U slu?aju metala odaberite Ward. Pored se nalazi opcija anistropy ڑto predstavlja savijanje reflekcija. Stavite Anistropy na 0.3

![][6]

* * *

Suڑtina ovog materiala ڑto smo napravili je da poput metala reflektuje objekte oko sebe:

![][7]

* * *

Da bismo doveli ovaj material na novi nivo, doda?emo mu jednostavnu teksturu. Sa?uvajte slede?u sliku jer ?emo upravo nju koristiti kao teksturu za ovaj metal.

![][8]

* * *

Unutar podeڑavanja materiala, nadjite Maps tab, i u listi mapa prona?ite Bump Map. Kliknite na &#8222;None&#8220; polje koje se nalazi pored koje indikuje da nije dodeljena nijedna mapa. Otvori?evam se novi prozor sa izborom raznih mapa od kojih odaberite **Bitmap**. Kada kliknete Bitmap otvori?e vam se prozor u kom treba da prona?ete odgovaraju?u sliku na svom kompjuteru.

![][9]

* * *

Kada odaberete sliku otvori?e se u material editoru podeڑavanja za bitmap. Podesi?ete Tiling kao na slici na 4 po U i V osi. Ovo zna?i da ?e se odabrana tekstura ponavljati 4 puta u oba pravca.

![][10]

* * *

Kliknite na Go to parrent dugme da biste se vratili u glavna podeڑavanja materiala, zatim, prevucite ovu teksturu na Diffuse i Reflect slotove i podesite im ja?ine kao na slici.

![][11]

* * *

Renderujte sada scenu i pogledajte ڑta ste postigli. Ne bojte se da dalje eksperimentiڑete sa materijalom jer je eksperimentacija najbolji na?in da dalje nau?ite kakve sve materiale mo‍ete da realizujete pomo?u odli?nog sistema Vray Renderera.

![][12]

 [1]: {{site.baseurl}}/images/post/uploads/2013/05/011.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/05/021.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/05/031.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2013/05/041.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2013/05/05.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2013/05/06b.jpg
 [7]: {{site.baseurl}}/images/post/uploads/2013/05/071.jpg
 [8]: {{site.baseurl}}/images/post/uploads/2013/05/081.jpg
 [9]: {{site.baseurl}}/images/post/uploads/2013/05/091.jpg
 [10]: {{site.baseurl}}/images/post/uploads/2013/05/101.jpg
 [11]: {{site.baseurl}}/images/post/uploads/2013/05/111.jpg
 [12]: {{site.baseurl}}/images/post/uploads/2013/05/12.jpg