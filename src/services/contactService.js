const WEB3FORMS_ACCESS_KEY = '5895edbc-3300-4523-8aa1-56bf224e8400'

export async function submitContactForm(form) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: form.subject ? `New contact form: ${form.subject}` : 'New contact form submission',
      from_name: 'Springswone Foundation',
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