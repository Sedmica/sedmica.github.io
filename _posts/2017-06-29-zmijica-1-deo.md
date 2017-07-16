---
layout: page
title: 'Zmijica 1. deo - Pygame'
published: true
author: Nikola
comments: true
date: 2014-02-27 12:02:04
tags:
    - Pygame
    - Zmijica
categories:
    - programiranje
permalink: blog/:title
image:
    feature: zmijica.jpg
---
Dobrodoڑli na sedmicu i u prvi tutorijal za pravljenje zmijice u Pygame-u.
  
Ovo je ujedno i poslednja igra koju ?emo napraviti u Python/Pygame okru‍enju i posle nje kre?emo novi programski jezik &#8211; Javu.
  
Da ne du‍im pri?u ve? da po?nem.
  
[code]
  
import pygame
  
import random
  
from sys import exit
  
from pygame.locals import *

pygame.init()

FPS = 10
  
WINDOWWIDTH = 640
  
WINDOWHEIGHT = 480
  
CELLSIZE = 20

assert WINDOWWIDTH % CELLSIZE == 0, &#8216;Window width not valid.&#8217;
  
assert WINDOWHEIGHT % CELLSIZE == 0, &#8216;Window height not valid.&#8217;

CELLWIDTH = WINDOWWIDTH // CELLSIZE
  
CELLHEIGHT = WINDOWHEIGHT // CELLSIZE

#COLORS R G B
  
WHITE = (255, 255, 255)
  
BLACK = ( 0, 0, 0)
  
GREEN = ( 0, 255, 0)
  
DARKGREEN = ( 0, 155, 0)
  
RED = (255, 0, 0)
  
DARKGRAY = ( 40, 40, 40)

BGCOLOR = BLACK

UP = &#8216;up&#8217;
  
DOWN = &#8216;down&#8217;
  
LEFT = &#8216;left&#8217;
  
RIGHT = &#8216;right&#8217;

HEAD = 0
  
[/code]
  
Po?injemo prvo sa importima i definisanjem konstanti. Promenljiva **CELLSIZE** ozna?ava veli?inu jednog polja na tabli u pikselima a **HEAD** je nula zato ڑto ce glava naڑe zmijice biti prvi element u listi. Ostalo bi trebalo da je poznato.

[code]
  
def terminate():
    
pygame.quit()
    
exit()

def draw\_press\_key_msg():
    
press\_key\_surf = BASICFONT.render(&#8216;Press any key to play.&#8217;, True, DARKGRAY)
    
press\_key\_rect = press\_key\_surf.get_rect()
    
press\_key\_rect.topleft = (WINDOWWIDTH &#8211; 200, WINDOWHEIGHT &#8211; 30)
    
screen.blit(press\_key\_surf, press\_key\_rect)

def check\_for\_key_press():
    
if len(pygame.event.get(QUIT)) > 0:
      
terminate()
    
key\_up\_events = pygame.event.get(KEYUP)
    
if len(key\_up\_events) == 0:
      
return None
    
if key\_up\_events[0].key == K_ESCAPE:
      
terminate()
    
return key\_up\_events[0].key
  
[/code]

Funkcija **terminate** nam slu‍i za izlaz iz igre. Druga funkcija slu‍i da ispiڑe korisniku da pritisne bilo koje dugme za po?etak igre, naravno koristi?emo je na po?etnom i krajnjem ekranu. I tre?a proverava da li je pritisnuto neko dugme. Ako je pritisnut &#8216;iks&#8217; dugme u gornjem levom uglu ekrana ili escape taster iza?i ?e iz igre dok ?e u ostalim slu?ajevima vratiti pritisnut taster.

* * *

Pogledajte i tutorijale za pravljenje [igre memorije][1], [ping ponga][2] ili [space rocks igre][3].

* * *

To bi bilo to za danas, u‍ivajte!

 [1]: {{site.baseurl}}/blog/igra-memorije-1-deo-pygame "igra memorije"
 [2]: {{site.baseurl}}/blog/pong-1-deo-pygame "pong"
 [3]: {{site.baseurl}}/blog/8447 "space rocks"