"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

interface Patient {
  name: string;
  mobile: string;
  whatsapp: string;
  email: string;
  address: string;
}

interface PatientContextType {
  patientData: Patient[];
  addPatientData: (newPatient: Patient) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export const PatientProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [patientData, setPatientData] = useState<Patient[]>([]);

  const addPatientData = (newPatient: Patient) => {
    setPatientData((prevData) => [...prevData, newPatient]);
  };

  return (
    <PatientContext.Provider value={{ patientData, addPatientData }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error("usePatientContext must be used within a PatientProvider");
  }
  return context;
};
