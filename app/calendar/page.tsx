"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isDateValid = (date: Date) => {
    const day = date.getDay();
    // return day !== 0 && day !== 6; If we want to add only Sat and Sun.
    return day === 0 || day === 6; // If we want to add Mon to Fri.
  };

  const handleClose = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center pt-12"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(249, 204, 197, 1) 100%)",
      }}
    >
      <h1 className="text-3xl mb-8 mt-8 text-center">
        Select the date and type of session you want to schedule.
      </h1>

      <div className="w-full max-w-lg p-20 bg-white shadow-lg rounded-2xl">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Formik
            initialValues={{ sessionType: "In-Person" }}
            onSubmit={() => {
              setOpen(true);
            }}
          >
            {() => (
              <Form className="space-y-6">
                <h1 className="text-xl text-center">Schedule a Session</h1>
                <DatePicker
                  label="Select Date"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  shouldDisableDate={isDateValid}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                    },
                  }}
                />

                <TimePicker
                  label="Select Time"
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                    },
                  }}
                />

                <Field
                  as="select"
                  name="sessionType"
                  className="block w-full p-4 border rounded-md"
                >
                  <option value="In-Person">In-Person</option>
                  <option value="Online">Online</option>
                </Field>

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
                  Schedule
                </Button>
              </Form>
            )}
          </Formik>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Success</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Session has been successfully added!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </LocalizationProvider>
      </div>
      <Footer />
    </div>
  );
};

export default CalendarPage;
