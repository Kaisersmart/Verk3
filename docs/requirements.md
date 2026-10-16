# Requirements

## Tilgangur

Tilgangur kerfisins er að hjálpa notanda að finna tölvuleik sem passar við það sem hann vill spila með einföldum síum

## Aðalnotandi
Aðalnotandinn er einstaklingur sem vill spila tölvuleik en veit ekki hvaða leik hann vill velja

## Vandamál

Þegar margir leikir eru í safni getur verið erfitt og tímafrekt að finna leik sem passar við platform, genre og fjölda spilara

## Out of scope
- Að búa til tölvuleiki.
- Að keyra eða emulera leiki á vefsíðunni.
- Að hýsa leikjaþjóna.
- Að selja tölvuleiki.
- Að búa til eigin leikjavél.
- Flókið recommendation kerfi.

## Functional requirements

FR-01: Kerfið skal sýna lista yfir leiki sem eru tiltækir í gagnasafninu

FR-02: Notandi skal geta valið eitt platform og síað leikjalistann eftir því

FR-03: Notandi skal geta valið eitt genre og síað leikjalistann eftir því

FR-04: Notandi skal geta síað leiki eftir nákvæmum fjölda spilara

FR-05: Þegar fleiri en ein sía er valin skal leikur uppfylla öll valin skilyrði til að birtast í niðurstöðum

FR-06: Notandi skal geta valið leik úr niðurstöðum og opnað upplýsingasíðu fyrir leikinn

FR-07: Upplýsingasíða leiks skal sýna title, platform, genre og hámarksfjölda spilara. Rating og cover skulu einnig birtast ef þau eru til

FR-08: Ef enginn leikur uppfyllir valdar síur skal kerfið sýna skýr skilaboð í stað tóms niðurstöðulista

FR-09: Ef sama `game_id` kemur fyrir oftar en einu sinni skal leikurinn aðeins birtast einu sinni

FR-10: Leikir með `Unknown` eða tómt gildi fyrir síu sem notandi hefur valið skulu ekki birtast í síuðum niðurstöðum

## Non-functional requirements

NFR-01: Vefsíðan skal vera responsive og vera nothæf bæði á tölvuskjá og farsíma

NFR-02: Allar myndir sem hafa merkingu skulu hafa alt texta

NFR-03: Ef cover mynd vantar eða ekki er hægt að hlaða henni skal síðan áfram virka án villu og sýna viðeigandi staðgengil eða texta

NFR-04: Síur og helstu aðgerðir síðunnar skulu vera aðgengilegar með lyklaborði

## User stories

### US-01 - Sía eftir platform

Sem notandi vil ég geta valið platform svo að ég sjái aðeins leiki sem ég get spilað á því platformi

#### Acceptance criteria

- PASS/FAIL: Notandi getur valið eitt platform
- PASS/FAIL: Niðurstöður sýna aðeins leiki sem passa við valið platform
- PASS/FAIL: Leikir með tómt eða `Unknown` platform birtast ekki þegar platform-sía er virk

### US-02 - Sía eftir genre

Sem notandi vil ég geta valið genre svo að ég geti fundið leiki af þeirri tegund sem mig langar að spila

#### Acceptance criteria

- PASS/FAIL: Notandi getur valið eitt genre
- PASS/FAIL: Niðurstöður sýna aðeins leiki sem passa við valið genre
- PASS/FAIL: Leikir með tómt eða `Unknown` genre birtast ekki þegar genre-sía er virk

### US-03 - Sía eftir fjölda spilara

Sem notandi vil ég geta valið fjölda spilara svo að ég finni leik sem hentar þeim fjölda sem ætlar að spila

#### Acceptance criteria

- PASS/FAIL: Notandi getur valið fjölda spilara
- PASS/FAIL: Aðeins leikir þar sem `players_max` samsvarar nákvæmlega valda gildinu birtast
- PASS/FAIL: Leikir með tómt eða `Unknown` gildi fyrir fjölda spilara birtast ekki þegar sían er virk

### US-04 - Nota fleiri en eina síu

Sem notandi vil ég geta notað platform, genre og fjölda spilara saman svo að niðurstöðurnar passi betur við það sem ég vil spila

#### Acceptance criteria

- PASS/FAIL: Notandi getur haft fleiri en eina síu virka á sama tíma
- PASS/FAIL: Leikur birtist aðeins ef hann uppfyllir öll virk síuskilyrði
- PASS/FAIL: Ef enginn leikur uppfyllir öll skilyrðin birtast no-results skilaboð

### US-05 - Skoða upplýsingar um leik
Sem notandi vil ég geta opnað leik úr niðurstöðum svo að ég geti séð helstu upplýsingar áður en ég ákveð hvað ég vil spila

#### Acceptance criteria
- PASS/FAIL: Notandi getur valið leik úr niðurstöðulistanum
- PASS/FAIL: Upplýsingasíðan sýnir title, platform, genre og players_max
- PASS/FAIL: Rating og cover birtast ef gögnin eru til
- PASS/FAIL: Ef rating eða cover vantar veldur það ekki villu á síðunni

## Open questions

- Hvernig á að raða leikjum í listanum?
- Þurfum við takmörkun eða pagination ef mjög margir leikir eru í niðurstöðum?
- Hvaða staðgengill á að birtast ef cover mynd vantar?
- Hvaða texti á nákvæmlega að birtast ef rating vantar?