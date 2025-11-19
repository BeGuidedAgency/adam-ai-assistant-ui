import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adam AI – Systemic Guide",
  description:
    "Have a text or voice conversation with Adam AI about money, work, care, and the systems shaping your life.",
  icons: {
    icon: "/openai.svg", // can swap later for an Adam logo
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ElevenLabs Voice Widget Script */}
        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
        ></script>
      </head>
      <body className={inter.className}>
        <div className="adam-shell">
          <header className="adam-header">
            <div className="adam-title-block">
              <span className="adam-pill">Adam AI</span>
              <h1>Systemic guidance, in conversation.</h1>
              <p>
                Ask your questions in text below. For voice, tap the Adam voice
                button in the bottom-right corner.
              </p>
            </div>
          </header>

          <main className="adam-main">
            {assistantId ? children : <Warnings />}
          </main>
        </div>

        {/* ElevenLabs Voice Widget – rendered as custom element */}
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<elevenlabs-convai agent-id="agent_8701k9wp90h8fxdbrqcnbpvd26vz" style="position: fixed; bottom: 24px; right: 24px; z-index: 9999;"></elevenlabs-convai>',
          }}
        />
      </body>
    </html>
  );
}
