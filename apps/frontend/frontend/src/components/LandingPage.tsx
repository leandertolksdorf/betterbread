import { Box, Heading, Text } from "@chakra-ui/react";

export const LandingPage = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Heading as="h2" size="md">
          Bread baking made simple!
        </Heading>
        <Heading as="h3" size="md" fontWeight="normal">
          Start documenting, sharing and logging your bread recipes now!
        </Heading>
      </Box>
    </Box>
  );
};
