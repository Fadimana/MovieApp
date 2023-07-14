import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native';
import Movie from './Movie';
import axios from 'axios';

const URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=f15c63f6bec2f095acbb2f5fbdc5032e';

function MovieCard() {
  const [UserList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    axios.get(URL).then(response => {
      setLoading(false);
      setUserList(response.data);
    });
  }
  const renderUser = ({item}) => (
    <Movie
      title={item.title}
      date={item.release_date}
      average={item.vote_average}
      count={item.vote_count}
      overwiev={item.overwiev}
      path={item.poster_path}
    />
  );
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <Text>POPULAR MOVIE</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={UserList} renderItem={renderUser} />
      )}
      <Button onPress={fetchData} title="Fetch Data" />
    </View>
  );
}
export default MovieCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
