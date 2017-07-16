---
layout: page
title: >
    SQL – standardni jezik za rad sa bazama podataka – sami
    kreirajte tabelu
published: true
author: Maja
comments: true
date: 2013-12-31 08:12:31
tags:
    - Baza Podataka
    - Mysql
    - Tabela
categories:
    - web
permalink: blog/:title
image:
    feature: Untitled-11.jpg
---
Poslednji ?lanak za ovu godinu vezan za oblast web dizajna odnosi se na programski jezik namenjen radu sa bazama podataka a to je SQL (_Structured Query Language_). SQL omogu?ava korisnicima pristup podacima u sistemima za upravljanje relacionim bazama kao ڑto je na primer MySQL. Pored njega, najpoznatiji sistemi su i Access, Oracle. Pomo?u SQL-a korisniku je omogu?eno kreiranje podataka i njihova manipulacija. U ovom tutorijalu pogledajte objaڑnjenja nekoliko osnovnih SQL komandi  i primere koje smo naveli, kako bi ih razumeli. Radi se o komandama pomo?u kojih mo‍ete da manipuliڑete podacima u nekoj bazi podataka – liste registrovanih korisnika na nekoj stranici, lista u?enika u biblioteci, liste zaposlenih u preduze?u itd (primer koriڑ?enja baze MySQL mo‍ete pogledati u naڑem tekstu [kako da kreirate forum][1], kao i u ?lanku gde se govori o tome [Poslednji ?lanak za ovu godinu vezan za oblast web dizajna odnosi se na programski jezik namenjen radu sa bazama podataka a to je SQL (_Structured Query Language_). SQL omogu?ava korisnicima pristup podacima u sistemima za upravljanje relacionim bazama kao ڑto je na primer MySQL. Pored njega, najpoznatiji sistemi su i Access, Oracle. Pomo?u SQL-a korisniku je omogu?eno kreiranje podataka i njihova manipulacija. U ovom tutorijalu pogledajte objaڑnjenja nekoliko osnovnih SQL komandi  i primere koje smo naveli, kako bi ih razumeli. Radi se o komandama pomo?u kojih mo‍ete da manipuliڑete podacima u nekoj bazi podataka – liste registrovanih korisnika na nekoj stranici, lista u?enika u biblioteci, liste zaposlenih u preduze?u itd (primer koriڑ?enja baze MySQL mo‍ete pogledati u naڑem tekstu [kako da kreirate forum][1], kao i u ?lanku gde se govori o tome][2] ). Pojam relacione baze podataka se odnosi na to da su podaci u bazi na neki na?in povezani.


  U ?lanku na Sedmici gde je navedeno pet najboljih sajtova za u?enje web dizajna, mo‍ete videti da je najbolje da ve‍bate SQL uz w3schools sajt. Pored toga, mo‍ete mnogo nau?iti prate?i video tutorijale na Youtubu &#8211; moja preporuka su video tutorijali korisnika thenewboston.



  S obzirom da pri?amo o serverskom jeziku, treba?e vam neki server na localhost-u, a za to mo‍ete koristiti Xampp kao i ja :) Kada ga instalirate i otvorite, upalite MySQL I Apache. Onda u Vaڑem pretra‍iva?u idite na localhost/phpmyadmin/ 



  Idite na karticu Databases, i kreirajte novu bazu sa imenom testing. Pojavi?e Vam se ispod, me?u ostalim bazama, kliknite na nju, tako da iznad kartica vidite da piڑe : localhost > testing Sada treba kreirati novu tabelu. Tabela predstavlja tu bazu podataka odnosno mesto sa podacima. Kao i svaka tabela na svetu, ima redove i kolone. Redovi predstavljaju podatke, tj. svaki red je jedan zapis, a kolone se imenuju kako bi manipulisali sa njima. Napravi?emo tabelu imena tabela. Idite na karticu SQL i unesite:


`CREATE TABLE tabela(
id int,
korisnik varchar(30),
sifra varchar(20),
PRIMARY KEY(id)
)`

