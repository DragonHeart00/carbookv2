import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react';
import { ChevronRightIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';


export default function SearchScreen(){

  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [mapRegion,setMapRegion] = useState({
    latitude:55.742360056765946,
    longitude:12.351474509891041,
    latitudeDelta: 0.004,  // Decrease this value to zoom in further
    longitudeDelta: 0.004,  // Decrease this value to zoom in further
  });
  const [itemlist, setItemlist] = useState([]);
  useEffect(() => {
    const catTypeRef = firebase.firestore().collection('catTypes');
    const unsubscribe = catTypeRef.onSnapshot((querySnapshot) => {
      const itemList = [];
      querySnapshot.forEach((doc) => {
        const { name, image, categoryId, address, city, postNumber, country, latitude, longitude } = doc.data();
        itemList.push({
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
      setItemlist(itemList);
      updateMapRegion(itemList);
    });
        return () => unsubscribe();
  }, []);


  const updateMapRegion = (items) => {
  const coordinates = items.map((item) => ({
    latitude: item.latitude,
    longitude: item.longitude,
  }));
  if (coordinates.length > 0) {
    const minLat = Math.min(...coordinates.map((coord) => coord.latitude));
    const maxLat = Math.max(...coordinates.map((coord) => coord.latitude));
    const minLng = Math.min(...coordinates.map((coord) => coord.longitude));
    const maxLng = Math.max(...coordinates.map((coord) => coord.longitude));

    const newRegion = {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLng + maxLng) / 2,
      latitudeDelta: maxLat - minLat + 0.01,
      longitudeDelta: maxLng - minLng + 0.01,
    };
    setMapRegion(newRegion);
  }
};

  const filteredItems = itemlist.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="space-y-5 pt-5"
        style={{
          paddingBottom: 10, // Add padding to the bottom of the view to create space between the line
          borderBottomWidth: 1, // Add the border to create the line
          borderBottomColor: 'lightgray', // Set the color of the line
        }}
      >
        <View
          className="mx-4 flex-row justify-between items-center"
        >
          <Text style={{ fontSize: hp(3.0) }} className="font-semibold text-green-600">
            Søg
          </Text>
          <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[2px] " style={{width:'75%' , height:'95%'}}>
            <TextInput
              placeholder="Tjek Bilen"
              placeholderTextColor="gray"
              style={{ fontSize: hp(1.7) }}
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <View className="bg-white rounded-full p-3">
              <MagnifyingGlassIcon size={hp(2.0)} strokeWidth={2} color="gray" />
            </View>
          </View>
        </View>
      </View>
      <View>
        <MapView
          style={{ borderRadius: 30, width: '94%' }}
          region={mapRegion}
          className="m-3 h-32"
        >
          {itemlist.map((item) => (
            <Marker
              key={item.id}
              coordinate={{ latitude: item.latitude, longitude: item.longitude }}
              title={item.name}
            />
          ))}
        </MapView>

      </View>

      <View >
        <FlatList
          data={filteredItems}
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
                  <Text style={styles.itemCat}>{item.categoryId}</Text>
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
  itemCat: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemText: {
    fontSize: 11,
  },
});
