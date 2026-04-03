import { ContactFormInput } from "@/lib/contact-schema";

const brandName = "Gutama Home Improvement";
const brandColor = "#b3482e"; // Primary red
const accentColor = "#d4a574"; // Gold accent
const textColor = "#2d2520"; // Dark brown text

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export function generateContactEmailHtml(data: ContactFormInput): {
  html: string;
  text: string;
} {
  const escapedFn = escapeHtml(data.fn);
  const escapedLn = escapeHtml(data.ln);
  const escapedEm = escapeHtml(data.em);
  const escapedPh = escapeHtml(data.ph);
  const escapedService = escapeHtml(data.service);
  const escapedMsg = escapeHtml(data.msg);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Service Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${brandColor} 0%, ${brandColor}cc 100%); padding: 40px 20px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold; font-family: Georgia, serif;">
                ${brandName}
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px; letter-spacing: 1px;">
                FREE ESTIMATE REQUEST
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <p style="margin: 0 0 24px 0; color: ${textColor}; font-size: 16px; line-height: 1.6;">
                <strong>New service request received from ${escapedFn} ${escapedLn}</strong>
              </p>

              <!-- Service Badge -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="background-color: ${accentColor}; padding: 12px 16px; border-radius: 4px; text-align: center;">
                    <p style="margin: 0; color: white; font-size: 14px; font-weight: bold; letter-spacing: 0.5px;">
                      SERVICE: ${escapedService}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Contact Information -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; border-bottom: 1px solid #e0e0e0; padding-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Email</p>
                    <p style="margin: 4px 0 0 0; color: ${textColor}; font-size: 14px;">
                      <a href="mailto:${escapedEm}" style="color: ${brandColor}; text-decoration: none;">
                        ${escapedEm}
                      </a>
                    </p>
                  </td>
                </tr>
                ${
                  escapedPh
                    ? `
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Phone</p>
                    <p style="margin: 4px 0 0 0; color: ${textColor}; font-size: 14px;">
                      <a href="tel:${escapedPh}" style="color: ${brandColor}; text-decoration: none;">
                        ${escapedPh}
                      </a>
                    </p>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>

              <!-- Message -->
              ${
                escapedMsg
                  ? `
              <div style="margin-bottom: 32px;">
                <p style="margin: 0 0 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Project Details</p>
                <div style="background-color: #f9f9f9; padding: 16px; border-left: 3px solid ${accentColor}; border-radius: 2px;">
                  <p style="margin: 0; color: ${textColor}; font-size: 14px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">
                    ${escapedMsg}
                  </p>
                </div>
              </div>
              `
                  : ""
              }

              <!-- Call to Action -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 20px; border-radius: 4px; margin-bottom: 24px;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                      NEXT STEPS
                    </p>
                    <p style="margin: 0; color: ${textColor}; font-size: 14px; line-height: 1.6;">
                      Contact the customer within <strong>24 business hours</strong> to provide a free estimate and answer any questions about their service request.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 24px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666; font-size: 12px; line-height: 1.6;">
                This is an automated message from your website contact form.
                <br>Customer will expect a response within 24 hours.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `${brandName} – New Service Request

FROM: ${escapedFn} ${escapedLn}
EMAIL: ${escapedEm}
${escapedPh ? `PHONE: ${escapedPh}\n` : ""}SERVICE: ${escapedService}

${escapedMsg ? `PROJECT DETAILS:\n${escapedMsg}\n` : ""}
---
This is a website contact form submission.
Response expected within 24 business hours.`;

  return { html, text };
}
