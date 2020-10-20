// const listeningToNodes = {}

const { runApisInSteps } = require("./dist/utils/run-steps")
const steps = require("./dist/steps/index")

module.exports = runApisInSteps({
  onPreInit: [steps.setErrorMap],

  createSchemaCustomization: [
    steps.setGatsbyApiToState,
    steps.ensurePluginRequirementsAreMet,
    steps.ingestRemoteSchema,
    steps.createSchemaCustomization,
  ],

  sourceNodes: [
    steps.setGatsbyApiToState,
    [
      steps.persistPreviouslyCachedImages,
      steps.sourcePreviews,
      steps.sourceNodes,
    ],
    steps.setImageNodeIdCache,
  ],

  onPostBuild: [steps.setImageNodeIdCache],

  onCreatePage: [steps.respondToPreviewWebsocket],

  onCreateDevServer: [
    steps.setupPreviewRefresher,
    steps.setImageNodeIdCache,
    steps.startPollingForContentUpdates,
  ],
})
