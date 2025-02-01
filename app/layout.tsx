import "./globals.css";
import { PatientProvider } from "./context/patientcontext";
export const metadata = {
  title: "Patient Scheduling",
  description: "Schedule sessions and manage patients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PatientProvider>{children}</PatientProvider>
      </body>
    </html>
  );
}
