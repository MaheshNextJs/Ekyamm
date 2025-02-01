"use client";

import Footer from "../components/Footer";
import { usePatientContext } from "../context/patientcontext";
import Link from "next/link";

const SummaryPage = () => {
  const { patientData } = usePatientContext();

  if (!patientData) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(249, 204, 197, 1) 100%)",
        }}
      >
        <p className="text-red-500 font-bold text-3xl mb-4">
          Loading patient data...
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(249, 204, 197, 1) 100%)",
      }}
    >
      <h1 className="text-3xl text-center pt-16">
        Welcome to Ekyamm Appointment, Here you can view the patient
        information.
      </h1>

      {patientData.length === 0 ? (
        <div className="flex flex-col justify-center items-center flex-grow mb-20">
          <p className="text-red-500 font-bold text-3xl mb-4">
            Currently there are no patient data found.
          </p>
          <Link href="/" legacyBehavior>
            <a className="text-blue-800 text-xl hover:underline">
              Go back to Home Page
            </a>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Patient Information</h2>
            {patientData.map((patient, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">Patient {index + 1}</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Name:</strong> {patient.name}
                  </li>
                  <li>
                    <strong>Mobile Number:</strong> {patient.mobile}
                  </li>
                  <li>
                    <strong>WhatsApp Number:</strong> {patient.whatsapp}
                  </li>
                  <li>
                    <strong>Email:</strong> {patient.email}
                  </li>
                  <li>
                    <strong>Address:</strong> {patient.address}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SummaryPage;
