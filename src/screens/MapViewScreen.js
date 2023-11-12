import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';


export default function MapViewScreen() {

    const navigation = useNavigation();
    const route = useRoute();
    const { itemName, longitude, latitude } = route.params;

    const [mapRegion,setMapRegion] = useState({
        latitude,
        longitude,
        latitudeDelta: 0.004,  // Decrease this value to zoom in further
        longitudeDelta: 0.004,  // Decrease this value to zoom in further
    });

    return(
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                className=" pt-4"
            >
                <View
                    className=" flex-row justify-between items-center"
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: 'lightgray',
                    }}
                >
                    <TouchableOpacity onPress={()=> navigation.goBack()} className="p-2 shadow">
                        <ChevronLeftIcon size={hp(3.2)} strokeWidth={2.2} color="#5DB075" />
                    </TouchableOpacity>
                    <Text style={{fontSize: hp(2)}} className="font-medium flex-1 text-neutral-500">
                        {itemName}
                    </Text>
                    <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-green-600 p-4 mr-3">
                        Vis vej
                    </Text>
                </View>

                <View>
                    <MapView
                      zoomControlEnabled={true}
                      showsMyLocationButton={true}
                      provider={PROVIDER_GOOGLE}
                      style={{height: hp(85), width: hp(50)}}
                      region={mapRegion}>
                        <Marker coordinate={mapRegion} title={itemName}/>

                    </MapView>

                </View>

            </ScrollView>
        </View>
    );
}
