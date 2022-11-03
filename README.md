# E-commerce Restaurant Application

A JAM stack app for an e-commerce restaurant made with Next.js and Commerce.js.

## Features

- Create read update delete products
- Get categories and products from commerce.js BE
- 100% lighthouse scores
- Snappy UI with Optimistic Updates using React Query

## Tech Stack

**Client:** Next.js, React Query, SCSS, TailwindCSS

**Server:** Commerce.js

## Installation

1. `npm install`
2. Add your `NEXT_PUBLIC_CHEC_PUBLIC_API_KEY` to `.env`
3. `npm run dev`

First, You'll need to create an account at [Chec](https://commercejs.com) or use the [CLI](https://github.com/chec/cli).

You can get a copy of your public API key at [Chec Dashboard > Developer Settings](https://dashboard.chec.io/settings/developer).

It would also be useful to make a few categories with some products as well as an 'all' category for containg all the products.

note: _If you don't want to create an account with Commerce.js, you can use the demo store public key `pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec`._

## Acknowledgements

#### Code Resources to Acknowledge

- [https://github.com/notrab/nextjs-commercejs-example](https://github.com/notrab/nextjs-commercejs-example)

While I appreciated the notrab tutorial on commerce.js with next.js, I wasn't happy with how the data was handled. I ended up re-writing all of the code and extending it for improved performance and user experience.

In particular, I switched from SSR to SSG and from reducers to react query. This enabled me to entirely remove the store and move all the App state logic into react query where it manages syncing to server state.

#### Design Resources to Acknowledge

The desktop design of the home page was inspired by a dribble design:

- [https://dribbble.com/arshakir](https://dribbble.com/arshakir)

I Purchased the figma design from:

- [https://gumroad.com/arshakir](https://gumroad.com/arshakir)

note: _if you want use the images as well as the code you should purchase a license for both. Get the licences for the images at
https://www.freepik.com/premium-photo/chicken-shish-kebab-with-vegetables-isolated-top-view-copy-space_7592271.htm_

- As far as the code for the design, it was based on code I had from an earlier project in Laravel that I improved upon. In this project i greatly extended my orignal code. And did a custom design for the menu cart pages.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🔗 Links

<!-- TODO add link to portfolio and linkedin -->

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
