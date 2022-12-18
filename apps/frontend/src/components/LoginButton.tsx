import {
  Button,
  color,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  useToken,
} from "@chakra-ui/react";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useEffect, useState } from "react";

export const AuthButton = () => {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();

  const [profile, setProfile] = useState();

  const getProfile = async () => {
    const { data, error, status } = await supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .single();
    if (error) throw error;
    if (!data) return;
    setProfile(data);
  };
  useEffect(() => getProfile(), []);
  return (
    <div>
      {profile?.name}
      <Popover>
        <PopoverTrigger>
          <Button
            colorScheme="orange"
            onClick={() => (session ? supabase.auth.signOut() : undefined)}
          >
            {session ? "Sign out" : "Sign in"}
          </Button>
        </PopoverTrigger>
        {!session && (
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                }}
                view={"magic_link"}
                showLinks={false}
              />
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
};
