import { WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

const PDF_FILE_NAME = 'The_Wind_Church_Spiritual_Gift_Assessment_Results.pdf';

export async function POST(req: Request) {
  const { results } = await req.json();

  const token = jwt.sign(results, process.env.GIFT_ASSESSMENT_JWT_SECRET!, {
    expiresIn: '10m',
  });

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`${WEBSITE_BASE_URL}${PageRoutes.giftAssessment}/result?token=${token}`, {
    waitUntil: 'networkidle2',
  });

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '40px', bottom: '40px' },
    path: PDF_FILE_NAME,
  });

  await browser.close();

  return new NextResponse(Buffer.from(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${PDF_FILE_NAME}"`,
    },
  });
}
