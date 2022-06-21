## init
```json
{
  "name": "next-study",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.1.6",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/node": "18.0.0",
    "@types/react": "18.0.14",
    "@types/react-dom": "18.0.5",
    "eslint": "8.18.0",
    "eslint-config-next": "12.1.6",
    "typescript": "4.7.4"
  }
}

```
## antd
> npm install --save antd

```json
{
  "antd": "^4.21.3"
}
```
> styles/globals.css

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
@import '~antd/dist/antd.css';
```
