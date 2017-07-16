---
layout: page
title: 'Uvod u Rigovanje - Autodesk 3ds Max'
published: true
author: Marko
comments: true
date: 2013-05-29 12:05:11
tags: [ ]
categories:
    - modeling
permalink: blog/:title
---
Ovaj tutorial predstavi?e vam osnove rigging-a tj. rigovanja, ڑta zna?i rigovati lika, koje metode postoje i na koji na?in uopڑte pristupamo ovom zadatku.

* * *

**ٹTA JE RIGGING?**

Rigovanje je proces kreiranja mehanizma za pokretanje lika, automobila, masine. Obuhvata pravljenje kostura i kontrolere za odgovaraju?eg lika, a zatim odredjivanje koja kost ?e kako uticati na pomeranje njega (Ovaj korak naziva se Skinning). Cilj rigginga je da se napravi sistem pokretanja lika koji je u potpunosti automatizovan i ne zahteva dodatno modifikovanje modela pri pokretu od strane animatora. Napredni rigging zahteva i dobru koli?inu programiranja, kako bi se ڑto bolje automatizovao pokretni mehanizam, ali za neke osnovnije potrebe (npr. poziranje lika) su dovoljni alati unutar programa.

Kvalitet rigging-a tako?e zavisi od kvaliteta topologije modela koji je rigovan.

![][1]

* * *

**METODE RIGOVANJA U 3DS MAX-U**

3ds Max nam nudi 3 na?ina da kreiramo **Rig** (Pokretni sistem, Skelet): Bones, Biped i novi CAT sistem.

* * *

1. Bones metoda &#8211; U prevodu kosti, nudi najve?u kontrolu nad oblikom skeleta jer sami kreirate kosti i odre?ujete njihovu upotrebu, ali i zahteva najve?i nivo znanja.

![][2]

* * *

2. Biped metoda &#8211; Biped je naziv za predefinisani skeletni sistem koji vi mo‍ete da modifikujete u vaڑe svrhe. Nudi mnogobrojne opcije uklju?uju?i i broj ki?menih kostiju, broj prstiju, mogu?nost repa, broj kostiju podlaktice i druge.

![][3]

* * *

3. CAT metoda &#8211; CAT je najnoviji skeletni sistem sli?an Biped-u, ali sa implementiranim naprednim kontrolerima i mogu?nostima za animaciju. CAT Nudi ve?u kontrolu oblika skeleta od Biped-a i tako?e sadr‍i pre-definisane animacije koje mo‍ete jednim klikom da primenite. CAT je najefikasniji sistem i napredniji je od Biped-a u viڑe pogleda. Ipak ne nudi nivo kontrole koju imate sa Bones.

![][4]

* * *

**TOK RADA &#8211; PROCES RIGGINGA I SKINNINGA**

Koju god od prethodno nabrojane tri metode da odaberete sledi da formirate skelet koji ?e odgovarati vaڑem liku. U zavisnosti od metode pomo?u ponu?enih alata se odrede dimenzije i polo‍aj odre?enih kostiju tako da se kostur precizno poklapa sa odgovaraju?iim modelom.

![][5]

* * *

Dalje, U slu?aju bones metode svi sistemi za pokret (Inverse Kinematics &#8211; IK chain) moraju da se ru?no prave tako da skelet mo‍e da razume koje kosti kako da se ponaڑaju.

![][6]

* * *

U slu?aju Biped-a i CAT-a odma se prelazi na slede?i korak a to je Skinning. Naziv Skinning zapravo se poklapa sa modifier-om **Skin** koji se stavlja na model i slu‍i za odre?ivanje koje vertekse obuhvata i pomera koja kost.

Pomo?u tzv. _Envelopes_ odre?ujemo domet svake kosti tj. kolko obuhvata verteksa, a zatim dodatnu preciznost mo‍emo ostvariti _Weight Paint_ alatima sa kojima crtamo selekciju verteksa na koje kost uti?e.

![][7]

* * *

Rigging ume da bude naporan zadatak jer ‍elimo da postignemo savrڑen odnos kostiju tako da ne nastaju problemi pri savijanju zglobova ali nakon ڑto ste skinovali model on je spreman za akciju.

![08][8]

 [1]: {{site.baseurl}}/images/post/uploads/2013/05/00.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/05/013.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/05/023.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2013/05/033.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2013/05/043.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2013/05/052.jpg
 [7]: {{site.baseurl}}/images/post/uploads/2013/05/062.jpg
 [8]: http://ghost.halomaps.org/bluestreak/animation/images/cyborg_unarmed-move-front.gif