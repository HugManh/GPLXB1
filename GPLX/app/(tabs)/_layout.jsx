import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';

const TabsLayout = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) return <Redirect href={'/(admin)/cms'} />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default TabsLayout;
