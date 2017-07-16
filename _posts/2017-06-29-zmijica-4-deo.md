---
layout: page
title: 'Zmijica 4. deo - Pygame'
published: true
author: Nikola
comments: true
date: 2014-04-03 11:04:21
tags:
    - Pygame
    - Zmijica
categories:
    - programiranje
permalink: blog/:title
image:
    feature: zmijica.jpg
---
Dobrodoڑli u poslednji tutorijal za zmijice u Pygame-u koji ?e biti ujedno i poslednji tutorijal za Python/Pygame na Sedmici u narednom periodu.
  
Slede?i programski jezik koji ?emo raditi mo‍ete idalje odlu?iti na Straw pollu gde se vodi ‍estoka bitka izmedju Jave i C#.
  
Nego da ne du‍imo pri?u ve? da krenemo sa ovim tutorijalom.
  
Po?nimo sa glavnom funkcijom za pokretanje igre.

[code]
  
def run_game():

startx = random.randint(5, CELLWIDTH &#8211; 6)
    
starty = random.randint(5, CELLHEIGHT &#8211; 6)
    
worm_coords = [{&#8216;x&#8217;:startx, &#8216;y&#8217;:starty},
                   
{&#8216;x&#8217;:startx &#8211; 1, &#8216;y&#8217;:starty},
                   
{&#8216;x&#8217;:startx &#8211; 2, &#8216;y&#8217;:starty}]

direction = RIGHT

apple = get\_random\_location()

while True:
      
for event in pygame.event.get():
        
if event.type == QUIT:
          
terminate()
        
elif event.type == KEYDOWN:
          
if event.key in [K\_LEFT, K\_a] and direction != RIGHT:
            
direction = LEFT
          
elif event.key in [K\_RIGHT, K\_d] and direction != LEFT:
            
direction = RIGHT
          
elif event.key in [K\_UP, K\_w] and direction != DOWN:
            
direction = UP
          
elif event.key in [K\_DOWN, K\_s] and direction != UP:
            
direction = DOWN
          
elif event.key == K_ESCAPE:
            
terminate()

if worm\_coords\[HEAD\]\[&#8216;x&#8217;\] == -1 or worm\_coords\[HEAD\]\[&#8216;x&#8217;\] == CELLWIDTH or \
         
worm\_coords\[HEAD\]\[&#8216;y&#8217;\] == -1 or worm\_coords\[HEAD\]\[&#8216;y&#8217;\] == CELLHEIGHT:
        
return

for worm\_body in worm\_coords[1:]:
        
if worm\_body\[&#8216;x&#8217;] == worm\_coords[HEAD\]\[&#8216;x&#8217;\] and \
           
worm\_body\[&#8216;y&#8217;] == worm\_coords[HEAD\]\[&#8216;y&#8217;\]:
          
return

if worm\_coords\[HEAD\]\[&#8216;x&#8217;\] == apple\[&#8216;x&#8217;] and worm\_coords[HEAD\]\[&#8216;y&#8217;\] == apple[&#8216;y&#8217;]:
        
apple = get\_random\_location()
      
else:
        
del worm_coords[-1]

if direction == UP:
        
new\_head = {&#8216;x&#8217;: worm\_coords\[HEAD\]\[&#8216;x&#8217;\], &#8216;y&#8217;:worm_coords\[HEAD\]\[&#8216;y&#8217;\] &#8211; 1}
      
elif direction == DOWN:
        
new\_head = {&#8216;x&#8217;: worm\_coords\[HEAD\]\[&#8216;x&#8217;\], &#8216;y&#8217;:worm_coords\[HEAD\]\[&#8216;y&#8217;\] + 1}
      
elif direction == LEFT:
        
new\_head = {&#8216;x&#8217;: worm\_coords\[HEAD\]\[&#8216;x&#8217;\] &#8211; 1, &#8216;y&#8217;:worm_coords\[HEAD\]\[&#8216;y&#8217;\]}
      
elif direction == RIGHT:
        
new\_head = {&#8216;x&#8217;: worm\_coords\[HEAD\]\[&#8216;x&#8217;\] + 1, &#8216;y&#8217;:worm_coords\[HEAD\]\[&#8216;y&#8217;\]}

worm\_coords.insert(0, new\_head)

screen.fill(BGCOLOR)
      
draw_grid()
      
draw\_worm(worm\_coords)
      
draw_apple(apple)
      
draw\_score(len(worm\_coords) &#8211; 3)
      
pygame.display.update()
      
clock.tick(FPS)
  
[/code]

Prvo generiڑemo zmiju sa 3 dela i usmerimo je udesno i postavimo jabuku. Zatim ulazimo u &#8216;beskona?nu&#8217; while petlju. Tu prvo proveravamo unos sa tastature da bi usmerili zmiju u ‍eljenom pravcu.
  
Zatim proveravamo sudar glave zmije sa ivicama zida, ta?nije proveravamo da li je glava izaڑla u polje koje nije na ekranu i vra?amo se iz funkcije ako jeste. Isto radimo i ako je glava dosla na mesto nekog drugog dela tela zmije. Zatim proveravamo da li je glava dosla na mesto jabuke, ako jeste samo generiڑemo jabuku na drugom mestu a ako nije obriڑemo poslednji deo tela zmije. I na kraju postavljamo novu glavu zmije u zavisnosti od trenutnog usmerenja i crtamo sve stvari na ekran.

* * *

Pogledajte i tutorijale za pravljenje [igre memorije][1], [ping ponga][2] ili [space rocks igre][3].

* * *To bi bilo to za ovu igru a ujedno i za pygame, 

kliknite ovde da odaberete koji programski jezik ‍elite da vidite na Sedmici u narednom periodu.
  
Imate dve opcije: 

  * **Java** &#8211; osnova za android programiranje.
  * **C#** &#8211; osnova za jedan od najmo?nijih game engine-a na svetu &#8211; Unity.

Izbor je na vama.

* * *

 [1]: {{site.baseurl}}/blog/igra-memorije-1-deo-pygame "igra memorije"
 [2]: {{site.baseurl}}/blog/pong-1-deo-pygame "pong"
 [3]: http://localhost/sedmica1/01/8447 "space rocks"