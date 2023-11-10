import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation, useRoute} from '@react-navigation/native';
import Loading from '../components/loading';
import Animated, { FadeInDown, } from 'react-native-reanimated';
import MapView from "react-native-maps";
import { Marker } from "react-native-svg";



export default function CatDetailScreen() {
    const navigation = useNavigation();
    const [isFavourite, setIsFavourite] = useState(false);
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const { itemName, itemImage, longitude, latitude } = route.params;
    const [mapRegion, setMapRegion] = useState({
        latitude,
        longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
    });


    useEffect(() => {
        // Fetch your data here, for example, an API call or some asynchronous operation.
        // Once the data is loaded, set loading to false.

        // Example: Simulate data loading after a delay (replace with your actual data loading logic)
        setTimeout(() => {
            setLoading(false);
        }, 500); // Simulating a 2-second delay, replace with your actual loading time.
    }, []);
    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                className=" pt-2"
            >
                <View
                    className=" flex-row justify-between items-center"
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: 'lightgray',
                        // Android shadow properties
                    }}
                >
                    <TouchableOpacity onPress={()=> navigation.goBack()} className="p-2 shadow">
                        <ChevronLeftIcon size={hp(3.2)} strokeWidth={2.2} color="#5DB075" />
                    </TouchableOpacity>
                    <Text style={{fontSize: hp(2)}} className="font-medium flex-1 text-neutral-500">
                        {itemName}
                    </Text>
                    <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)} className="p-4 mr-5">
                        <HeartIcon size={hp(3.0)} strokeWidth={3.0} color={isFavourite? "#5DB075": "gray"} />
                    </TouchableOpacity>
                </View>

                {/* recipe image */}
                <View className="flex-row justify-center">
                    <Image
                        source={{ uri: itemImage }}
                        // sharedTransitionTag={item.strMeal} // this will only work on native image (now using Image from expo-image)
                        style={{width: wp(100), height: hp(35)}}

                    />
                </View>
                {
                    loading? (
                        <Loading size="large" className="mt-16" />
                    ):(
                        <View className="px-4 flex justify-between space-y-4 pt-8">
                            {/* name and area */}
                            <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} className="space-y-2">
                                <Text style={{fontSize: hp(3)}} className="font-bold flex-1 text-neutral-700">
                                    {itemName}
                                </Text>
                                <Text style={{fontSize: hp(2)}} className="font-medium flex-1 text-neutral-500">
                                    {itemName}
                                </Text>
                            </Animated.View>

                                <MapView
                                    onPress={() => navigation.navigate('MapView', {itemName:itemName,longitude:longitude,latitude:latitude })}
                                    style={{ borderRadius: 15 }}
                                    region={mapRegion}
                                    blurRadius={30} className="h-32 w-full" >
                                    <Marker coordinate={mapRegion} title={itemName}/>
                                </MapView>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{ width: '100%', alignItems: 'center' , borderRadius: 5}}
                                className="p-2 shadow bg-green-600"
                            >
                                <Text style={{ fontSize: hp(1.8), color: '#ffff' }}>BESTIL TID</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }
            </ScrollView>
        </View>


    );
}

