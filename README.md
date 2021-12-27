# tcv-news

![Tcv Image](https://i.ibb.co/pn99nKh/tcv-news.png)

Fictional newsletter with subscription to improve knowledge about online payments.

## Getting Started

This project has a lot of third party dependencies. Follow instructions carefully!

### Installing

```bash
yarn install
```

- Install [stripe-cli](https://stripe.com/docs/stripe-cli) to attach webhooks to your local enviroment.

- Create a new database in [faunaDB](https://fauna.com/).

  - Create 2 collections: [users, subscriptions] (no schema needed)

- Configure some github account to OAuth

### Enviroment variables

- Clone _.env.example_ as _.env.local_

Most of variables are pretty straightforward, except "STRIPE_WEBHOOK_SECRET"

### Stripe webhooks forwarding to localhost

```bash
stripe listen --forward-to localhost:3000/api/webhooks
```

After that you should see something like that in your terminal:

![webhook](https://i.ibb.co/rbRj76Q/tcv-news-stripe-key.png)

This is your "STRIPE_WEBHOOK_SECRET"

## Built With

- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextAuth](https://next-auth.js.org/)
- [FaunaDB](https://fauna.com/)
- [Stripe](https://stripe.com/)

## Authors

- **Thiago Vasconcellos** - _Initial work_ - [ThiagoVasconcellos](https://github.com/thiagovasconcellos)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
