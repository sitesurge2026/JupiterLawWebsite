export async function onRequestPost(context) {
  const { request } = context;
  const formData = await request.formData();
  
  const name = formData.get('name');
  const email = formData.get('email');
  const nature = formData.get('nature');
  const message = formData.get('message');

  // This uses the MailChannels integration which is free for Cloudflare Pages/Workers
  const send_email = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: '0.sukoon@gmail.com', name: 'Aatif Iqbal' }],
        },
      ],
      from: {
        email: 'no-reply@jupiterlaw.co.uk',
        name: 'Jupiter Law Website',
      },
      subject: `New Enquiry: ${nature} from ${name}`,
      content: [
        {
          type: 'text/plain',
          value: `Name: ${name}\nEmail: ${email}\nNature: ${nature}\n\nMessage:\n${message}`,
        },
      ],
    }),
  });

  if (send_email.ok) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } else {
    const respText = await send_email.text();
    return new Response(JSON.stringify({ error: 'Failed to send email', details: respText }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
