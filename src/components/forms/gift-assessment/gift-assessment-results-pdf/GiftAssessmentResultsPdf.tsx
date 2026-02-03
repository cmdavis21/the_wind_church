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

  // HEADER
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerLeft: {
    fontSize: 12,
  },
  headerCenter: {
    fontSize: 18,
    textAlign: 'center',
    flexGrow: 1,
  },
  headerRight: {
    fontSize: 12,
    textAlign: 'right',
  },

  // LOGO + CONTACT
  logo: {
    width: 100,
    height: 50,
    margin: '0 auto',
    marginBottom: 8,
  },
  contactBlock: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 25,
    lineHeight: 1.3,
  },

  // CONTENT
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  scriptureList: {
    marginLeft: 20,
    marginBottom: 15,
  },
  scriptureText: {
    fontSize: 12,
    marginBottom: 5,
  },
  questionText: {
    fontSize: 13,
    marginBottom: 15,
  },
  questionAnswer: {
    fontSize: 12,
    marginBottom: 30,
  },

  // FOOTER
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copyright: {
    fontSize: 10,
  },
  pageNumber: {
    fontSize: 10,
    textAlign: 'right',
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
      {/* HEADER BAR */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerLeft}>Gift Assessment</Text>
        <Text style={styles.headerCenter}>Spiritual Gift Assessment Results</Text>
        <Text style={styles.headerRight}>{formatDateMMMddyyyy(new Date())}</Text>
      </View>

      {/* LOGO + CONTACT */}
      <Image src={`${AWS_ASSET_BASE_URL}/logos/logo.png`} style={styles.logo} />
      <View style={styles.contactBlock}>
        <Text>6476 Streeter Avenue</Text>
        <Text>Riverside, CA 92504</Text>
        <Text>+1 (951) 359-0203</Text>
        <Text>thewindchurch@outlook.com</Text>
      </View>

      {/* DOMINATE GIFTS */}
      <View style={styles.section}>
        <Text style={styles.label}>Your {dominateGifts.length} Dominate Gifts</Text>
        {dominateGifts.map((gift, index) => (
          <React.Fragment key={index}>
            <Text style={styles.listItem}>
              {index + 1}. {gift.gift}
            </Text>
            <Text style={styles.text}>{gift.definition}</Text>
            <Text style={styles.text}>Scripture Reference:</Text>
            <View style={styles.scriptureList}>
              {gift.scriptures.map((scripture, sIndex) => (
                <Text key={sIndex} style={styles.scriptureText}>
                  {scripture}
                </Text>
              ))}
            </View>
          </React.Fragment>
        ))}
      </View>

      {/* SUBORDINATE GIFTS */}
      <View style={styles.section}>
        <Text style={styles.label}>Your {subordinateGifts.length} Subordinate Gifts</Text>
        {subordinateGifts.map((gift, index) => (
          <React.Fragment key={index}>
            <Text style={styles.listItem}>
              {index + 1}. {gift.gift}
            </Text>
            <Text style={styles.text}>{gift.definition}</Text>
            <Text style={styles.text}>Scripture Reference:</Text>
            <View style={styles.scriptureList}>
              {gift.scriptures.map((scripture, sIndex) => (
                <Text key={sIndex} style={styles.scriptureText}>
                  {scripture}
                </Text>
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

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.copyright}>© {new Date().getFullYear()} The Wind Church</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
        />
      </View>
    </Page>
  </Document>
);

export default GiftAssessmentResultsPdf;
