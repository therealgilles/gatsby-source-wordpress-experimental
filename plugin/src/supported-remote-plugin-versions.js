// this doesn't indicate which versions actually work,
// it indicates which versions we will actually support AND which versions work.
const supportedWpPluginVersions = {
  WPGraphQL: {
    version: `>=0.14.0 <2.0.0`,
    reason: null,
  },
  WPGatsby: {
    version: `>=0.7.1 <0.8.0`,
    reason: null,
  },
}

const genericDownloadMessage = `\n\n\tVisit https://github.com/wp-graphql/wp-graphql/releases and https://github.com/gatsbyjs/wp-gatsby/releases\n\tto download versions of WPGatsby and WPGraphL that satisfy these requirements.\n\n\tAlternatively you can find both of these plugins on the WordPress.org plugin repo.`

export { supportedWpPluginVersions, genericDownloadMessage }
