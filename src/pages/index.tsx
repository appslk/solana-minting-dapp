import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>YAKA</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
