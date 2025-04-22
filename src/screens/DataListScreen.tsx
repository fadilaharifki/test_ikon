import {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../stores/store';
import {fetchDataList} from '../stores/slices/dataListSlice';
import ModalComponent from '../components/ModalComponent';
import Card from '../components/Card';

export const DataListScreen = () => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState<any>({
    isVisible: false,
    data: {},
  });
  console.log(openModal, 'masuk');

  const {data, isLoading} = useSelector((state: RootState) => state.dataList);

  useEffect(() => {
    dispatch(fetchDataList());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
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
        onClose={() => {
          setOpenModal({
            isVisible: false,
            data: {},
          });
        }}>
        <View>
          <Text>{openModal.data.title}</Text>
          <Text>{openModal.data.body}</Text>
        </View>
      </ModalComponent>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  containerFlatList: {
    padding: 20,
    gap: 16,
  },
});
