import { Editable, EditText, Text } from '@repo/ui';
import { ClientText } from './ClientText';
import React from 'react';
import { getComponentById } from '@repo/db';

export const ECText = async () => {
  const isAdmin = true;

  const component = await getComponentById(
    '55555555-5555-5555-5555-555555555554',
  );
  const textValue = component?.content?.value;

  if (!textValue) return null;

  if (isAdmin) {
    return (
      <Editable
        initialValue={textValue}
        editComponent={EditText}
        displayComponent={ClientText}
      />
    );
  }

  return <Text value="Hello world" />;
};
