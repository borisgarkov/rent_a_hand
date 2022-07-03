import Grid from "@mui/material/Grid";
import BaseRegistrationForm from "../CommonRegistrationComponents/BaseRegistrationForm";
import commonRegistrationFields from "../CommonRegistrationComponents/commonRegistrationFields";


const registrationFields = [
    ...commonRegistrationFields,
    {
        type: 'tel',
        textField: 'phone',
        id: 'phone',
        label: 'Телефон за връзка',
        autoComplete: 'phone',
        required: true,
        displaySizeProps: {
            xs: 12,
            sm: 6,
        }
    },
];

export default function AdministrativeInfo() {
    return (
        <Grid container spacing={3}>
            {
                registrationFields.map((x, index) => <BaseRegistrationForm key={index} field={x} />)
            }
        </Grid>
    )
}