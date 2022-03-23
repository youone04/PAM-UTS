import React, { useState, useRef } from 'react';
import { View, Button, Platform, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

const Home = ({ navigation }) => {
    const [date, setDate] = useState(new window.Date());
    const [mode, setModeDate] = useState('date');
    const [showDate, setShowDate] = useState(false);
    const [service, setService] = useState();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const onChange = (event, selectedDate) => {
        // console.log('selectedDate',selectedDate)
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showModeDate = currentMode => {
        setShowDate(true);
        setModeDate(currentMode);
    };

    const showDatepicker = () => {
        showModeDate('date');
    };

    const showTimepicker = () => {
        showModeDate('time');
    };

    const waktu = `${date.toTimeString().substring(0, 8).split(':')[0] - 7}:${date.toTimeString().substring(0, 8).split(':')[1]}`
    //    console.log(service)
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
                    <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>
                        KAPALKU
                    </Text>
                </View>
                <Text style={styles.label}>Pelabuhan Awal</Text>
                <TextInput
                    onChange={(e) => setFrom(e.nativeEvent.text)}
                    style={styles.input}
                    placeholder="Pelabuhan awal"
                    autoFocus={true}
                />
                <Text style={styles.label}>Pelabuhan Tujuan</Text>
                <TextInput
                    onChange={(e) => setTo(e.nativeEvent.text)}
                    style={styles.input}
                    placeholder="Pelabuhan awal"
                />
                <View style={{ marginLeft: 8, marginBottom: 25 }}>
                    <Text style={{ fontSize: 17, color: 'rgb(134, 147, 158)', fontWeight: 'bold' }}>Kelas layanan</Text>
                    <Picker
                        selectedValue={service}
                        onValueChange={(itemValue, itemIndex) =>
                            setService(itemValue)
                        }>
                        <Picker.Item label="Pilih Layanan" value="" />
                        <Picker.Item label="express" value="Express" />
                        <Picker.Item label="preimium" value="Premium" />
                    </Picker>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={styles.labelPicker}>Tangal Masuk</Text>
                    <Button style={styles.button} color='#39AEA9' onPress={showDatepicker} title={date.toLocaleDateString()} />
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={styles.labelPicker}>Jam Masuk</Text>
                    <Button style={styles.button} color='#39AEA9' onPress={showTimepicker} title={waktu} />
                </View>

                {showDate && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

                <Button color="#557B83" onPress={() => navigation.navigate('ListTiket', {
                    itemId: 86,
                    otherParam: { from, to, date: date.toLocaleDateString(), time: waktu, service },
                })} title="Search" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        alignItems: "left",
        marginLeft: 10,
        height: 50
    },
    button: {
        marginLeft: 12,
    },
    cari: {
        height: 40,
        marginTop: 90,
        borderRadius: 8,
        backgroundColor: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 6
    },
    label: {
        marginLeft: 12, fontSize: 17, color: 'rgb(134, 147, 158)', fontWeight: 'bold'
    },
    labelPicker: {
        marginLeft: 12, fontSize: 17, color: 'rgb(134, 147, 158)', fontWeight: 'bold', marginBottom: 7
    }
});


export default Home;