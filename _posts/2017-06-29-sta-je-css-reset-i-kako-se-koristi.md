---
layout: page
title: ٹta je CSS reset i kako se koristi
published: true
author: Momcilo
comments: true
date: 2013-05-28 12:05:34
tags: [ ]
categories:
    - web
permalink: blog/:title
image:
    feature: css-reset.jpg
---
Cilj resetovanja CSSa jeste smanjenje razli?itosti standardnih podeڑavanja razli?itih web pregleda?a (browser-a), kao ڑto su na primer default veli?ine margina, veli?ine fontova, boje i sli?no. Dakle, CSS reset nije niڑta drugo do kod koji slu‍i za izjedna?avanje default podeڑavanja web pregleda?a, tako da se web sajt mo‍e pregledati isto u svim browserima, barem kada su osnovne razlike u pitanju. 

2007. godine ustanovljen je osnovni kod koji je vremenom doradjivan i prilagodjavan danaڑnjim verzijama web browsera. Pred vama se nalazi kod koji je dovolojno jednostavno kopirati unutar vaڑeg CSS fajla ili  taga, i osnovna podeڑavanja browsera ?e biti resetovana.

* * * 

[code type=css]
  
html, body, div, span, object, iframe,
  
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  
abbr, address, cite, code,
  
del, dfn, em, img, ins, kbd, q, samp,
  
small, strong, sub, sup, var,
  
b, i,
  
dl, dt, dd, ol, ul, li,
  
fieldset, form, label, legend,
  
table, caption, tbody, tfoot, thead, tr, th, td,
  
article, aside, canvas, details, figcaption, figure,
  
footer, header, hgroup, menu, nav, section, summary,
  
time, mark, audio, video {
      
margin:0;
      
padding:0;
      
border:0;
      
outline:0;
      
font-size:100%;
      
vertical-align:baseline;
      
background:transparent;
  
}
  
body {
      
line-height:1;
  
}
  
article,aside,details,figcaption,figure,
  
footer,header,hgroup,menu,nav,section {
      
display:block;
  
}
  
nav ul {
      
list-style:none;
  
}
  
blockquote, q {
      
quotes:none;
  
}
  
blockquote:before, blockquote:after,
  
q:before, q:after {
      
content:&#8220;;
      
content:none;
  
}
  
a {
      
margin:0;
      
padding:0;
      
font-size:100%;
      
vertical-align:baseline;
      
background:transparent;
  
}
  
/\* promenite boje na osnovu vaڑih potreba \*/
  
ins {
      
background-color:#ff9;
      
color:#000;
      
text-decoration:none;
  
}
  
/\* change colours to suit your needs \*/
  
mark {
      
background-color:#ff9;
      
color:#000;
      
font-style:italic;
      
font-weight:bold;
  
}
  
del {
      
text-decoration: line-through;
  
}
  
abbr[title], dfn[title] {
      
border-bottom:1px dotted;
      
cursor:help;
  
}
  
table {
      
border-collapse:collapse;
      
border-spacing:0;
  
}
  
/\* change border colour to suit your needs \*/
  
hr {
      
display:block;
      
height:1px;
      
border:0;
      
border-top:1px solid #cccccc;
      
margin:1em 0;
      
padding:0;
  
}
  
input, select {
      
vertical-align:middle;
  
}
  
[/code]