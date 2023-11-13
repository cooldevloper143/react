import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
 const { pass } = useContext(UserContext)
  if (!user) return <div>Please login</div>;
// if (!password) return <div> give password</div>
  return (
    <div>
      Welcome {user.username} YOUR PASSWORD IS {pass.password}
    </div>
  );
}

export default Profile;
// 




