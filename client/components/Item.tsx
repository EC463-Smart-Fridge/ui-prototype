import React from 'react'
import { Text, View, Pressable } from "react-native"

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Item = (name: string, exp: string, hasExp: boolean, handler: (item:any)=>void) => {
    return (
        <View 
            style={{
                width: '100%',
                height: 64,
                backgroundColor: 'lightgray',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
                marginBottom: 10
            }}
        >
            <Text
                style={{
                    height: '100%',
                    textAlignVertical: 'center',
                    fontSize: 20,
                }}
            >
                {name}
            </Text>
            <View style={{flexGrow: 1,}}></View>
            <Text
                style={{
                    height: '100%',
                    textAlignVertical: 'center',
                    fontSize: 20,
                    paddingRight: 2,
                }}
            >
                {hasExp ? exp : ''}
            </Text>
            <Pressable 
                onPress={handler}
                style={{
                    width: 50,
                    height: '100%',
                    backgroundColor: 'lightcoral',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    alignItems: 'center'
                    
                }} 
            >
                <Text
                    style={{
                        textAlignVertical: 'center',
                        height: '100%'
                    }}
                >
                    -
                </Text>
            </Pressable>
        </View>
    )
}

export default Item