import { TextInput } from '@mantine/core';

export function Demo() {
  return (
    <TextInput
      variant="filled"
      radius="md"
      label="Input label"
      withAsterisk
      description="Input description"
      placeholder="Input placeholder"
    />
  );
}