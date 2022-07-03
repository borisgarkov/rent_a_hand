import freelancer_image from '../images/working_woman_standing.jpeg';
import project_task_image from '../images/constructions.jpeg';
import jobs_image from '../images/business_woman.jpeg';

import BaseRegisterPageCategories from './CommonRegistrationComponents/BaseRegisterPageCategories';

const register_categories = [
    {
        category_description: 'Обяви за постоянна работа / стаж',
        category_image: jobs_image,
    },
    {
        category_description: 'Търся човек за проект / задача',
        category_image: project_task_image,
    },
    {
        category_description: 'Искам да работя на свободна практика',
        category_image: freelancer_image,
    },

];

const registerUrlMap = {
    'Обяви за постоянна работа / стаж': '/register-as-firm',
    'Търся човек за проект / задача': '/register-project',
    'Искам да работя на свободна практика': '/register-as-freelancer',
}

export default function RegisterPageCategories() {
    return (
        <BaseRegisterPageCategories register_categories={register_categories} registerUrlMap={registerUrlMap} />
    )
}