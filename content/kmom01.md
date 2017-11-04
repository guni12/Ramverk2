# Kmom01

#### Berätta utförligt om din syn på Express och Pug och hur de samverkar. 

Att sätta sig in i ett nytt koncept, ett nytt ramverk, tar sin modiga tid. Men mycket känns igen från t.ex. WebbApp, när det gäller grundläggande principer.

Man använder Express som ett objekt, vilket man fyller på med data. T.ex. kan man välja Pug som en vy-template-motor och binda ihop med en `set`-funktion. (Det går att använda olika express-objekt för olika templates om behov uppstår.) Man passar då också på att binda en plats där vy-filerna ligger till denna motor.

Servern knyts också ihop med express-objektet, som vi kanske kallar app.

Middleware, som hanterar anrop med funktionen `next()`, måste vara klara före sluthanteringen i routen. Annars får man `headers already sent`, vilket jag drabbades av. Jag har inte kommit igång så mycket med middleware ännu, men det verkar mycket bra. Bara skicka vidare till nästa instans.

Variabler kan man få tillgång till via `app.locals` (som man når globalt), eller via `res.locals` i pug-filen. Default skickas respons-variabler som strängar, men det går att skicka som listor eller funktioner också.

Jag gjorde en route som tar emot `kmom*` och som jag tänkte skulle kunna skicka en sökväg till mina `.md`-filer och därefter inkludera dem i min `kmom.pug`-fil. Men pug vill inte göra så. 
> As I understand correctly, the reason for currently not having the ability for dynamic includes is due to compilation.

https://github.com/pugjs/pug/issues/2030

> Filters are rendered at compile time, which makes them fast but also means that they cannot support dynamic content or options.
        
https://github.com/pugjs/pug/issues/404

Jag lyckades filtrera till html i routen, men då har vi ju inte längre pug-syntax. Plus att det anses fel enligt ovan. Min lösning blev `case when` i pug-filen. Tills jag kanske kan mer längre fram.

Annars är det smidigt att skriva `pug`-koden. Nästlingen sköts med indentering.

#### Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.

Grunden är väldigt enkel, route och statiska filer. Därefter får man plocka ihop middleware efter behov. Det var enkelt att komma igång med ramverket på så sätt. API:n kanske jag tycker är lite knapp, men det verkar finnas en stor grupp anhängare och kodare som både informerar och diskuterar Express på nätet.

Eftersom man i princip bara använder javascript, ett språk, en syntax, över hela linjen, hela stacken, så kan man nog bli en snabbare programmerare.

Express verkar bli lite av vad man gör det till. T.ex. kan man lägga till struktur för dependency injection.

`export` - en variant av `Factory`. Middleware kan stå för `Intercepting Filter`. I stället för klasser med arv används objekt, och dessa kan utökas med fler "förmågor" under körning. Men hur detta då struktureras på ett lika tydligt sätt som i Anax, det ser jag inte i nuläget. 

#### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?

Jag vet ju inte ännu vilka behov jag kommer att få i ramverket, allteftersom. Min nuvarande tanke är att se om jag kan få detta ramverk att göra samma saker som Anax-ramverket kan.

Jag har inte hunnit sätta mig in i hur Express hanterar kontroller- respektive modell-lagren, dvs hur de tänker sig MVC-strukturen.

Jag har valt att följa Express egna struktur med undantag av mappen `content`som jag sparar redovisningarna i.

#### Använde du någon form av scaffolding som Express erbjuder?

Jag installerade deras express-generator och tankade hem varianten med pug. Även om jag är nyfiken på övriga template-bibliotek så får man ta en sak i taget. Jag lade denna under me/kmom01 och har den som referens och laddar hem moduler till `redovisa`när jag vill testa dem.

#### Jobbar du med Markdown för innehållet, eller annat liknande?

Jag använder markdown för redovisningarna, se ovan.
