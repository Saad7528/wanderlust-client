"use client";
import React, { useState } from 'react';
import { FiEdit2, FiMail } from "react-icons/fi";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextField, Select, TextArea } from "@heroui/react";
import { useRouter } from 'next/navigation';

const EditeModals = ({ destination }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination || {};
    console.log(category);

    // Helper function to format departureDate to YYYY-MM-DD for the HTML date input
    const formatDateToYYYYMMDD = (dateStr) => {
        if (!dateStr) return "";
        // If it's already YYYY-MM-DD
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            return dateStr;
        }
        // If it's DD-MM-YYYY
        if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
            const [day, month, year] = dateStr.split('-');
            return `${year}-${month}-${day}`;
        }
        // If it's DD/MM/YYYY
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
            const [day, month, year] = dateStr.split('/');
            return `${year}-${month}-${day}`;
        }
        // If it's YYYY/MM/DD
        if (/^\d{4}\/\d{2}\/\d{2}$/.test(dateStr)) {
            return dateStr.replace(/\//g, '-');
        }
        return dateStr;
    };
    const formattedDepartureDate = formatDateToYYYYMMDD(departureDate);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedDestination = Object.fromEntries(formData.entries());
        updatedDestination.price = Number(updatedDestination.price);

        try {
            const res = await fetch(`http://localhost:5000/destination/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedDestination)
            });
            const data = await res.json();
            console.log(data);
            if (res.ok) {
                alert("Destination updated successfully!");
                setIsOpen(false);
                router.refresh();
            } else {
                alert("Failed to update destination.");
            }
        } catch (error) {
            console.error("Error updating destination:", error);
            alert("An error occurred while updating the destination.");
        }
    };

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Trigger>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition cursor-pointer">
                        <FiEdit2 size={14} />
                        <span className="text-sm font-medium">Edit</span>
                    </button>
                </Modal.Trigger>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                {/* <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <FiMail className="size-5" />
                                </Modal.Icon> */}
                                <Modal.Heading>Edit Destination</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="p-2 space-y-6 w-full">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField name="destinationName" isRequired defaultValue={destinationName}>
                                                    <Label>Destination Name</Label>
                                                    <Input className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <div>
                                                <TextField name="country" isRequired defaultValue={country}>
                                                    <Label>Country</Label>
                                                    <Input className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Category */}
                                            <div>
                                                <Select
                                                    name="category"
                                                    isRequired
                                                    className="w-full"
                                                    defaultSelectedKey={category}
                                                >
                                                    <Label>Category</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Beach" textValue="Beach">
                                                                Beach
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Mountain" textValue="Mountain">
                                                                Mountain
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="City" textValue="City">
                                                                City
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Adventure" textValue="Adventure">
                                                                Adventure
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Cultural" textValue="Cultural">
                                                                Cultural
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Luxury" textValue="Luxury">
                                                                Luxury
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Wildlife" textValue="Wildlife">
                                                                Wildlife
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Romantic" textValue="Romantic">
                                                                Romantic
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Historical" textValue="Historical">
                                                                Historical
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <div>
                                                <TextField name="price" type="number" isRequired defaultValue={price}>
                                                    <Label>Price (USD)</Label>
                                                    <Input type="number" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Duration */}
                                            <div>
                                                <TextField name="duration" isRequired defaultValue={duration}>
                                                    <Label>Duration</Label>
                                                    <Input className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField name="departureDate" type="date" isRequired defaultValue={formattedDepartureDate}>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL */}
                                            <div className="md:col-span-2">
                                                <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                                    <Label>Image URL</Label>
                                                    <Input type="url" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField name="description" isRequired defaultValue={description}>
                                                    <Label>Description</Label>
                                                    <TextArea className="rounded-3xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="outline"
                                            className="rounded-none w-full bg-cyan-500 text-white cursor-pointer"
                                        >
                                            Save Changes
                                        </Button>
                                    </form>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditeModals;