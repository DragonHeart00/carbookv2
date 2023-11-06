import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, Image, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Categories from '../components/Categories';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { firebase } from '../../config';
import Loading from '../components/loading';
import { ChevronRightIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Synshaller');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const catTypeRef = firebase.firestore().collection('catTypes');
    const unsubscribe = catTypeRef.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { name, image, categoryId, address, city, postNumber, country, latitude, longitude } = doc.data();
        users.push({
          id: doc.id,
          name,
          image,
          address,
          categoryId,
          city,
          postNumber,
          country,
          latitude,
          longitude,
        });
      });
      filterUsersByCategory(activeCategory, users);
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => unsubscribe();
  }, [activeCategory]);


  const filterUsersByCategory = (category, allUsers) => {
    const filtered = allUsers.filter((user) => user.categoryId === category);
    setFilteredUsers(filtered);
  };

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
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>
        {/* categories */}
        <View>
          <Categories activeCategory={activeCategory} setActiveCategory={handleCategoryChange} />
        </View>

        {loading ? (
          <Loading size="large" className="mt-16" />
        ) : (
          <View >
            <FlatList
              data={filteredUsers}
              numColumns={1}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => navigation.navigate('CatDetail', { itemName: item.name, itemImage: item.image, longitude:item.longitude,latitude:item.latitude  })}
                >
                  <View style={styles.itemContainer}>
                    <Image
                      source={{ uri: item.image }} // Provide the image URL
                      style={styles.itemImage}
                    />
                    <View style={styles.textContainer}>
                      <Text style={styles.itemHead}>{item.name}</Text>
                      <Text style={styles.itemText}>{item.address}</Text>
                      <Text style={styles.itemText}>{item.postNumber} {item.city}</Text>
                      <Text style={styles.itemText}>{item.country}</Text>

                    </View>
                    <View>
                      <ChevronRightIcon size={hp(3.2)} strokeWidth={2.2} color="#5DB075"  />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    flex: 1, // Allow the text container to expand to fill available space
    marginLeft:20,
  },
  itemImage: {
    width: 75, // Adjust the image width
    height: 75, // Adjust the image height

  },
  itemHead: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemText: {
    fontSize: 11,
  },
});
