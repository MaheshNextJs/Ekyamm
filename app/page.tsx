"use client";

import Link from "next/link";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center pt-12"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(249, 204, 197, 1) 100%)",
      }}
    >
      <h1 className="text-4xl font-bold mb-8">Ekyamm Appointment</h1>
      <h1 className="text-3xl mb-8 mt-20 text-center">
        Welcome to Ekyamm Appointment, your one-stop solution for managing your
        appointments.
      </h1>
      <div className="flex flex-row justify-center m-10 gap-20">
        <Link href="/calendar" legacyBehavior>
          <a
            className="flex items-center justify-center w-60 h-60 text-2xl text-white rounded-md text-center transition-all duration-300"
            style={{
              background:
                "linear-gradient(45deg, rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgba(157, 133, 198, 1) 0%, rgba(201, 131, 130, 1) 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)";
            }}
          >
            Schedule a Session
          </a>
        </Link>
        <Link href="/patient" legacyBehavior>
          <a
            className="flex items-center justify-center w-60 h-60 text-2xl text-white rounded-md text-center transition-all duration-300"
            style={{
              background:
                "linear-gradient(45deg, rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgba(157, 133, 198, 1) 0%, rgba(201, 131, 130, 1) 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)";
            }}
          >
            Add Patient Information
          </a>
        </Link>
        <Link href="/summary" legacyBehavior>
          <a
            className="flex items-center justify-center w-60 h-60 text-2xl text-white rounded-md text-center transition-all duration-300"
            style={{
              background:
                "linear-gradient(45deg, rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgba(157, 133, 198, 1) 0%, rgba(201, 131, 130, 1) 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)";
            }}
          >
            View Session Summary
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
