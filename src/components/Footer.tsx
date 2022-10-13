import { Box } from "@mui/material";

const Footer = () => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="12px"
            >
                <span>
                    Copyright {new Date().getFullYear()} Himaforka UAJY
                </span>
            </Box>
        </>
    );
};

export default Footer;
