"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

import toast from "react-hot-toast";
import { getUpDateBooking } from "../../../lib/actiondata";

const BookingAppoinmentUpdateForm = ({ book }) => {
  const handleUpdateBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const bookingDatas = Object.fromEntries(formData.entries());

    const bookingUpdate = {
      name: bookingDatas.name,

      phone: bookingDatas.phone,
      date: bookingDatas.date,
      time: bookingDatas.time,
    };

     const res = await getUpDateBooking(bookingUpdate);
    if (res) {
      toast.success("Appointment Updated successfully!", {
        position: "top-right",
      });
    }
  };

  return (
    <Modal>
      <Button className="btn btn-info text-white w-full sm:w-auto">
        Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-2xl text-info font-bold text-nowrap">
                Appointment Update From
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className=" p-6">
              <Surface variant="default">
                <form onSubmit={handleUpdateBooking} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter your name" />
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
                    <Button onClick={} type="submit">Update Booking </Button>
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

export default BookingAppoinmentUpdateForm;
