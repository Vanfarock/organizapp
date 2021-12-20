import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native'
import { getTimings, Timing } from '../services/calendarService';
import Button from '../shared/button';
import Text from '../shared/text';

const CalendarContainer = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin: 15px 0;
`;

const AddIcon = styled(Icon)`
  color: ${props => props.theme.backgroundColor.contrast};
`;

const ScheduleRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 100%;

  padding: 10px;
  margin: 2px;

  background-color: ${props => props.theme.foregroundColor};
`;

const Time = styled(Text)`
  font-size: 16px;

  color: ${props => props.theme.calendarColor};
`;

const Description = styled(Text)`
  flex: 1;

  text-align: center;
  font-size: 16px;
  
  color: ${props => props.theme.calendarColor};

  overflow: hidden;
`;

export default function Calendar() {
  const DEFAULT_ICON_SIZE = 20;

  const [timings, setTimings] = useState<Timing[]>([]);

  useEffect(() => {
    setTimings(getTimings());
  }, [])

  const renderItem: ListRenderItem<Timing> = ({ item }: { item: Timing }) => (
    <ScheduleRow key={item.time}>
      <Time>{item.time}</Time>
      <Description numberOfLines={1}>{item.description}</Description>
    </ScheduleRow>
  );

  return (
    <CalendarContainer>
      <HeaderContainer>
        <Button type="clear" icon={<AddIcon name="plus" size={DEFAULT_ICON_SIZE} />} />
      </HeaderContainer>

      <FlatList<Timing>
        data={timings}
        renderItem={renderItem}
        keyExtractor={(item: Timing) => item.time} />
    </CalendarContainer>
  )
}
