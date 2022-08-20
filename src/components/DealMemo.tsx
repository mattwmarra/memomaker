import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import labels from '../data/formLabels';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 32,
  },
  section: {
    margin: 10,
    flexGrow: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  body: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  h1: {
    fontSize: 48,
  },
  h2: {
    fontSize: 36,
  },
  h3: {
    fontSize: 24,
  },
  lineItem: {
    lineHeight: '1.5px',
  },
});

export default function DealMemo(props) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = new Date().getDate();
  const month = months[new Date().getMonth()];
  const year = new Date().getFullYear();
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Term Sheet</Text>
          <Text style={styles.h2}>Confidential</Text>
          <Text style={styles.h3}>Pay or Play:</Text>
          <Text>{`${month} ${day}, ${year}
          `}</Text>
        </View>
        <View style={styles.body}>
          {Object.values(labels).map((item) => {
            const value = props.data[item.id];
            console.log(item);
            if (!value) {
              return;
            }
            return (
              <Text key={item.id} style={styles.lineItem}>
                {item.name}: {value}
              </Text>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}
