import { IMAGES } from './site'

// GENERAL INFORMATION ONLY. Verify every requirement with official sources before publishing specifics.
export const DESTINATIONS = [
  {
    slug: 'germany', name: 'Germany', image: IMAGES.germany,
    tagline: 'Quality Education', short: 'Quality education and international study opportunities across a wide range of subjects.',
    intro: 'Germany is a popular destination for international students, known for its strong academic tradition and wide choice of universities and programs.',
    opportunities: ['Public and private universities', 'Universities of applied sciences', 'Programs taught in German and in English'],
    levels: ['Foundation / preparatory courses', 'Bachelor’s', 'Master’s', 'Doctoral research'],
    admission: ['Requirements differ by university and program', 'Prior academic results are reviewed against program criteria', 'Application deadlines and intakes vary'],
    language: ['English- or German-taught programs have different language requirements', 'Accepted tests and score levels are set by each university'],
    documents: ['Academic transcripts and certificates', 'Valid passport', 'Language proficiency evidence where required', 'CV and statement of purpose where requested'],
  },
  {
    slug: 'cyprus', name: 'Cyprus', image: IMAGES.cyprus,
    tagline: 'International Learning Environment', short: 'An international learning environment with diverse academic programs.',
    intro: 'Cyprus hosts universities with international student communities and English-taught programs in a range of fields.',
    opportunities: ['Public and private universities', 'English-taught programs in many subjects', 'International student communities'],
    levels: ['Bachelor’s', 'Master’s', 'Doctoral research'],
    admission: ['Entry criteria are set by each institution', 'Program availability and intakes vary', 'Some programs may request additional documents or interviews'],
    language: ['Many programs are taught in English', 'Test requirements differ by university and program'],
    documents: ['Academic transcripts and certificates', 'Valid passport', 'Language proficiency evidence where required', 'Application form and supporting documents'],
  },
  {
    slug: 'united-kingdom', name: 'United Kingdom', image: IMAGES.uk,
    tagline: 'Globally Recognized Education', short: 'Globally recognized education with diverse university options.',
    intro: 'The United Kingdom offers a broad range of universities and programs, with applications handled directly or through central systems depending on the level.',
    opportunities: ['Wide range of universities and subjects', 'Shorter-duration degree structures at many levels', 'Strong research environments'],
    levels: ['Foundation / pathway programs', 'Undergraduate', 'Postgraduate taught', 'Postgraduate research'],
    admission: ['Entry requirements differ by university and course', 'Personal statements and references may be required', 'Application routes and deadlines vary'],
    language: ['English proficiency evidence is commonly requested', 'Accepted tests and minimum scores are set by each university'],
    documents: ['Academic transcripts and certificates', 'Valid passport', 'English language evidence where required', 'Personal statement and references where requested'],
  },
  {
    slug: 'italy', name: 'Italy', image: IMAGES.italy,
    tagline: 'Rich Cultural Experience', short: 'Academic opportunities alongside a rich cultural experience.',
    intro: 'Italy combines long-established universities with a rich cultural setting, offering programs in Italian and increasingly in English.',
    opportunities: ['Public and private universities', 'Programs in Italian and English', 'Strong tradition in arts, design, engineering and humanities'],
    levels: ['Bachelor’s', 'Master’s', 'Doctoral research'],
    admission: ['Requirements differ by university and program', 'Some programs have entrance assessments', 'Pre-enrolment procedures can apply to international applicants'],
    language: ['Italian- and English-taught programs have different requirements', 'Test requirements are set by each university'],
    documents: ['Academic transcripts and certificates', 'Valid passport', 'Language proficiency evidence where required', 'Documents verifying prior qualifications where requested'],
  },
]
