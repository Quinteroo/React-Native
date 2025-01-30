import React from "react";
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Image } from "react-native";
import { useFetch } from "./useFetch"; // Ruta del hook useFetch
import { MovieDBresponse } from "./movie-db.response"; // Ruta de la interfaz MovieDBresponse

const NowPlayingComponent = () => {
  const { data, loading, error } = useFetch<MovieDBresponse>(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=TU_API_KEY"
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      <FlatList
        data={data?.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieOverview}>{item.overview}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NowPlayingComponent;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  movieContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  movieInfo: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  movieOverview: {
    fontSize: 14,
    color: "#555",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
