import { Box } from "@chakra-ui/layout";
import { FC } from "react";
import NextImage from "next/image";

interface ISidebarProps {}

const Sidebar: FC<ISidebarProps> = (props) => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingY="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
