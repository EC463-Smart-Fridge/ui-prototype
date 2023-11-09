import React from 'react'
import { Text, View, Button } from "react-native"

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Item = (name: String, exp: Date, handler: (item:any)=>void) => {
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
                padding: 16,
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
                {months[Number(exp.getMonth().toString())]}
                {' '}
                {exp.getDay().toString()}
            </Text>
            <Button
                title="X"
                onPress={handler}
            />
        </View>
    )
}

export default Item