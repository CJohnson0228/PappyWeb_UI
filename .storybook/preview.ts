import "../src/scss/global.scss"

export const globalTypes = {
  themeColor: {
    name: 'Theme Color',
    description: 'Global theme Color for components',
    defaultValue: 'red',
    toolbar: {
      icon: 'circlehollow',
      items: [
        'red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple', 'mono'
      ],
      showName: true,
    }
  },
  themeMode: {
    name: 'Theme Mode',
    description: 'Global theme mode for Components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        'light', 'dark'
      ],
      showName: true,
    }
  }
}

export type GlobalTypes = typeof globalTypes

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}