---
layout: page
title: 'Zmijica 3. deo - Pygame'
published: true
author: Nikola
comments: true
date: 2014-03-13 11:03:53
tags:
    - Pygame
    - Zmijica
categories:
    - programiranje
permalink: blog/:title
image:
    feature: zmijica.jpg
---
Dobrodoڑli u novi tutorijal za pravljenje zmijice u Pygame-u.
  
Po?e?emo sa funkcijom koja nam obradjuje ekran kada se igra zavrڑi tj. kada igra? udari u zid ili u neki drugi deo zmije.

[code]
  
def show\_game\_over_screen():
    
game\_over\_font = pygame.font.Font(&#8216;freesansbold.ttf&#8217;, 150)
    
game\_surf = game\_over_font.render(&#8216;Game&#8217;, True, WHITE)
    
over\_surf = game\_over_font.render(&#8216;Over&#8217;, True, WHITE)
    
game\_rect = game\_surf.get_rect()
    
over\_rect = over\_surf.get_rect()
    
game_rect.midtop = (WINDOWWIDTH / 2, 10)
    
over\_rect.midtop = (WINDOWWIDTH / 2, game\_rect.height + 10 + 25)

screen.blit(game\_surf, game\_rect)
    
screen.blit(over\_surf, over\_rect)
    
draw\_press\_key_msg()

pygame.display.update()
    
pygame.time.wait(500)
    
check\_for\_key_press()

while True:
      
if check\_for\_key_press():
        
pygame.event.get()
        
return
  
[/code]

Samo ispisemo &#8222;GAME OVER&#8220; na ekranu i igra?u da pritisne bilo koje dugme da ponovo pokrene igru.

Slede?a funkcija nam slu‍i da ispiڑe trenutni rezultat na ekran tokom igre.
  
[code]
  
def draw_score(score):
    
score_surf = BASICFONT.render(&#8216;Score: %s&#8217; % (score), True, WHITE)
    
score\_rect = score\_surf.get_rect()
    
score_rect.topleft = (WINDOWWIDTH &#8211; 120, 10)
    
screen.blit(score\_surf, score\_rect)
  
[/code]

Zatim nam treba i funkcuja za crtanje naڑe zmije na ekranu kao i funkcija da nacrta mre‍u.
  
[code]
  
def draw\_worm(worm\_coords):
    
for coord in worm_coords:
      
x = coord[&#8216;x&#8217;] * CELLSIZE
      
y = coord[&#8216;y&#8217;] * CELLSIZE
      
worm\_segment\_rect = pygame.Rect(x, y, CELLSIZE, CELLSIZE)
      
pygame.draw.rect(screen, DARKGREEN, worm\_segment\_rect)
      
worm\_inner\_segment_rect = pygame.Rect(x + 4, y + 4, CELLSIZE &#8211; 8, CELLSIZE &#8211; 8)
      
pygame.draw.rect(screen, GREEN, worm\_inner\_segment_rect)

def draw_grid():
    
for x in range(0, WINDOWWIDTH, CELLSIZE):
      
pygame.draw.line(screen, DARKGRAY, (x, 0), (x, WINDOWHEIGHT))
    
for y in range(0, WINDOWHEIGHT, CELLSIZE):
      
pygame.draw.line(screen, DARKGRAY, (0, y), (WINDOWWIDTH, y))
  
[/code]

Zmija ?e nam biti prikazana kao lista re?nika oblika {&#8216;x&#8217;:x\_pozicija, &#8216;y&#8217;:y\_pozicija} i for petljom prodjemo kroz svaki taj re?nik i nacrtamo zeleni kvadrat na toj poziciju na mre‍i. A mre‍u nacrtamo kao vertikalne i horizontalne linije razmaka CELLSIZE.

* * *

Pogledajte i tutorijale za pravljenje [igre memorije][1], [ping ponga][2] ili [space rocks igre][3].

* * *

**VAژNO!!!** kliknite ovde da odaberete koji programski jezik ‍elite da vidite na Sedmici u narednom periodu.
  
Imate dve opcije: 

  * **Java** &#8211; osnova za android programiranje.
  * **C#** &#8211; osnova za jedan od najmo?nijih game engine-a na svetu &#8211; Unity.

Izbor je na vama.

* * *

 [1]: {{site.baseurl}}/blog/igra-memorije-1-deo-pygame "igra memorije"
 [2]: {{site.baseurl}}/blog/pong-1-deo-pygame "pong"
 [3]: {{site.baseurl}}/blog/8447 "space rocks"