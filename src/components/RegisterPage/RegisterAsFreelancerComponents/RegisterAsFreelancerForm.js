import AddressFormFreelancerRegister from './AddressFormFreelancerRegister';
import SkillsEducationFormFreelancerRegister from './SkillsEducationFormFreelancerRegister';
import PolicyFreelancerRegister from './PolicyFreelancerRegister';

import freelancer_img from '../../images/main_page/main_page_freelancer.jpeg';

import BaseRegistrationForm from '../BaseRegistrationForm';

const steps = [
    {
        label: 'Обща информация',
        content: <AddressFormFreelancerRegister />,
    },
    {
        label: 'Умения и образование',
        content: <SkillsEducationFormFreelancerRegister />,
    },
    {
        label: 'Политика за поверителност',
        content: <PolicyFreelancerRegister />,
    },
];

export default function RegisterAsFreelancerForm() {
    return (
        <BaseRegistrationForm
            backgroundPicture={freelancer_img}
            registrationTitle={'Регистрация в \' Таланти\''}
            steps={steps}
        />
    );
}
