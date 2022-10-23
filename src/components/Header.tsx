import { FC } from "react";
import { Typography } from "@mui/material";

const Header: FC = () => {
    return (
        <>
            <Typography align="center" variant="h2">
                Leaderboard HIMA Rewards
            </Typography>
            <Typography align="center" variant="subtitle1">
                HIMA Rewards merupakan program kerja dari Himaforka UAJY yang bertujuan untuk menghitung jumlah poin yang dikumpulkan oleh mahasiswa informatika yang aktif dan ikut berpartisipasi dalam kegiatan yang di adakan oleh Himaforka.
            </Typography>
            <img src="/assets/images/logo.png" alt="Logo HIMAFORKA" width="180" />
        </>
    );

};

export default Header;
