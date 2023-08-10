import { useUser, UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";
// import { postUsers } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./User.css";
import userIcon from "../../assets/images/user_icon.png";
import "./UserIcon.css";

export default function User() {
  const { user } = useUser();
  const dispatch = useDispatch();
  const { isSignedIn, isLoaded } = useUser();
  useEffect(() => {
    if (user) {
      // dispatch(postUsers(user.id));
    }
  }, [user, dispatch]);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <div className="button-container">
        <Link to="https://worthy-insect-17.accounts.dev/sign-in">
          <button>
            <img src={`${userIcon}`} alt="Icono de usuario por defecto" />
          </button>
        </Link>
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div className="user-container">
        <UserButton />
      </div>
    );
  }
}