
# Mailchimp Newsletter Signup Page

A simple mailchimp newsletter signup page made using Node and Bootstrap.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MAILCHIMP_API_KEY`

`MAILCHIMP_SERVER`

`MAILCHIMP_LIST_ID`

The `MAILCHIMP_LIST_ID` is the same thing as the audience id on Mailchimp.

The `MAILCHIMP_SERVER` can be identified by logging in to your Mailchimp account and looking at your URL.
It might look something like https://us19.admin.mailchimp.com/; the `us19` part is the server prefix
## Run Locally

Clone the project

```bash
  git clone https://github.com/TonyNyagah/newsletter-signup-page.git
```

Go to the project directory

```bash
  cd newsletter-signup-page
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```


## Deployment

This project can be easily deployed on various platforms.

The guide for deploying a Nodejs app to Heroku can be found here: https://devcenter.heroku.com/articles/deploying-nodejs.
