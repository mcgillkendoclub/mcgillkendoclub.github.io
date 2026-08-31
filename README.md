# McGill Kendo Club
Official website for the McGill Kendo Club

The website is designed to function with no dedicated backend, while updatable with minimal coding knowledge.

## Update information
Most information and announcements can be updated in their respective JSON file.

### Update Instructors

1. Navigate through the folders to `mcgill-kendo-club-website/public/instructors` and upload the photo(s) needed for the sensei(s).
```bash
cd mcgill-kendo-club-website/public/instructors
```

2. Navigate to `mcgill-kendo-club-website/src/assets` and find the file named `instructors.json`.
```bash
cd mcgill-kendo-club-website/src/assets/
```
3. Add or update the entries that need change while respecting the following interface:
```typescript
interface Instructor {
    name: string;
    rank: string;
    quote: string;
    photoUrl: string;
}
```
i.e. always add entries that contain the keys `"name"`, `"rank"`, `"quote"` and `"photoUrl"`. The value of `"photoUrl"` must be `"instructors/<yourimage.png>"` (replace \<yourimage.png\> with the full name of the image file in the `public/instructors` folder).

example entry:
```json
{
    "name": "Christian D’Orangeville",
    "rank": "Kyoshi 7 dan - Head instructor",
    "quote": "All of us are little monks of the little temple of McGill, and we all play an active role by firmly holding the shinai.",
    "photoUrl": "instructors/dorangeville-sensei.png"
}
```

### Update tournaments results
1. Navigate to `mcgill-kendo-club-website/src/assets` and find the file named `tournaments-results.json`.

2. Add entries following the interfaces format:
```typescript
interface TournamentResult {
    tournamentName: string;
    date: string;
    location: string;
    results: CategoryResult[];
}

interface CategoryResult {
    category: string;
    competitors: CompetitorResult[];
}
interface CompetitorResult {
    competitorName: string;
    result: number | string;
}
```
*Individual results can either be a number or text as shown under*

example entry:
```json
{
    "tournamentName" : "Montreal Taikai 2030",
    "date": "August 5th, 2030",
    "location": "Montreal, QC",
    "results": [
        {
            "category": "Mixed 1-dan and under",
            "competitors": [
                {
                    "competitorName": "Bong",
                    "result": "1st place"
                },
                {
                    "competitorName": "John Smith",
                    "result": 2
                }
            ]
        },
        {
            "category": "Women 1-dan and under",
            "competitors": [
                {
                    "competitorName": "a",
                    "result": "3rd place"
                },
                {
                    "competitorName": "b",
                    "result": 8
                }
            ]
        }
    ]
}

```
### Update announcements
1. Navigate to `mcgill-kendo-club-website/src/assets` and find the file named `tournaments-results.json`.
2. Add entries following the interface format:
```typescript
interface Announcement {
    title: string;
    date: string;
    content: string;
}
```
example entry:

```json
{
    "title": "Website is now live!",
    "date": "May 20th, 2026",
    "content": "The website is now live! Please start updating the information on it."
}
```

### Update gallery photos
1. Navigate to `mcgill-kendo-club-website/public/gallery` and upload the photo(s) there.

```bash
cd mcgill-kendo-club-website/public/gallery
```
2. Navigate to `mcgill-kendo-club-website/src/assets/gallery` and find the file named `photos.json`.

```bash
cd mcgill-kendo-club-website/src/assets/gallery
```

3. Add entries to the file following the interface format:
```typescript
interface GalleryPhoto {
  filename: string;
  date: string;
  caption?: string;
  alt: string;
}
```


example entry:
```json
 { "filename": "1.PNG", "date": "2025-01-07", "caption": "Food", "alt": "Kendo practice" }
```
*the `caption` attribute is optional. Simply put the name of the file present in public/gallery*

## For people with more experience


## FAQ