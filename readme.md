This is an example of how to create your own icons fonts, from vectors graphics, and use it in Unity. 
See video on how to use https://www.youtube.com/watch?v=-j17lYxGymk

- Install [NodeJS](https://nodejs.org/en/).
- Go to `IconFontSample\_work\Icons\IcoFontGen\` where you extracted this package and run `npm install` to install the dependenacies. 
- Add new icons to `IconFontSample\_work\Icons\IcoFontGen\icons\`
- Give each icon a unique code by renaming and attaching code in front. ex. `uEA02-boar.svg` `uEA03-another.svg` `uEA0A-etc.svg`
- Make sure paths in `\IconFontSample\_work\Icons\IcoFontGen\gulpfile.js` are correct.
- Run `\IconFontSample\_work\Icons\IcoFontGen\build.bat` or `npm run build`
- Switch to Unity and generate a new TextMeshPro font asset from the generated font and start using the icons by inserting `\uEA03` or whatever code of the icon you want to show up.
- Add the icon font to fallback fonts in TextmeshPro's settings asset.

TextMeshPro/TextCore might complain about the ellipse and underline special characters being missing. You can disable the warning in the text asset's settings or use some random svg with u005F & u2026.



