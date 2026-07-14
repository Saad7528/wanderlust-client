"use client"
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Card } from '@heroui/react'
import React from 'react'

const SignUpPage = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);
    }
    return (
        <div className="max-w-7xl mx-auto my-8">
            <div className="my-3">
                <h1 className="text-2xl font-bold text-center">Create Your Account</h1>
                <p className="text-center text-gray-500">Please fill up the form below to create an account.</p>
            </div>
            <Card className="border rounded-lg p-6">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input placeholder="Your Name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Image url" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center">
                        <Button className="w-full rounded-none" type="submit">
                            Create Account
                        </Button>

                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default SignUpPage