export default {
  buildModules: ["@nuxtjs/tailwindcss"],
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  /*
   ** Global CSS
   */
  css: ["./assets/styles/common.css"],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-svg-loader"],
};
