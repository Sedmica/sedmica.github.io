---
layout: page
title: Space Rocks 5. Deo – Pygame
published: true
author: Nikola
comments: true
date: 2014-02-06 01:02:14
tags:
    - Space Rocks
categories:
    - programiranje
permalink: blog/:title
image:
    feature: space-rocks.jpg
---
Dobro doڑli u novi tutorijal za pravljenje space rocks igre na Sedmici.
  
Nastavljamo sa funkcijom koju smo vidjali u par prethodnih igara tako da je ne?u puno objaڑnjavati.
  
[code]
  
def check\_for\_key_press():
      
if len(pygame.event.get(QUIT)) > 0:
          
pygame.quit()
          
exit()
      
key\_up\_events = pygame.event.get(KEYUP)
      
mouse\_click\_events = pygame.event.get(MOUSEBUTTONUP)
      
if len(key\_up\_events) > 0:
          
if key\_up\_events[0].key == K_ESCAPE:
              
pygame.quit()
              
exit()
      
if len(key\_up\_events) == 0 and len(mouse\_click\_events) == 0:
          
return False
      
else:
          
return True
  
[/code]
  
Dobro poznata funkcija koja proverava da li je igra? ptitisnuo dugme na miڑu ili tastaturi.

[code]
  
def draw_bg():
      
screen.blit(bg_image, (0,0))
  
[/code]
  
Ovde samo crtamo sliku pozadine na ekran.

[code]
  
def draw_score():

score\_text = any\_key_font.render(&#8216;score: &#8216;+str(score), True, WHITE)
      
score\_rect = score\_text.get_rect()
      
score_rect.topright = (WIDTH &#8211; 50, 50)
      
screen.blit(score\_text, score\_rect)

lives\_text = any\_key_font.render(&#8216;lives: &#8216;+str(lives), True, WHITE)
      
lives\_rect = lives\_text.get_rect()
      
lives_rect.topleft = (50, 50)
      
screen.blit(lives\_text, lives\_rect)
  
[/code]
  
Slu‍i da ispiڑe broj poena i kolko je ‍ivota ostalo igra?u.

[code]
  
def init():
      
global score, lives, started, my_ship
      
score = 0
      
lives = 3
      
started = True
      
my\_ship = Ship(ship\_image, thrust_image)
  
[/code]
  
I init funkcija koja ?e sve da nam inicijalizuje.

* * *To bi bilo to za danas, u‍ivajte!