Sa desne strane vide?ete da je napravljena nova tabela sa nazivom _tabela_, a sve izgleda ovako:



&nbsp;

_ _


  Dakle koristili smo re? CREATE kako bi kreirali tabelu imena tabela. Unutar nje definiڑemo kolone koje se redom zovu: id, korisnik i sifra. Id kolona je redosled kojim se upisuju korisnici, (1.,2.,3.,&#8230;). Nakon imena kolona, piڑu se tipovi njihovih podataka. Za id treba da tip podataka bude integer, skra?eno int, odnosno brojevi 1,2,3&#8230;  On ima default veli?inu, tako da posle re?i int se ne piڑe niڑta vezano za maksimalnu veli?inu te promenljive.



  Za kolone korisnik i sifra – tip podataka je varchar, odnosno stringovi promenljive du‍ine. S obzirom da se radi o promenljivim du‍inama, u zagradi se navodi kolike maksimalne du‍ine ?e podatak da maksimalno bude. Mi smo naveli da za podatak korisnika maksimalna du‍ina upisa bude 30 karaktera, a za ڑifru da bude 20 karaktera. Primarni klju? jeste neڑto ڑto se definiڑe kako bi se jedinstveno identifikovao svaki zapis u tabeli, a u ovom slu?aju primarni klju? je kolona sa rednim brojevima odnosno kolona id. Primarni klju? mora da sadr‍i jedinstvene vrednosti i ne sme da bude nula. Svaka tabela bi trebala da ima primarni klju?, samo jedan,a naj?eڑ?e je to id.


Kliknite na tabelu _tabela_ koja Vam se pojavila sa desne strane. Treba da vidite ovo:




  Prikazane su tri kolone koje smo napravili, a pored re?i int piڑe broj 11. To nije obi?an broj 11 , ve? je to 11 bajta. S obzirom da ne mo‍e da bude nula ili prazno polje, vidimo da piڑe re? No kod kolone Null, dok kod ostalih piڑe Yes, odnosno da oni mogu biti nula. Ipak, znate i sami da se za ime korisnika i za ڑifru nikad ne ostavljaju prazna polja, pa treba dodati re?i NOT NULL kako bi to i definisali. Zna?i, ako ‍elite da korisnik i sifra ne budu nikad prazni, tekst treba da izgleda ovako:


`CREATE TABLE tabela(
id int,
korisnik varchar(30) NOT NULL,
sifra varchar(20) NOT NULL,
PRIMARY KEY(id)
)`

Slika ?e izgledati ovako:




  Vidite razliku u koloni Null u odnosu na prethodni primer. Sada nijedan podatak u ovim kolonama ne sme da bude nula ili prazno polje. Ako ve? imamo redne brojeve, logi?no je da treba da unesemo neku re? na osnovu koje ?e se redni brojevi u koloni id automatski pove?avati za 1. Ta dragocena re? je AUTO_INCREMENT. Tu re? dodajte iza re?i int, tako da taj red izgleda ovako:


`id int AUTO_INCREMENT,`

Dobijate sliku:




  Vidite da kod id-ja , u delu Extra, piڑe to ڑto smo sad uradili. Sad joڑ da dodamo dva reda sa podacima da bi videli kako to sve izgleda. Zna?i, mi sad treba da red po red dodajemo podatke za kolone korisnik i sifra (id ?e se sam od sebe pove?avati za 1 jer smo to ve? definisali). U kartici Insert, unesite podatke kao na slici, a polje u delu id nemojte dirati (jer nema potrebe).




Kada u?ete u tabelu, treba da Vam stoji ovo:



Mo‍ete pogledati koristan video tutorijal o kreiranju MySQL baze podataka .

Viڑe o SQL-u od nove godine! :)

 [1]: {{site.baseurl}}/blog/kako-napraviti-forum
 [2]: {{site.baseurl}}/blog/kako-instalirati-wordpress-na-localhost