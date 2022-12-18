import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { AuthButton } from "./LoginButton";
import { Logo } from "./Logo";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <Container maxW="2xl" paddingY={12}>
      <Flex justify="space-between" marginBottom={12}>
        <Logo />
        <AuthButton />
      </Flex>
      {props.children}
    </Container>
  );
};
