---
layout: page
title: 'VRay - SSS2 Materijal'
published: true
author: Marko
comments: true
date: 2012-12-12 12:12:19
tags: [ ]
categories:
    - modeling
permalink: blog/:title
---
U ovom tutorialu detaljno ?emo objasniti funkcije i podeڑavanja Vray SSS2 (Sub-Surface-Scattering) materijala. Za ovaj tutorial potreban vam je Autodesk 3ds Max 2012 i Chaosgroup Vray 2.0 ili novije verzije.

* * *

**UVOD**

Chaosgroup je nedavno proizveo i jedan od najboljih reڑenja za pravljenje translucentnih materijala poput ko‍e koji se koristi sa njihovim Vray rendererom, a naziva se _Vray SSS2 material_. On sadr‍i tri sloja, _Specular layer, Diffuse layer i sub-surface scattering layer_. Sub Surface Scattering layer (Lejer zadu‍en za rasipanje svetlosti ispod povrڑine objekta) mo‍e da deluje na dva na?ina_: Single scattering_ koji se javlja kada se svetlo odbije samo jednom unutar objekta i _Multiple scattering_ koji je rezultat viڑestrukog odbijanja svetla unutar materijala.

* * *

**PARAMETRI**

Preset – Mo‍emo da izaberemo jedan od nekoliko osnovnih podeڑavanja za materijale poput ko‍e, mleka i drugih translucentnih materijala.



Prepass rate – Ovaj parametar predstavlja rezoluciju svetlosti u Prepass fazi renderovanja. Vrednost od 0 zna?i da ?e rezolucija prora?unate svetlosti biti ekvivalentna sa rezolucijom slike, vrednost  od -1 zna?i da ?e biti duplo manja od rezolucije slike a vrednost od 1 duplo ve?a itd.



Scale – Pove?ava efekat materijala u odnosu na veli?inu objekta. Ako je objekat realisti?nih dimenzija ovo treba da stoji na 1. Ako je objekat 10 puta manji Scale treba da je 10 itd.



IOR – Index refrakcije materijala. Ve?ina materijala koji su velikim delom voda poput ko‍e imaju IOR oko 1.3. IOR vrednosti svakog materijala mo‍ete prona?i na internetu.

* * *

Overall color – Generalna boja materijala, deluje kao filter preko ostalih parametra koji uti?u na boju.

Diffuse color – Boja difuzne komponente materijala.

Diffuse amount – Koli?ina difuzne komponente materijala. Odre?uje prelaz izme?u sub surface scattering i difune komponente. Kada je diffuse amount na 0.0 materijal nema difuznu komponentu. Kada je 1.0, materijal ima samo difuznu komponentu i ne sadr‍i sub surface scattering. Slu‍i za simuliranje praڑine i sli?nog na povrڑini materijala.

Sub surface color – Boja sub surface komponente materijala.

Scatter color – Boja unutraڑnjeg rasipanja svetlosti materijala. Svetlije boje ?ine materijal da deluje translucentnije. Tamnije vrednosti daju rezultate koji izgledaju difuznije.



Scatter radius –  Kontroliڑe koli?inu svetlosti koju rasipa materijal. Manje vrednosti ograni?avaju koli?inu svetla koja prolazi u materijal, viڑe vrednosti ?ine materijal translucentnijim.



Phase function – Uti?e na ugao pod kojim se svetlost razbija. Vrednost 0.0 zna?i da se svetlo jednako rasipa u svim pravcima. Pozitivne vrednosti te‍e ka rasipanju u napred a negativne vrednosti u nazad u odnosu na ugao pod kojim pada svetlost.



* * *

Specular color – Odre?uje boje spekularne komponente materijala.

Specular amount – Odre?uje koli?inu spekularnosti materijala.

Specular glossiness – Odre?uje sjajnost materijala (Oblik spekularnog odsjaja materijala). Visoke vrednosti daju jako oڑtri sjaj a niske vrednosti veoma blag sjaj.

