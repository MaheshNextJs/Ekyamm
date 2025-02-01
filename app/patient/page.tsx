"use client";

import { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { usePatientContext } from "../context/patientcontext";
import Footer from "../components/Footer";

const PatientPage = () => {
  const [isWhatsAppSame, setIsWhatsAppSame] = useState(false);
  const [open, setOpen] = useState(false);
  const { addPatientData } = usePatientContext();
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(249, 204, 197, 1) 100%)",
      }}
    >
      <h1 className="text-3xl mb-8 mt-10 text-center">
        Welcome to Ekyamm Appointment, add patient information here.
      </h1>

      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <Formik
          initialValues={{
            name: "",
            mobile: "",
            whatsapp: "",
            email: "",
            address: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addPatientData(values);
            setOpen(true);
          }}
        >
          {({ handleChange }) => (
            <Form className="space-y-4">
              <h1 className="text-xl font-bold text-center">
                Patient Information
              </h1>

              <TextField
                label="Name"
                name="name"
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Mobile Number"
                name="mobile"
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isWhatsAppSame}
                    onChange={() => setIsWhatsAppSame(!isWhatsAppSame)}
                  />
                }
                label="WhatsApp same as Mobile"
              />
              {!isWhatsAppSame && (
                <TextField
                  label="WhatsApp Number"
                  name="whatsapp"
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              )}
              <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Address"
                name="address"
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                  background:
                    "linear-gradient(45deg, rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)",
                  color: "white",
                  height: "56px",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg,rgba(187, 163, 228, 1) 0%, rgba(231, 161, 160, 1) 100%)",
                  },
                }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Patient information has been successfully submitted!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};

export default PatientPage;
