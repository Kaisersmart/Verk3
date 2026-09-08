# Data profile

## Hópur
Nöfn:Samy, Oleksiy

## Hvernig gögnin voru greind
`scripts/profile-data.js` les `games_master_dataset.json`.
Scriptið telur gögnin og sýnir niðurstöður í terminal.

## Helstu niðurstöður

### Stærð gagnasafns
Fjöldi leikjafærslna: 13.603  
Fjöldi dálka: 38  
Fjöldi platforma: 14  
Fjöldi mismunandi ""genre_category"": 14  
Fjöldi unique """game_id""": 11.687  

### Missing data

430 færslur vantar release_year
2.736 færslur vantar rating_score_pct
513 færslur vantar developer eða eru með Unknown
186 færslur vantar publisher eða eru með Unknown
298 færslur vantar genre_category eða eru með Unknowт
334 leiki vantar cover.

### Duplicates

Það eru 13.603 leikjafærslur en aðeins 11.687 unique `game_id`.

Sum `game_id` koma því oftar en einu sinni.

Top 5 duplicate `game_id`:

1. `megadrive_nba-action-95-starring-david-robinson` — 26
2. `megadrive_world-series-baseball-95` — 24
3. `megadrive_the-berenstain-bears-camping-adventure` — 22
4. `megadrive_nfl-95` — 22
5. `megadrive_world-championship-soccer-ii` — 21

### Algengustu gildi

Top 5 genre:

1. Platformer — 2.341
2. Shooter — 2.094
3. Sports — 2.091
4. Puzzle — 972
5. Action — 932

Top 5 developers:

1. SEGA — 786
2. Konami — 525
3. Unknown — 513
4. Capcom — 325
5. Taito — 316

Leikir eftir platform:

- Arcade — 3.052
- Mega Drive — 2.682
- NES — 1.869
- SNES — 1.363
- Game Boy Advance — 1.216
- Game Boy — 1.044
- Game Boy Color — 983
- Nintendo 64 — 380
- Dreamcast — 378
- Famicom Disk System — 264
- Sega Saturn — 246
- Neo Geo — 75
- Sega 32X — 39
- Wii U — 12

### Tölugögn

Elsta `release_year`: 1971  
Nýjasta `release_year`: 2026  

Lægsta `rating_score_pct`: 10  
Hæsta `rating_score_pct`: 100  

## Consistency-prófun

Reglan var:

Ef `has_cover_image` er `true`, þá má `cover_image_path` ekki vera tómt.

Niðurstaða: 0 færslur brutu regluna.

## Handvirk sannprófun

1. A Day In Space — rating 40, cover er til
2. Amazing Maze — ár 1976, rating 30
3. Boulder Dash — ár 1985, rating 50
4. Flip and Flop — developer er Unknown
5. Columns III (Mega Play) — developer er SEGA, genre er Puzzle
6. Inferno (Meadows) — publisher er Unknown, rating 10
7. Kiki-ippatsu Mayumi-chan — genre er Unknown, rating vantar
8. M-4 — ár 1977, rating 10
9. M-79 Ambush — developer er Unknown, ár 1977
10. M.A.C.H. 3 — ár 1983, rating 90

## 3 atriði sem hægt væri að rannsaka betur

1. Það eru 13.603 leikjafærslur en aðeins 11.687 unique game_id.
2. 2.736 leiki vantar rating_score_pct.
3. 334 leiki vantar cover.

## Hvað þýðir þetta fyrir framtíðar verkefnið?

Það er mikið af gögnum sem hægt er að nota.
Sumar færslur vantar upplýsingar eins og rating, developer eða cover.
Þess vegna þarf að passa upp á missing, Unknown og duplicate gögn þegar gögnin verða notuð.
## Keyrsla

## Scriptið er keyrt úr verkefnamöppunni með
-----node scripts\profile-data.js