Specular subdivs – Odre?uje kvalitet spekularne komponente pri renderovanju. Viڑe semplova daju bolje rezultate ali se sporije renderuju, dok manje semplova se brzo renderuje ali sadr‍e ڑum.

Specular reflections – Omogu?uje reflekcije sa povrڑine materijala. Kada je ova opcija isklju?ena kalkuliڑu se samo odsjaji od izvora svetlosti.

Specular trace depth – Broj odbitaka svetlosti u kalkulaciji reflekcije materijala.

* * *

Single scatter – Kontroliڑe kako se single scatter komponenta kalkuliڑe:

None – Materijal ne sadr‍i single scattering komponentu.

Simple – Single scattering komponenta se aproksimira u odnosu na svetlost koja dodiruje povrڑinu materijala. Korisna opcija za materijale koji nisu totalno prozirni poput ko‍e.

Raytraced (solid) – Single scattering komponenta se precizno kalkuliڑe unutar modela, ali se refraktivni zraci ne kalkuliڑu. Korisno za providne materijale koji su u isto vreme i neprozirni poput mleka.

Raytraced (refractive) – Sli?no Raztraced (Solid) opciji samo ڑto se u potpunosti kalkuliڑu i refraktivni zraci. Za najprozirnije materijale poput vode.



* * *

Single scatter subdivs – Broj semplova koji odre?uje kvalitet single scatter komponente kada se koriste raytraced opcije (solid) i (Refractive).

Refraction depth – Odre?uje dubinu refraktivnih zraka pri korڑ?enju raytraced (refractive) opcije.

Front lighting – Omogu?uje multiple scattering opcije za svetlost koja pada na povrڑinu koja je okrenuta ka kameri.

Back lighting &#8211; Omogu?uje multiple scattering opcije za svetlost koja pada na povrڑinu koja je okrenuta od kamere. Za relativno ne prozirne objekte isklju?iti ovu opciju ?e ubrzati rendering bez velike razlike u izgledu.

Scatter GI – kontroliڑe da li ?e kalkulacija sub surface scattering ura?unati i Globalnu Iluminaciju (GI) tj. da li ?e ura?unati odbijene zrake koji dolaze u dodir sa materijalom. Ova opcija dosta usporava rendering ali daje realnije rezltate.

Prepass blur – Kontroliڑe da li da materijal upotrebi pojednostavljenu verziju multiple scattering-a kada je prepass rate prenizak da bi bio adekvatno aproksimiran. Vrednost od 0.0 ?e primorati materijal da uvek koristi rezolucije svetlosne mape (prepass rate-a) ali kada se kamera odalji mo‍e dovesti do greڑaka. Viڑe vrednosti kontroliڑu minimalni broj ’semplova’ potrebnih za aproksimiranje multiple scatteringa.

* * *

**PODEٹAVANJA**

Zbog veoma opڑirnih podeڑavanja potrebno je gomilu eksperimentisanja i (kako bi se naڑe komڑije sa zapada izrazile) trial and error-a da bi dobili realisti?ne rezultate.  Ovaj materijal se ne bazira samo na difuznu i spekularnu kompentu kao ve?ina drugih ve? i viڑeslojnu sub surface scattering komponentu koja nam daje velike opcije ali i velike poteڑko?e. Ipak kada provedete sate i dane podeڑavaju?i materijal, a zatim kona?no postignete ‍eljeni rezultat, poseban je to ose?aj.

Podeli?u sa vama podeڑavanja za materijal ljudske ko‍e koji je meni oduzeo mnogo vremena ali me i nagradio sa fenomenalnim rezultatima i znanjem.



Ipak, ne mogu?e je postaviti standard za podeڑavanja ovog materijala jer uvek postoji neڑto ڑto mo‍e drug?ije, neڑto ڑto odgovara viڑe vaڑim potrebama, pogotovo kad je u pitanju ljudska ko‍a, jer svi smo druga?iji.

Ova podeڑavanja koja sam podelio sa vama u praksi izgledaju upravo ovako:

