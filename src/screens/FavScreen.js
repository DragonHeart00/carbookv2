import { Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';


export default function FavScreen(){

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
            Favoritter
          </Text>
          {/*<Text style={{ fontSize: hp(2.0) }} className="font-semibold text-green-600">*/}
          {/*  Log ud*/}
          {/*</Text>*/}
        </View>
      </View>
      <View className="flex justify-center items-center h-screen">
        <TouchableOpacity
          style={{ width: '40%', height: '5%', alignItems: 'center' , borderRadius: 5}}
          className="p-2 shadow bg-green-600"
        >
          <Text style={{ fontSize: hp(1.8), color: '#ffff' }}>LOG IN</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
