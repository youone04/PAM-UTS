import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, Alert, Pressable } from 'react-native';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const orderList = [];
const cancelList = []
const Transaksi = ({ navigation, route }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const { otherParam } = route.params;

    const handleCloseModal = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('orderList');
            const addData = jsonValue != null ? JSON.parse(jsonValue) : null;
            console.log(addData);
            // return jsonValue != null ? JSON.parse(jsonValue) : null;
            if (!jsonValue) {
                const data = [...orderList, otherParam];
                await AsyncStorage.setItem('orderList', JSON.stringify(data))
                // console.log(data)
            } else {
                const data = [...addData, otherParam];
                await AsyncStorage.setItem('orderList', JSON.stringify(data))
            }
        } catch (e) {
            console.log(e)
            // error reading value
        }
        setModalVisible(!modalVisible)
        navigation.navigate('Home')
    }

    
    const handleCancel = async() => {

        try {
            const jsonValue = await AsyncStorage.getItem('cancelList');

            const addData = jsonValue != null ? JSON.parse(jsonValue) : null;
            // return jsonValue != null ? JSON.parse(jsonValue) : null;
            if (!jsonValue) {
                const data = [...cancelList, otherParam];
                await AsyncStorage.setItem('cancelList', JSON.stringify(data))
                // console.log(data)
            } else {
                const data = [...addData, otherParam];
                await AsyncStorage.setItem('cancelList', JSON.stringify(data))
            }
        } catch (e) {
            console.log(e)
            // error reading value
        }
        navigation.navigate('Home')

    }

    return (

        <View
            style={{
                height: 100,
                padding: 20,
                backgroundColor: 'white',
                height: '100%',
            }}
        >
            <View style={{
                backgroundColor: "white",
                height: '100%',
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                padding: 20,
                elevation: 6,
            }}>



                <View style={{ margin: 16, marginBottom: 35 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>KAPALKU</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Kuota Tersedit ({otherParam.kuota})</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Rincian Tiket</Text>

                    <View style={{ width: '95%', margin: 2, height: 250, backgroundColor: '#E1E5EA', borderRadius: 5 }}>
                        <View style={[styles.container, {
                            // Try setting `flexDirection` to `"row"`.
                            flexDirection: "row", height: '50%'
                        }]}>

                            <View style={{ flex: 2 }}>
                                <Text style={{ fontWeight: 'bold' }}> From : {otherParam.from}</Text>
                                <View style={{ marginTop: 8 }}>
                                    <Text style={{ fontWeight: '700' }}> Jadwal masuk pelabuhan</Text>
                                    <Text style={{ marginTop: 8 }}>{otherParam.date}</Text>
                                    <Text style={{ marginTop: 8 }}>{otherParam.time}</Text>
                                    <View
                                        style={{
                                            borderBottomColor: 'black',
                                            borderBottomWidth: 1,
                                        }}
                                    />
                                </View>

                                <View style={{ marginTop: 8 }}>
                                    <Text style={{ fontWeight: '700' }}> Layanan</Text>
                                    <Text style={{ marginTop: 8 }}>{otherParam.service}</Text>
                                    <View
                                        style={{
                                            borderBottomColor: 'black',
                                            borderBottomWidth: 1,
                                        }}
                                    />
                                </View>
                                <View style={{ marginTop: 8 }}>
                                    <Text> Dewasa 1X</Text>

                                </View>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold' }}>To:  {otherParam.to}</Text>

                                <View style={{ marginTop: 8, height: 112.8 }}>

                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                />
                                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Rp. {otherParam.price}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                        />
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Data Pesanan : </Text>
                    <Text style={styles.label}>Nama Lengkap</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nama"
                    />
                    <Text style={styles.label}>Identitas</Text>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Pilih" value="" />
                        <Picker.Item label="laki-laki" value="laki-laki" />
                        <Picker.Item label="perempuan" value="perempuan" />
                    </Picker>
                    <Text style={styles.label}>Umur</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="20"
                    />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>

                                <Text style={styles.modalText}>PEMBAYARAN</Text>
                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>Transfer Ke Nomor Rekening</Text>
                                    <Text style={{ fontWeight: 'normal', textAlign: 'center' }}>22383367337</Text>
                                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>BANK RBI</Text>
                                </View>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => handleCloseModal()}
                                >
                                    <Text style={styles.textStyle}>Selesai</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <View style={{flexDirection:'row'}}>
                        
                        <Pressable
                            onPress={() => handleCancel()}
                        >
                            <Text style={{ fontWeight: 'bold', backgroundColor: 'red', width: 80, color: 'white', textAlign: 'center', padding: 8, borderRadius: 8, marginTop: 7 }} >Cancel</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ marginLeft:4,fontWeight: 'bold', backgroundColor: 'blue', width: 80, color: 'white', textAlign: 'center', padding: 8, borderRadius: 8, marginTop: 7 }} onPress={() => setModalVisible(true)}>Bayar</Text>
                        </Pressable>

                    </View>

                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        width: '80%',
        height: 200,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 8,
        padding: 10,
        elevation: 2,
        height: 40,
        marginTop: 10,
    },

    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    container: {
        flex: 1,
        padding: 20,
    },

    cari: {
        height: 40,
        marginTop: 90,
        borderRadius: 8,
        backgroundColor: 'red'
    },
    input: {
        height: 30,
        margin: 1,
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 6
    },
    label: {
        marginLeft: 1, fontSize: 12, color: 'rgb(134, 147, 158)', fontWeight: 'bold'
    },
    labelPicker: {
        marginLeft: 1, fontSize: 13, color: 'rgb(134, 147, 158)', fontWeight: 'bold', marginBottom: 7
    }
});


export default Transaksi;