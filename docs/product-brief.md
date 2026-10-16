# Product brief

## Nafn verkefnis

Vinnuheiti: Leikjafinnari

## Tilgangur
Vefsíða sem hjálpar notanda að finna leik sem passar við það sem hann vill spila

## Notandi
Fólk sem veit ekki hvaða leik það vill spila

## Vandamál

Það getur verið erfitt að finna leik þegar mjög margir leikir eru í safninu

## Gögn sem við ætlum að nota

- title
 platform_name
- genre_category
- players_max
- rating_score_pct
- cover_image_path

## Aðalflæði notanda

1. Notandi opnar vefsíðuna.
2. Notandi velur platform.
3. Notandi velur genre og fjölda spilara.
4. Kerfið sýnir leiki sem passa.
5. Notandi velur leik og sér upplýsingar um hann.

## MVP

- Sýna lista af leikjum.
- Sía leiki eftir platform.
- Sía leiki eftir genre.
- Sía eftir fjölda spilara
- Opna leik og sjá helstu upplýsingar.

## Should have

- Sýna rating.
- Sýna cover ef það er til.
- Sýna skilaboð ef engir leikir pass

## Could have

- Random leikur
- Sía eftir release_year
- Samanburður á tveimur leikjum

## Out of scope

1. Að búa til tölvuleiki
2. Að keyra eða emulera leiki á vefsíðunni
3. Að hýsa leikjaþjóna
4. Að selja tölvuleiki
5. Að búa til eigin leikjavél.

## Helstu áhættur

1. Sumir leikir vantar rating eða cover
2. Sum gögn eru merkt Unknown.
3. Sum game_id koma oftar en einu sinni

## Feedback frá Agent

### Tillaga sem við samþykktum

Að hafa einföld filter fyrir platform, genre og fjölda spilara.

### Tillaga sem við höfnuðum

Að bæta við flóknu recommendation kerfi.

### Af hverju höfnuðum við henni?

Það væri of stórt fyrir MVP og verkefnið á að vera einfalt og raunhæft.