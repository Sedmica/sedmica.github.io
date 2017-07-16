---
layout: page
title: 'UVW Unwrap - Peel mapiranje - Autodesk 3ds Max'
published: true
author: Marko
comments: true
date: 2013-02-13 12:02:33
tags: [ ]
categories:
    - modeling
permalink: blog/:title
---
U ovom tutorialu ?e te nau?iti kako da koristite peel mapping funkciju **UVW Unwrap** modifier-a u 3ds Max-u. Unwrap-ovanje je klju?ni korak u procesu izrade modela bez koga ne mo‍ete puno posti?i ڑto se ti?e tekstura. Peel unwraping je veoma korisna funkcija za lako unwrapovanje raznih modela a u ovom tutorialu ?emo ga primeniti na ljudskoj glavi.

Za po?etak, klju?no je da je topologija modela koji unwrapujemo ?ista i primenjiva da bismo mogli da definiڑemo **_seam_**-ove (preseke na mre‍i modela na osnovu kojih unwraping odmotava mre‍u).

![][1]

Obratite pa‍nju na plave linije na mre‍i u slede?oj slici. Ovo su definisani seam-ovi pomo?u UVW Unwrap modifier-a. Ovo mo‍ete odrediti na nekoliko na?ina: Tako ڑto prvo selektujete edge-ove koje ‍elite da pretvorite u seam-ove a zatim kliknete na opciju Convert Edge Selection to Seam u Peel tabu. Drugi na?in je da uklju?ite opciju Edit Seams i da onda selektujete direktno seam-ove koje ‍elite da ozna?ite. Kod ljudske glave se uglavnom prave seamovi na centru pole?ine glave pa do ?ela i eventualno od spreda du‍ vrata do brade. Uglavnom se seam-ovi seku na ڑto neupadljivijim mestima i generalno treba da se ڑto manje koriste.

![][2]

Nakon ڑto ste odredili seam-ove, pritisnu?ete Open Edit UV opciju i otvori?e se novi prozor za UVW editovanje.

![][3]

Selektova?ete sve vertekse i kliknuti na opciju Peel Mode unutar UVW Unwrap prozora i on ?e raڑiriti model na 2D povrڑinu unutar prozora.

![][4]

Uglavnom se na model stavi neka teksturalni patern poput Checker mape da bismo videli kako se raspodeljuje tekstura po modelu. Napravite novi materijal, u diffuse stavite Checker mapu, uklju?ite Show Shaded Material in Viewport i na U i V tiling u opcijama mape podesite na jedno 50, 50 ili 100, 100 za sitnije detalje.

![][5]

Peel Mode u UVW Unwrap modifier-u vam omogu?uje da povla?enjem jednog verteksa teglite susedne vertekse tako da se velike grupe verteksa mogu sa efikasnoڑ?u editovati da se dobiju najlepڑi rezultati.

![][6]

Cilj je da modifikujete mre‍u tako da se dobije ڑto ravnomernija podela checker mape u viewport-u.

![][7]

Kada vaڑ model izgleda otprilike ovako model je unwrapovan i spreman za izradu tekstura:

![][8]

 [1]: {{site.baseurl}}/images/post/uploads/2013/02/01-1.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/02/02-1.jpg
 [3]: {{site.baseurl}}/images/post/uploads/2013/02/03.png
 [4]: {{site.baseurl}}/images/post/uploads/2013/02/04.png
 [5]: {{site.baseurl}}/images/post/uploads/2013/02/05.png
 [6]: {{site.baseurl}}/images/post/uploads/2013/02/06.png
 [7]: {{site.baseurl}}/images/post/uploads/2013/02/07-1.jpg
 [8]: {{site.baseurl}}/images/post/uploads/2013/02/08-1.jpg