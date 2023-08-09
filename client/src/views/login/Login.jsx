import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  WithUser,
  // UserButton,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { dark } from '@clerk/themes';

import User from "./User";
import React from "react";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const LoginForm = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <User />
        <WithUser>
        {(user) => (
          <div>
            {user.id
              ? `Hello, ${user.id}!` 
              : "Hello there!"}
          </div>
        )}
      </WithUser>
      </SignedIn >
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};

export default LoginForm;