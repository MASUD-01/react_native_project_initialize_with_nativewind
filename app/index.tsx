import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#111827",
      borderRadius: 12,
      shadowColor: "#f472b6",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 6,
      elevation: 5, // Android shadow
    },
  });
  const data = [
    {
      id: 1,
      name: "Player 001",
      age: 70,
      avatar:
        "https://i.pinimg.com/736x/1f/94/fc/1f94fcfd0707a1dfbfbccdc2160f63b1.jpg",
    },
    {
      id: 2,
      name: "Player 067",
      age: 27,
      avatar:
        "https://i.pinimg.com/564x/00/89/d0/0089d021dfb2324b149c7e55bc1980c5.jpg",
    },
    {
      id: 3,
      name: "Player 456",
      age: 30,
      avatar:
        "https://i.pinimg.com/564x/34/98/f3/3498f3eb7e174a9c0c1b420ce973f157.jpg",
    },
  ];

  return (
    <>
      <View className="p-4" style={styles.card}>
        <Text className="text-white text-xl font-bold">Hello</Text>
      </View>
      <ImageBackground
        source={{
          uri: "https://wallpapercave.com/wp/wp10432843.jpg",
        }}
        resizeMode="cover"
        className="flex-1"
      >
        <ScrollView className="flex-1 bg-black/60 p-4">
          <Text className="text-3xl font-bold mb-6 text-center text-pink-500">
            🦑 Squid Game Player Table
          </Text>

          <View className="border border-pink-600 rounded-xl overflow-hidden shadow-lg shadow-pink-400/40 bg-black/40">
            {/* Header */}
            <View className="flex-row bg-gradient-to-r from-pink-700 via-fuchsia-700 to-pink-900">
              <Text className="flex-[0.5] p-3 text-white font-bold text-center">
                #
              </Text>
              <Text className="flex-[1.5] p-3 text-white font-bold text-center">
                Avatar
              </Text>
              <Text className="flex-1 p-3 text-white font-bold text-center">
                Name
              </Text>
              <Text className="flex-1 p-3 text-white font-bold text-center">
                Age
              </Text>
            </View>

            {/* Rows */}
            {data.map((user, index) => (
              <View
                key={user.id}
                className={`flex-row items-center ${
                  index % 2 === 0 ? "bg-black/30" : "bg-black/10"
                } border-t border-pink-800`}
              >
                <Text className="flex-[0.5] p-3 text-center text-pink-200 font-medium">
                  {user.id}
                </Text>

                <View className="flex-[1.5] p-2 items-center justify-center">
                  <Image
                    source={{ uri: user.avatar }}
                    className="w-12 h-12 rounded-full border-2 border-pink-500"
                  />
                </View>

                <Text className="flex-1 text-center text-white">
                  {user.name}
                </Text>
                <Text className="flex-1 text-center text-white">
                  {user.age}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
