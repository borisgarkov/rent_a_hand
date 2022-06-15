import { Card, Divider, Stack } from "@mui/material";

import { ProfileHeading } from "./ProfilePageComponents/ProfileHeading";
import { UserJobSection } from "./ProfilePageComponents/UserJobSection";
import { UserResumeSection } from "./ProfilePageComponents/UserResumeSection";
import { UserSkillsSection } from "./ProfilePageComponents/UserSkillsSection";
import { UserSalaryAndEducationSection } from "./ProfilePageComponents/UserSalaryAndEducationSection";
import { SaveUserToFavouriteSection } from "./ProfilePageComponents/SaveUserToFavouriteSection";

import BackToTopButton from '../CommonItems/BackToTopButton';

export default function ProfilePage() {
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
                    <UserSalaryAndEducationSection />
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