module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-bunnynet",
      providerOptions: {
        api_key: process.env.BUNNY_API_KEY,
        storage_zone: process.env.BUNNY_STORAGE_ZONE,
        pull_zone: process.env.BUNNY_PULL_ZONE,
      },
    }
  },
  translate: {
    enabled: true,
    config: {
      // Choose one of the available providers
      provider: 'deepl',
      // Pass credentials and other options to the provider
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: '01218e44-5bfd-365e-0a13-8a16c54724c0:fx',
        // use custom api url - optional
        apiUrl: 'https://api-free.deepl.com',
        // use custom locale mapping (for example 'en' locale is deprecated so need to choose between 'EN-GB' and 'EN-US')
        localeMap: {
          // use uppercase here!
          EN: 'EN-US',
          EL: 'EL-GR',
        },
        apiOptions: {
          // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
          // note that tagHandling Mode cannot be set this way.
          // use with caution, as non-default values may break translation of markdown
          formality: 'default',
          // ...
        },
        translatedFieldTypes: [
          'string',
          { type: 'text', format: 'plain' },
          { type: 'richtext', format: 'markdown' },
          'component',
          'dynamiczone',
        ],
        // If relations should be translated (default true)
        translateRelations: true,
      },
      // other options ...
    },
  },


});
