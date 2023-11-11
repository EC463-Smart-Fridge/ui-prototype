import React from 'react'
import {Dispatch, SetStateAction, useState} from 'react'
import { Text, TextInput, View, Pressable } from "react-native"
import DatePicker from 'react-native-date-picker'

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const NewItem = (items: any[], setItems:Dispatch<SetStateAction<any[]>>) => {
    const [input, setInput] = useState<string>("");
    const [date, setDate] = useState<Date>(new Date);
    const [hasDate, setHasDate] = useState<boolean>(false)
    const [open, setOpen] = useState(false)

    const inputHandler = () => {
        if (input.trim() != "") {
            setItems([...items, ({name: input, exp: date, hasExp: hasDate})]);
            setHasDate(false)
        } 
        setInput("")
    }
    return (
        <View  
            style={{
                width: '100%',
                height: 64,
                backgroundColor: 'whitesmoke',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
            }}
        >
            <DatePicker
                modal open={open} 
                date={date} 
                mode="date" 
                androidVariant = "nativeAndroid"

                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setHasDate(true)
                    console.log(date)
                }}

                onCancel={() => {
                    setOpen(false)
                }}

                style={{
                    flexGrow: 1,
                    width: 200,
                    height: 20,
                }}
            />
            <TextInput
                placeholder="add item"
                value={input}
                onChangeText={setInput}
                style={{
                    height: '100%',
                    textAlignVertical: 'center',
                    fontSize: 20,
                    flexGrow: 1,              
                }}
            >
            </TextInput>
            <Pressable onPress={() => setOpen(true)}>
                <Text
                    style={{
                        height: '100%',
                        textAlignVertical: 'center',
                        fontSize: 20,
                        paddingRight: 2,
                    }}
                >
                    {hasDate ? months[date.getMonth()] + ' ' + date.getDay().toString() : "Add Date"}

                </Text>
            </Pressable>
            <Pressable
                onPress={inputHandler}
                style={{
                    width: 50,
                    height: '100%',
                    backgroundColor: 'deepskyblue',
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
                    Add
                </Text>
            </Pressable>
        </View>
    )
}

export default NewItem;