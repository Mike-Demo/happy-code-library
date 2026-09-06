# Add tweet.app link to the standard footer

## Goal
Add the user's tweet.app profile link to the standard `SiteFooter`, using the classic Twitter bird logo from Font Awesome brands.

## Changes
1. Update `src/webawesome/patterns/site-footer.tsx`:
   - Append a new entry to `DEFAULT_SOCIAL_LINKS`.
   - `href`: `https://tweet.app/demo`
   - `icon`: `twitter` (classic bird, Font Awesome brands family)
   - `label`: `@demo on tweet.app`
   - `text`: `tweet.app`
2. Keep the existing LinkedIn, X, and Threads links untouched.

## Verification
- Typecheck the project.
- Open the showcase footer and confirm the new tweet.app link appears with the bird icon, opens in a new tab, and has the correct accessible label.

## Notes
- The footer already renders social links with `family="brands"`, so the classic `twitter` icon name is the only required change.
- If the preferred tweet.app URL format differs from `/demo`, adjust the `href` before implementation.
