import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from '../ItemLista';

export function Lista(props) {
  return (
    <FlatList
    data={props.data}
    renderItem={({item}) => (
        <ListItem name={item.name} funcao={item.funcao} imagem={item.imagem}/>
        )}
        keyExtractor={item => item.key}
        style={styles.container}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});