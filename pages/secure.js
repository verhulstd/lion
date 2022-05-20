import { useEffect } from "react";
import { useAuthUser } from "@frontegg/nextjs";
import axios from "axios";
const Secure = () => {
  const user = useAuthUser();
  useEffect(() => {
    if (user.accessToken) {
      axios({
        method: "get",
        url: "/api/hello",
        headers: {
          Authorization: user.accessToken,
        },
      });
    }
  }, [user]);
  return <div>Logged In user: {user.email}</div>;
};

export default Secure;
