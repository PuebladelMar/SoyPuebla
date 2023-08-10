import { ClerkProvider } from "@clerk/clerk-react";
import { esES } from "@clerk/localizations";
import User from "./User";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const UserIcon = () => {
  return (
    <ClerkProvider publishableKey={ clerkPubKey } localization={ esES }>
      <User />
    </ClerkProvider>
  );
};

export default UserIcon;
