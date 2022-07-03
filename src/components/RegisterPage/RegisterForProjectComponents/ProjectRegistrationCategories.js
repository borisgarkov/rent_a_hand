import freelancer_image from '../../images/working_woman_standing.jpeg';
import jobs_image from '../../images/business_woman.jpeg';

import BaseRegisterPageCategories from '../CommonRegistrationComponents/BaseRegisterPageCategories';


const register_categories = [
    {
        category_description: 'Юридическо лице',
        category_image: jobs_image,
    },
    {
        category_description: 'Физическо лице',
        category_image: freelancer_image,
    },
];

const registerUrlMap = {
    'Юридическо лице': '/register-as-firm',
    'Физическо лице': '/register-person-project',
}

export default function ProjectRegistrationCategories() {
    return (
        <BaseRegisterPageCategories register_categories={register_categories} registerUrlMap={registerUrlMap} />
    )
};