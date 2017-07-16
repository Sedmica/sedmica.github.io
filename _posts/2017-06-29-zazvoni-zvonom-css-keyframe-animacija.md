---
layout: page
title: 'Zazvoni zvonom: CSS keyframe animacija'
published: true
author: Momcilo
comments: true
date: 2014-05-13 10:05:35
tags:
    - CSS
categories:
    - web
permalink: blog/:title
image:
    feature: zvono-cover1.jpg
---
Vreme je za malo viڑe zabave uz CSS animaciju, pa odma prelazimo na specijalitet. Pokaza?u vam kako da realisti?no animirate zvonce. Nadovezuju?i se na tutorijal o [3D dugmet u][1], odlu?io sam da joڑ malo produbimo realisti?nost CSS keyframe animacija.

* * * 

Sve ڑto vam je potrebno jeste fotografija zvona, malo HTMLa i CSS koji izgleda duga?ko, ali ako malo bolje pogledate, to je isti kod koji se ponavlja tri puta, kako bi stranica bila prilagodjena razli?itim web browserima. Mo‍ete preuzeti ovu fotografiju, sa?uvati je u neki folder, i u isti folder sa?uvati i html stranicu koju ?emo napraviti.



* * * 

##### HTML

[code type=html]


  


[/code]

##### CSS

[code type=ccs]
  
img.zvono { opacity: 0.8;
	  
-webkit-animation: ring 8s 1s ease-in-out infinite;
	  
-webkit-transform-origin: 50% 4px;
	  
-moz-animation: ring 8s 1s ease-in-out infinite;
	  
-moz-transform-origin: 50% 4px;
	  
animation: ring 8s 1s ease-in-out infinite;
	  
transform-origin: 50% 4px;
  
}

@-webkit-keyframes ring {
	  
0% { -webkit-transform: rotateZ(0); }
	  
1% { -webkit-transform: rotateZ(30deg); }
	  
3% { -webkit-transform: rotateZ(-28deg); }
	  
5% { -webkit-transform: rotateZ(34deg); }
	  
7% { -webkit-transform: rotateZ(-32deg); }
	  
9% { -webkit-transform: rotateZ(30deg); }
	  
11% { -webkit-transform: rotateZ(-28deg); }
	  
13% { -webkit-transform: rotateZ(26deg); }
	  
15% { -webkit-transform: rotateZ(-24deg); }
	  
17% { -webkit-transform: rotateZ(22deg); }
	  
19% { -webkit-transform: rotateZ(-20deg); }
	  
21% { -webkit-transform: rotateZ(18deg); }
	  
23% { -webkit-transform: rotateZ(-16deg); }
	  
25% { -webkit-transform: rotateZ(14deg); }
	  
27% { -webkit-transform: rotateZ(-12deg); }
	  
29% { -webkit-transform: rotateZ(10deg); }
	  
31% { -webkit-transform: rotateZ(-8deg); }
	  
33% { -webkit-transform: rotateZ(6deg); }
	  
35% { -webkit-transform: rotateZ(-4deg); }
	  
37% { -webkit-transform: rotateZ(2deg); }
	  
39% { -webkit-transform: rotateZ(-1deg); }
	  
41% { -webkit-transform: rotateZ(1deg); }

43% { -webkit-transform: rotateZ(0); }
	  
100% { -webkit-transform: rotateZ(0); }
  
}

@-moz-keyframes ring {
	  
0% { -moz-transform: rotate(0); }
	  
1% { -moz-transform: rotate(30deg); }
	  
3% { -moz-transform: rotate(-28deg); }
	  
5% { -moz-transform: rotate(34deg); }
	  
7% { -moz-transform: rotate(-32deg); }
	  
9% { -moz-transform: rotate(30deg); }
	  
11% { -moz-transform: rotate(-28deg); }
	  
13% { -moz-transform: rotate(26deg); }
	  
15% { -moz-transform: rotate(-24deg); }
	  
17% { -moz-transform: rotate(22deg); }
	  
19% { -moz-transform: rotate(-20deg); }
	  
21% { -moz-transform: rotate(18deg); }
	  
23% { -moz-transform: rotate(-16deg); }
	  
25% { -moz-transform: rotate(14deg); }
	  
27% { -moz-transform: rotate(-12deg); }
	  
29% { -moz-transform: rotate(10deg); }
	  
31% { -moz-transform: rotate(-8deg); }
	  
33% { -moz-transform: rotate(6deg); }
	  
35% { -moz-transform: rotate(-4deg); }
	  
37% { -moz-transform: rotate(2deg); }
	  
39% { -moz-transform: rotate(-1deg); }
	  
41% { -moz-transform: rotate(1deg); }

43% { -moz-transform: rotate(0); }
	  
100% { -moz-transform: rotate(0); }
  
}

@keyframes ring {
	  
0% { transform: rotate(0); }
	  
1% { transform: rotate(30deg); }
	  
3% { transform: rotate(-28deg); }
	  
5% { transform: rotate(34deg); }
	  
7% { transform: rotate(-32deg); }
	  
9% { transform: rotate(30deg); }
	  
11% { transform: rotate(-28deg); }
	  
13% { transform: rotate(26deg); }
	  
15% { transform: rotate(-24deg); }
	  
17% { transform: rotate(22deg); }
	  
19% { transform: rotate(-20deg); }
	  
21% { transform: rotate(18deg); }
	  
23% { transform: rotate(-16deg); }
	  
25% { transform: rotate(14deg); }
	  
27% { transform: rotate(-12deg); }
	  
29% { transform: rotate(10deg); }
	  
31% { transform: rotate(-8deg); }
	  
33% { transform: rotate(6deg); }
	  
35% { transform: rotate(-4deg); }
	  
37% { transform: rotate(2deg); }
	  
39% { transform: rotate(-1deg); }
	  
41% { transform: rotate(1deg); }

43% { transform: rotate(0); }
	  
100% { transform: rotate(0); }
  
}
  
[/code]

I to je sve. Animacija, kao ڑto je u prvim redovima CSS koda navedeno, traje 8 sekundi, a zatim se beskona?no puta ponavlja. Evo i rezultata:


  




 [1]: {{site.baseurl}}/blog/moderno-css-dugme/ "Moderno 3D CSS dugme"