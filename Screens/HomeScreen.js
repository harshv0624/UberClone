import {
    Dimensions,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";

const HomeScreen = () => {
    const data=[
        {
            id:1,
            imageUrl:require('../assets/banner1.jpg')
        },

        {
            id:2,
            imageUrl:require('../assets/banner2.jpg')
        }
    ]

    const [index,setIndex]=useState(0)
    const isCrousel=useRef(null)

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS == "android" ? 25 : 0,
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 1, marginHorizontal: 15, marginVertical: 15 }}>
        <Text style={{ fontSize: 35, fontWeight: "500" }}>Uber</Text>

        <Pressable
          style={{
            backgroundColor: "#eeeeee",
            marginTop: 20,
            padding: 12,
            borderRadius: 30,
          }}
        >
          <TextInput
            placeholder="Enter pick-up location"
            style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>Suggestions</Text>
          <Pressable>
            <Text style={{ fontSize: 16, marginRight: 5 }}>See all</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between",gap:5 }}>
          <View>
            <Pressable style={{ marginTop: 15 }}>
              <Image
                source={require("../assets/trip.png")}
                style={{ width: 80, height: 70, borderRadius: 10 }}
                resizeMode="contain"
              />
            </Pressable>
            <Text style={{ alignSelf: "center", marginTop: 10,fontSize:14,fontWeight:'600' }}>Trip</Text>
          </View>

          <View>
            <Pressable style={{ marginTop: 15 }}>
              <Image
                source={require("../assets/intercity.jpg")}
                style={{ width: 80, height: 70, borderRadius: 10 }}
                resizeMode="contain"
                
              />
            </Pressable>
            <Text style={{ alignSelf: "center", marginTop: 10,fontSize:14,fontWeight:'600' }}>Intercity</Text>
          </View>

          <View>
            <Pressable style={{ marginTop: 15 }}>
              <Image
                source={require("../assets/reserve.png")}
                style={{ width: 80, height: 70, borderRadius: 10 }}
                resizeMode="contain"
              />
            </Pressable>
            <Text style={{ alignSelf: "center", marginTop: 10,fontSize:14,fontWeight:'600' }}>Rentals</Text>
          </View>

          <View>
            <Pressable style={{ marginTop: 15,backgroundColor:'#eee',borderRadius:10 }}>
              <Image
                source={require("../assets/temp.png")}
                style={{ width: 80, height: 70, borderRadius: 10 }}
                resizeMode="contain"
              />
            </Pressable>
            <Text style={{ alignSelf: "center", marginTop: 10,fontSize:14,fontWeight:'600' }}>Group Ride</Text>
          </View>



        </View>


          <View style={{alignSelf:'center',marginTop:20}}>
            <Carousel
            ref={isCrousel}
            data={data}
            renderItem={({item,index})=>(
                <Image source={item.imageUrl} style={{width:'100%',height:150,borderRadius:10}} resizeMode="contain"/>
            )}
            layout="default"
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width*0.9}
            useScrollView={true}
            automaticallyAdjustKeyboardInsets={true}
            autoplay={true}
            autoplayInterval={5000}
            />
          </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
