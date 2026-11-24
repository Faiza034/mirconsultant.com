import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../data/site'

export default function WhatsAppButton() {
  return (
    <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with MIR on WhatsApp"
      whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-olive text-white shadow-lg sm:bottom-6 sm:right-6">
      <MessageCircle size={26} aria-hidden="true" />
    </motion.a>
  )
}
