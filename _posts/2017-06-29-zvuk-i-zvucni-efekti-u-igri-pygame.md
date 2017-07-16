---
layout: page
title: 'Zvuk i zvu?ni efekti u igri - Pygame'
published: true
author: Nikola
comments: true
date: 2013-05-02 12:05:53
tags:
    - Pygame
categories:
    - programiranje
permalink: blog/:title
image:
    feature: zvuk.jpg
---
Lepo je kada igra ima zvu?ne efekte i pozadinsku muziku. Danas ?emo pogledati kako se proizvode zvu?ni efekti a slede?i put ?emo baciti oko i na muziku.
  
Koristi se **pygame.mixer.Sound** klasa i svaki zvuk ?e biti objekat te klase. Parametar je samo string naziva zvu?nog fajla zajedno sa njegovom ekstenzijom. Kolko ja znam mogu se koristiti **wav**, **mp3** i **midi** fajlovi. Ovako se kreira objekat Sound klase:
  
[code]
  
zvuk = pygame.mixer.Sound(&#8216;moj_zvuk.wav&#8217;)
  
[/code]
  
To ne?e i pokrenuti taj zvu?ni efekat, ali postoje metode koje nam omogu?avaju laku kontrolu zvuka:

  * **zvuk.play()** &#8211; Tada Pygame pusti taj zvuk. Postoje i opcioni parameri, prvi je broj ponavljanja (-1 ako ‍elite da se neograni?eno ponavlja) a drugi je po?etno vreme u sekundama od kojeg ho?ete da se pusti zvuk (0.0 za sam po?etak). Ako pozovete bez parametara samo ?e se jednom pustiti taj zvuk. Ova metoda vra?a kanal na kom je puڑten taj zvuk ili None ako iz nekih razloga Pygame nije mogao da ga pusti.
  * **zvuk.stop()** &#8211; Zaustavlja zvuk ako vam treba da se ranije prekine.
  * **zvuk.fadeout(vreme_trajanja)** &#8211; Postepeno utiڑava zvuk i na kraju ga potpuno isklju?i. Parametar ozna?ava kolko **milisekundi** to trajati.
  * **zvuk.get_length()** &#8211; Vra?a du‍inu zvuka u **sekundama**.
  * **zvuk.set_volume(ja?ina)** &#8211; Postavlja ja?inu zvuka. Parametar je decimalni broj sa vrednosti izmedju 0.0 i 1.0 gde je 0.0 skroz tiho a 1.0 najglasnije mogu?e.
  * **zvuk.get_volume()** &#8211; Vra?a decimalni broj trenutne ja?ine zvuka.
  * **zvuk.get\_num\_channels** &#8211; Vra?a broj kanala na kojima se trenutno puڑta ovaj zvuk.

Kako zvuk.play() vra?a kanal na kom je zvuk puڑten mo‍emo malo i tim kanalom manipulisati. Ne znam baڑ puno o ovome, ali mo‍emo lako podesiti sa koje strane se ?uje zvuk, tj. da bar ostavi takav utisak.
  
[code]
  
channel = zvuk.play()
  
if channel is not None:
    
channel.set_volume(.3, .8)
  
[/code]
  
Ovo ?e pustiti zvuk, i ako uspe onda ?e promeniti ja?inu kanala na kom je puڑten. Pozivom channel.set_volume sa dva parametra je malo druga?ije. Prvi odredjuje kolka ?e ja?ina zvuka biti sa leve strane a drugi sa desne. Tako se mogu dobiti kul efekti u zavisnosti od toga gde je objekat koji proizvodi taj zvuk smeڑten na ekranu.

* * *

To bi bilo to za danas. U‍ivajte u raspustu i pratite sedmicu!