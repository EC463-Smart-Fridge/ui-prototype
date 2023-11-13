import React from 'react'
import {Dispatch, SetStateAction, useState, Fragment} from 'react'
import { Text, TextInput, View, Pressable, } from "react-native"
import DatePicker from 'react-native-date-picker'
import { Calendar, CalendarUtils } from 'react-native-calendars'

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
        <Fragment>
        <View  
            style={{
                width: '100%',
                height: 64,
                backgroundColor: 'rgba(128, 128, 128, 0.25)',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
            }}
        >
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
            <Pressable onPress={() => setOpen(!open)}>
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
        {
            open ?
            <Calendar
                onDayPress={ (day) => {
                    setDate(new Date(day.dateString))
                    setOpen(false)
                    setHasDate(true)
                }}
                style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                }}
                />
                :
                <></>
            }
        </Fragment>
    )
}

export default NewItem;