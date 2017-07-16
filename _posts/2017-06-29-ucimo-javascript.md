---
layout: page
title: 'U?imo JavaScript: Pet laganih JS primera'
published: true
author: Maja
comments: true
date: 2014-06-17 09:06:51
tags:
    - JavaScript
categories:
    - web
permalink: blog/:title
image:
    feature: js1.jpg
---

  Danas piڑemo o nekoliko osnovnih stvari u JS koje mo‍ete lako da savladate. Najpre, mogli ste sa osnovama JS da se upoznate u ?lanku o osnovama JavaScript programiranja gde mo‍ete da vidite primer iskakaju?eg prozora, i reakciju klikom na dugme. Jedna on trenutno najpopularnijih JS biblioteka je jQuery, koji je veoma va‍an za savla?ivanje jer se pored JS uvek tra‍i naro?ito ukoliko se bavite front-end programiranjem. O jQuery-ju i mogu?nosti njegove upotrebe smo govorili u ?lanku o ڑarenim kliza?ima uz pomo? njega i CSS-a , a pravili smo i cool notifikacije uz CSS i jQuery. Kako bi doڑli do jQuery-ja, najpre je bolje da nau?ite neke osnovne JS pojmove, zbog ?ega i dajemo primere za svaki od njih kako biste ih razumeli.


Danas piڑemo o:

1. **Iskakaju?em prozoru (alert),**
  
2. **naredbi za ispisivanje (document.write),**
  
3. **promenljivama (globalne i lokalne),**
  
4. **funkcijama i**
  
5. **Iskakaju?em prozoru za potvr?ivanje (confirm box).
  
** 

&nbsp;

**1. Iskakaju?i prozor (alert window)**


  Prozor uzbune/upozorenja/alert box, jeste iskakaju?i prozor koji ste sigurno videli na mnogim sajtovima. Oni se pojavljuju pri u?itavanju stranice tra‍e?i da se registrujete, u vidu neke reklame i sli?no. Postoje tri vrste alert prozora:


&#8211; prozor upozorenja (_alert box_),

&#8211; prozor za potvr?ivanje (_confirm box_) i

&#8211; prozor za poruke korisniku (_prompt box_).

**Alert** prozor je jednostavna JS naredba. Dakle, ako ‍elimo da nam ispiڑe tekst &#8222;Cao, ovo je pozdravna poruka sa Sedmice!&#8220;, upisa?emo slede?i kod u JS element Script koji postavite u Head sekciju.

