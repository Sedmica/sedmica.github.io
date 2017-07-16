---
layout: page
title: 'Vray Material - Drvo - Autodesk 3ds Max'
published: true
author: Marko
comments: true
date: 2013-07-17 12:07:05
tags: [ ]
categories:
    - modeling
permalink: blog/:title
image:
    feature: 0721.jpg
---
U ovom tutorialu nau?i?emo kako da napravimo Vray material refiniranog drveta u 3ds Max-u. Imajte na umu da prvo morate da podesite Vray renderer ڑto ako ste propustili mo‍ete pogledati uputstvo ovde.

* * *

Kao ڑto ve? znate svi materiali se podeڑavaju u Material Editoru. Otvori?emo material editor (Rendering > Material Editor) i selektovati prvi slobodan material, zatim ?emo ga prevu?i na kocku koju ?ete napraviti da vam slu‍i kao test objekat za material. Imajte na umu da da bi ste videli kako izgleda material morate renderovati sliku tako da dodatno napravite jedan vrayplane ispod kocke ( U Modify panelu: Create > Geometry > Vray > VrayPlane) i dodajte dva Vray svetla sa suprotnih strana kocke (U Modify panel: Create > Lights > Vray > VrayLight). Sada ste pripremili scenu za kreaciju i testiranje materiala.

![][1]

![][2]

* * *

Prvo ?emo podesiti boju materiala, tj diffuse komponentu. Diffuse komponenta drveta mora da dodje od teksture, ali za boju mo‍ete staviti neku koja pribli‍no predstavlja boju ‍eljenog drveta ?isto da imate uvid pri podeڑavanju drugih parametara.

![][3]

* * *

Reflect boja je ono ڑto ?e odrediti zapravo koli?inu kolko reflektuje material. Poڑto drvo nije totalno reflektivan objekat, ve? spada pod grupu &#8216;fersnel&#8217; reflektivnih objekata, tu opciju ?ete i otka?iti desno od reflekt boje, a ڑto se ti?e same boje stavite vrednost R=30 G=30 B=30.

Ispod Reflect boje nalazi se Refl. Glosiness i zatamljena Hilight glossiness. Refl. Glosiness odre?uje mutninu reflektivnosti, a highlight glosiness, ina?e neprirodan parametar, odre?uje oڑtrinu &#8216;odsjaja&#8217;. Za ovaj material ?emo uklju?iti highlight glosiness pritiskanjem L dugmeta desno od parametra, stavite vrednost na 0.38. Refl.Glosiness stavite na 0.86

![][4]

* * *

Sada smo podesili parametre i mo‍emo pre?i na teksture. Paket besplatnih tekstura za drvo mo‍ete preuzeti ovde.

* * *

Unutar podeڑavanja materiala, nadjite Maps tab, i u listi mapa prona?ite Bump Map. Kliknite na &#8222;None&#8220; polje koje se nalazi pored koje indikuje da nije dodeljena nijedna mapa. Otvori?evam se novi prozor sa izborom raznih mapa od kojih odaberite **Bitmap**. Kada kliknete Bitmap otvori?e vam se prozor u kom treba da prona?ete odgovaraju?u sliku na svom kompjuteru.

![][5]

* * *

Kliknite na Go to parrent dugme da biste se vratili u glavna podeڑavanja materiala, zatim, prevucite ovu teksturu i na Diffuse slot.

![][6]

* * *

Renderujte sada scenu i pogledajte ڑta ste postigli. Ne bojte se da dalje eksperimentiڑete sa materijalom jer je eksperimentacija najbolji na?in da dalje nau?ite kakve sve materiale mo‍ete da realizujete pomo?u odli?nog sistema Vray Renderera.

![][7]

 [1]: {{site.baseurl}}/images/post/uploads/2013/07/012.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/07/022.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/07/032.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2013/07/042.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2013/07/052.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2013/07/062.jpg
 [7]: {{site.baseurl}}/images/post/uploads/2013/07/072.jpg