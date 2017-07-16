---
layout: page
title: ٹta je Kompresor
published: true
author: Branislav
comments: true
date: 2014-10-10 09:10:58
tags:
    - Kompresor
    - Osnovne komponente
categories:
    - audio
permalink: blog/:title
image:
    feature: kompresor.jpg
---
?ao svima! Dobrodoڑli na Sedmicu! Sa vama je Branislav Vajagi?. Poڑto ?emo se u budu?im tutorialima ozbiljnije baviti obradom zvuka potrebno je da znamo kako mo‍emo da dobijemo razli?ite rezultate tj. efekte. Ovim tutorialom ?emo zapo?eti seriju u kojoj ?emo pri?ati o najkoriڑ?enijim komponentama, ڑta one rade i zaڑto ‍elimo da ih koristimo. Prvo ?emo se baviti Compressor-om za koji mo‍emo re?i da je najkoriڑ?enija komponenta za obradu zvuka, a sad ?emo saznati zaڑto.

**1. ٹta je Kompresor**
  
2. [ٹta je Ekualizer][1]
  
3. [ٹta je Reverb][2]
  
4. [ٹta je Delay][3]
  
5. [ٹta su generatori zvuka (oscilatori)][4]

Verovatno svi znaju ڑta je Audio Compressor ali jako mali broj po?etnika zna kako funkcioniڑe i zaڑto ga koristimo. Na najjednostavniji na?in, compressor slu‍i za uspostavljanje balansa u zvuku i on balansira izme?u najglasnijih i najtiڑih delova u audio zapisu. ٹto zna?i, mo‍emo zaklju?iti da kompresor utiڑava glasne ili poja?ava tihe delove audio zapisa na svom ulazu.

### Kako radi kompresor i zaڑto ga koristimo

Kompresor je komponenta koja radi jednostavnu stvar ali ispravan rad sa njime i potpuno razumevanje je ve? potpuno druga pri?a. Mi ne?emo previڑe ulaziti u detalje ve? ?emo se potruditi da ovim tutorialom obuhvatimo ono ڑto treba da znate kako bi ste ispravno koristili kompresor.
  
Kao i svaka druga komponenta, kompresor ima ulaz i izlaz. Svaki kompresor ima najmanje 4 potenciometra ili kliza?a, a to su **Threshold**, **Ratio**, **Attack** i **Release** (ne ra?unaju?i potenciometre za ja?inu ulaza i izlaza). Pre nego ڑto po?nemo sa objaڑnjavanjem ovih „opcija“ bitno je napomenuti da postoje dva tipa kompresije: Gornja (Downward) kompresija i Donja (Upward) kompresija.

[][5]
  
_A – Glasno?a izlaznog signala (y-osa)
  
B – Glasno?a ulaznog signala (x-osa)
  
C – Ovde C1 predstavlja Gain Reduction, a C2 Gain Increase_

Gornja kopresija UTIٹAVA signal iznad Threshold-a, dok donja POJA?AVA signal ispod zadatog Threshold-a. Ova dva dijagrama ?e vam ubrzo postati mnogo jasnija.

### Threshold (Treڑhold)

Threshold-om zadajemo vrednost u dB (decibelima) na ulaznoj „x-osi“ od koje kompresor po?inje da deluje. Recimo ako Threshold stavimo na -25dB, to zna?i da ?e se kompresor uklju?iti kada ja?ina ulaznog signala pre?e tu vrednost.
  
_dB se u muzi?koj produkciji koristi kao jedinica za ja?inu zvuka tj. signala. On je logaritamska funkcija i to je razlog zbog ?ega se njegov dijapazon kre?e od -? do +12dB_

### **Ratio** (Rejڑio)

Ratio nema jedinicu jer on predstavlja razmeru, tj. proporciju. Dijapazon Ratio-a se kre?e od 1:1 do ?:1. Kada Ration ima vrednost 1:1, to zna?i da nema kompresije, a kada ima vrednost ?:1, to zna?i da se kompresor ponaڑa kao limiter. Ovo ?emo pojasniti kroz primer. Ako Ratio stavino na 4:1, to zna?i da ulazni signal koji je 4dB iznad zadatog Threshold-a, bi?e spuڑten na 1dB iznad Threshold-a.

[][6]
  
_A – Glasno?a izlaznog signala (y-osa)
  
B – Glasno?a ulaznog signala (x-osa)_

### Attack (Atek)

Attack predstavlja „napad“ i jedinica mu je **ms** (milisekund). Kao ڑto verovatno znate, u realnom svetu ne postoji idealna stvar. Ovo zna?i da je kompresoru potrebno neko vreme da prepozna signal koji prelazi vrednost Threshold-a i da ga postavi na zadatu vrednost Ratio-a. Za ovo slu‍i Attack. Njime odre?ujemo vreme koje je potrebno kompresoru da sa trenutne vrednosti do?e na zadatu Threshold-om i Ratio-m
  
