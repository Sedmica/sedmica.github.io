---
layout: page
title: Space Rocks 7. deo – Pygame
published: true
author: Nikola
comments: true
date: 2014-02-20 12:02:50
tags:
    - Space Rocks
categories:
    - programiranje
permalink: blog/:title
image:
    feature: space-rocks.jpg
---
Dobrodoڑli u novi tutorijal za pravljenje Space rocks igre na Sedmici sa kojim ovu igru konacno zavrsavamo.
  
Po?e?emo sa funkcijom koja kontroliڑe samo igranje igre.
  
[code]
  
def run_game():

global screen, seconds, rocks, missiles, lives, score, spawn\_rock\_timer, started

for event in pygame.event.get():
          
if event.type == QUIT:
              
pygame.quit()
              
exit()
          
elif event.type == KEYDOWN:
              
keydown(event.key)
          
elif event.type == KEYUP:
              
keyup(event.key)

mili = clock.tick()
      
seconds = mili / 1000.

draw_bg()

my_ship.draw()
      
my_ship.update(seconds)
      
my_ship.shoot(mili)

process_group(rocks)
      
process_group(missiles)

aged = set()
      
for missile in missiles:
          
if missile.update_distance():
              
aged.add(missile)
      
missiles.difference_update(aged)

draw_score()

spawn\_rock\_timer += seconds
      
if spawn\_rock\_timer >= 1:
          
rock_spawner()
          
spawn\_rock\_timer = 0

score += gg_collide(missiles, rocks) * 10

if group\_collide(rocks, my\_ship) > 0:
          
lives -= 1

if lives == 0:
          
started = False
          
missiles = set()
          
rocks = set()
          
return

pygame.display.update()
  
[/code]

Prvo obradi user event-ove, uzme vreme od proslog poziva i nacrta pozadinu. Zatim nacrta i apdejtuje brod, rakete i meteore. Nakon toga izbrise sve rakete koje su preڑle odredjen broj piksela na ekranu. Broj poena se uveca za svaki unisten meteor i provere se sudari broda i meteora. Ako broj zivota padne na nulu, brisu se sve rakete i meteori, started prima vrednost False i vra?a se iz funkcije. Promenljiva started ima vise uticaja u slede?oj funkciji.

[code]
  
def main():
      
global screen, clock, ship\_image, thrust\_image, meteor\_image, bg\_image, missile\_image, my\_ship

screen = pygame.display.set_mode((WIDTH, HEIGHT), 0, 32)
      
pygame.display.set_caption(&#8216;My Space Rocks!&#8217;)

clock = pygame.time.Clock()

ship\_image = pygame.image.load(&#8216;noflames.png&#8217;).convert\_alpha()
      
thrust\_image = pygame.image.load(&#8216;ship.png&#8217;).convert\_alpha()
      
meteor\_image = pygame.image.load(&#8216;sm2.png&#8217;).convert\_alpha()
      
bg_image = pygame.image.load(&#8216;bg.jpg&#8217;).convert()
      
missile\_image = pygame.image.load(&#8216;missile.png&#8217;).convert\_alpha()

my\_ship = Ship(ship\_image, thrust_image)

start_screen()
      
while True:
          
if started:
              
run_game()
          
else:
              
end_screen()

if \_\_name\_\_ == &#8216;\_\_main\_\_&#8217;:
      
main()
  
[/code]

Evo i poslednje funkcije za danas, a i za ovu igru uopڑte. ona prvo postavi sve globalne promenljive na ono ڑto nama treba i dok je started na True pokrece run\_game funkciju, a dok je False pokrece end\_screen, tu dolazi do izra‍aja ono iz prethodne funkcije da kada igra? izgubi sve ‍ivote started predje na false.

* * *

To bi bilo to za ovau igru, kliknite [ovde da preuzmete zip fajl sa slikama i gotovom skriptom.][1]
  
Pogledajte i tutorijale za pravljenje [igre memorije][2] ili [ping ponga][3].

* * *

To bi bilo to za danas. U‍ivajte!

 [1]: {{site.baseurl}}/images/post/uploads/2014/01/space-rocks.zip
 [2]: {{site.baseurl}}/blog/igra-memorije-1-deo-pygame "igra memorije"
 [3]: {{site.baseurl}}/blog/pong-1-deo-pygame "pong"