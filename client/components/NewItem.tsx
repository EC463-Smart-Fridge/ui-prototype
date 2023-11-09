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
    const [open, setOpen] = useState(false)
    const inputHandler = () => {
        if (input.trim() != "") {
            setItems(items.concat({name: input, exp: date}));
        } 
        setInput("")
    }
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
            }}
        >
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
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
                    {months[Number(date.getMonth().toString())]}
                    {' '}
                    {date.getDay().toString()}
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
                <Text>
                    Add
                </Text>
            </Pressable>
        </View>
    )
}

export default NewItem;