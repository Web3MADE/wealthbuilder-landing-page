"use client";

import { useEffect, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "already_registered" | "error";

type WaitlistResponse = {
  status?: "success" | "already_registered" | "invalid_email" | "error";
  message?: string;
};

export function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timeout = window.setTimeout(() => setShowToast(false), 6000);
    return () => window.clearTimeout(timeout);
  }, [showToast]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const email = String(new FormData(form).get("email") ?? "").trim();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as WaitlistResponse;

      if (response.ok && data.status === "success") {
        setStatus("success");
        setShowToast(true);
        return;
      }
      if (data.status === "already_registered") {
        setStatus("already_registered");
        setShowToast(true);
        return;
      }

      setStatus("error");
      setMessage(data.message ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success" || status === "already_registered") {
    const successMessage = status === "success" ? "You’re on the list." : "You’re already on the list.";
    return (
      <div className="early-form-wrap">
        <p className="success-message" role="status">{successMessage}</p>
        {showToast && (
          <div className="waitlist-toast" role="status" aria-live="polite">
            <span className="waitlist-toast-icon" aria-hidden="true">✓</span>
            <span>{successMessage}</span>
            <button type="button" aria-label="Dismiss notification" onClick={() => setShowToast(false)}>×</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="early-form-wrap">
      <form className="early-form" action="/api/waitlist" method="post" onSubmit={handleSubmit} aria-busy={status === "submitting"}>
        <label className="sr-only" htmlFor="early-email">Email address</label>
        <div className="input-wrap">
          <span className="mail-icon" aria-hidden="true">✉</span>
          <input
            id="early-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            disabled={status === "submitting"}
            onChange={() => {
              if (status === "error") {
                setStatus("idle");
                setMessage("");
              }
            }}
          />
        </div>
        <button className="button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Joining…" : "Join Early Access"}
          <span aria-hidden="true">→</span>
        </button>
      </form>
      {message && <p className="form-feedback" role={status === "error" ? "alert" : "status"}>{message}</p>}
    </div>
  );
}
