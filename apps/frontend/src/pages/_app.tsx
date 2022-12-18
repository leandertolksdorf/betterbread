import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Session } from "@supabase/supabase-js";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
