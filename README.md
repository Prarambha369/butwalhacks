<p align="center"><img width="192" alt="Hack Club logo" src="https://assets.hackclub.com/flag-standalone.svg"></p>
<h1 align="center"><a href="https://butwal.hackclub.com/">HackClub Butwal</a></h1>
<p align="center"><i>The source code for HackClub Butwal's site</i></p>

HackClub Butwal's website. This codebase runs on [butwal.hackclub.com](https://butwal.hackclub.com). For new developers getting started, run the following in your terminal:

Download the code to your computer:

    $ git clone https://github.com/HackClub-Butwal/butwalhacks && cd butwalhacks

Install dependencies:

    $ yarn

Start running the website on your computer:

    $ yarn dev

## Routing

This Next.js application uses file-based routing. The main routes are:

- `/` - Home page
- `/form` - Registration form (embedded Tally form)

### Legacy Redirects

The application handles legacy redirects for:
- `/form/form.html` → `/form` (automatically redirected)
- Any `.html` files → corresponding routes without extension

## Deployment

This project is configured for static export and can be deployed to:

- **GitHub Pages** (recommended) - Automatic deployment via GitHub Actions
- **Vercel** - Zero-config deployment
- **Netlify** - Static site hosting

The project exports to static HTML files in the `out/` directory for compatibility with static hosting providers.

---

## Consistency and Best Practices

The project follows Next.js best practices for file extensions:

1. **Consistent Extensions**: All React components and pages use the `.js` extension consistently
2. **Proper Organization**: Files are organized in appropriate directories based on their purpose
3. **Clear Documentation**: File extension usage is now well-documented for future contributors

And then open up your web browser and go to [localhost:3000](http://localhost:3000).

Please note: There are a number of redirects and rewrites essential to the website's functionality, which you can see in [next.config.mjs](./next.config.mjs).

Powered by [Next.js] with [MDX], [Theme UI], & [Hack Club Theme].

---

<h1 align="center">Building <a href="https://butwal.hackclub.com/">butwal.hackclub.com</a></h1>

Join us in building HackClub Butwal's homepage and show new hackers what HackClub could be for them 💖.

See something that could be better? Make a PR! Have an easter egg idea? Make a PR! Is the site missing something? Make a PR! _(Do you see a trend? :))_

If you need to add content to the site, here's how you can:

<details> <summary>Create a new card</summary>

<img width="600" alt="Screenshot 2023-08-16 at 9 09 55 PM" src="https://github.com/hackclub/site/assets/65808924/fed45800-c834-4e4c-ad87-a21e01414fa9">

Most things on the homepage are carousel, modular components that can easily be added and removed according to relevancy to Hack Clubbers. There are 3 main sections: connection, open-source, and IRL community. Most new carousel will likely fall within the first two sections!

First, you can create a new file under [components/index/carousel](components/index/cards/) with the name of your new event/project. Next add `import CardModel from './card-model'` and add whatever you want :) Finally, use a <Buttons> component (`import Buttons from './button'`) to highlight call-to-action buttons. If it's the main button, use the primary prop to add a background color!

Your challenge: try and make the card as unique as possible, like a mini poster! Not sure where to start? Look at other carousel on the page :)

</details>

<details>
<summary>Add to the carousel</summary>

<img width="600" alt="Screenshot 2023-08-16 at 9 09 11 PM" src="https://github.com/hackclub/site/assets/65808924/044660eb-fb3d-43b6-a270-64a3fe51f3ca">

If there's a Hack Club or Hack Club community-led project (past or present) that Hack Clubbers can get involved in, please add it to [lib/carousel.json](lib/carousel.json) and add your card to the end of the json file. An example looks like this:

```json
{
  "background": "dark",
  "titleColor": "white",
  "descriptionColor": "white",
  "title": "Hackers Wanted",
  "description": "Our open love letter to hackers",
  "img": "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-large/1f4bb@2x.png",
  "link": "/hackers-wanted"
}
```

</details>

Every week, [hundreds of people](https://plausible.io/hackclub.com) visit hackclub.com. What story do you want to tell?

Have questions? Join us in [Discord](https://dsc.gg/butwalhacks)

---

HackClub Butwal, 2025. MIT License.

[next.js]: https://nextjs.org
[mdx]: https://mdxjs.com
[theme ui]: https://theme-ui.com
[hack club theme]: https://theme.hackclub.com

Code under MIT License, assets may not be re-used or re-distributed.
