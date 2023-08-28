

import React, {useState} from 'react';
import {
  SafeAreaView, Image
} from 'react-native';

const App = () => {
    const [imageSource, setImageSource] = useState({uri: 'http://example.com'});


    return (

         <SafeAreaView>
               <Image

                 source={imageSource}
                   style={{width:'100%', height:'100%', backgroundColor:'red'}}
                   resizeMode={'center'}
                   onError= {()=>{
                    console.log('Error has been detected ');
                    setImageSource(require('/Users/tommylinder/Desktop/components/assets/image/cake.png'));

                   }}
               />
               <Image

                     source={{uri:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"}}
                    style={{width:200, height:100}}
                    resizeMode={'stretch'}
              />




    </SafeAreaView>
   );


};


export default App;
