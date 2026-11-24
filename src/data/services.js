import { Compass, GraduationCap, FileText, Plane } from 'lucide-react'

export const SERVICES = [
  { slug: 'study-options', icon: Compass, title: 'Study Options',
    desc: 'Explore suitable study destinations, universities and academic programs according to your educational background and goals.',
    points: ['Review of your academic background and interests', 'Overview of destinations and study levels', 'Help shortlisting programs that fit your goals'] },
  { slug: 'admission-guidance', icon: GraduationCap, title: 'Admission Guidance',
    desc: 'Get assistance in understanding admission requirements and selecting suitable academic opportunities.',
    points: ['Explanation of entry requirements', 'Guidance on intakes and timelines', 'Support in comparing options'] },
  { slug: 'application-support', icon: FileText, title: 'Application Support',
    desc: 'Receive guidance with application forms, documentation and university application procedures.',
    points: ['Document checklists', 'Help completing application forms', 'Guidance on statements and supporting material'] },
  { slug: 'visa-guidance', icon: Plane, title: 'Visa Guidance',
    desc: 'Understand visa documentation requirements and receive guidance for preparing your visa application.',
    points: ['Overview of the visa process', 'Documentation preparation guidance', 'Information on next steps after admission'] },
]
