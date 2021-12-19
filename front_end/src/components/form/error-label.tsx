import { VFC } from 'react';
import { FormErrorLabel } from 'components';

interface ErrorMessage {
    message?: string;
}

const ErrorLabel: VFC<ErrorMessage> = ({ message }) => {
    return (
        <>
            {
                message &&
                <FormErrorLabel>{message}</FormErrorLabel>
            }
        </>
    )
};

export { ErrorLabel };