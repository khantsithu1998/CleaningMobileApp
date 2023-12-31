import React from 'react';
import { FlatList } from 'react-native';

 const VirtualizedBackgroundContainer = (props : any) => {
  return (
    <FlatList
    style={props.style}
      showsVerticalScrollIndicator={false}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => ""}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}
export default VirtualizedBackgroundContainer