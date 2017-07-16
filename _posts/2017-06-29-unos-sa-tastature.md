---
layout: page
title: 'Unos Sa Tastature - Python'
published: true
author: Nikola
comments: true
date: 2012-11-15 12:11:29
tags:
    - Python
categories:
    - programiranje
permalink: blog/:title
image:
    feature: python.jpg
---
Do sad smo direktno u program unosili neke vrednosti promenljivama. Poڑto nam programi nisu bili previڑe kompleksni nije bilo teڑko da promenimo to. Ali ako vam u ve?em programu treba da u razli?ito vreme unesete razli?ite vrednosti ne?ete svaki put to menjati u kodu programa (niti ?ete uvek mo?i). Nekada ?e vam trebati da neڑto unesete preko tastature. To se u Python-u mo‍e uraditi na dva na?ina, pomo?u dve, malo razli?ite funkcije:

  * Funkcija **raw_input**: Sve uneseno se gleda kao string. Ne razlikuje tipove podataka niti je bitno da po?nete string sa navodnicima. Koristi se jedino za unos stringova (mo‍e i za druge stvari ali se onda komplikuje poڑto morate da pretvarate dobijeni string u taj drugi oblik). Naravno, uneseni string je porvatna vrednost funkcije.
  * Funkcija **input**: Razaznaje koji je tip unesenog podatka, da li je ceo/realan broj, lista, tupl, re?nik itd. Naravno ako unosite kompleksnije tipove morate to raditi kao i da ga piڑete u samom kodu ina?e ?e izbaciti greڑku. Ako preko ove funkcije ho?ete da unesete string potrebno je i navodnike da stavite!!! Takodje i ovde je povratna vrednost funkcije to ڑto je uneseno.

U obe funkcije parametar je isti: string koji ?e se ispisati da bi nagovestio korisniku ڑta treba da unese. Taj parametar nije obavezan al korisno je navesti ga ?isto radi lakڑeg razumevanja ڑta kad treba da se unese. Na kraju tog stringa, pre nego ڑto zatvorite navodnike uvek stavite jedan razmak, ?isto zbog preglednosti.
  
[code]
  
>>> film = raw_input(&#8216;koji je vas omiljeni film? &#8216;)
  
koji je vas omiljeni film? lion king
  
>>> film
  
&#8216;lion king&#8217;
  
>>> def voli_sarmu():
	  
ime = raw_input(&#8216;unesite vase ime: &#8216;)
	  
print ime + &#8216; voli sarmu!&#8217;

>>> voli_sarmu()
  
unesite vase ime: Nikola
  
Nikola voli sarmu!

>>> lista1 = input(&#8216;unesite listu brojeva: &#8216;)
  
unesite listu brojeva: [1, 2, 3, 4,5]
  
>>> lista2 = raw_input(&#8216;unesite listu brojeva: &#8216;)
  
unesite listu brojeva: [1, 2, 3, 4, 5]
  
>>> lista1
  
[1, 2, 3, 4, 5]
  
>>> lista2
  
&#8216;[1, 2, 3, 4, 5]&#8217;
  
[/code]
  
Kao ڑto vidite lista1 je zaista lista a lista2 je string.

* * *Od ovog tutoriala ?u po?eti da vam ostavljam po koji zada?i? za ve‍bu poڑto mislim da ?ete tako lakڑe shvatiti a i zapamtiti sve ڑto ste do sad nau?ili. Pa da po?nemo: 

  1. Napisati program koji u?itava 5 imena u listu koja je u po?etku prazna (jedno po jedno) i ispisuje tu listu kao celu. Ako se ne se?ate dodavanje na listu se vrڑi **lista.append(nova_vrednost)** .
  2. Napisati program koji u?itava listu brojeva (odjednom) proizvoljne du‍ine i onda ispiڑe jedan po jedan.

Ako imate nekih problema oko zada?i?a slobodno postavite pitanje u komentaru.

* * *To bi bilo to za danas. Joڑ u slede?em tutorialu ?emo videti joڑ jednu, nekad jako zna?ajnu, osobinu funkcija i onda ?emo malo napraviti pauzu sa njima.  

* * *Ako vam se svidelo slobodno lajkujte, komentariڑite i prosledite ovaj sajt svima koji su ‍eljni znanja. Svaka kritika je dobrodoڑla takodje.