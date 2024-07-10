import Feed from "@/components/Feed";
import Login from "@/components/modal/Login";
import Register from "@/components/modal/Register";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster/>
      <Feed />
      <Register />
      <Login />
    </>
  );
}