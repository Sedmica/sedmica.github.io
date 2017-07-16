---
layout: page
title: ٹta je Equalizer
published: true
author: Branislav
comments: true
date: 2014-10-24 09:10:11
tags:
    - Equalizer
    - Osnovne komponente
categories:
    - audio
permalink: blog/:title
image:
    feature: boss-ge-21-graphic-equalizer-154344.jpg
---
?ao svima! Dobrodoڑli na Sedmicu! Sa vama je Branislav Vajagi?. U ovom tutorialu ?emo se baviti jednom od osnovnih komponenata muzi?ke produkcije, a to je equalizer. On je nama jako bitna komponenta jer omogu?ava poja?avanje i utiڑavanje ta?no odre?enog dela frekventnog spektra. Koji ?e deo poja?ati ili utiڑati zavisi od toga koje mu mi parametre zadamo. Naravno, ovo je samo povrڑno opisan Equalizer i da bi smo ga pravilno koristili potrebno je da ga poznajemo malo detaljnije i malo bolje. Poڑto je ovaj tutorial deo serije, predla‍em vam da prvo pogledate prethodne tutoriale iz ove serije.

1. [ٹta je Kompresor][1]
  
**2.** **ٹta je Equalizer**
  
3. [ٹta je Reverb][2]
  
4. [ٹta je Delay][3]
  
5. [ٹta su oscilatori (Generatori zvuka)][4]

### Osnovni rad Equalizer-a

Zvu?ne frekvencije spadaju u grupu longitudinalnih talasa i ?ovekovo uvo ?uje spektar od 20-20.000Hz. Kao ڑto smo rekli equalizer nam poma‍i da utiڑamo ili poja?amo odre?eni deo tog spektra. Prvi Equalizer-i su bili poprili?no jednostavni i najprostiji equalizer mo‍e da ima samo jedan potenciometar. 

![][5]

On funkcioniڑe na slede?i na?in. Ovakav equalizer ima ta?no odre?enu frekvenciju na koju je podeڑen (na Slici 1 je to od 200-500Hz) i koja se ne mo‍e menjati. Jedini potenciometar na ovom equalizer-u jeste **Gain**, a sa njime poja?avamo ili utiڑavamo zadate frekvencije i njegova jedinica je dB. Tekstualnim objaڑnjavanjem stvari se mogu poprili?no zakomplikovati i zbog toga ?emo rad equalizer-a objasniti kroz jedan jednostavan primer.
  
Uze?emo najjednostavniji tip equalizer-a (sa Slike 1) i Gain potenciometar ?emo staviti na +3dB. Ovo zna?i da ?e zvuk koji je uڑao u equalizer, na njegovom izlazu piti poja?an za 3dB u opsegu od 200-500Hz.

![][6]

Kao ڑto mo‍ete da primetite, zvuk koji izlazi iz equalizer-a bi?e poja?an za 3dB u rasponu od 200-500Hz. Me?utim, ovakav tip equalizer-a se skoro uopڑte ne koristi jer je jako ograni?en jer nemamo mogu?nost da biramo deo spektra koji ?emo poja?ati ili utiڑati i mo‍emo da napravimo samo jedan „trbuh. Zbog toga ?emo pre?i na pri?u o modernim equalizer-ima koji mogu da vrڑe modulaciju u velikom broju „okru‍enja“ zvu?nog spektra. Ovo vam mo‍da trenutno ne zvu?i najjasnije ali ?e se to ubrzo promeniti.

### Rad i koriڑ?enje VST Equalizer-a

Danaڑnji, VST Equalizer-i su malo komplikovaniji od primera koji smo gore naveli. Equalizer-i danas u 99% slu?ajeva imaju viڑe od jednog potenciometra i uglavnom su Multy Band ڑto zna?i da mogu da rade viڑe ispovremenih modulaciju u razli?itim delovima zvu?nog spektra. Rad ovih equalizer-a ?emo najbolje objasniti kroz primer.
  
Kao ڑto smo rekli. Na equalizeru ?esto imamo mogu?nost da biramo _Napadnu Frekvenciju_, _ٹirinu_ i _Koli?inu_. To na naڑem modelu equalizera sa Slike 1 izgleda ovako:

![][7] 

