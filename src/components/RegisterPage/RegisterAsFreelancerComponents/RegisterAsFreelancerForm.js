import AddressFormFreelancerRegister from './AddressFormFreelancerRegister';
import SkillsEducationFormFreelancerRegister from './SkillsEducationFormFreelancerRegister';
import PersonalDataReview from '../CommonRegistrationComponents/PersonalDataReview';

import freelancer_img from '../../images/main_page/main_page_freelancer.jpeg';

import BaseRegistrationTemplate from '../CommonRegistrationComponents/BaseRegistrationTemplate';

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
        content: <PersonalDataReview />,
    },
];

export default function RegisterAsFreelancerForm() {
    return (
        <BaseRegistrationTemplate
            backgroundPicture={freelancer_img}
            registrationTitle={'Регистрация в \' Таланти\''}
            steps={steps}
        />
    );
}
