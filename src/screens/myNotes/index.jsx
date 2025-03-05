import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/uı/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE} from '../../utils/router';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import {useEffect, useState} from 'react';

const MyNotes = () => {
  const navigation = useNavigation();

  const [notes, setNote] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description: 'Bu birinci notun açıklamasıdır.',
      date: '12:25',
    },
    {
      id: 2,
      title: 'React Native Developer ',
      description: 'Bu ikinci notun açıklamasıdır.',
      date: '12:25',
    },
    {
      id: 3,
      title: 'Backend Developer',
      description: 'Bu üçüncü notun açıklamasıdır.',
      date: '12:25',
    },
    {
      id: 4,
      title: 'Frontend Developer',
      description: 'Bu dördüncü notun açıklamasıdır.',
      date: '12:25',
    },
  ]);

  let note1 = {
    id: 5,
    title: 'selin',
    description: 'Bu beşnci notun açıklamasıdır.',
    date: '12:25',
  };

  let note2 = {
    id: 6,
    title: 'ali',
    description: 'Bu altıncı notun açıklamasıdır.',
    date: '12:25',
  };

  let note3 = {
    id: 7,
    title: 'altan',
    description: 'Bu yedinci notun açıklamasıdır.',
    date: '12:25',
  };

  //ekleme fonksiyonu
  const addNote = item => {
    if (item) {
      setNote([...notes, item]);
    }
  };

  //silme fonksiyonu
  const deleteNote = id => {
    const updateItems = notes.filter(item => item.id !== id);
    setNote(updateItems);
  };

  useEffect(() => {
    setTimeout(() => {
      setNote([...notes,note1,note2, note3]);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />

        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard item={item} deleteItem={item => deleteNote(item.id)} />
          )}
          keyExtractor={item => item.id.toString()}
        />

        <FloatActionButton
          // onPress={() => addNote(note2)}
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;

const styles = StyleSheet.create({});
