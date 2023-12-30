import { html } from "hono/html";

const Layout = (props: { title: string; children?: any }) => {
  return html`
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${props.title}</title>
        <link href="http://localhost:8003/public/style.css" rel="stylesheet" />
      </head>
      <body class="container mx-auto">
        ${props.children}
      </body>
    </html>
  `;
};
export default Layout;
