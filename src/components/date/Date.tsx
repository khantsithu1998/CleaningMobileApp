import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import styles from './Style'
import { palette } from 'utils/theme/colors'

const CalendarDate = ({ date, onSelectDate, selected} : any) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd')
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('D')

  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format('YYYY-MM-DD')
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(fullDate)
        onSelectDate(fullDate)
      }}
      style={[styles.card, selected === fullDate && { backgroundColor: palette.primary }]}
    >
      <Text
        style={[
          styles.medium,
          selected === fullDate && { color: "#fff", fontWeight: 'bold', fontSize: 24 },
        ]}
      >
        {dayNumber}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[styles.big, selected === fullDate && { color: "#fff" }]}
      >
        {day}
      </Text>
    </TouchableOpacity>
  )
}

export default CalendarDate
