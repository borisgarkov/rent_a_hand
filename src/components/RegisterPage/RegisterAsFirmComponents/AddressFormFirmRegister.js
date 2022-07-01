import { Grid } from "@mui/material";
import BaseRegistrationForm from "../CommonRegistrationComponents/BaseRegistrationForm";
import ImageUpload from "../CommonRegistrationComponents/ImageUpload";

const registrationFields = [
    {
        type: 'text',
        textField: 'bulstat',
        id: 'bulstat',
        label: 'ЕИК/БУЛСТАТ',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'name-bulgarian',
        id: 'name-bulgarian',
        label: 'Име на Компанията (на Кирилица)',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'name-latin',
        id: 'name-latin',
        label: 'Име на Компанията (на Латиница)',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
    {
        type: 'text',
        textField: 'address',
        id: 'address',
        label: 'Адрес на компанията по регистрация',
        autoComplete: '',
        required: true,
        displaySizeProps: {
            xs: 12,
        }
    },
]

export default function AddressFormFirmRegister() {
    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationForm key={index} field={x} />)
            }
            <ImageUpload uploadImageText={'Прикачи фирмено лого *'} />
        </Grid>
    )
}