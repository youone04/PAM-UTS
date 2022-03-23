import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBatteryEmpty} from '@fortawesome/free-solid-svg-icons'
const OrderListCancel = () => {
    const [dataList , setDataList] = useState([]);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('cancelList');

            const data = jsonValue != null ? JSON.parse(jsonValue) : null;
            if(data){
                setDataList(data)
            }
        } catch (e) {
            console.log(e)
            // error reading value
        }
    }

    useEffect(() => {
        getData();

    }, []);

    console.log(dataList)

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

            }}>
                {
                     dataList.length < 1?
                     <View style={{marginVertical:'50%'}}>
                     <Text  style={{textAlign:'center',fontSize:50}}>
                     <FontAwesomeIcon icon={faBatteryEmpty} size={50} color={'red'}/>
                      
                       </Text>
                       <Text style={{textAlign:'center',marginTop: 10,fontWeight:'bold'}}> DATA KOSONG</Text>
                     </View>:
                     <>
                     <View style={{ margin: 16, marginBottom: 35 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Riwayat Pembatalan Pesanan</Text>
                </View>
                <View style={{ marginTop: 0 }}>

                    <ScrollView>
                        {
                           dataList.map((res,i) => {
                                return (
                                    <View key={i} style={{ width: '95%', margin: 2,marginTop: 10, height: 250, backgroundColor: '#E1E5EA', borderRadius: 5 }}>
                                        <View style={[styles.container, {
                                            // Try setting `flexDirection` to `"row"`.
                                            flexDirection: "row", height: '50%'
                                        }]}>

                                            <View style={{ flex: 2 }}>
                                                <Text style={{ fontWeight: 'bold' }}> From : {res.from}</Text>
                                                <View style={{ marginTop: 8 }}>
                                                    <Text style={{ fontWeight: '700' }}> Jadwal masuk pelabuhan</Text>
                                                    <Text style={{ marginTop: 8 }}>{res.date}</Text>
                                                    <Text style={{ marginTop: 8 }}>{res.time}</Text>
                                                    <View
                                                        style={{
                                                            borderBottomColor: 'black',
                                                            borderBottomWidth: 1,
                                                        }}
                                                    />
                                                </View>

                                                <View style={{ marginTop: 8 }}>
                                                    <Text style={{ fontWeight: '700' }}> Layanan</Text>
                                                    <Text style={{ marginTop: 8 }}>{res.service}</Text>
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
                                                <Text style={{ fontWeight: 'bold' }}>To:  {res.to}</Text>

                                                <View style={{ marginTop: 8, height: 129.5 }}>

                                                </View>
                                                <View
                                                    style={{
                                                        borderBottomColor: 'black',
                                                        borderBottomWidth: 1,
                                                    }}
                                                />
                                                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Rp. {res.price}</Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                borderBottomColor: 'black',
                                                borderBottomWidth: 1,
                                            }}
                                        />
                                    </View>
                                )
                            })
                        }
                    </ScrollView>

                </View>
                     </>
                }
                
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


export default OrderListCancel;