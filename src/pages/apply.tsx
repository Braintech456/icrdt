```tsx
import { useState } from "react";

export default function ApplyPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mykndjlb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Application submitted successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Apply for Certification</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" required /><br /><br />
        <input name="email" type="email" placeholder="Email" required /><br /><br />
        <input name="phone" placeholder="Phone Number" required /><br /><br />

        <select name="course" required>
          <option value="">Select Course</option>
          <option>Certified Robotics Professional</option>
          <option>Certified Drone Technology Professional</option>
          <option>Industrial Automation Specialist</option>
          <option>AI in Robotics Specialist</option>
          <option>Certified Robotics System Engineer</option>
          <option>Certified Industrial Robotics & Automation Professional</option>
          <option>Certified Drone Technology Engineer</option>
          <option>Certified Robotics Software & AI Developer</option>
        </select>
        <br /><br />

        <input name="country" placeholder="Country" required /><br /><br />
        <input name="city" placeholder="City" /><br /><br />

        <select name="status">
          <option>Student</option>
          <option>Working Professional</option>
          <option>Other</option>
        </select>
        <br /><br />

        <textarea name="message" placeholder="Additional Message" /><br /><br />

        <button type="submit">Submit Application</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
```
