---
layout: page
title: Zaڑto Reason ne puڑta zvuk
published: true
author: Branislav
comments: true
date: 2013-03-22 12:03:22
tags:
    - Muzi?ka Kartica
    - Reason
    - Zvuk
categories:
    - audio
permalink: blog/:title
image:
    feature: 14.jpg
---
?ao svima! Dobrodoڑli na Sedmicu! Sa vama je Branislav Vajagi?. Poڑto je stiglo jako puno istih pitanja vezanih za temu iz naslova, odlu?io sam da objasnim par stvari:
  
-Zaڑto ne ?ujete zvuk na zvu?nicima kad ulju?ite Reason
  
-Zaڑto zvuk kasni
  
-ٹta je to muzi?ka kartica

* * *

Pa da po?nemo!
  
Postoji viڑe razloga zaڑto nemate zvuk na vaڑim zvu?nicima kada uklju?ite Reason.
  
**** ****

**1. Razlog**

Kada otvorite novi Reason dokument (ili bilo koji ve? postoje?i) na po?etku Programskog dela morate imati 3 neophodne komponente, a to su: **Hardware Interface**, **Mastering** i **Mixer 14:2**
  
Viڑe o ovoj temi mo‍ete pogledati u tutorijalu: Upoznajte Propellerhead Reason
  
****[][1]****

&nbsp;

**2. Razlog**

##### “Ju?e je sve radilo savrڑeno. Danas sam otvorio fajl i zvuk se ne ?uje na zvu?nicima!”

Ako imate ovaj problem, prvo ڑto treba da uradite jeste da pustite projekat i vidite da li se pomeraju LED indikatori na izlaznom delu Hardware Interface-a.
  
[][2]

Ukoliko se LED indikatori pomeraju, to znaki da Reason puڑta zvuk ali on ne dolazi do vaڑih zvu?nika, zbog ?ega su krivi drajveri audio kartice. To proveravate i menjate na slede?i na?im:
  
Na liniji menija odaberete _Edit/Preferences_
  
[][3]

U padaju?em meniju _Page_ odaberete _Audio_

[][4]

Unutar tog novog prozora nalazi se padaju?i meni _Audio Card Driver_ i unutar njega treba da odaberete audio dajvere koje koristi vaڑ ra?unar (u mom sli?aju to je _ASIO M-Audio Delta_). Kada izaberete ‍eljene dajvere pored padaju?eg menija treba da vam se pojavi zeleni znak “Nike” tj. potvr?eno.

[][5]
  
**3. Razlog**
  
Nadovezujemo se na prthodnu stavku. Odabrali ste drajvere koje koristi vaڑ ra?unar i pojavio vam se crveni iks (X)  ali vi ste sigurni da su to drajveri koje treba da obele‍ite jer ste ih koristili ranije (joڑ pre nestanka zvuka). U tom slu?aju treba da probate da reinstalirate drajvere pa da probate ponovo, a ako ni to ne uspe onda probajte da reinstalirate ceo Reason.
  
Naj?eڑ?e je problem 2. razlog jer ra?unar zna nekad da se “pogubi” i zaboravi ڑta treba da radi.

3. razlog se retko deڑava ali se deڑava (znam iz iskustva)
  
Ako vam niڑta od ovog nije pomoglo ostavite komentar na kraju tutorijala, a ja ?u pokuڑati da vam pomognem.

##### “Kada sviram neki sintisajzer unutar Reason-a, zvuk kasni na zvu?nicima.”

Sada dolazimo do Muzi?ke Kartice [][6]

Nju mo‍emo porediti sa grafi?kom karticom. ٹta se deڑava kada ho?ete da igrate neku novu igricu na svom ra?unaru, a u istom imate integrisanu grafi?ku karticu? Svima je dobro poznato da ?e to biti nemogu?a misija jer ?e slika previڑe seckati. To se deڑava jer procesor sam ne mo‍e da obradi toliku koli?inu podataka.
  
Ista stvar va‍i i za muzi?ku karticu. Ona rastere?uje procesor jer ima svoj procesor koji je specijalicovan da prera?uje zvuk. ٹto zna?i da sa muzi?kom karticom ne dobijate samo br‍i rad vaڑih muzi?kih programa nego i kvalitetniji zvuk na izlazu i vaڑim monitorima.
  
Muzi?ka kartica je uvek dobra investicija za one koji se bave pravljenjem muzike i njena cena se kre?e od 100e do par 1000e. Uglavnom sve zavisi od proizvo?a?a i od toga kolko ulaznih/izlaznih kanala imate na njoj.
  
Ove kartice od par stotina evra se koriste u ku?nim studima dok se ove skuplje koriste na mestima gde je neophodno da imate mogu?nost da snimate ceo bend i sli?no.
  
Ovim zavrڑavamo danaڑnji tutorijal. Nadam se da ste dobili odgovore na neka od pitanja i da su vam sada neke stvari malo jasnije. Ako imate joڑ nekih dodatnih pitanja ostavite ih na kraju tutorijala :)
  
U?ite, ve‍bajte, zabavite se i isprobavajte nove stvari!

 [1]: {{site.baseurl}}/images/post/uploads/2013/03/26.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/03/31.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/03/41.jpg
 [4]: {{site.baseurl}}/images/post/uploads/2013/03/51.jpg
 [5]: {{site.baseurl}}/images/post/uploads/2013/03/61.jpg
 [6]: {{site.baseurl}}/images/post/uploads/2013/03/71.jpg