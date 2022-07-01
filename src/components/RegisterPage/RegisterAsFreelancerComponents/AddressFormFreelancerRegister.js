import Grid from '@mui/material/Grid';
import BaseRegistrationForm from '../CommonRegistrationComponents/BaseRegistrationForm';
import ImageUpload from '../CommonRegistrationComponents/ImageUpload';

const registrationFields = [
    {
        type: 'text',
        textField: 'firstName',
        id: 'firstName',
        label: 'Име',
        autoComplete: 'given-name',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
    {
        type: 'text',
        textField: 'lastName',
        id: 'lastName',
        label: 'Фамилия',
        autoComplete: 'family-name',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
    {
        type: 'password',
        textField: 'password1',
        id: 'password1',
        label: 'Парола',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'password',
        textField: 'password2',
        id: 'password2',
        label: 'Потвърди парола',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'email',
        textField: 'email',
        id: 'email',
        label: 'Имейл адрес',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
    {
        type: 'text',
        textField: 'city',
        id: 'city',
        label: 'Населено място',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
]

export default function AddressFormFreelancerRegister() {
    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationForm key={index} field={x} />)
            }
            <ImageUpload uploadImageText={'Избери Профилна снимка *'} />
        </Grid>
    );
}