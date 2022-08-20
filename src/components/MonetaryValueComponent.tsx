import React from 'react'
import { Text } from '@react-pdf/renderer';
import { iteratorSymbol } from 'immer/dist/internal';

function MonetaryValueComponent(item) {
  return (
    <key={item.id}>
      <Text style={styles.lineItem}>
        {item.name}: {item.textual} , {item.numerical}
      </Text>;
    </>
  );
}

export default MonetaryValueComponent