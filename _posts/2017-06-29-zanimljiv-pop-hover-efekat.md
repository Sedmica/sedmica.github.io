---
layout: page
title: Zanimljiv POP :hover efekat
published: true
author: Momcilo
comments: true
date: 2013-07-09 12:07:12
tags:
    - Animacija
    - CSS3
categories:
    - web
permalink: blog/:title
image:
    feature: Untitled-1.jpg
---
Danaڑnji tutorijal posve?en je pravljenju POP hover efekta. POP Agency ima taj kul efekat koji doprinosi interaktivnosti stranice. Po default-u, polja imaju belu pozadinu. Nakon ڑto se predje miڑem preko nje, postepeno se pojavi crna pozadina, promeni se boja teksta, koji se takodje malo i pomeri na gore. Nakon ڑto se skloni kursor sa polja, crna pozadina se polako spuڑta, vrate se stare boje teksta, koji se spusti malo. 

* * * 

#### Rezultat

Check out this Pen!



* * * 

#### HTML

Html kod je vrlo jednostavan. Ispisa?emo kod samo za jedan primer polja, ali vi ih mo‍ete imati bezbroj. Svako polje je &#8222;box&#8220;:

[code type=html] 

## Breaking news &#8211; hippos are sorta dangerous

### Tonight at nine


  
[/code]

* * * 

#### CSS

[code type=css]
  
background: linear-gradient(
     
white, white 50%, black 50%, black
  
);
  
background-size: 100% 200%;

.box {
    
background: linear-gradient(
       
white, white 50%, #333 50%, #333
    
);
    
transition: all 0.2s ease;
  
}
  
.box:hover {
    
background-position: 100% 100%;
  
}

.box:hover h2 {
    
color: #48ad26;
  
}
  
.box:hover h2 span {
    
color: white;
  
}
  
.box:hover h3 {
    
color: #999;
  
}

@keyframes up-bump {
    
0% { padding-top: 2em; }
    
50% { padding-top: 1.5em; }
    
100% { padding-top: 2em; }
  
}
  
@keyframes down-bump {
    
0% { padding-top: 2em; }
    
50% { padding-top: 2.5em; }
    
100% { padding-top: 2em; }
  
}

.box {
    
animation: down-bump 0.4s ease;
  
}
  
.box:hover {
    
animation: up-bump 0.4s ease;
  
}
  
[/code]

A krajnji rezultat mo‍ete pogledati ovde:


  DEMO
