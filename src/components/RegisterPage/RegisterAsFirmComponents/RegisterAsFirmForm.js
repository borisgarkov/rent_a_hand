import AddressFormFreelancerRegister from '../RegisterAsFreelancerComponents/AddressFormFreelancerRegister';
import SkillsEducationFormFreelancerRegister from '../RegisterAsFreelancerComponents/SkillsEducationFormFreelancerRegister';
import PolicyFreelancerRegister from '../RegisterAsFreelancerComponents/PolicyFreelancerRegister';

import BaseRegistrationForm from '../BaseRegistrationForm';

import job_offers_img from '../../images/main_page/main_page_job_offers.jpeg';

const steps = [
    {
        label: '',
        content: '',
    },
    {
        label: '',
        content: '',
    },
    {
        label: '',
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