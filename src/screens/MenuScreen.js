import {Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function MenuScreen(){

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="space-y-5 pt-5"
      >
        <View
          className="mx-4 flex-row justify-between items-center"
        >
          <Text style={{ fontSize: hp(3.0) }} className="font-semibold text-green-600">
            Menu
          </Text>
          <Text style={{ fontSize: hp(2.0) }} className="font-semibold text-green-600">
            Log ud
          </Text>
        </View>
      </View>
    </View>
  );
}
