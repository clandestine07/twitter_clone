import Feed from "@/components/Feed";
import Login from "@/components/modal/Login";
import Register from "@/components/modal/Register";

export default function Home({ pageProps }: any) {
  return (
    <>
      <Feed />
      <Register />
      <Login />
    </>
  );
}
