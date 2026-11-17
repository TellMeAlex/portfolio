# CV PDF

`public/cv.pdf` is a static, bilingual document: page 1 is Spanish and page 2 is English. The curated source text and layout live in `scripts/cv/generate.py`.

## Sources and scope

- Identity, location, roles, employment history, projects, talk topics and technology: `src/content/portfolio.ts` (HERO, TIMELINE, PROJECTS, STACK, CONTACT_LINKS) and `src/constants/personal.ts`.
- Full name, email and education: `server/facts.mjs`. The LinkedIn address is also in `src/constants/personal.ts`.
- English descriptions follow the existing bilingual portfolio; the education label is a translation of the qualification in `server/facts.mjs`.

No phone number, private data, inferred dates, or unlisted achievements are included. The document is a curated snapshot, not automatically synchronized with portfolio changes: review the above sources whenever facts change.

## Rebuild and verify

Requires Python 3 and, for tests, Poppler (`pdfinfo` and `pdftotext`). No Python packages or browser are needed.

```sh
python3 scripts/cv/generate.py
python3 -m unittest scripts.cv.test_cv -v
pdfinfo public/cv.pdf
pdftotext -layout public/cv.pdf -
```

Pass a destination path to the generator to write elsewhere. The generator embeds no timestamps and produces identical bytes from identical source on repeated runs.
