import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, Image, TextInput } from 'react-native';
import Categories from '../components/Categories';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Synshaller');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="space-y-5 pt-14"
      >
        <View
          className="mx-4 flex-row justify-between items-center"
        >
          <Text style={{ fontSize: hp(3.0) }} className="font-semibold text-green-600">
            Carbook
          </Text>
          <Text style={{ fontSize: hp(2.0) }} className="font-semibold text-green-600">
            Log in
          </Text>
        </View>
        {/* search bar */}
        <View className=" flex-row items-center p-[6px]"
              style={{
                paddingBottom: 5,
                borderBottomWidth: 6,
                borderBottomColor: 'lightgray',
              }}
        >
          <TextInput
            placeholder="Hvad leder du efter?"
            placeholderTextColor="gray"
            style={{ fontSize: hp(1.9) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            {/*<MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />*/}
          </View>
        </View>
        {/* categories */}
        <View>
          <Categories activeCategory={activeCategory} setActiveCategory={handleCategoryChange} />
        </View>
      </View>

    </View>
  );
}
