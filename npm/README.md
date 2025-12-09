# Captcha Generator API

Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can be used as a captcha.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Captcha Generator API](https://apiverve.com/marketplace/captchagenerator)

---

## Installation

Using npm:
```shell
npm install @apiverve/captchagenerator
```

Using yarn:
```shell
yarn add @apiverve/captchagenerator
```

---

## Configuration

Before using the Captcha Generator API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart)

The Captcha Generator API documentation is found here: [https://docs.apiverve.com/ref/captchagenerator](https://docs.apiverve.com/ref/captchagenerator).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const captchageneratorAPI = require('@apiverve/captchagenerator');
const api = new captchageneratorAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
// This API does not require a Query

api.execute(function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
// This API does not require a Query

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    // This API does not require a Query

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "id": "95ba102b-3973-45b6-8849-ab02a06e4821",
    "expires": 1740173352742,
    "solution": "glrbe",
    "downloadURL": "https://storage.googleapis.com/apiverve.appspot.com/captchagenerator/95ba102b-3973-45b6-8849-ab02a06e4821.png?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1740173352&Signature=S5WBxutmxPr82LlQyROZ15Xff%2BFRvkZV1Yof927tdpsnHVG9mO4yqPVxK9CH7MhzhYWG8OQQAVsGyWMYLQzU06PVSxlAE5g05xnU2Vi513x342yiUSodNaS3vcEkMeA1ioCGRZ%2Bv1n2FCJNOIQbeGxsiTjCiwrkKag9Gl4LS0hOl4Y%2FzF%2BcgxRfQnre3vptcHe1N2fLQf8JNd26hk0IiAms%2Bqj5teE3V1FKDsUmMk583ZQMBsRHjJG0g4KdtgBGujY3TL4jPgdj7D4VjOm%2F3TKj6n5oRkjvkYl64FnGCELW%2FsoEaxChsLrxirz5Rvvq7KD09GYJbuAoNPN9L4cjbAw%3D%3D"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
