import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

async function getAntfuConfig() {
  return antfu({
    stylistic: {
      quotes: 'single',
      semi: false,
    },
    ignores: ['.vite'],
    rules: {
      'max-params': 2,
      'ts/consistent-type-definitions': 'off',
      'vue/max-len': ['warn', {
        code: 135,
        ignorePattern: 'class=', // Ignore lines with Tailwind classes
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreHTMLTextContents: true,
        ignoreStrings: true,
        ignoreHTMLAttributeValues: true,
      }],
    },
  })
}

const antfuConfig = await getAntfuConfig()

export default [
  ...antfuConfig,
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.{vue,ts}'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
]