Rad Attack-a mo‍emo porediti sa Formulom 1 i nekim luksuznim kruzerom. Kome treba kra?e vreme da do?e od 0-60km/h? Odgovor je, Formuli 1 ali to nekad nije dobro stvar jer tako veliki potisak koji se deڑava pri velikom ubrzanju uti?e na voza?a i njegov organizam. Zbog toga se „porodi?na“ i gradska kola ne prave kao Formula 1 jer voza? i saputnici treba da u‍ivaju u vo‍nji bez cimanja i mu?nine. Ista pri?a je va‍i za Attack. Nekada nam je bitno da je on brz (kratak), a nekada nam je bitno da je spor (dug).

### Release (Rilis)

Release radi supretnu stvar od Attack-a. Njegova jedinica je isto ms sa time ڑto Release odre?uje vreme potrebno da se kompresor isklju?i i prestane da kompresuje. Ovde isto mo‍emo primeniti automobile ali ovog puta obratimo pa‍nju na ko?enje (naglo i postepeno ko?enje).

### Koji sve kompresori postoje

Svi kompresori rade istu stva na sli?an na?in. Prvi kompresori koji su napravljeni bili su Hardware (imali su unutar sebe kondenzatore, otpornike itd.) i nisu imali sve ove opcije koje imaju danaڑnji virtuelni kompresori. VST kompresori se razlikuju od proizvo?a?a do proizvo?a?a ali svi rade istu stvar i trebali bi da mo‍ete bez problema da locirate promene i potenciometre o kojima smo danas pri?ali. Po mom miڑljenju, kompresor koji dobijete uz [DAW][7], sasvim je dobar i reڑi?e vam ve?i deo problema koje imate. **Live**, program firme [Ableton][8], dolazi sa (po mom miڑljenju) kompresorom koji ima najbolji grafi?ki prikaz, [Propellerhead Reason][9] dobijate sa MClass Compressor-om, **AVID Pro Tools** sa njihovim odli?nim kompresorima itd. Svi nabrojani programi su vrhunski programi za muzi?ku produkciju ali kompresore mo‍ete na?i i u jednostavnijim programima kao ڑto su **Sound Forge**, **Audacity**, **Adobe Audition** itd.

### Kako ispravno koristiti Compressor

Za koriڑ?enje kompresora ne postoji ڑablon ve? granice unutar kojih morate biti kako ne bi ste pokvarili zvuk. Kada radite sa kompresorom potrebno je da sluڑate zvuk sve vreme dok menjate parametre, jer sitne promene ?esto puno toga menjaju. Na primer ni jedan vokal ne mo‍e bez kompresora jer kompresor poja?ava prisutnost vokala, smanjuje pikove (kao ڑto su ?oktanje, POP efekat itd.) i daje topliju boju glasu. Podeڑavanja zavise od zadatka do zadatka i jako nam je bitno da znamo ڑta ‍elimo da postignemo sa kompresorom. Imamo dve opcije, da postignemo balans ili da postignemo efekat. U klasi?noj muzici (Jazz, Blues&#8230;) kompresor se koristi za uspostavljanje balansa, da sve bude ?isto i prijatno za uڑi. Sa druge strane, kod dizajna zvuka stavljanjem kompresora u „nedozvoljeni“ deo (prekompresovanost) mo‍emo dobiti interesantne efekte kao ڑto su npr. kliktanje zvuka i Punch. Tako?e, kompresor se koristi u obradi vokala za radio emisije i posebno je izra‍en kod muڑkog glasa. Ako ste se ikad pitali kako glas radio voditelja zvu?i tako „masivno“, znaj te da je to zbog jako kompresije i malo Equalizer-a o kom ?emo pri?ati neڑto kasnije.

### Rezime

Kao ڑto mo‍ete da vidite kompresor za razumevanje baڑ i nije jednostavan. Osnovno poznavanje ڑta koji potenciometar radi i ڑta se desi sa zvukom kad neڑto pomerite, mo‍e napraviti od vas bolje producente i dizajnere jer tada imate „alat“ tj. znanje koje mo‍ete da upotrebide na datom problemu. Rad sa kompresorom ?ete nau?iti isprobavaju?i i sluڑalu?i promene. Ovim tutorialom smo se samo upoznali sa kompresorom i ko zavrڑetku ove serije tutoriala vide?emo i kako sve mo‍emo da ga koristimo u praksi, a do tad: **U?ite, ve‍bajte, zabavite se i isprobavajte nove stvari!**

 [1]: {{site.baseurl}}/blog/sta-je-equalizer
 [2]: {{site.baseurl}}/blog/sta-je-reverb
 [3]: {{site.baseurl}}/blog/sta-je-delay
 [4]: {{site.baseurl}}/blog/sta-su-oscilatori-generatori-zvuka
 [5]: {{site.baseurl}}/images/post/uploads/2014/04/21.png
 [6]: {{site.baseurl}}/images/post/uploads/2014/04/31.png
 [7]: {{site.baseurl}}/blog/programi-za-pravljenje-muzike
 [8]: {{site.baseurl}}/blog/upoznajte-ableton-live-8
 [9]: {{site.baseurl}}/blog/reason-upoznajte-reason-7