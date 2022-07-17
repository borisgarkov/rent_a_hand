import freelancer_image from '../../images/register_fizichesko_lice.jpeg';
import jobs_image from '../../images/register_juridichesko_lice.jpeg';

import BaseRegisterPageCategories from '../CommonRegistrationComponents/BaseRegisterPageCategories';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


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
    'Юридическо лице': '/register-firm-project',
    'Физическо лице': '/register-person-project',
}

export default function ProjectRegistrationCategories() {
    const [selectedCategoryValue, setSelectedCategoryValue] = useState(register_categories[0].category_description);

    const handleChange = (event) => {
        setSelectedCategoryValue(event.currentTarget.innerText);
    };

    const navigate = useNavigate();

    return (
        <BaseRegisterPageCategories
            register_categories={register_categories}
            registerUrlMap={registerUrlMap}
            selectedCategoryValue={selectedCategoryValue}
            handleChange={handleChange}
            navigate={navigate}
        />
    )
};