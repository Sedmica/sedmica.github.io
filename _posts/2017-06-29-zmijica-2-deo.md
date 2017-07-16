---
layout: page
title: 'Zmijica 2. deo - Pygame'
published: true
author: Nikola
comments: true
date: 2014-03-06 10:03:02
tags:
    - Pygame
    - Zmijica
categories:
    - programiranje
permalink: blog/:title 
image:
    feature: zmijica.jpg
---
Dobrodoڑli na sedmicu i u novi tutorijal za pravljenje svima dobro poznate igre zmijice u Pygame-u. I sa ovom igrom zavrsavamo tutorijale u Pygame-u na neko vreme.
  
Po?e?emo sa funkcijom koja ?e prikazivati po?etni ekran koji ?e biti malko i animiran.
  
Ovako ?e otprilike to izgledati:

![][1]
  
Evo i koda za to

[code]
  
def show\_start\_screen():
    
title_font = pygame.font.Font(&#8216;freesansbold.ttf&#8217;, 100)
    
title\_surf1 = title\_font.render(&#8216;Wormy!&#8217;, True, WHITE, DARKGRAY)
    
title\_surf2 = title\_font.render(&#8216;Wormy!&#8217;, True, GREEN)

degrees1 = 0
    
degrees2 = 0

while True:
      
screen.fill(BGCOLOR)
      
rotated\_surf1 = pygame.transform.rotate(title\_surf1, degrees1)
      
rotated\_rect1 = rotated\_surf1.get_rect()
      
rotated_rect1.center = (WINDOWWIDTH / 2, WINDOWHEIGHT / 2)
      
screen.blit(rotated\_surf1, rotated\_rect1)

rotated\_surf2 = pygame.transform.rotate(title\_surf2, degrees2)
      
rotated\_rect2 = rotated\_surf2.get_rect()
      
rotated_rect2.center = (WINDOWWIDTH / 2, WINDOWHEIGHT / 2)
      
screen.blit(rotated\_surf2, rotated\_rect2)

draw\_press\_key_msg()

if check\_for\_key_press():
        
pygame.event.get()
        
return

pygame.display.update()
      
clock.tick(FPS)
      
degrees1 += 3
      
degrees2 += 7
  
[/code]
  
Prvo definiڑemo naڑ font, uzmemo neki obi?an koji postoji na svakoj, **freesansbold.ttf** recimo i renderujemo pomo?u njega dve tekstualne povrڑine od kojih ?e nam jedna imati i pozadinu. Takodje deklariڑemo i dve promenljive za ugao svake od tekstualnih povrڑi. Zatim u **while** petlji prvo popunimo pozadinu, i onda rotiramo i iscrtamo ove dve tekstualne povrڑi na sredinu ekrana, a sa tim i naznaku igra?u da pritisne neki taster za ulazak u igru. Nakon provere da li je korisnik pritisnuo neko dugme ekran se apdejtuje i uglovi za tekst se pove?avaju kako bi se dobio efekat rotacije.

* * *

[code]
  
def get\_random\_location():
    
return {&#8216;x&#8217;:random.randint(0, CELLWIDTH &#8211; 1),
            
&#8216;y&#8217;:random.randint(0, CELLHEIGHT &#8211; 1)}

def draw_apple(coord):
    
x = coord[&#8216;x&#8217;] * CELLSIZE
    
y = coord[&#8216;y&#8217;] * CELLSIZE
    
apple_rect = pygame.Rect(x, y, CELLSIZE, CELLSIZE)
    
pygame.draw.rect(screen, RED, apple_rect)
  
[/code]

Zatim nam slede funkcije koje ?e nam slu‍iti da nacrtaju i vrate novu poziciju jabuke kada je pojedemo sa naڑom zmijicom. Delovi zmije i jabuka ?e nam biti zasebni re?nici koji imaju klju?eve za x i y koordinatu tog dela na tabli. Funkcija za crtanje jabuke uzima taj njen re?nik, preko tih x i y nadje na koje polje treba da se iscrta jabuka i tu iscrta crveni pravougaonik koji nam reprezentuje jabuku.

* * *

Pogledajte i tutorijale za pravljenje [igre memorije][2], [ping ponga][3] ili [space rocks igre][4].

* * *

**VAژNO!!!** kliknite ovde da odaberete koji programski jezik ‍elite da vidite na Sedmici u narednom periodu.
  
Imate dve opcije: 

  * **Java** &#8211; osnova za android programiranje.
  * **C#** &#8211; osnova za jedan od najmo?nijih game engine-a na svetu &#8211; Unity.

Izbor je na vama.

* * *

 [1]: {{site.baseurl}}/images/post/uploads/2014/03/start.jpg
 [2]: http://localhost/sedmica1/05/igra-memorije-1-deo-pygame "igra memorije"
 [3]: http://localhost/sedmica1/08/pong-1-deo-pygame "pong"
 [4]: http://localhost/sedmica1/01/8447 "space rocks"