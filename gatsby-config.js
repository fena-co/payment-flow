module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  pathPrefix: `/payment-flow`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Montserrat:wght@400,500,600,700,800'],
        display: 'swap',
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
