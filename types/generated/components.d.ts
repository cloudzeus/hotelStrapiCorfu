import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactInformationContactInformation extends Schema.Component {
  collectionName: 'components_contact_information_contact_informations';
  info: {
    displayName: 'contact information';
    icon: 'phone';
  };
  attributes: {
    contactName: Attribute.String &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    phone: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact-information.contact-information': ContactInformationContactInformation;
    }
  }
}
