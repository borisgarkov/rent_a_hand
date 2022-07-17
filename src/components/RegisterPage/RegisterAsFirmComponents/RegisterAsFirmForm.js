import BaseRegistrationForm from '../CommonRegistrationComponents/BaseRegistrationTemplate';

import AddressFormFirmRegister from './AddressFormFirmRegister';
import PersonalDataReview from '../CommonRegistrationComponents/PersonalDataReview';
import AdministrativeInfo from './AdministrativeInfo';
import { useState } from 'react';

const steps = [
    {
        label: 'Адресна регистрация',
        content: <AddressFormFirmRegister />,
    },
    {
        label: 'Административна информация',
        content: <AdministrativeInfo />,
    },
    {
        label: 'Политика за поверителност',
        content: <PersonalDataReview />,
    },
];


export default function RegisterAsFirmForm() {
    const [formData, setFormData] = useState({
        'bulstat': null,
        'name-bulgarian': null,
        'name-latin': null,
        'address': null,
        'business-sector': null,
        'website': null,
        'image': null,
        'name': null,
        'firstName': null,
        'lastName': null,
        'password1': null,
        'password2': null,
        'email': null,
        'phone': null,
    })

    const handleFormDataSubmit = (newData) => {
        console.log(newData);
        setFormData(newData);
    }

    return (
        <BaseRegistrationForm
            formData={formData}
            handleFormDataSubmit={handleFormDataSubmit}
            registrationTitle={'Регистрация за фирми'}
            steps={steps}
        />
    )
}