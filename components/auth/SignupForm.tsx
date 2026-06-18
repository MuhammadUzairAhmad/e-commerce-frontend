"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  role: Yup.string()
    .oneOf(["customer", "admin"])
    .required("Role is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      role: "customer",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      // Simulate authentication logic
      setTimeout(() => {
        setIsLoading(false);
        if (values.role === "admin") {
          window.location.href = "/admin/welcome";
        } else {
          window.location.href = "/welcome";
        }
      }, 1500);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h2>
        <p className="text-gray-600">Sign up to start enjoying premium features.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            id="firstName"
            name="firstName"
            placeholder="John"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            error={errors.firstName}
            touched={touched.firstName}
          />
          <Input
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            error={errors.lastName}
            touched={touched.lastName}
          />
        </div>
        
        <div className="w-full flex flex-col gap-1.5">
          <label
            htmlFor="role"
            className="text-xs font-bold uppercase tracking-wider text-zinc-500 select-none"
          >
            Account Type
          </label>
          <select
            id="role"
            name="role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-4 bg-white text-zinc-900 focus:ring-indigo-500/10 focus:border-indigo-500 ${
              touched.role && errors.role 
                ? "border-rose-500" 
                : "border-zinc-200"
            }`}
          >
            <option value="customer">Customer</option>
            <option value="admin">Administrator</option>
          </select>
          {touched.role && errors.role && (
            <span className="text-xs font-semibold text-rose-600 animate-fadeIn">
              {errors.role}
            </span>
          )}
        </div>
        
        <Input
          label="Email Address"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
          touched={touched.email}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
          touched={touched.password}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center mt-2"
          isLoading={isLoading}
        >
          Create Account
        </Button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