Ovde mo‍emo da primetimo da **FREQ** potenciometar ide od 20Hz do 20kHz i Gain je ostao ne promenjen kao na Slici 1. Ovde zanimljiva stvar je potenciometar **RANGE** koji se ?esto naziva i **Q Knob**. Sa njime odre?ujemo ڑirinu trbuha koji se pojavljuje na Slici 2 i zbog toga on nema jedinicu. Kada je Range potenciometar na najmanjoj vrednosti, trbuh ?e biti ڑpicast, a kad je na najve?oj vrednosti, trbuh ?e biti jako ڑitok. Sada kad bi sve sumirali u jednu re?enicu to bi izgledalo ovako: Sa FREQ potenciometrom biramo napadnu frekvenciju, sa GAIN potenciometrom biramo da li ?emo poja?ati ili utiڑati napadnu frekvenciju i sa RANGE potenciometrom odre?ujemo koliku ?emo oblast oko napadne frekvencije obuhvatiti.
  
Pogledajmo par primera:
  
FREQ=625Hz, GAIN=+12dB, RANGE=min

![][8]

Freq=625Hz, Gain=+12dB, RANGE=max

![][8]

Kao ڑto mo‍emo da primetimo. Kada RANGE ima malu vrednost, mala je i oblast oko napadne frekvencije, a kada ima veliku vrednost, oblast oko napadne frekvencije je velika. Ova 3 potenciometra su klju?na za rad equalizer-a i 99% equalizer ?e imati ova 3 potenciometra. Jedina razlika ?e biti u izgledu i tome koliko grupa ima u samom equalizeru.
  
Equalizer sa Slike 3 spada u grupu equalizer-a sa jednim kanalom i zove se **1 Band EQ**. Sigurno ste ?uli za Multiband equalizere. Oni imaju viڑe istih kanala koji im omogu?avaju da sa ulaznim zvukom rade mnogo viڑe od jedne modulacije. Nemojte da vas ovo zbuni. Princip rada je apsolutno isti za svaki od kanala i kada savladate rad sa 1 Band EQ-om savladali ste rad i sa Multiband EQ-om. 4 Band EQ bi izgledao ovako:

![][9]

### Rezime

Equalizer je komponenta koja slu‍i za promenu glasno?e ta?no odre?enih frekvencija u zvu?nom spektru. Jednostavni equalizer-i imaju samo jedan potenciometar ili kliza? kojim odre?ujemo glasnocu napadne frekvencije. Malo kompleksniji equalizer-i imaju na sebi 3 potenciometra ili kliza?a od kojih jednim menjamo Frekvenciju, jednim Gglasno?u tj. GAIN i jednim odre?ujemo ڑirinu oblasti oko napadne frekvencije i taj potenciometar zovemo RANGE ili Q Knob. Tako?e smo pri?ali o tome da equalizer mo‍e imati viڑe kanala tj. grupa koje se nazivaju Band-ovi. Za njih smo rekli da svi rade potpuno istu stvar ali su grupisani kako bi nam dali ve?u kontrolu nad modulacijom zvuka. Ovde je dobro napomenuti da se u muzi?koj i audio produkciji equalizer koristi za Mastering i naj?eڑ?e se koristi u kombinaciji sa kompresorom. Tako?e, sa equalizerom mogu da se postignu neki jako zanimljivi efekti ali ?emo o tome viڑe pri?ati po zavrڑetku ove serije, a do tad: U?ite, ve‍bajte, zabavite se i isprobavajte nove stvari!

 [1]: {{site.baseurl}}/blog/sta-je-kompresor
 [2]: {{site.baseurl}}/blog/sta-je-reverb
 [3]: {{site.baseurl}}/blog/sta-je-delay
 [4]: {{site.baseurl}}/blog/sta-su-oscilatori-generatori-zvuka
 [5]: {{site.baseurl}}/images/post/uploads/2014/04/Audio_Efekti_-_Eqializer_slika-1.png
 [6]: {{site.baseurl}}/images/post/uploads/2014/04/Audio_Efekti_-_Eqializer_slika-2.png
 [7]: {{site.baseurl}}/images/post/uploads/2014/04/Audio_Efekti_-_Eqializer_slika-3.png
 [8]: {{site.baseurl}}/images/post/uploads/2014/04/Audio_Efekti_-_Eqializer_slika-4.png
 [9]: {{site.baseurl}}/images/post/uploads/2014/04/Audio_Efekti_-_Eqializer_slika-6.png