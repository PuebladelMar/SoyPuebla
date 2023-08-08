import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const LoginForm = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div>Hello from clerk</div>
    </ClerkProvider>
  );
};

export default LoginForm;