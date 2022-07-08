import { Button, Stack, Typography } from "@mui/material";
import RegisterCard from "../RegisterCard";


export default function RegisterPageCategories({
    register_categories,
    registerUrlMap,
    selectedCategoryValue,
    handleChange,
    navigate
}) {

    return (
        <>
            <Stack sx={{
                maxWidth: '80%',
                margin: { xs: '50px auto', lg: '100px auto 0' },
                alignItems: 'center',
            }} spacing={5}>
                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap={1}>
                    <Typography variant='h4'>Присъедини се към</Typography>
                    <Typography variant='h4' sx={{ color: 'primary.main' }}>Rent A Hand</Typography>
                </Stack>

                <Stack sx={{
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: 2, lg: 10 },
                    justifyContent: 'center',
                }}>
                    {
                        register_categories.map(x => {
                            return <RegisterCard
                                key={x.category_description}
                                selectedCategoryValue={selectedCategoryValue}
                                handleChange={handleChange}
                                category_image={x.category_image}
                                category_description={x.category_description}
                            />
                        })
                    }
                </Stack>
                <Button
                    variant='contained'
                    sx={{ maxWidth: 400 }}
                    onClick={() => {
                        navigate(registerUrlMap[selectedCategoryValue])
                    }}
                >
                    Регистрация в "{selectedCategoryValue}"
                </Button>
            </Stack>
        </>
    )
}