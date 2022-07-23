import { Card, Divider, Stack } from "@mui/material";

import { ProfileHeading } from "./UserProfilePageComponents/ProfileHeading";
import { UserJobSection } from "./UserProfilePageComponents/UserJobSection";
import { UserResumeSection } from "./UserProfilePageComponents/UserResumeSection";
import { UserSkillsSection } from "./UserProfilePageComponents/UserSkillsSection";
import { UserSalaryAndEducationSection } from "./UserProfilePageComponents/UserSalaryAndEducationSection";
import { SaveUserToFavouriteSection } from "./UserProfilePageComponents/SaveUserToFavouriteSection";

import BackToTopButton from '../CommonItems/BackToTopButton';

import userData from './UserProfilePageComponents/testUser';
import { useState } from "react";

export default function UserProfilePage() {

    const [currentUser, setCurrentUser] = useState(userData);

    const updateUserInfo = (info) => {
        setCurrentUser(info);
    };

    return (
        <>
            <ProfileHeading />
            <Card sx={{
                maxWidth: 950,
                margin: 'auto',
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row',
                },

                marginBottom: 2
            }}>
                <Stack sx={{
                    padding: 1,
                    flexGrow: 1,
                }}>
                    <UserSalaryAndEducationSection updateUserInfo={updateUserInfo} currentUser={currentUser} />
                </Stack>

                <Divider orientation="vertical" flexItem={true} />

                <Stack sx={{
                    flexBasis: '70%',
                }}>
                    <UserJobSection />
                    <Divider />
                    <UserResumeSection />
                    <Divider />
                    <UserSkillsSection />
                </Stack>
            </Card>

            <SaveUserToFavouriteSection />
            <BackToTopButton />
        </>
    )
}