---
layout: page
title: 'Wodry - zanimljiv CSS i jQuery tekst efekat'
published: true
author: Jovan
comments: true
date: 2014-11-18 10:11:03
tags:
    - CSS
    - Html
    - jQuery
categories:
    - web
permalink: blog/:title
image:
    feature: wodry-cover.jpg
---
Danaڑnji tutorijal ?e biti posve?en jednoj zanimljivoj jQuery funkcionalnosti, radi se o Wodry plug-in-u. Plug-in je kreiran da vrڑi izmenu odre?enog broja re?i na mestu jedne re?i u re?enici. Ovaj plug-in bismo mogli nazvati i „igra re?i“ a zaڑto baڑ tako vide?emo kroz primer koji ?emo kreirati.
  
Kreira?emo jedan HTML dokument u kome ?e se nalaziti ?etiri pasusa i svaki pasus ?e imati jednu funkciju.


  See the Pen Wodry &#8211; zanimljiv CSS i jQuery tekst efekat 1 by Sedmica (@sedmica) on CodePen.




Vidimo da se u  elementu nalazi  element sa tri re?i odvojedene vertikalnim barom (|). Takvim navo?enjem re?i omogu?avamo da Wordy zna koje re?i treba da se smenjuju tokom rada. Prva napisana re? se nalazi u po?etnom polo‍aju. 
  
Pored datih klasa postoje joڑ ?etiri klase koje nam slu‍e kao selektori u funkcijama ali njih ne navodimo u  elementu iz razloga ڑto ne poseduju nikakva svojstva.


  See the Pen Wodry â€“ zanimljiv CSS i jQuery tekst efekat 2 by Sedmica (@sedmica) on CodePen.dark


jQuery i Wodry plug-in pozivamo na slede?i na?in.


  See the Pen Wodry â€“ zanimljiv CSS i jQuery tekst efekat 3 by Sedmica (@sedmica) on CodePen.dark


U ovom primeru ?emo referencirati i CSS dokument koji ide uz Wodry.


  See the Pen Wodry â€“ zanimljiv CSS i jQuery tekst efekat 4 by Sedmica (@sedmica) on CodePen.dark


Neophodno je Wodry da skinemo i dodamo ga u root (glavni) folder naڑeg projekta, mo‍emo da ga dodamo na bilo koju lokaciju ali bismo onda morali da promenimo putanju Wodry plugin-a.

Mo‍emo ga preuzeti na ovoj adresi

Sada piڑemo ?etiri funkcije za ?etiri pasusa.


  See the Pen Wodry â€“ zanimljiv CSS i jQuery tekst efekat 5 by Sedmica (@sedmica) on CodePen.dark


Kao ڑto smo na po?etku rekli postoje ?etiri klase koje koristimo da bismo pluginu mogli da ka‍emo &#8222;hej, uzmi element da klasom wodry1 i izvrڑi to i to..&#8220;. Klase koje smo koristili za ovaj primer su _wodry1_, _wodry2_, _wodry3_, _wodry4_. 

Postoji nekoliko svojstava koja mo‍emo uklju?iti u funkciju a to su:
  
**animation**: &#8211; definiڑemo tip animacije (default: rotateY), a tipovi su:
      
_rotateY_ &#8211; rotiranje oko Y ose,
      
_rotateX_ &#8211; rotiranje oko X ose,
      
_clockwise_ &#8211; rotiranje kao kazaljka na satu,
      
_rotateAll, scaleX, scaleY, scaleAll, anticlockwise_.
  
**delay**: &#8211; pauza izme?u iteracija _(default: 2000)_,
  
**animationDuration**: trajanje animacije _(default: 500)_,
  
**shift**: specificiranje X, Y i Z vrednost nakon promene _(default: {X:0, Y:0, Z:0})_,
  
**callback**: mogu?nost da se doda funkcija koja bi se vrڑila nakon svake iteracije,
  
**separator**: definisanje znaka koji ?e ozna?avati re?i koje treba da se smenjuju _(default: ’|’)_.

krajnji rezultat izgleda ovako:


  See the Pen Wodry â€“ zanimljiv CSS i jQuery tekst efekat 5 by Sedmica (@sedmica) on CodePen.dark


Wodry plug-in bi mogao lepo da se iskoristi za kreiranje intro stranice nekog sajta, da se uradi animacija za dobrodoڑlicu ili bi mogao da nadje primenu za kreiranje tajmera koji ?e da odbrojava vreme unazad tako ڑto bi u < p > element dodali slede?i tekst 9|8|7|6|5|4|3|2|1|0 i u funkciji bi trebalo da se podese slede?i parametri: delay: 0, animationDuration: 1000, tako da bi se smena vrڑila bez pauze a animirani prelaz bi trajao 1 sekundu. Predla‍em da se pozabavite kreiranjem tajmera i tako utvrdite znanje koje ste stekli ?itaju?i ovaj tutorijal.

Ne zaboravite da se prijavite na naڑu mailing listu. ?itamo se! :)