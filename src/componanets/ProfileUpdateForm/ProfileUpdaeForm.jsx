"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ProfileUpdaeForm = ({ user }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  console.log(image);
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateObjsect = {};
    if (name) {
      updateObjsect.name = name;
    }
    if (image) {
      updateObjsect.image = image;
    }

    await authClient.updateUser({
      ...updateObjsect,
    });
    toast.success("profile updated");
    router.refresh();
  };
  // console.log(user.image);
  return (
    <div>
      <Modal>
        <Button className="bg-cyan-500 text-xl font-bold">
          Update Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-center text-2xl text-info font-bold text-nowrap">
                  Profile Update From
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className=" p-6">
                <Surface variant="default">
                  <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label> Name</Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </TextField>

                    <TextField className="w-full" name="image" type="text">
                      <Label>Image</Label>
                      <Input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </TextField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit">Update Profile </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileUpdaeForm;
