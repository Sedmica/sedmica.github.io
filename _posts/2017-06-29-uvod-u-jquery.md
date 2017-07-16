---
layout: page
title: Uvod u jQuery
published: true
author: Momcilo
comments: true
date: 2014-03-11 09:03:47
tags:
    - CSS
    - Html
    - jQuery
categories:
    - web
permalink: blog/:title
image:
    feature: jq2.jpg
---
Dobrodoڑli u prvi tutorial o jQuery-u na [localhost/sedmica1][1] portalu. U uvodnom tutorialu pro?i?emo kroz ono ڑto svako ko se do sada nije susretao sa jQuery-em treba da zna. Takodje, nau?i?ete i kako da koristite CSS selektore unutar jQuery koda.

## 1. korak

Za po?etak, Kako se koristi jQuery ?

* * *

Jednostavno je: Postoje dva na?ina kako mo‍ete koristiti jQuery.
  
Na sajtu jQuery-a ( jQuery.com ) mo‍ete preuzeti jedan od dva mogu?a fajla:




  
    1. Prvi fajl je, kao ڑto odmah mo‍ete primetiti, ?ak osam puta manji. Dakle, zaklju?ujemo da se br‍e u?itava na stranici ڑto je vrlo bitno jer ‍elimo da se svaka stranica brzo u?itava. Ipak, i production i development su zapravo podjednako korisni. Zaڑto onda koristiti ve?i fajl ? 
      
        2. Drugi fajl je ve?i, jer u sebi sadr‍i mnogo komentara, odnosno opisa, koji ?e vam pomo?i da se lakڑe sna?ete i br‍e nau?ite sve kodove i rezervisane re?i koji se mogu koristiti unutar jQuery-a. Dakle, production fajl je za one iskusne, kojima pomo? u vidu objaڑnjenja kako se ڑta koristi unutar jQuery-a nije potrebna. ( Poڑto tim programera neprekidno usavrڑava jQuery, s vremena na vreme izlaze nove verzije. U trenutku kada sam pisao ovaj tekst aktuelna verzija je bila 1.8.2. pa nemojte da vas buni ako je fajl koji ste preuzeli pod drugim nazivom. ) 
           
            Li?no, predla‍em da preuzmete i jedan i drugi. Production fajl, koji je manji, implementirajte kao ڑto je objaڑnjeno u drugom koraku, dok Development fajl mo‍ete koristiti kao pomo? pri radu. Dakle, jednostavno izaberite kod koji ‍elite da preuzmete i pritisnite Download.
          
          
          
            2. korak
          
          
          
            Stranica koja vam se otvori sadr‍i kod koji je potrebno sa?uvati. Mo‍ete ga sa?uvati tako ڑto ?ete kliknuti desnim klikom na stranicu pa izabrati &#8222;Save As&#8220; ili jednostavno prekopirati celokupan sadr‍aj stranice u novi .js fajl.
          
          
          
            Zatim, potrebno je da u nekom editoru koda ( ja koristim, i rado preporu?ujem: Sublime Text ) napravite novu html stranicu sa osnovnim po?etnim kodom:
          
          
          
            [code type=html]    
            
            
                [/code]
            
            
            
              O ovome sam pisao joڑ u prethodnim tekstovima, pa ako niste sasvim sigurni ڑta treba da radite, pogledajte tutoriale o Web Dizajnu. Slede?e ڑto je potrebno uraditi jeste pozvati jQuery fajl iz naڑe html stranice. To se radi tako ڑto jednostavnom linijom koda stranici ka‍ete gde se vaڑ jQuery fajl nalazi.
            
            
            
              [code type=html]
            
            
            
                [/code]
            
            
            
              
                $ - pozvali smo jQuery.
              
              
                ('ul li') - rekli smo jQuery-u: "Hej, prondji mi sve li tagove unutar ul tagova na ovoj stranici.
              
              
                .addClass - rekli smo jQuery-u da tim pronadjenim li tagovima dodeli klasu.
              
              
                ('dodatak') - naveli smo ime klase koja ‍elimo da bude dodeljena li tagu
              
              
                ; - zatvorena prva naredba.
              
            
            
            
              ٹta smo zapravo uradili ?
            
            
            
              U headeru smo ispisali CSS kod za "dodatak". I sada je jQuery sam dodao tu klasu li tagu i tako mu dodelio i CSS koji sa sobom nosi "dodatak", pa je tekst unutar li tagova crven.
            
            
            
              Igrajte se i zabavite se danas nau?enim, a ve? slede?eg utorka ?eka?e vas novi tutorijal o web dizajnu i pravljenju web sajtova. Slobodno nam piڑite ڑta biste ‍eleli da nau?ite.
            

 [1]: {{site.baseurl}}/blog/