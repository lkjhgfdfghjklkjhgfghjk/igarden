import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

const DESTINATION_EMAIL = 'maikesilvaoficial2@gmail.com';

// Body parser
app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: true, limit: '32kb' }));

// Lazy Resend client
let resendClient: Resend | null = null;
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// --------------------------------------------------------------------------
// Health check
// --------------------------------------------------------------------------
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'iGarden Checkout Email Notifier',
    destination: DESTINATION_EMAIL,
    email_service_configured: !!process.env.RESEND_API_KEY
  });
});

// --------------------------------------------------------------------------
// Checkout Initiated Notification Endpoint
// --------------------------------------------------------------------------
app.post('/api/notify/checkout-initiated', async (req: Request, res: Response) => {
  try {
    const {
      timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      page_url = '',
      referrer = 'Acesso direto',
      device_type = 'Desktop',
      browser = 'Desconhecido',
      os = 'Desconhecido',
      checkout_url = ''
    } = req.body || {};

    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || '';

    console.log(`[Checkout Initiated] ${timestamp} | Device: ${device_type} (${os} - ${browser}) | Page: ${page_url}`);

    const resend = getResendClient();

    if (resend) {
      const fromEmail = process.env.RESEND_FROM_EMAIL || 'iGarden Checkout <onboarding@resend.dev>';
      
      const emailHtml = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f8fa; margin: 0; padding: 20px; color: #1f2328; }
            .card { background-color: #ffffff; border-radius: 12px; border: 1px solid #e1e4e8; max-width: 580px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background-color: #0071E3; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
            .badge { display: inline-block; background-color: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 13px; margin-top: 8px; font-weight: 600; }
            .content { padding: 24px; line-height: 1.6; }
            .alert-box { background-color: #eef7ff; border-left: 4px solid #0071E3; padding: 14px 16px; border-radius: 4px; margin-bottom: 20px; font-size: 14px; }
            .info-table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px; }
            .info-table td { padding: 10px 12px; border-bottom: 1px solid #f0f2f5; }
            .info-table td.label { font-weight: 600; color: #656d76; width: 35%; }
            .info-table td.value { color: #1f2328; font-weight: 500; word-break: break-all; }
            .footer { background-color: #fafbfc; padding: 16px; text-align: center; font-size: 12px; color: #8c959f; border-top: 1px solid #e1e4e8; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>🛒 Checkout Iniciado</h1>
              <div class="badge">Clique no botão de compra</div>
            </div>
            <div class="content">
              <div class="alert-box">
                <strong>Novo checkout iniciado:</strong> Um visitante clicou no botão de compra na loja e foi direcionado para a página de checkout.
              </div>
              <table class="info-table">
                <tr>
                  <td class="label">📅 Data / Hora:</td>
                  <td class="value">${timestamp}</td>
                </tr>
                <tr>
                  <td class="label">📱 Dispositivo:</td>
                  <td class="value"><strong>${device_type}</strong></td>
                </tr>
                <tr>
                  <td class="label">💻 Sistema / Navegador:</td>
                  <td class="value">${os} • ${browser}</td>
                </tr>
                <tr>
                  <td class="label">🌐 Página:</td>
                  <td class="value"><a href="${page_url}" style="color: #0071E3;">${page_url}</a></td>
                </tr>
                <tr>
                  <td class="label">🔗 Origem (Referrer):</td>
                  <td class="value">${referrer}</td>
                </tr>
                ${checkout_url ? `
                <tr>
                  <td class="label">🎯 Destino Checkout:</td>
                  <td class="value"><a href="${checkout_url}" style="color: #0071E3;">${checkout_url}</a></td>
                </tr>
                ` : ''}
              </table>
            </div>
            <div class="footer">
              Notificação automática iGarden Store • Evento: Checkout Iniciado
            </div>
          </div>
        </body>
        </html>
      `;

      const emailText = `Novo checkout iniciado\n\nUm visitante clicou no botão de compra e foi direcionado para o checkout.\n\nData/hora: ${timestamp}\nDispositivo: ${device_type}\nSistema/Navegador: ${os} - ${browser}\nPágina: ${page_url}\nOrigem (Referrer): ${referrer}\n`;

      // Dispatch email asynchronously
      resend.emails.send({
        from: fromEmail,
        to: [DESTINATION_EMAIL],
        subject: '🛒 Checkout iniciado',
        html: emailHtml,
        text: emailText
      }).then((result) => {
        if (result.error) {
          console.error('⚠️ Resend email error:', result.error);
        } else {
          console.log(`✅ Email sent successfully to ${DESTINATION_EMAIL} (ID: ${result.data?.id})`);
        }
      }).catch((err) => {
        console.error('⚠️ Error dispatching email via Resend:', err);
      });
    } else {
      console.log(`ℹ️ [SIMULATION MODE] Notification received for ${DESTINATION_EMAIL}. To send real emails, set RESEND_API_KEY in your environment.`);
    }

    // Always respond immediately to frontend
    return res.status(200).json({
      success: true,
      message: 'Checkout notification triggered.'
    });
  } catch (error) {
    console.error('Error handling checkout notification:', error);
    return res.status(200).json({ success: false });
  }
});

// --------------------------------------------------------------------------
// Vite Middleware / Static Serving
// --------------------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 iGarden Server running on http://0.0.0.0:${PORT}`);
    console.log(`📧 Checkout Email Notifier configured for: ${DESTINATION_EMAIL}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
