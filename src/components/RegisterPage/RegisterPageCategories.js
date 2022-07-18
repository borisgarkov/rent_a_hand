import BaseRegisterPageCategories from './CommonRegistrationComponents/BaseRegisterPageCategories';
import register_categories from './CommonRegistrationComponents/registerCategories';

const registerUrlMap = {
    'Обяви за постоянна работа / стаж': '/register-as-firm',
    'Търся човек за проект / задача': '/register-project',
    'Искам да работя на свободна практика': '/register-as-freelancer',
}

export default function RegisterPageCategories() {

    return (
        <BaseRegisterPageCategories
            register_categories={register_categories}
            registerUrlMap={registerUrlMap}
        />
    )
}