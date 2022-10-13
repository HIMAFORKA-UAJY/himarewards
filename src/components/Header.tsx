import { Typography, Box } from "@mui/material";

const Header = () => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="12px"
            >
                <img src="/assets/images/logo.png" alt="Logo HIMAFORKA" width="180" />
                <Typography variant="h4">
                    Leaderboard HIMA Rewards
                </Typography>
                <div>
                    HIMA Rewards merupakan program kerja dari Himaforka UAJY yang bertujuan untuk menghitung jumlah poin yang dikumpulkan oleh mahasiswa informatika yang aktif dan ikut berpartisipasi dalam kegiatan yang di adakan oleh Himaforka.
                </div>
            </Box>
        </>
    );

};

export default Header;
