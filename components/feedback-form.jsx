
"use client";

import { useState } from "react";
import { Alert } from "./alert";
import { Card } from "./card";

export function FeedbackForm() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);

      const formData = new FormData(event.target);

      const res = await fetch("/feedback/send", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("ok");
        event.target.reset();
      } else {
        const text = await res.text();
        setStatus("error");
        setError(text);
      }
    } catch (e) {
      setStatus("error");
      setError(e.message);
    }
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-16">
      <section>
        <form
          name="feedback"
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-3 align-center"
        >
          <input type="hidden" name="form-name" value="feedback" />

          <strong>Name:</strong>
          <input name="name" type="text" required className="input" />

          <strong>Organization:</strong>
          <input name="organization" type="text" required className="input" />

          <strong>Email:</strong>
          <input name="email" type="email" required className="input" />

          <strong>Mobile:</strong>
          <input name="mobile" type="tel" required className="input" />

          <strong>Message:</strong>
          <input name="message" type="text" required className="input" />

          <button className="btn" type="submit" disabled={status === "pending"}>
            Submit
          </button>

          {status === "ok" && <Alert type="success">Submitted!</Alert>}
          {status === "error" && <Alert type="error">{error}</Alert>}
        </form>
      </section>
    </div>
  );
}
