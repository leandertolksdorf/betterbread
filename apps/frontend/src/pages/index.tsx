import { useSession } from "@supabase/auth-helpers-react";
import { LandingPage } from "../components/LandingPage";
import { Layout } from "../components/Layout";
import { RecipeOverview } from "../components/RecipeOverview";

const Home = () => {
  const session = useSession();
  return <Layout>{session ? <RecipeOverview /> : <LandingPage />}</Layout>;
};

export default Home;
