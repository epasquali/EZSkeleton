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

## Configuration

EZSkeleton can easily be configured to use your App's information throughout all pages of the site.
This is achieved via a few configuration files, as detailed below.

### Configuration Files

#### `config/metadata.tsx`

Modify this file to set your app's metadata and copyright information.

- **Metadata**: Update title, description, and Open Graph settings.
- **Copyright**: Set your copyright information and the current year.

Example:

```ts
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

#### `config/formheaders.tsx`

Modify this file to set the header messages on your app's login and registration forms.
The file comes with some default messages already, but you can freely modify them to match
your needs.

- **AUTH_HEADERS.login**: Update header for your site's login form
- **AUTH_HEADERS.register**: Update header message for your site's user registration form.

Example:

```ts
export const AUTH_HEADERS = {
  login: ["Log In to access your Dashboard", "🌟"],
};
```
