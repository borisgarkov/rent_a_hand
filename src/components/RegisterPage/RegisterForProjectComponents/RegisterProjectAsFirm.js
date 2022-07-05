

import BaseRegistrationForm from '../CommonRegistrationComponents/BaseRegistrationTemplate';

import job_offers_img from '../../images/main_page/main_page_job_offers.jpeg';
import PersonalDataReview from '../CommonRegistrationComponents/PersonalDataReview';
import ProjectDescription from '../CommonRegistrationComponents/ProjectDescription';
import AddressFormFirmRegister from '../RegisterAsFirmComponents/AddressFormFirmRegister';
import AdministrativeInfo from '../RegisterAsFirmComponents/AdministrativeInfo';

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
        label: 'Описание на проекта',
        content: <ProjectDescription />,
    },
    {
        label: 'Политика за поверителност',
        content: <PersonalDataReview />,
    },
];


export default function RegisterProjectAsFirm() {
    return (
        <BaseRegistrationForm
            backgroundPicture={job_offers_img}
            registrationTitle={'Регистрация за фирми'}
            steps={steps}
        />
    )
}