

import BaseRegistrationForm from '../CommonRegistrationComponents/BaseRegistrationTemplate';

import job_offers_img from '../../images/main_page/main_page_job_offers.jpeg';
import AddressFormFirmRegister from './AddressFormFirmRegister';

const steps = [
    {
        label: 'Адресна регистрация',
        content: <AddressFormFirmRegister />,
    },
    {
        label: 's',
        content: '',
    },
    {
        label: 'a',
        content: '',
    },
];


export default function RegisterAsFirmForm() {
    return (
        <BaseRegistrationForm
            backgroundPicture={job_offers_img}
            registrationTitle={'Регистрация за фирми'}
            steps={steps}
        />
    )
}