import BaseRegistrationTemplate from "../CommonRegistrationComponents/BaseRegistrationTemplate";
import PersonalDataReview from "../CommonRegistrationComponents/PersonalDataReview";
import AddressFormFreelancerRegister from "../RegisterAsFreelancerComponents/AddressFormFreelancerRegister";

import freelancer_img from '../../images/main_page/main_page_freelancer.jpeg';
import ProjectDescription from "../CommonRegistrationComponents/ProjectDescription";

const steps = [
    {
        label: 'Обща информация',
        content: <AddressFormFreelancerRegister />,
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


export default function RegisterProjectAsPersonForm() {
    return (
        <BaseRegistrationTemplate
            backgroundPicture={freelancer_img}
            registrationTitle={'Регистрация в \' Проекти\''}
            steps={steps}
        />
    )
}