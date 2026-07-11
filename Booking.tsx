import { useState } from "react";

type Service = {
  name: string;
  price: number;
};

type Extra = {
  name: string;
  price: number;
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqevvevq";

const services: Service[] = [
  { name: "Classic Lashes", price: 30 },
  { name: "Angel / Wet Set", price: 35 },
  { name: "Hybrid / Light Volume", price: 40 },
  { name: "Volume Lashes", price: 45 },
  { name: "Mega Volume", price: 50 },
];

const extras: Extra[] = [
  { name: "Spikes / Wispy Effect", price: 5 },
  { name: "Bottom Lashes", price: 10 },
  { name: "Lash Removal", price: 10 },
  { name: "Lash Shampoo", price: 10 },
  { name: "Out of Hours Appointment", price: 15 },
];

const dates = ["July 4", "July 5", "July 6", "July 7", "July 8"];
const times = ["10:00", "11:30", "13:00", "15:00", "17:00"];

export default function Booking() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState(times[0]);
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const extrasTotal = extras
    .filter((extra) => selectedExtras.includes(extra.name))
    .reduce((sum, extra) => sum + extra.price, 0);

  const total = selectedService.price + extrasTotal;

  function toggleExtra(extraName: string) {
    setSelectedExtras((current) =>
      current.includes(extraName)
        ? current.filter((item) => item !== extraName)
        : [...current, extraName]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const data = new FormData(form);

    data.append("service", selectedService.name);
    data.append("service_price", `£${selectedService.price}`);
    data.append(
      "extras",
      selectedExtras.length ? selectedExtras.join(", ") : "None"
    );
    data.append("date", selectedDate);
    data.append("time", selectedTime);
    data.append("total", `£${total}`);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus(
          "Appointment request sent! We will contact you shortly to confirm."
        );
        form.reset();
        setIsSubmitted(true);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }
  if (isSubmitted) {
    return (
      <section className="booking confirmationScreen">
        <div className="confirmationBox">
          <h2>✨ Booking Request Sent!</h2>
          <p>
            Thank you for your booking request. We'll review your appointment
            and contact you shortly to confirm it.
          </p>

          <button className="submitBtn" onClick={() => setIsSubmitted(false)}>
            Book Another Appointment
          </button>
        </div>
      </section>
    );
  }
  return (
    <section id="booking" className="booking">
      <p className="sectionTag">BOOK ONLINE</p>
      <h2>Request Your Appointment</h2>

      <div className="bookingBox">
        <div className="bookingSteps">
          <h3>1. Choose Service</h3>

          <div className="choiceGrid">
            {services.map((service) => (
              <button
                key={service.name}
                type="button"
                className={
                  selectedService.name === service.name
                    ? "choice active"
                    : "choice"
                }
                onClick={() => setSelectedService(service)}
              >
                {service.name}
                <span>£{service.price}</span>
              </button>
            ))}
          </div>

          <h3>2. Add Extras</h3>

          <div className="choiceGrid">
            {extras.map((extra) => (
              <button
                key={extra.name}
                type="button"
                className={
                  selectedExtras.includes(extra.name)
                    ? "choice active"
                    : "choice"
                }
                onClick={() => toggleExtra(extra.name)}
              >
                {extra.name}
                <span>+£{extra.price}</span>
              </button>
            ))}
          </div>

          <h3>3. Choose Date</h3>

          <div className="dateTimeGrid">
            {dates.map((date) => (
              <button
                key={date}
                type="button"
                className={selectedDate === date ? "choice active" : "choice"}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            ))}
          </div>

          <h3>4. Choose Time</h3>

          <div className="dateTimeGrid">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                className={selectedTime === time ? "choice active" : "choice"}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <form className="detailsForm" onSubmit={handleSubmit}>
          <h3>5. Your Details</h3>

          <input name="name" placeholder="Full Name" required />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <input name="phone" placeholder="Phone Number" required />
          <textarea
            name="notes"
            placeholder="Notes / lash inspiration"
          ></textarea>

          <div className="summary">
            <p>
              <strong>Service:</strong> {selectedService.name}
            </p>
            <p>
              <strong>Add-ons:</strong>{" "}
              {selectedExtras.length ? selectedExtras.join(", ") : "None"}
            </p>
            <p>
              <strong>Date:</strong> {selectedDate}
            </p>
            <p>
              <strong>Time:</strong> {selectedTime}
            </p>
            <strong>Total: £{total}</strong>
          </div>

          <button className="submitBtn" type="submit">
            Confirm Booking Request
          </button>

          {status && <div className="successMessage">{status}</div>}
        </form>
      </div>
    </section>
  );
}
