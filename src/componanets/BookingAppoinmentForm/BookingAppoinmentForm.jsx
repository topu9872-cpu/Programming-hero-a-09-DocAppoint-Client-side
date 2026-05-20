"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { getBookingAppoinment } from "../../../lib/actiondata";
import toast from "react-hot-toast";

const BookingAppoinmentForm = ({ doctorDetails }) => {
 


  const handleBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const bookingDatas = Object.fromEntries(formData.entries());

    const bookingData = {
      doctorName: bookingDatas.doctorname,
      name: bookingDatas.name,
      email: bookingDatas.email,
      phone: bookingDatas.phone,
      date: bookingDatas.date,
      time: bookingDatas.time,
      image:doctorDetails.image,
      fee:doctorDetails.fee,
      availability:doctorDetails.availability,
    };

    const res = await getBookingAppoinment(bookingData);
    if (res) {
      toast.success("Appointment booked successfully!", {
        position: "top-right",
      });
      window.location.reload()
    }
 
  };

  return (
    <Modal>
      <Button className="btn btn-accent w-full text-white text-base md:text-lg rounded-xl">
        Book an Appointment
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Appointment Booking From</Modal.Heading>
            </Modal.Header>
            <Modal.Body className=" p-6">
              <Surface variant="default">
                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="doctorname" type="text">
                    <Label>Doctor Name</Label>
                    <Input placeholder="Enter your doctor name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="phone">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="date">
                    <Label>Appointment Date</Label>
                    <Input type="date" />
                  </TextField>
                  <TextField className="w-full" name="time">
                    <Label>Appointment Time</Label>
                    <Input type="time" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button  type="submit">Book Appointment </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingAppoinmentForm;
