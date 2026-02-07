import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { GiftAssessmentDefinition } from '@/data/types';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Times-Roman',
    position: 'relative',
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 8,
    alignSelf: 'center',
  },
  contactBlock: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 25,
    lineHeight: 1.3,
  },
  titleBlock: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  dateItem: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 50,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 15,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 700,
  },
  scriptureContainer: {
    flexDirection: 'row',
  },
  scriptureList: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  scriptureText: {
    fontSize: 12,
    marginRight: 8,
  },
  questionText: {
    fontSize: 13,
    marginBottom: 15,
  },
  questionAnswer: {
    fontSize: 12,
    marginBottom: 30,
  },
});

interface GiftAssessmentResultsPdfProps {
  dominateGifts: GiftAssessmentDefinition[];
  subordinateGifts: GiftAssessmentDefinition[];
  ministriesInvolvedIn: string;
  changeInMinistry: string;
  layOrClergy: string;
}

const GiftAssessmentResultsPdf: React.FC<GiftAssessmentResultsPdfProps> = ({
  dominateGifts,
  subordinateGifts,
  ministriesInvolvedIn,
  changeInMinistry,
  layOrClergy,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* LOGO + CONTACT */}
      <Image src={`${AWS_ASSET_BASE_URL}/logos/logo.png`} style={styles.logo} />
      <View style={styles.contactBlock}>
        <Text style={styles.text}>6476 Streeter Avenue, Riverside, CA 92504</Text>
        <Text style={styles.text}>+1 (951) 359-0203 • thewindchurch@outlook.com</Text>
      </View>
      <Text style={styles.titleBlock}>Wagner-Modified Houts</Text>
      <Text style={styles.titleBlock}>Spiritual Gift Assessment Results</Text>
      <Text style={styles.dateItem}>Date completed {formatDateMMMddyyyy(new Date())}</Text>

      {/* DOMINATE GIFTS */}
      <View style={styles.section}>
        <Text style={styles.label}>Your {dominateGifts.length} Dominate Gifts</Text>
        {dominateGifts.map((gift, index) => (
          <React.Fragment key={`pdf-dom-${index}`}>
            <Text style={styles.listItem}>
              {index + 1}. {gift.gift}
            </Text>
            <Text style={styles.text}>{gift.definition}</Text>
            <Text style={styles.text}>Scripture Reference:</Text>
            <View style={styles.scriptureList}>
              {gift.scriptures.map((scripture, sIndex) => (
                <View key={`pdf-dom-list-${sIndex}`} style={styles.scriptureContainer}>
                  <Text style={styles.scriptureText}>{scripture}</Text>
                  <Text style={styles.scriptureText}>
                    {sIndex < gift.scriptures.length - 1 ? '•' : ''}
                  </Text>
                </View>
              ))}
            </View>
          </React.Fragment>
        ))}
      </View>

      {/* SUBORDINATE GIFTS */}
      <View style={styles.section}>
        <Text style={styles.label}>Your {subordinateGifts.length} Subordinate Gifts</Text>
        {subordinateGifts.map((gift, index) => (
          <React.Fragment key={`pdf-sub-${index}`}>
            <Text style={styles.listItem}>
              {index + 1}. {gift.gift}
            </Text>
            <Text style={styles.text}>{gift.definition}</Text>
            <Text style={styles.text}>Scripture Reference:</Text>
            <View style={styles.scriptureList}>
              {gift.scriptures.map((scripture, sIndex) => (
                <View key={`pdf-sub-list-${sIndex}`} style={styles.scriptureContainer}>
                  <Text style={styles.scriptureText}>{scripture}</Text>
                  <Text style={styles.scriptureText}>
                    {sIndex < gift.scriptures.length - 1 ? '•' : ''}
                  </Text>
                </View>
              ))}
            </View>
          </React.Fragment>
        ))}
      </View>

      {/* REFLECTION QUESTIONS */}
      <View style={styles.section}>
        <Text style={styles.label}>Reflection Questions</Text>

        <Text style={styles.questionText}>
          1. What ministries are you now performing (formally or informally) in the Body?
        </Text>
        <Text style={styles.questionAnswer}>{ministriesInvolvedIn}</Text>

        <Text style={styles.questionText}>
          2. Are there any of these ministries that you are not especially gifted for? God may be
          calling you to consider changes.
        </Text>
        <Text style={styles.questionAnswer}>{changeInMinistry}</Text>

        <Text style={styles.questionText}>3. Is your vocational status lay or clergy?</Text>
        <Text style={styles.questionAnswer}>{layOrClergy}</Text>
      </View>
    </Page>
  </Document>
);

export default GiftAssessmentResultsPdf;
