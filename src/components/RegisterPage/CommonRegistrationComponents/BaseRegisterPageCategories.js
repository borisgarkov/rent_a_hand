import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RegisterCard from "../RegisterCard";


export default function RegisterPageCategories({
    register_categories,
    registerUrlMap,
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
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 2, lg: 5 },
                    justifyContent: 'center',
                }}>
                    {
                        register_categories.map(x => {
                            return <Link
                                key={x.category_description}
                                to={registerUrlMap[x.category_description]}
                            ><RegisterCard
                                    category_image={x.category_image}
                                    category_description={x.category_description}
                                /></Link>
                        })
                    }
                </Stack>
            </Stack>
        </>
    )
}