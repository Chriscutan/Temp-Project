import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { View,  } from "react-native";

const Initial = () => {
  const user = "";
  const router = useRouter();

  useEffect(() => {
    if(!user){
      router.replace('/login');
    }else{
      router.replace('/screens/home');
    }
  }, [user])

  return <Slot />
}


function RootLayoutNav() {
  return (
    <View>
      <Initial />
    </View>
  );
}

export default RootLayoutNav;

