## Prisma DB Notes:
### Local playaround way
1. In `schema.prisma` we define how we want our database to look like
2. If then we change something in `schema.prisma` (e.g. add column to some table)
3. Everytime we make such change (including the very first time) we have to run `npx prisma db push` - this is the quick and dirty way to update the database to conform to our `schema.prisma` definitions

### Production way
In production we usually want to track such changes we make to the database - so now we say every change we make is a 'migration'. 

After we have made changes to the `schema.prisma` we run:
`npx prisma migrate dev --name init` (in this case we name the migration 'init')
this creates the following file:
`prisma/migrations/20250629173346_init/migration.sql`
This way we will have a history of all our migrations.

Now in production we can run :
    `"build:prod-with-db": "prisma generate && prisma migrate deploy && next build"`
(see `package.json`)

## run db container for local development:
`docker run --name sfcdb -e POSTGRES_USER=sfc -e POSTGRES_PASSWORD=sfc -e POSTGRES_DB=sfcdb -p 5432:5432 -d postgres:latest`

very convenient:
run `npx prisma studio` for Database Admin UI

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
