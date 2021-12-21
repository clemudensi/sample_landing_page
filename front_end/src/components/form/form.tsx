import { VFC, useCallback, useState } from 'react';
import * as Styled from 'components'
import { useDebounced } from 'hooks';

type Errors = {
    emailError?: string;
    messageError?: string;
    nameError?: string;
}

type FieldInputs = ['email', 'fullName', 'message'];

interface InputProps {
    fields: {
        email: string;
        message: string;
        fullName: string;
    }
    errors: Errors
}

const Form: VFC = () => {
    const [input, setInput] = useState<InputProps>({
        errors: {
            emailError: '',
            messageError: '',
            nameError: ''
        },
        fields: {
            email: '',
            fullName: '',
            message: '',
        }
    });

    const validate = useCallback((name: string, value: string): void =>{
        switch (name) {
          case 'fullName':
            if (!value || value.trim() === "") {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     nameError: 'Name is Required'
                    },
                    fields: {
                     ...prevState.fields
                    }
                 }))
                break;
            } else {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     nameError: ''
                    },
                    fields: {
                     ...prevState.fields
                    }
                 }));
                break;
            }
          case 'email':
            if (!value) {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     emailError: 'Email is Required'
                    },
                    fields: {
                     ...prevState.fields
                    }
                }));
                break;
            } else if (
              !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
            ) {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     emailError: 'A valid email must be provided'
                    },
                    fields: {
                     ...prevState.fields
                    }
                }));
                break;
            } else {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     emailError: ''
                    },
                    fields: {
                     ...prevState.fields
                    }
                }));
                break;
            }
          case 'message':
            if (!value) {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     messageError: 'Message is Required'
                    },
                    fields: {
                     ...prevState.fields
                    }
                }));
                break;
            } else if (value.length < 20 ) {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     messageError: "'Message can't be less that 20 characters'"
                    },
                    fields: {
                     ...prevState.fields
                    }
                }));
                break;
            } else {
                setInput(prevState => ({
                    errors: {
                     ...prevState.errors,
                     messageError: ''
                    },
                    fields: {
                     ...prevState.fields
                    }
                }));
                break;
            }
          default: {
            return;
          }
        }
      }, [setInput])

      const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(prevState => ({
           errors: {
            ...prevState.errors,
            [e?.target?.name]: validate(e.target.name, e.target.value)
           },
           fields: {
            ...prevState.fields,
            [e?.target?.name]: e.target.value,
           }
        }))
    };


    const inputDebounced: InputProps = useDebounced(input, 500);
    const { email, fullName, message } = input.fields;
    const { emailError, messageError, nameError }: Errors = inputDebounced.errors;

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const { fields }: InputProps = input;
        e.preventDefault();

        const inputValueKeys = Object.keys(inputDebounced.fields) as FieldInputs;
        inputValueKeys.forEach((field) => validate(field, inputDebounced.fields[field]))

        if (fields.fullName && fields.email && fields.message) {
          const data = {
            email: fields.email,
            fullName: fields.fullName,
            message: fields.message,
          };
          window.alert(`Submit successful: ${JSON.stringify(data)}`);
        }
      };

    return (
        <Styled.FormSection>
            <Styled.FormHeader>Question? we are here to help</Styled.FormHeader>
            <Styled.FormContainer>
                    <Styled.InputGrid name='name' data-testid="error-full-name">
                        <Styled.FormLabel>Name</Styled.FormLabel>
                        <Styled.FormInput name='fullName' onChange={handleOnchange} value={fullName} type="text" />
                        <Styled.ErrorLabel message={nameError} />
                    </Styled.InputGrid>
                    <Styled.InputGrid name='email' data-testid="error-email">
                        <Styled.FormLabel>Email</Styled.FormLabel>
                        <Styled.FormInput name="email" onChange={ handleOnchange} value={email} type="email" />
                        <Styled.ErrorLabel message={emailError} />
                    </Styled.InputGrid>
                    <Styled.InputGrid name='message' width='50%' data-testid="error-message">
                        <Styled.FormLabel>Message</Styled.FormLabel>
                        <Styled.FormInput name='message' onChange={handleOnchange} value={message} type="text" />
                        <Styled.ErrorLabel message={messageError} />
                    </Styled.InputGrid>
                    <Styled.Button
                        color='#1A18F7'
                        width={4}
                        padding={10}
                        onClick={(e) => handleSubmit(e)}
                        data-testid="submit"
                    >
                        send
                    </Styled.Button>
            </Styled.FormContainer>
        </Styled.FormSection>
    )
};

export { Form }