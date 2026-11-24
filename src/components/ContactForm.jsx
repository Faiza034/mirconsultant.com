import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, ArrowLeft, ArrowRight, Check, GraduationCap, MessageCircle, Send, User, Plane } from 'lucide-react'
import { DESTINATIONS } from '../data/destinations'
import { SITE } from '../data/site'

const THIS_YEAR = new Date().getFullYear()
const EMPTY = {
  name: '', city: '', age: '', email: '', whatsapp: '',
  qualification: '', passYear: '', gradeType: 'percentage', cgpaScale: '4', gradeValue: '', langTest: '', langScore: '',
  destination: '', program: '', message: '',
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const QUALIFICATIONS = ['Matric / O-Level', 'Intermediate / A-Level', 'Diploma', 'Bachelor’s Degree', 'Master’s Degree', 'Other']
const LANG_TESTS = ['IELTS', 'TOEFL', 'PTE', 'Duolingo English Test', 'German (e.g. Goethe / TestDaF)', 'Other']
const STEPS = [
  { title: 'Personal Details', icon: User },
  { title: 'Education', icon: GraduationCap },
  { title: 'Study Plan', icon: Plane },
]

// Returns an object of errors for the fields on the given step.
function validateStep(step, v) {
  const e = {}
  if (step === 0) {
    if (!v.name.trim()) e.name = 'Please enter your full name.'
    if (!v.city.trim()) e.city = 'Please enter your city.'
    const age = Number(v.age)
    if (!v.age) e.age = 'Please enter your age.'
    else if (!Number.isInteger(age) || age < 15 || age > 70) e.age = 'Please enter a valid age (15–70).'
    if (!v.email.trim()) e.email = 'Please enter your email address.'
    else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
    const digits = v.whatsapp.replace(/\D/g, '')
    if (!v.whatsapp.trim()) e.whatsapp = 'Please enter your WhatsApp number.'
    else if (digits.length < 10 || digits.length > 15) e.whatsapp = 'Please enter a valid number (10–15 digits).'
  }
  if (step === 1) {
    if (!v.qualification) e.qualification = 'Please select your last qualification.'
    const yr = Number(v.passYear)
    if (!v.passYear) e.passYear = 'Please enter the passing year.'
    else if (!Number.isInteger(yr) || yr < 1980 || yr > THIS_YEAR + 6) e.passYear = `Enter a year between 1980 and ${THIS_YEAR + 6} (expected year if studying).`
    const g = Number(v.gradeValue)
    const max = v.gradeType === 'percentage' ? 100 : Number(v.cgpaScale)
    if (!v.gradeValue) e.gradeValue = v.gradeType === 'percentage' ? 'Please enter your percentage.' : 'Please enter your CGPA.'
    else if (!(g > 0 && g <= max)) e.gradeValue = `Enter a value above 0 and up to ${max}.`
    if (v.langTest && !v.langScore.trim()) e.langScore = 'Please enter your score or band.'
  }
  if (step === 2) {
    if (!v.destination) e.destination = 'Please choose a destination.'
    if (!v.message.trim()) e.message = 'Please write a short message.'
  }
  return e
}

// Defined OUTSIDE the form component so inputs keep focus while typing.
function Field({ id, label, error, hint, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-primary">{label}</label>
      {children}
      {hint && !error && <p className="mt-1 text-xs opacity-80">{hint}</p>}
      <AnimatePresence>
        {error && (
          <motion.p id={`${id}-err`} role="alert" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-1 flex items-center gap-1 text-xs font-medium text-burgundy">
            <AlertCircle size={12} aria-hidden="true" />{error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactForm() {
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [done, setDone] = useState(false)
  const [shake, setShake] = useState(0)
  const formRef = useRef(null)

  const set = (k) => (e) => {
    setV((p) => ({ ...p, [k]: e.target.value }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }))
  }
  const a = (id) => ({ id, name: id, 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `${id}-err` : undefined })
  const bad = (id) => (errors[id] ? '!border-burgundy' : '')

  const next = () => {
    const errs = validateStep(step, v)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setShake((s) => s + 1)
      requestAnimationFrame(() => formRef.current?.querySelector('[aria-invalid="true"]')?.focus())
      return
    }
    setDir(1); setStep((s) => s + 1)
  }
  const back = () => { setDir(-1); setErrors({}); setStep((s) => s - 1) }

  // DEMO FLOW: nothing is sent anywhere. To go live, POST `v` to your backend / email service here
  // (e.g. a Vercel serverless function) and only show success after a confirmed response.
  const onSubmit = (e) => {
    e.preventDefault()
    if (step < STEPS.length - 1) return next()
    const errs = validateStep(2, v)
    setErrors(errs)
    if (Object.keys(errs).length) { setShake((s) => s + 1); return }
    setDone(true)
  }

  const grade = v.gradeType === 'percentage' ? `${v.gradeValue}%` : `${v.gradeValue} CGPA (out of ${v.cgpaScale})`
  const waText = [
    SITE.whatsappMessage, '',
    `Name: ${v.name}`, `City: ${v.city}`, `Age: ${v.age}`, `Email: ${v.email}`,
    `Last qualification: ${v.qualification} (${v.passYear})`, `Result: ${grade}`,
    `Language test: ${v.langTest ? `${v.langTest} – ${v.langScore}` : 'Not taken yet'}`,
    `Preferred destination: ${v.destination}`, v.program ? `Program: ${v.program}` : null, `Message: ${v.message}`,
  ].filter((l) => l !== null).join('\n')
  const waLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(waText)}`

  if (done) {
    return (
      <motion.div role="status" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card overflow-hidden text-center">
        <div className="bg-primary px-6 py-8">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-ivory text-primary"><Check size={32} aria-hidden="true" /></motion.span>
          <h3 className="mt-4 text-2xl !text-white">Details checked (demo mode)</h3>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-sm leading-relaxed">This website’s inquiry form is not yet connected to email or a database, so <strong>your inquiry has not been sent</strong>. To reach MIR now, continue on WhatsApp with your details pre-filled, or call {SITE.phones.join(' / ')}.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={18} aria-hidden="true" />Continue on WhatsApp</a>
            <button type="button" onClick={() => { setStep(0); setDone(false) }} className="btn-outline">Edit Details</button>
          </div>
        </div>
      </motion.div>
    )
  }

  const Icon = STEPS[step].icon
  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Inquiry form" className="card overflow-hidden">
      {/* Header + animated progress */}
      <div className="bg-primary px-6 pb-5 pt-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Consultation Inquiry</p>
        <div className="mt-4 flex items-center">
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex flex-1 items-center last:flex-none">
              <motion.span animate={{ scale: i === step ? 1.12 : 1 }} aria-current={i === step ? 'step' : undefined}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${i < step ? 'border-gold bg-gold text-primary' : i === step ? 'border-gold bg-ivory text-primary' : 'border-white/40 text-white/60'}`}>
                {i < step ? <Check size={16} aria-label="completed" /> : i + 1}
              </motion.span>
              {i < STEPS.length - 1 && (
                <span className="mx-2 h-0.5 flex-1 overflow-hidden rounded bg-white/25">
                  <motion.span className="block h-full bg-gold" initial={false} animate={{ width: i < step ? '100%' : '0%' }} transition={{ duration: 0.5 }} />
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-2 font-display text-xl text-white"><Icon size={20} className="text-gold" aria-hidden="true" />Step {step + 1} of {STEPS.length}: {STEPS[step].title}</p>
      </div>

      <motion.div key={shake} animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : {}} transition={{ duration: 0.4 }} className="p-6 sm:p-8">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div key={step} custom={dir}
            variants={{ enter: (d) => ({ opacity: 0, x: d * 40 }), center: { opacity: 1, x: 0 }, exit: (d) => ({ opacity: 0, x: d * -40 }) }}
            initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }} className="space-y-5">

            {step === 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                <Field className="sm:col-span-2 lg:col-span-2" id="name" label="Full Name *" error={errors.name}><input {...a('name')} type="text" autoComplete="name" value={v.name} onChange={set('name')} className={`field ${bad('name')}`} placeholder="Your full name" /></Field>
                <Field className="lg:col-span-2" id="city" label="City *" error={errors.city}><input {...a('city')} type="text" autoComplete="address-level2" value={v.city} onChange={set('city')} className={`field ${bad('city')}`} placeholder="e.g. Lahore" /></Field>
                <Field className="lg:col-span-2" id="age" label="Age *" error={errors.age}><input {...a('age')} type="number" inputMode="numeric" min="15" max="70" value={v.age} onChange={set('age')} className={`field ${bad('age')}`} placeholder="e.g. 21" /></Field>
                <Field className="lg:col-span-3" id="email" label="Email Address *" error={errors.email}><input {...a('email')} type="email" autoComplete="email" value={v.email} onChange={set('email')} className={`field ${bad('email')}`} placeholder="you@example.com" /></Field>
                <Field className="lg:col-span-3" id="whatsapp" label="WhatsApp Number *" error={errors.whatsapp}><input {...a('whatsapp')} type="tel" autoComplete="tel" value={v.whatsapp} onChange={set('whatsapp')} className={`field ${bad('whatsapp')}`} placeholder="03XX XXXXXXX" /></Field>
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                <Field className="lg:col-span-3" id="qualification" label="Last Qualification *" error={errors.qualification}>
                  <select {...a('qualification')} value={v.qualification} onChange={set('qualification')} className={`field ${bad('qualification')}`}>
                    <option value="">Select qualification</option>{QUALIFICATIONS.map((q) => <option key={q}>{q}</option>)}
                  </select>
                </Field>
                <Field className="lg:col-span-3" id="passYear" label="Passing Year *" error={errors.passYear} hint="Expected year if still studying">
                  <input {...a('passYear')} type="number" inputMode="numeric" value={v.passYear} onChange={set('passYear')} className={`field ${bad('passYear')}`} placeholder={`e.g. ${THIS_YEAR - 1}`} />
                </Field>
                <div className="sm:col-span-2 lg:col-span-3">
                  <span className="mb-1.5 block text-sm font-medium text-primary">Result *</span>
                  <div className="mb-3 inline-flex rounded-full border border-gold p-1" role="group" aria-label="Result type">
                    {[['percentage', 'Percentage'], ['cgpa', 'CGPA']].map(([k, l]) => (
                      <button key={k} type="button" aria-pressed={v.gradeType === k} onClick={() => { setV((p) => ({ ...p, gradeType: k, gradeValue: '' })); setErrors((p) => ({ ...p, gradeValue: undefined })) }}
                        className={`min-h-9 rounded-full px-5 text-sm font-semibold transition-colors ${v.gradeType === k ? 'bg-primary text-white' : 'text-primary hover:bg-ivory'}`}>{l}</button>
                    ))}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="gradeValue" label={v.gradeType === 'percentage' ? 'Percentage (%)' : 'CGPA'} error={errors.gradeValue}>
                      <input {...a('gradeValue')} type="number" inputMode="decimal" step="0.01" value={v.gradeValue} onChange={set('gradeValue')} className={`field ${bad('gradeValue')}`} placeholder={v.gradeType === 'percentage' ? 'e.g. 72' : 'e.g. 3.2'} />
                    </Field>
                    {v.gradeType === 'cgpa' && (
                      <Field id="cgpaScale" label="CGPA out of">
                        <select id="cgpaScale" value={v.cgpaScale} onChange={set('cgpaScale')} className="field">
                          <option value="4">4.0</option><option value="5">5.0</option><option value="10">10.0</option>
                        </select>
                      </Field>
                    )}
                  </div>
                </div>
                <div className="grid content-start gap-5 sm:col-span-2 sm:grid-cols-2 lg:col-span-3">
                  <Field id="langTest" label="Language Test">
                    <select id="langTest" value={v.langTest} onChange={(e) => { set('langTest')(e); if (!e.target.value) setV((p) => ({ ...p, langTest: '', langScore: '' })) }} className="field">
                      <option value="">Not taken yet</option>{LANG_TESTS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                  <AnimatePresence>
                    {v.langTest && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <Field id="langScore" label="Score / Band *" error={errors.langScore}>
                          <input {...a('langScore')} type="text" value={v.langScore} onChange={set('langScore')} className={`field ${bad('langScore')}`} placeholder="e.g. 6.5" />
                        </Field>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                <Field className="lg:col-span-3" id="destination" label="Preferred Study Destination *" error={errors.destination}>
                  <select {...a('destination')} value={v.destination} onChange={set('destination')} className={`field ${bad('destination')}`}>
                    <option value="">Select a destination</option>{DESTINATIONS.map((d) => <option key={d.slug} value={d.name}>{d.name}</option>)}<option value="Not sure yet">Not sure yet</option>
                  </select>
                </Field>
                <Field className="lg:col-span-3" id="program" label="Interested Study Program"><input id="program" name="program" type="text" value={v.program} onChange={set('program')} className="field" placeholder="e.g. Business, Engineering" /></Field>
                <Field className="sm:col-span-2 lg:col-span-6" id="message" label="Message *" error={errors.message}><textarea {...a('message')} rows={4} value={v.message} onChange={set('message')} className={`field resize-y ${bad('message')}`} placeholder="Tell us about your goals and any questions" /></Field>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-7 flex items-center justify-between gap-3">
          {step > 0 ? <button type="button" onClick={back} className="btn-outline"><ArrowLeft size={16} aria-hidden="true" />Back</button> : <span />}
          {step < STEPS.length - 1
            ? <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary">Next<ArrowRight size={16} aria-hidden="true" /></motion.button>
            : <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary">Submit Inquiry<Send size={16} aria-hidden="true" /></motion.button>}
        </div>
        <p className="mt-4 text-xs">Demo version: details are checked in your browser only and are not yet delivered to MIR.</p>
      </motion.div>
    </form>
  )
}
