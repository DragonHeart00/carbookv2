import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function WelcomeScreen() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();
  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + hp(5))),
      100,
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + hp(5.5))),
      300,
    );
    setTimeout(()=> navigation.navigate('tab'), 500);
  },[navigation, ring1padding, ring2padding]);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-green-600">
      {/* title and punchline */}
      <View className="flex items-center space-y-2">
        <Text
          style={{fontSize: hp(4)}}
          className="font-bold text-white tracking-widest">
          Carbook
        </Text>
      </View>
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{padding: ring2padding}}>
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{padding: ring1padding}}>
          <Image
            source={require('../../assets/images/welcome.png')}
            style={{width: hp(12), height: hp(12)}}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
}
