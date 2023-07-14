import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Movie = item => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{uri: 'https://image.tmdb.org/t/p/w500/+{item.poster_path} '}}
      />
      <View style={style.inner_container}>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.date}>{item.release_date}</Text>
        <Text style={style.average}>{item.vote_average}</Text>
        <Text style={style.count}>{item.vote_count}</Text>
        <Text style={style.overwiev}>{item.overwiev}</Text>
      </View>
    </View>
  );
};
export default Movie;

const style = StyleSheet.create({
  container: {padding: 10, flexDirection: 'row'},
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  inner_container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    fontWeight: 'normal',
  },
  average: {
    fontWeight: 'normal',
    Color: 'red',
  },
  count: {
    fontWeight: 'normal',
  },
  overwiev: {
    fontStyle: 'italic',
  },
});
