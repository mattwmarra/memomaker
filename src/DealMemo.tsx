import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import rootReducer from './reducers/rootReducer.ts';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function DealMemo() {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text>
            <h1>Term Sheet</h1>
            <h2>Confidential</h2>
            <h3>
              Pay or Play:
              {'Date Not Set'}
            </h3>
          </Text>
        </View>
      </Page>
    </Document>
  );
}
