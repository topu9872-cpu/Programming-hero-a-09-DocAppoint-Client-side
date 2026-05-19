import { AlertDialog, Button } from "@heroui/react";
import { getBookingappoinmentDelete } from "../../../lib/actiondata";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookingDelete = ({ book }) => {
  const router = useRouter();
  console.log(book.name);
  const handleDelete = async (id) => {
    const getDelete = await getBookingappoinmentDelete(id);
    console.log(getDelete);

    if (getDelete?.deletedCount > 0) {
      toast.success("Appointment deleted successfully", {
        position: "top-right",
      });

      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <Button
        type="button"
        className="btn btn-error text-white w-full sm:w-auto"
      >
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                onClick={() => handleDelete(book._id)}
                variant="danger"
              >
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};
export default BookingDelete;
