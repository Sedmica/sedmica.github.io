---
layout: page
title: 'Space Rocks 6. deo - Pygame'
published: true
author: Nikola
comments: true
date: 2014-02-13 12:02:00
tags:
    - Space Rocks
categories:
    - programiranje
permalink: blog/:title
image:
    feature: space-rocks.jpg
---
Dobrodoڑli u ڑesti tutorijal o pravljenju Space Rocks igre na Sedmici.
  
Posle male pauze nastavljamo sa funkcijama za ekra pre i posle odigrane partije.

[code]
  
def start_screen():
      
global started
      
draw_bg()

key\_press = any\_key_font.render(&#8216;press any key to play&#8217;, True, RED)
      
key\_rect = key\_press.get_rect()
      
key_rect.bottomright = (WIDTH &#8211; 40, HEIGHT &#8211; 40)
      
screen.blit(key\_press, key\_rect)

title = end_font.render(&#8216;Space Rocks&#8217;, True, WHITE)
      
title\_rect = title.get\_rect()
      
title_rect.center = (WIDTH /2, 150)
      
screen.blit(title, title_rect)

pygame.display.update()
      
check\_for\_key_press()
      
while True:
          
if check\_for\_key_press():
              
started = True
              
init()
              
pygame.event.get()
              
return

[/code]

Prvo da vidimo funkciju za po?etni ekran. Ispiڑe naslov igre na sred ekrana i ?eka da igra? pritisne dugme i time se ova funkcija zavrڑava. Niڑta spektakularno.
  
![][1]

Prelazimo na funkciju za ekran posle partije.
  
[code]
  
def end_screen():

global started, screen

key\_press = any\_key_font.render(&#8216;press any key to play&#8217;, True, RED)
      
key\_rect = key\_press.get_rect()
      
key_rect.bottomright = (WIDTH &#8211; 40, HEIGHT &#8211; 40)
      
screen.blit(key\_press, key\_rect)

score\_text = score\_font.render(&#8216;score: &#8216;+str(score), True, WHITE)
      
score\_rect = score\_text.get_rect()
      
score_rect.center = (WIDTH / 2, 350)
      
screen.blit(score\_text, score\_rect)

end\_text = end\_font.render(&#8216;You lost!&#8217;, True, WHITE)
      
end\_rect = end\_text.get_rect()
      
end_rect.center = (WIDTH /2, 150)
      
screen.blit(end\_text, end\_rect)

pygame.display.update()

pygame.time.wait(1000)

check\_for\_key_press()
      
while True:
          
if check\_for\_key_press():
              
started = True
              
init()
              
pygame.event.get()
              
return
  
[/code]

Isto kao i u prethodnoj funkciji ispiڑe da je igra gotova, postignut rezultat i opet ?eka da korisnik neڑto pritisne kako bi igra opet po?ela.

![][2]

* * *

To bi bilo to za danas. U‍ivajte!

 [1]: {{site.baseurl}}/images/post/uploads/2013/12/Screenshot-2013-12-05-12.251.jpg
 [2]: {{site.baseurl}}/images/post/uploads/2013/12/Screenshot-2013-12-05-12.371.jpg