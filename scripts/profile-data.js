const fs = require('fs');
const path = require('path');

function findDataFile() {
  const candidates = [
    path.resolve(__dirname, '../00/games_master_dataset.json'),
    path.resolve(__dirname, '../00_GOGN_OG_SKILGREININGAR/games_master_dataset.json'),
    path.resolve(process.cwd(), '00/games_master_dataset.json'),
    path.resolve(process.cwd(), '00_GOGN_OG_SKILGREININGAR/games_master_dataset.json'),
    path.resolve(process.cwd(), '../00/games_master_dataset.json'),
    path.resolve(process.cwd(), '../00_GOGN_OG_SKILGREININGAR/games_master_dataset.json')
  ];

  return candidates.find((candidate) => fs.existsSync(candidate));
}

function toText(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function isMissing(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'number') return Number.isNaN(value);
  return String(value).trim() === '';
}

function isUnknown(value) {
  const text = toText(value).toLowerCase();
  return text === '' || text === 'unknown';
}

function countByKey(items, keySelector) {
  const counts = new Map();

  for (const item of items) {
    const key = keySelector(item);
    if (key === null || key === undefined || key === '') continue;
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  return counts;
}

function formatTopEntries(map, limit = 5) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

function main() {
  const dataFile = findDataFile();

  if (!dataFile) {
    console.error('Could not find games_master_dataset.json.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

  if (!Array.isArray(data) || data.length === 0) {
    console.error('Dataset is empty or not an array.');
    process.exit(1);
  }

  const totalGames = data.length;
  const propertiesPerEntry = Object.keys(data[0]).length;

  const platformCounts = countByKey(data, (item) => toText(item.platform_key));
  const genreCounts = countByKey(data, (item) => toText(item.genre_category));
  const developerCounts = countByKey(data, (item) => toText(item.developer));

  const missingReleaseYear = data.filter((item) => isMissing(item.release_year)).length;
  const missingRating = data.filter((item) => isMissing(item.rating_score_pct)).length;

  const missingOrUnknownDeveloper = data.filter((item) => isMissing(item.developer) || isUnknown(item.developer)).length;
  const missingOrUnknownPublisher = data.filter((item) => isMissing(item.publisher) || isUnknown(item.publisher)).length;
  const missingOrUnknownGenre = data.filter((item) => isMissing(item.genre_category) || isUnknown(item.genre_category)).length;

  const missingCover = data.filter((item) => {
    const value = item.has_cover_image;
    return value === false || value === 'false' || value === 'FALSE' || isMissing(value);
  }).length;
  const invalidCoverPaths = data.filter((item) => (
    item.has_cover_image === true && isMissing(item.cover_image_path)
  )).length;

  const gameIdCounts = countByKey(data, (item) => toText(item.game_id));
  const uniqueGameIds = gameIdCounts.size;
  const duplicateGameIds = [...gameIdCounts.entries()].filter(([, count]) => count > 1);
  const hasDuplicateGameIds = duplicateGameIds.length > 0;
  const topDuplicateGameIds = [...duplicateGameIds]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ game_id: name, count }));

  const validReleaseYears = data
    .map((item) => {
      const raw = item.release_year;
      if (isMissing(raw)) return null;
      const value = Number(raw);
      return Number.isFinite(value) ? value : null;
    })
    .filter((value) => value !== null);
  const oldestReleaseYear = validReleaseYears.length ? Math.min(...validReleaseYears) : null;
  const newestReleaseYear = validReleaseYears.length ? Math.max(...validReleaseYears) : null;

  const validRatings = data
    .map((item) => {
      const raw = item.rating_score_pct;
      if (isMissing(raw)) return null;
      const value = Number(raw);
      return Number.isFinite(value) ? value : null;
    })
    .filter((value) => value !== null);
  const lowestRating = validRatings.length ? Math.min(...validRatings) : null;
  const highestRating = validRatings.length ? Math.max(...validRatings) : null;

  console.log('Profile summary for games_master_dataset.json');
  console.log(`Data file: ${dataFile}`);
  console.log('');

  console.log('Overview');
  console.table([
    { metric: 'Total game entries', value: totalGames },
    { metric: 'Properties per entry', value: propertiesPerEntry },
    { metric: 'Distinct platforms', value: platformCounts.size },
    { metric: 'Distinct genre_category values', value: genreCounts.size },
    { metric: 'Unique game_id values', value: uniqueGameIds },
    { metric: 'Has duplicate game_id', value: hasDuplicateGameIds ? 'true' : 'false' }
  ]);

  console.log('');
  console.log('Missing and unknown values');
  console.table([
    { metric: 'Missing release_year', value: missingReleaseYear },
    { metric: 'Missing rating_score_pct', value: missingRating },
    { metric: 'Missing or Unknown developer', value: missingOrUnknownDeveloper },
    { metric: 'Missing or Unknown publisher', value: missingOrUnknownPublisher },
    { metric: 'Missing or Unknown genre_category', value: missingOrUnknownGenre },
    { metric: 'Games missing cover', value: missingCover }
  ]);

  console.log('');
  console.log('Consistency checks');
  console.table([
    { metric: 'Cover flag true but cover_image_path missing', value: invalidCoverPaths }
  ]);

  console.log('');
  console.log('Top 5 duplicate game_id values');
  if (topDuplicateGameIds.length) {
    console.table(topDuplicateGameIds);
  } else {
    console.log('No duplicate game_id values found.');
  }

  console.log('');
  console.log('Top 5 genre_category');
  console.table(formatTopEntries(genreCounts, 5));

  console.log('');
  console.log('Top 5 developers');
  console.table(formatTopEntries(developerCounts, 5));

  console.log('');
  console.log('Platform counts');
  console.table([...platformCounts.entries()].sort((a, b) => b[1] - a[1]).map(([platform, count]) => ({ platform, count })));

  console.log('');
  console.log('Release year range');
  console.table([
    { metric: 'Oldest release_year', value: oldestReleaseYear },
    { metric: 'Newest release_year', value: newestReleaseYear }
  ]);

  console.log('');
  console.log('Rating range');
  console.table([
    { metric: 'Lowest rating_score_pct', value: lowestRating },
    { metric: 'Highest rating_score_pct', value: highestRating }
  ]);
}

main();
