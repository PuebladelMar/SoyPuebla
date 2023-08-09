import { useUser, UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";
import { postUsers } from "../../redux/Actions";
import { useDispatch } from "react-redux";

export default function User() {
  const { user } = useUser();
  const dispatch = useDispatch();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      dispatch(postUsers(user.id))
    }
  }, [user, dispatch]);
  
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <UserButton />;
  }
}