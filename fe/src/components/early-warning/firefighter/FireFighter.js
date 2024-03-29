import React from 'react';
import {View, Text, Image, FlatList, SectionList, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import SVG
import HeaderSvg from '../../../assets/early-warning/header.svg';
import MainSvg from '../../../assets/early-warning/main.svg';
import FooterSvg from '../../../assets/early-warning/footer.svg';

const FireFighter = ({navigation}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#F94A29', '#F94C10', '#FF1E00']}>
        <View className="w-full h-full">
          {/* Header SVG*/}
          <HeaderSvg />

          {/* Header */}
          <View className="flex-row">
            <Image
              source={require('../../../assets/logo-icon.png')}
              className="w-12 h-12"
            />
            <View>
              <Text className="text-white text-xl font-bold">
                Danger, there is a fire!!!
              </Text>
              <Text className="text-black font-bold">Emergency Situation</Text>
            </View>
          </View>

          {/* Container */}
          <View className="mx-4">
            {/* Main */}
            <View>
              {/* Main Image */}
              <View className="justify-center items-center">
                <MainSvg />
              </View>

              {/* Instructions */}
              <Text className="text-white text-lg font-bold">
                Instructions!
              </Text>
              <Text className="text-white">
                click below to Notify the user that the fire brigade is heading
                to the fire location
              </Text>
            </View>

            {/* Button */}
            <View className="flex-row items-center mt-6">
              <View
                className="w-full rounded-xl overflow-hidden"
                style={{elevation: 5}}>
                <Button
                  title="confimation"
                  color="#4ECB71"
                  onPress={() => navigation.navigate('RuteEvacuate')}
                />
              </View>
            </View>
          </View>

          {/* Footer */}
          <View className="absolute bottom-0">
            <FooterSvg />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default FireFighter;
