const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE' // get one free at web3forms.com

export async function submitContactForm(form) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: form.subject ? `New contact form: ${form.subject}` : 'New contact form submission',
      from_name: 'Springswone Foundation website',
      name: form.name,
      email: form.email,
      phone: form.phone || 'Not provided',
      message: form.message,
    }),
  })

  const data = await res.json()
  if (!data.success) {
    throw new Error(data.message || 'Submission failed')
  }
  return data
}