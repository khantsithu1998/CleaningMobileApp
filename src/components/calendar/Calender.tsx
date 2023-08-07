import { useState, useEffect, memo } from 'react'
import { Text, View, ScrollView } from 'react-native'
import moment from 'moment'
import CalendarDate from 'components/date/Date'
import styles from './Style'

const Calendar = ({ onSelectDate, selected, dates }: { onSelectDate: any, selected: string, dates: any[] }) => {

  const [scrollPosition, setScrollPosition] = useState(0)

  const date = new Date(selected);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    weekday: 'long'
  };

  const formattedDate = date.toLocaleString('en-US', options);;

  return (
    <>
      <View style={styles.todayTextContainer}>
        <Text style={styles.title}>{'Today'}</Text>
        <Text style={styles.dateTitle}>{formattedDate}</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // onScroll is a native event that returns the number of pixels the user has scrolled
            onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
            scrollEventThrottle={16}
          >
            {dates.map((date: any, index: number) => (
              <CalendarDate
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default memo(Calendar)
