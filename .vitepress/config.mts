import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/kong-workshop/",
  ignoreDeadLinks: true,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/keyboard-css@1.2.4/dist/css/main.min.css",
      },
    ],
  ],
  title: "AQS's Kong workshop",
  description: "Internal training for Kong API Gateway",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get started", link: "/01-prerequisition" },
      { text: "Past Workshops", link: "/past-workshop" },
    ],

    sidebar: [
      {
        text: "Workshop",
        items: [
          { text: "TLDR;", link: "/tldr" },
          { text: "01. Prerequisition", link: "/01-prerequisition" },
          { text: "02. Installation", link: "/02-installation" },
          { text: "03. Gateway service", link: "/03-gateway-service" },
          { text: "04. Route", link: "/04-route" },
          { text: "05. Coffee break", link: "/05-coffee-break" },
          { text: "06. Plugins Introduction", link: "/06-plugins-intro" },
          { text: "07. Basic Auth", link: "/07-plugin-basic-auth" },
          { text: "08. Consumer", link: "/08-consumer" },
          { text: "09. Key Auth", link: "/09-plugin-key-auth" },
          { text: "10. Jwt", link: "/10-plugin-jwt" },
          { text: "11. OAuth2", link: "/11-plugin-oauth2" },
          { text: "12. Access controll level", link: "/12-plugin-acl" },
          { text: "13. CORS", link: "/13-plugin-cors" },
          { text: "14. Proxy-Cache", link: "/14-plugin-proxy-cache" },
          { text: "15. Rate Limit", link: "/15-plugin-rate-limit" },
          {
            text: "16. Response transformation",
            link: "/16-plugin-res-transform",
          },
          { text: "17. Upstream", link: "/17-plugin-upstream" },
          { text: "18. ACME", link: "/18-plugin-acme" },
          { text: "19. Protect Kong Manager", link: "/19-protect-kong-manager" },
          { text: "feedback", link: "/feedback" },
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/seenark/kong-workshop" },
    ],
    search: {
      provider: "local",
    },
  },
});
