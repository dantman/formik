import * as React from 'react';
import { Button } from 'react-native';
import { useSubmitButton } from '@johnrom/formik-native';

interface SubmitButtonProps {
    title?: string
}

export const SubmitButton = ({ title = "Submit" }: SubmitButtonProps) => {
    const { onPress } = useSubmitButton();

    return <Button title={title} onPress={onPress} />;
}
