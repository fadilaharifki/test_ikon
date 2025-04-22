import {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../stores/store';
import {fetchDataList} from '../stores/slices/dataListSlice';
import ModalComponent from '../components/ModalComponent';
import Card from '../components/Card';
import {DataInterface} from '../interface/ListInterface';

export const DataListScreen = () => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState<{
    isVisible: boolean;
    data: DataInterface;
  }>({
    isVisible: false,
    data: {
      userId: 0,
      id: 0,
      title: '',
      body: '',
    },
  });

  const [searchQuery, setSearchQuery] = useState('');
  const {data} = useSelector((state: RootState) => state.dataList);

  useEffect(() => {
    dispatch(fetchDataList());
  }, [dispatch]);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          placeholder="Search Title..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />

        <FlatList
          data={filteredData}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={styles.containerFlatList}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => (
            <Card
              item={item}
              onPress={() => {
                setOpenModal({
                  isVisible: true,
                  data: item,
                });
              }}
            />
          )}
        />
      </View>

      <ModalComponent
        visible={openModal.isVisible}
        title={openModal.data.title}
        onClose={() => {
          setOpenModal({
            isVisible: false,
            data: {
              userId: 0,
              id: 0,
              title: '',
              body: '',
            },
          });
        }}>
        <View>
          <Text>{openModal.data.body}</Text>
        </View>
      </ModalComponent>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerFlatList: {
    padding: 20,
    gap: 16,
  },
  searchInput: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});
