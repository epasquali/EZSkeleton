# EZSkeleton

EZSkeleton is a simple and customizable boilerplate template for NextJS 13+ projects. It sets up a basic page structure with a navbar, footer, and alerts system and provides other common usage components like login forms, modals, and cards. It's designed to help you easily build web applications with a clean, responsive layout while allowing for easy customization.

## Features

Customizable Layout: Easily configure the layout's colors, spacing, and other styles via a config file.

Reusable Components: Built with modular components like a navbar, footer, and alerts, all of which can be customized or extended.

Responsive Design: Automatically adapts to different screen sizes for a seamless user experience.

## Installation

To use EZSkeleton in your project, simply click on "use this template" and follow the instructions to clone the template into a github repository.

Then, install dependencies by running yarn

Start development server by running yarn start or yarn dev

## Usage

Add, change, or remove files to your EZSkeleton template to build your website.

For local development, create an .env.local file with the following contents:

```ts
NEXT_PUBLIC_YOURAPPNAMEHERE_API_URL = http://localhost:8080
NEXT_PUBLIC_YOURAPPNAMEHERE_FE_URL = http://localhost:3000
```

Where of course the API_URL is the local address/port of your backend, and of course "YOURAPPNAMEHERE" is the name of your app.

For deployed dev or staging servers, create an equivalent file with the URL of your dev/staging server.

For production servers, declare those variables in your production environment settings.

## Configuration

EZSkeleton can easily be configured to use your App's information throughout all pages of the site.
This is achieved via a few configuration files, as detailed below.

### Configuration Files

#### `config/api.js`

Use this file to set up the URLs for services used in your application.

Example:

```js
export const APICFG = {
  apiurl: process.env.NEXT_PUBLIC_YOURAPPNAMEHERE_API_URL,
};

export const AUTH_URL = `${APICFG.apiurl}/auth`;

export const AUTH_LOGIN_URL = `${AUTH_URL}/login`;
```

You can add more routes like payments, users, etc.

#### `config/metadata.js`

Modify this file to set your app's metadata and copyright information.

- **Metadata**: Update title, description, and Open Graph settings.
- **Copyright**: Set your copyright information and the current year.

Example:

```js
export const COPYRIGHT = "YourAppName";

export const APPMETADATA = {
  title: "Your App Title",
  description: "A short description of your app",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    type: "website",
    url: "/",
    title: "Your App Title",
    description: "A brief description of your site",
    images: [{ url: "https://example.com/hero-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your App Title",
    description: "A brief description for Twitter",
    images: ["https://example.com/hero-image.jpg"],
  },
};
```

#### `config/formheaders.js`

Modify this file to set the header messages on your app's login and registration forms.
The file comes with some default messages already, but you can freely modify them to match
your needs.

- **AUTH_HEADERS.login**: Update header for your site's login form
- **AUTH_HEADERS.register**: Update header message for your site's user registration form.

Example:

```js
export const AUTH_HEADERS = {
  login: ["Log In to access your Dashboard", "🌟"],
};
```

#### `config/navlinks.js`

Modify this file to set internal and external navigation links used throughout your application.

Example:

```js
export const INTERNAL_LINKS = {
  forgotPassword: "/user/reset_password",
};
```

## Theming

You can also change the look and feel of your site via some special EZSkeleton theming. Many elements in EZSkeleton
have a customizable css that you can set via the **themes.tsx** file.

You can add your own theme (recommended) using the EZSkeleton theme as a template, from which you can for instance
easily customize things like:

### Navbar

You can set various navbar variants, for example, a different navbar for different page layouts. Customize the background color, font color, and height.

Example:

```ts
export const EZSkeletonTheme = createTheme({
  /*Configure variants for your navbars*/
  navbars: {
    landingpage: {
      bgColor: "blue.5",
      fontColor: "gray.0",
      height: "70px",
    },
    standardpage: {
      bgColor: "red.5",
      fontColor: "grey.9",
      height: "60px",
    },
  },
});
```
