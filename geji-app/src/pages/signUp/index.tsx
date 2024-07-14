"use client";
import SignupForm from "@/components/SignupForm";
import { Container } from "lucide-react";
import React from "react";

export default function index() {
  return (
    <div className="m-auto">
      <h1 className="text-2xl text-center m-8">Sign up</h1>
      <SignupForm />
    </div>
  );
}
