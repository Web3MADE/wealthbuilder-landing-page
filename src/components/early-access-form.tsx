"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "success";

export function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("success");
  }

  if (status === "success") {
    return <p className="success-message" role="status">You’re on the list.</p>;
  }

  return (
    <form className="early-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="early-email">Email address</label>
      <div className="input-wrap">
        <span className="mail-icon" aria-hidden="true">✉</span>
        <input id="early-email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
      </div>
      <button className="button" type="submit">Join Early Access <span aria-hidden="true">→</span></button>
    </form>
  );
}
