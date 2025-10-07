import { Stack } from 'expo-router';

export default function HomeGroupLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#66bb6a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen name="exam" options={{ title: 'Thi sát hạch' }} />
      <Stack.Screen name="theory" options={{ title: 'Học lý thuyết' }} />
      <Stack.Screen name="signs" options={{ title: 'Biển báo đường bộ' }} />
      <Stack.Screen name="tips" options={{ title: 'Mẹo thi hiệu quả' }} />
      <Stack.Screen name="laws" options={{ title: 'Tra cứu luật nhanh' }} />
      <Stack.Screen name="taplo" options={{ title: 'Đèn cảnh báo taplo' }} />
    </Stack>
  );
}

