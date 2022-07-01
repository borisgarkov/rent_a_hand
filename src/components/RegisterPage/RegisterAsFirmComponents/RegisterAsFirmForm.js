

import BaseRegistrationForm from '../CommonRegistrationComponents/BaseRegistrationTemplate';

import job_offers_img from '../../images/main_page/main_page_job_offers.jpeg';
import AddressFormFirmRegister from './AddressFormFirmRegister';
import PersonalDataReview from '../CommonRegistrationComponents/PersonalDataReview';

const steps = [
    {
        label: 'Адресна регистрация',
        content: <AddressFormFirmRegister />,
    },
    {
        label: 'Административна информация',
        content: '',
    },
    {
        label: 'Политика за поверителност',
        content: <PersonalDataReview />,
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