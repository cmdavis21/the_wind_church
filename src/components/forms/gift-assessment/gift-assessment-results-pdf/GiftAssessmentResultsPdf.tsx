import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

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
    fontWeight: 600,
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
  scriptureList: {
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scriptureText: {
    fontSize: 12,
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
  reflectionQuestions: { question: string; answer: string }[];
}

const GiftAssessmentResultsPdf: React.FC<GiftAssessmentResultsPdfProps> = ({
  dominateGifts,
  subordinateGifts,
  reflectionQuestions,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* HEADER */}
      <Image src="/images/logo/logo-black.webp" style={styles.logo} />
      <View style={styles.contactBlock}>
        <Text style={styles.text}>6476 Streeter Avenue, Riverside, CA 92504</Text>
        <Text style={styles.text}>+1 (951) 359-0203 • thewindchurch@outlook.com</Text>
      </View>
      <Text style={styles.titleBlock}>Wagner-Modified Houts</Text>
      <Text style={styles.titleBlock}>Spiritual Gift Assessment Results</Text>
      <Text style={styles.dateItem}>Date completed {formatDateMMMddyyyy(new Date())}</Text>

      {/* RESULTS */}
      {[
        { title: 'Your Dominant Gifts', gifts: dominateGifts },
        { title: 'Your Secondary Gifts', gifts: subordinateGifts },
      ].map((g) => (
        <View style={styles.section}>
          <Text style={styles.label}>{g.title}</Text>
          {g.gifts.map((r, index) => (
            <React.Fragment key={`pdf-${g.title}-${index}`}>
              <Text style={styles.listItem}>
                {index + 1}. {r.gift}
              </Text>
              <Text style={styles.text}>{r.definition}</Text>
              <View style={styles.scriptureList}>
                {r.scriptures.map((scripture, sIndex) => (
                  <Text style={styles.scriptureText}>
                    {scripture} {sIndex < r.scriptures.length - 1 ? '• ' : ''}
                  </Text>
                ))}
              </View>
            </React.Fragment>
          ))}
        </View>
      ))}

      {/* REFLECTION QUESTIONS */}
      <View style={styles.section}>
        <Text style={styles.label}>Reflection Questions</Text>

        {reflectionQuestions.map((r) => (
          <React.Fragment key={`reflection-question-${r.question}`}>
            <Text style={styles.questionText}>{r.question}</Text>
            <Text style={styles.questionAnswer}>{r.answer}</Text>
          </React.Fragment>
        ))}
      </View>
    </Page>
  </Document>
);

export default GiftAssessmentResultsPdf;
