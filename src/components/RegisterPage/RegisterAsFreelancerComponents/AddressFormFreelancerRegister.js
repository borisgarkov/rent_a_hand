import Grid from '@mui/material/Grid';
import BaseRegistrationForm from '../CommonRegistrationComponents/BaseRegistrationForm';
import ImageUpload from '../CommonRegistrationComponents/ImageUpload';
import commonRegistrationFields from '../CommonRegistrationComponents/commonRegistrationFields';

const registrationFields = [
    ...commonRegistrationFields,
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