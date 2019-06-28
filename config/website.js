const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Enzo Zafra Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Enzo', // Alternative Site title for SEO
  siteTitleShort: 'Enzo', // short_name for manifest
  siteHeadline: 'Creating software that impacts the world', // Headline for schema.org JSONLD
  siteUrl: 'https://lorenzozafra.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'A portfolio showcasing myself, my projects and work experience',
  author: 'Enzo Zafra', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@enzozafra', // Twitter Username
  // ogSiteName: 'enzo zafra', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
