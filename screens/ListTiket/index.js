import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBatteryEmpty} from '@fortawesome/free-solid-svg-icons'

const data = [{
  "id": "l129r0d5",
  "from": "bakauheni",
  "to": "merak",
  "price": "35.000",
  "kuota": "200",
  "date": "05/20/22",
  "time": "10:00",
},
{
  "id": "l129r1ks",
  "from": "merak",
  "to": "bakauheni",
  "price": "35.000",
  "kuota": "1000",
  "date": "08/10/22",
  "time": "8:00",
},
{
  "id": "l129r2s7",
  "from": "kamal",
  "to": "ketapang",
  "price": "45.000",
  "kuota": "500",
  "date": "01/31/22",
  "time": "9:00",
},
{
  "id": "l12a0man",
  "from": "pramuka",
  "to": "tanjung pertiwi",
  "price": "85.000",
  "kuota": "400",
  "date": "05/20/22",
  "time": "10:00",
},
{
  "id": "l12a0myw",
  "from": "kalimas",
  "to": "kalianget",
  "price": "85.000",
  "kuota": "300",
  "date": "04/20/22",
  "time": "12:00",
}
]

const ListTiket = ({ navigation, route }) => {
  const { otherParam } = route.params;

  const hasil = data.filter(({ from, to, date, time }) => {
    return (
      from.toLowerCase().includes(otherParam.from.toLowerCase()) &&
      to.toLowerCase().includes(otherParam.to.toLowerCase()) &&
      date.includes(otherParam.date) &&
      time.includes(otherParam.time)
    )
  }
  )
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: 'white',
        height: '100%',
      }}
    >
     {
       hasil.length > 0?
       <ScrollView>
       {
         hasil.map((res, i) => {
           return (
             <View 
             key={i}
             style={{
               backgroundColor: "white",
               height: 600,
               marginBottom: 25,
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
               <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Kuota Tersedit ({res.kuota})</Text>
               <View style={{ marginTop: 10 }}>
                 <Text style={{ fontWeight: 'bold' }}>Rincian Tiket</Text>

                 <View style={{ width: '95%', margin: 2, height: 250, backgroundColor: '#E1E5EA', borderRadius: 5 }}>
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
                       <Text style={{ fontWeight: 'bold' }}>To:  {res.to}</Text>

                       <View style={{ marginTop: 8, height: 112.8 }}>

                       </View>
                       <View
                         style={{
                           borderBottomColor: 'black',
                           borderBottomWidth: 1,
                         }}
                       />
                       <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{res.price}</Text>
                     </View>
                   </View>
                   <View
                     style={{
                       borderBottomColor: 'black',
                       borderBottomWidth: 1,
                     }}
                   />
                 </View>
                 <View style={{ flexDirection: 'row' }}>
                   <Text style={{ fontWeight: 'bold', flex: 2 }}>Total</Text>
                   <Text style={{ fontWeight: 'bold', flex: 1 }}>Rp. {res.price}</Text>
                 </View>

                 <View style={{ flexDirection: 'row', marginVertical: 80 }}>
                   <View style={{ flex: 3 }}><Text style={{ fontWeight: 'bold', backgroundColor: 'red', width: 80, color: 'white', textAlign: 'center', padding: 8, borderRadius: 8 }}>Kembali</Text></View>

                   <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold', backgroundColor: 'blue', width: 80, color: 'white', textAlign: 'center', padding: 8, borderRadius: 8 }} onPress={() => navigation.navigate('Transaksi',{
                   itemId: 87,
                   otherParam: { from: res.from, to: res.to, date: res.date, time: res.time,service:otherParam.service ,kuota:res.kuota, price:res.price},
               })}>Lanjut</Text></View>
                 </View>
               </View>
             </View>
           )
         })
       }
     </ScrollView>:
     <View style={{marginVertical:'50%'}}>
       <Text  style={{textAlign:'center',fontSize:50}}>
       <FontAwesomeIcon icon={faBatteryEmpty} size={50} color={'red'}/>
        
         </Text>
         <Text style={{textAlign:'center',marginTop: 10,fontWeight:'bold'}}> DATA KOSONG</Text>
       </View>
     }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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


export default ListTiket;