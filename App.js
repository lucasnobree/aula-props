import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Lista } from './src/components/Lista';

const data = [
{ key: 1, name: 'Davy Woolley', funcao: '+55 (081) 99999-9999', imagem:'https://forbes.com.br/wp-content/uploads/2023/01/LIFE_Kobe_Bryant_celebra-768x512.jpg'},
{ key: 2, name: 'GuizGuizess', funcao: '+55 (081) 99999-9999', imagem: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/12/316500764-595935365633385-649521050041578142-n.jpg'},
{ key: 3, name: 'Lucas Nobre', funcao: '+55 (081) 99999-9999', imagem: 'https://i.em.com.br/UCf-MiUZI1xTxEqcWzmkmSoYzVY=/820x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/11/21/1423434/neymar_1_32099.jpg'},
{ key: 4, name: 'Leleo', funcao: '+55 (081) 99999-9999', imagem: 'https://tntsports.com.br/__export/1680798778827/sites/esporteinterativo/img/2023/04/06/messi-psg-gettyimages-1430750043.jpg_554688468.jpg'},

]

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Agenda telefônica"/>
      <Lista data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
