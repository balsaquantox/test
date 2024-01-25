# Web Technical Assesement

## Introduction

Welcome to the Web Tech Test.

The primary goal of this exercise is to assess how you reason about your ability to write well defined HTML, CSS and JavaScript using the latest patterns and technologies in a mobile first approach. There's no hard rules or tricky questions.

**We hope you have fun.**

## Glossary

- Promotion - A sports or casino offering with a purpose of encouraging potential customers to sign up.

## Brief

For this exercise you are required to build a fast, responsive, mobile first promotions page. This promotions page consists of two views or filters which exist on a single page:

- New Customers - a list of promotions only applicable to new customers
- All Promotions - a list of all promotions

When the page loads, you should fetch the data to render the promotions. The promotions object contains a flag `onlyNewCustomers` which indicates whether a promotion is only applicable to new customers or not.

Promotions must be sorted according to the `sequence` property.

## Data

We've provided an endpoint that can be accessed using the following URL:
<a href="http://www.mocky.io/v2/5bc3b9cc30000012007586b7" target="_blank">http://www.mocky.io/v2/5bc3b9cc30000012007586b7</a>

You can also find a sample of the data [data.json](data.json)

### Types

```js
/** The response type of the API call */
type ResponseType = PromotionType[];

/** Promotion Entity */
type PromotionType = {
  id: string,
  name: string,
  description: string,
  heroImageUrl: string,
  onlyNewCustomers: boolean,
  termsAndConditionsButtonText: string,
  joinNowButtonText: string,
  sequence: number,
};
```

## Technology

Since the purpose of this exercise is to assess your HTML, CSS and JavaScript abilities, we discourage the use of CSS frameworks such as Bootstrap or Material UI but encourage the use of React or any other frontend framework.

## Screens

The provided screens are a wireframe, not a final design for the application. You are expected to implement the user interface by yourself.

### All Promotions

![All Promotions](img/all-promotions.png "All Promotions")

### New Customers Promotions

![New Customers Promotions](img/new-customers-promotions.png "New Customers Promotions")

## The Deliverable

- GitHub repo with the code
- Link to the deployed app (you can use Vercel, Netlify or any other similar free deployment platform)