[code type=javascript]
  

  
alert (&#8222;Cao, ovo je pozdravna poruka sa Sedmice!&#8220;);       //najpre re? alert, potom u zagradi pod navodnicima se upisuje to ڑto ho?ete da bude ispisano u prozoru.
  

  
[/code]

Dobijamo:



&nbsp;

**2. Naredba za ispisivanje (document.write)**

Ova naredba govori o tome da ?e njen sadr‍aj koji je pod navodnicima biti ispisan na stranici. Kod glasi:

[code type=javascript]
  

  
document.write (&#8222;Cao, ovo je pozdrav sa Sedmice!&#8220;);      //u zagradi pod navodnicima se upisuje to ڑto ho?ete da bude ispisano.
  

  
[/code]

Dobijamo:




  Nakon kraja naredbe, tj. znaka &#8222;;&#8220; slede dve kose crte koje ozna?avaju jednolinijski komentar koji smo napisali posle tih zagrada. Treba re?i da se u tekstu koji je pod navodnicima mogu na?i i elementi. Zna?i, ako ho?u da mi se neڑto ispisuje u viڑe redova, treba da element  stavim tu pod navodnike, a potom da opet iskopiram re?enicu kako bismo videli da stvarno prelazi u nov red. Zna?i, sad je kod ovakav:


[code type=javascript]
  

  
document.write (&#8222;Cao, ovo je pozdrav sa Sedmice!Cao, ovo je pozdrav sa Sedmice!&#8220;);
  

  
[/code]

I, dobili smo ڑta smo hteli:



**3. Promenljive**


  Najlakڑe ?ete shvatiti ڑta je promenljiva ako ka‍emo da su to prostori, mesta za smeڑtanje nekog bilo kakvog podatka. Promenljive bi trebalo da po?nu sa znakom &#8222;_&#8220; ili slovom, nikako brojem. Imena promenljivih su case sensitive, odnosno nije isto ako napiڑete ime promenljive Sedmica , i sedmica. One se naj?eڑ?e definiڑu najpre re?ju var (eng. variable), potom ime promenljive, zatim znak &#8222;=&#8220; kao oznaka za &#8222;ima vrednost&#8220; (dodela neke vrednosti) i onda navedete vrednost te promenljive &#8211; mo‍e biti broj, tekst (string), logi?ka vrednost true/false itd. Na osnovu imena te promenljive, vi ?ete mo?i do?i do nje i koristiti je za ?ega ho?ete. Promenljive mogu biti lokalne i globalne. Globalne promenljive su one koje ste definisali van neke funkcije, i mo‍ete je koristiti i u nekoj funkciji, i van nje. Lokalne promenljive se definiڑu unutar funkcije i samo u okviru nje se mogu koristiti, izvan nje ne.


Primeri definisanja promenljivih:

**var** x=32;

**var** sedmica=15;

**var** sedmica =&#8220;web dizajn tutorijali&#8220;;

**Primetite da ako se koristi tekst, tj. string, on se piڑe pod navodnicima. Ako broj koristite, ne morate da piڑete navodnike.
  
** 

&nbsp;

**4. Funkcije**

Funkcija je skup nekih naredbi koje izvrڑavaju neki specifi?an zadatak koji joj zadate. Definiڑemo njeno ime, opis ڑta to ona treba da radi, i pozovemo je.

Sintaksa:

function ime_funkcije()
  
{
  
telo funkcije &#8211; opis;
  
}
  
ime_funkcije();   //pozivanje funkcije


  Ime funkcije je njen naziv koji ?ete koristiti kada budete je pozivali. Otvorena i zatvorena zagrada posle imena pokazuju da ova funkcija nema parametre (da ih ima, bili bi ovde navedeni &#8211; ako ih ima viڑe, razdvojeni su zarezima). Potom u viti?astim zagradama (koje ja zovem pti?ice :D ) se ka‍e ڑta to treba da uradi ova funkcija. Posle pti?ica, poziva se funkcija tako ڑto joj se ponovi ime i stave otvorena i zatvorena zagrada. Ako ste napravili neku funkciju koja treba da se izvrڑi kada se klikne na neڑto, onda se ona poziva putem doga?aja onmouseover, onmouseout itd, tj. mo‍ete je pozvati u HTML-u, ڑto zna?i da ne trebate da je pozivate odmah posle njenog tela u Script elementu (kao ڑto piڑe u sintaksi).



  *Napomena: U naڑem narednom ?lanku pogledajte pozivanje funkcije pomo?u doga?aja &#8211; klikom na dugme, sliku itd.


**Primer**: Napravi?emo funkciju koja sabira dva broja: 34 i 34113.

Kod:

[code type=javascript]
  

  
function sabiranje(){
  
var a =34;
  
var b=34113;
  
var c=a+b;
  
}
  
sabiranje();
  

  
[/code]


  Funkciju smo nazvali sabiranje, i napravili tri promenljive &#8211; jednu za prvi sabirak, drugu za drugi , i tre?u za zbir. Ako bismo ovo pokrenuli, ne bismo dobili niڑta. Zaڑto? Jer jesmo pozvali funkciju koja sabira ove brojeve, ali nigde nismo napisali ڑta ?emo da ispiڑemo, a ho?emo da ispiڑemo da kada se saberu ova dva broja, da se dobije odgovaraju?i zbir. Zato moramo dodati unutar funkcije jedan red sa ve? pomenutom document.write komandom, koja se i koristi za ispisivanje. Da se tekst ne bi slepio sa brojem koji ?e se prikazati za promenljivu c, odvojte razmakom znak navodnika od re?i zbir.


[code type=javascript]
  

  
function sabiranje(){
  
var a =34;
  
var b=34113;
  
var c=a+b;
  
document.write (&#8220; Kada se saberu 34 i 34113, dobija se zbir &#8220; , c);
  
}
  
sabiranje();
  

  
[/code]

Sada se dobija ovo:



&nbsp;

**Funkcije sa parametrom**

Kao ڑto rekoh, parametar se postavlja unutar zagrada posle imena funkcije. Pod parametrom se misli na neku oznaku koju postavite, i koja predstavlja neku informaciju koja se kasnije mo‍e iskoristiti navodjenjem vrednosti koju ho?ete da ima. Recimo da imamo parametar x. Najpre ?u pokazati kod, pa ?u ga komentarisati.

[code type=javascript]
  

  
function ispis (x) {
  
document.write (&#8220; Ovo je tekst na Sedmici. Oblast ovog clanka je&#8220; + x );
  
}
  
ispis (&#8220; web dizajn &#8222;);
  

  
[/code]

Dobijamo slede?e:




  ٹta smo uradili? U telu funkcije smo ispisali tekst naredbom document.write, koja uklju?uje parametar x, a onda smo van tela funkcije pozvali je i naveli koji podatak &#8222;krije&#8220; taj parametar &#8211; &#8222;web dizajn&#8220;, i rekli da se taj podatak ispiڑe. Dakle, van funkcije kada se ona poziva, upiڑe se konkretna vrednost toga parametra, u ovom slu?aju &#8222;web dizajn&#8220;. Mo‍ete da pozovete opet funkciju, samo da ispiڑe ovaj put &#8222;web programiranje&#8220;, tako ڑto ?ete iskopirati ve? napisan poziv za funkciju i zameniti tekst. Zna?i dva puta ?ete izvrڑiti funkciju samo ڑto ?e biti kraj druga?iji. Dobi?ete ispisano:


 _&#8222;Ovo je tekst na Sedmici. Oblast ovog clanka je web dizajn Ovo je tekst na Sedmici. Oblast ovog clanka je web programiranje&#8220;_

Sada shvatate da mo‍ete da za jedan parametar koristite koliko god ho?ete vrednosti.

**Primer funkcije sa viڑe parametara**

Doda?emo joڑ jedan parametar kako biste videli kako se piڑe kod u tom slu?aju.

Kod:

[code type=javascript]
  

  
function ispis (x,y) {
  
document.write (&#8220; Ovo je tekst na Sedmici. Oblast ovog clanka je&#8220; + x + y );
  
}
  
ispis (&#8220; web dizajn &#8222;, &#8220; a autor Vam je vec poznat. &#8220; );
  

  
[/code]

Dobijamo sliku:




  Samo smo dodali y parametar kod imena funkcije. Kao i x parametar, na isti na?in smo dodali y parametar u document.write naredbi, a kod pozivanja funkcije smo dodali vrednost za y na isti na?in kao ڑto smo dodali malopre za x. Zna?i, prvo navo?enje kod pozivanja funkcije je vrednost parametra x, a drugo navo?enje je vrednost parametra y. Mo‍ete re?ati parametara koliko ho?ete.


&nbsp;

**5. JS zahtev korisniku za unos podataka**

Ovo je vrsta pomenutih _alert_ prozora, u kojim pitate neڑto korisnika a on mo‍e da odgovori na neki od na?ina.

Kod:

[code type=javascript]
  

  
ans=prompt (&#8222;Orange &#8211; the fruit has color name or color has the fruit name?&#8220;, &#8220; &#8222;)                                  //pitanje se postavlja i ocekuje se odgovor
  
if (ans) {                                                    //definisanje uslova ako je korisnik uneo nesto
  
alert(&#8220; You said &#8220; + ans)}                //ispisuje se u alert prozoru njegov odgovor koji god da je
  
else {                                                     // u suprotnom, ako nista nije napisao
  
alert (&#8222;You didn&#8217;t know!!!&#8220;) }  //ispisujemo da nije znao odgovor
  

  
[/code]

Dobijamo ovo:




  Zna?i, ovaj prozor je upitni prozor. Prompt je JS metoda koja nosi sa sobom i pitanje i odgovor. Ona vra?a ili odgovor korisnika, ili ne vra?a niڑta ako korisnik nije odgovorio i sli?no ili pritisnuo Cancel. Posle toga, imamo mali uslov &#8211; ako korisnik neڑto odgovori, izbaci prozor sa odgovorom koji je uneo, a u suprotnom, izbaci prozor sa tekstom da nije znao odgovor.


Ako ste neڑto uneli, bi?e ovako:



Ako niste niڑta uneli nego pritisnuli Cancel:



Ako ho?ete da vidite primere sajtova koji koriste JavaScript, pogledajte [najboljih 45 primera JS koriڑ?enja][1]. Naredni tutorijal je posve?en JavaScriptu i doga?aju ONCLICK.

**Danas**: **HAPPY TUESDAY**: Preuzmite [mini parallax primer][2] koji mo‍ete dalje modifikovati po ‍elji.

&nbsp;

_Specijalna zahvalnica 9gag philosodaptoru._



 [1]: http://www.creativebloq.com/web-design/examples-of-javascript-1233964
 [2]: {{site.baseurl}}/images/post/uploads/2014/01/parallax2.rar