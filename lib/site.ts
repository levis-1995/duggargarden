export const siteConfig = {
  name: "Duggar Den",
  tagline: "Zip, Sip & Stay",
  // WhatsApp number in international format, digits only (no +, spaces, or dashes)
  whatsappNumber: "917051391976",
  phoneDisplay: "+91 70513 91976",
  bookingNumber: "919906471960",
  bookingPhoneDisplay: "+91 99064 71960",
  instagram: "https://www.instagram.com/duggarden8061/",
  instagramHandle: "@duggarden8061",
  address: {
    line1: "Panchari, Meer",
    line2: "Sankari, Jammu and Kashmir 182125",
    full: "Panchari, Meer, Sankari, Jammu and Kashmir 182125",
  },
  mapQuery: "Duggar Den (Duggarden), Panchari, Meer, sankari, Jammu and Kashmir 182125",
  mapLink: "https://maps.app.goo.gl/VfQbPGTCzn9ZasJF9?g_st=awb",
}

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildBookingWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.bookingNumber}?text=${encodeURIComponent(message)}`
}
