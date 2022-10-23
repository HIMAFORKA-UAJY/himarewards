import { FC } from "react";
import { Typography } from "@mui/material";

const Footer: FC = () => {
    return (
        <>
            <Typography align="center" variant="body1" component="span">
                <strong>
                    Copyright {new Date().getFullYear()} Himaforka UAJY
                </strong>
            </Typography>
        </>
    );
};

export default Footer;
