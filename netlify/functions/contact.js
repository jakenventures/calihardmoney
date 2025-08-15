exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    const data = JSON.parse(event.body);
    const {
      name,
      email,
      phone,
      propertyCity,
      loanType,
      purchaseType,
      loanAmount,
      message
    } = data;

    // Validate required fields
    if (!name || !email || !phone || !propertyCity || !loanType || !purchaseType || !loanAmount) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ message: 'Missing required fields' })
      };
    }

    // Create email content
    const emailContent = `
New Lead from cali-hardmoney.com

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Property City: ${propertyCity}

Loan Details:
- Loan Type: ${loanType}
- Transaction Type: ${purchaseType}
- Estimated Loan Amount: ${loanAmount}

Additional Message:
${message || 'No additional message provided'}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
Source: California Hard Money Website
    `.trim();

    // Log the submission (in production, integrate with email service)
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      propertyCity,
      loanType,
      purchaseType,
      loanAmount,
      timestamp: new Date().toISOString()
    });

    // In production, integrate with email service here:
    // Example with Netlify + SendGrid:
    /*
    if (process.env.SENDGRID_API_KEY) {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: 'jason@jakenfinancegroup.com',
        from: 'noreply@cali-hardmoney.com',
        replyTo: email,
        subject: `New Lead: ${loanType} in ${propertyCity} - ${name}`,
        text: emailContent,
      };
      
      await sgMail.send(msg);
    }
    */

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        message: 'Contact form submitted successfully',
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        message: 'Internal server error. Please try again or contact us directly.' 
      })
    };
  }
};