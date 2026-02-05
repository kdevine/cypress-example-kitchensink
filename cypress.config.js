const { defineConfig } = require('cypress')
// Import the accessibility tasks from wick-a11y plugin
const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({
  'projectId': '4b7344',
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500
  },
  // Command timeout overridden for E2E tests
  e2e: {
    setupNodeEvents(on, config) {
      // Add accessibility tasks
      addAccessibilityTasks(on);
    },
    defaultCommandTimeout: 10000
  }
})