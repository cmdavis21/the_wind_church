import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import React from "react";

import { formatDateMMMddyyyy } from "@/data/format-date";
import { GiftAssessmentDefinition } from "@/data/types";

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Times-Roman",
  },
  logo: {
    width: 100,
    height: 50,
    margin: "0 auto",
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
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
    fontWeight: "bold",
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
      {/* Header */}
      <View style={styles.section}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src="/logos/logo.png" style={styles.logo} />
        <Text style={styles.header}>Spiritual Gift Assessment Results</Text>
        <Text style={styles.subHeader}>
          Assessment Completed {formatDateMMMddyyyy(new Date())}
        </Text>
      </View>

      {/* Dominate Gifts */}
      <View style={styles.section}>
        <Text style={styles.label}>
          Your {dominateGifts.length} Dominate Gifts
        </Text>
        <View>
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
      </View>

      {/* Subordinate Gifts */}
      <View style={styles.section}>
        <Text style={styles.label}>
          Your {subordinateGifts.length} Subordinate Gifts
        </Text>
        <View>
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
      </View>

      {/* Reflection Questions */}
      <View style={styles.section}>
        <Text style={styles.label}>Reflection Questions</Text>
        <Text style={styles.questionText}>
          1. What ministries are you now performing (formally or informally) in
          the Body?
        </Text>
        <Text style={styles.questionAnswer}>{ministriesInvolvedIn}</Text>
        <Text style={styles.questionText}>
          2. Are there any of these ministries that you are not especially
          gifted for? God may be calling you to consider changes.
        </Text>
        <Text style={styles.questionAnswer}>{changeInMinistry}</Text>
        <Text style={styles.questionText}>
          3. Is your vocational status lay or clergy?
        </Text>
        <Text style={styles.questionAnswer}>{layOrClergy}</Text>
      </View>
    </Page>
  </Document>
);

export default GiftAssessmentResultsPdf;
