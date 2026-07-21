import { useState, type FormEvent } from "react";

export function Enquiry() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="enquire" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container-zamra grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-accent-light mb-4">
            <span className="rule bg-accent-light/70" />
            Start Your Event Journey
          </p>

          <h2 className="font-heading text-background font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15]">
            Let's Create Something Extraordinary.
          </h2>

          <p className="mt-5 text-background/75 text-lg leading-relaxed max-w-md">
            Whether you're planning a wedding, exhibition, conference, corporate event, or
            celebration, our experienced team is ready to help. Share your requirements and we'll
            guide you through every step—from planning to execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Fully Air-Conditioned",
              "Ample Parking",
              "Power Backup",
              "Professional Event Support",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-background/20 px-4 py-2 text-sm text-background/80"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-background/85">
            <a href="tel:+919847144445" className="flex items-baseline gap-4 group">
              <span className="text-xs uppercase tracking-widest text-background/50 w-24 shrink-0">
                Call
              </span>
              <span className="font-heading text-xl group-hover:text-accent-light transition-colors">
                +91 98471 44445
              </span>
            </a>

            <a
              href="https://wa.me/919847144445"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs uppercase tracking-widest text-background/50 w-24 shrink-0">
                WhatsApp
              </span>
              <span className="font-heading text-xl group-hover:text-accent-light transition-colors">
                Chat with Our Team
              </span>
            </a>

            <a
              href="mailto:info@zamrainternational.com"
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs uppercase tracking-widest text-background/50 w-24 shrink-0">
                Email
              </span>
              <span className="font-heading text-xl group-hover:text-accent-light transition-colors">
                info@zamrainternational.com
              </span>
            </a>

            <div className="flex items-baseline gap-4">
              <span className="text-xs uppercase tracking-widest text-background/50 w-24 shrink-0">
                Visit
              </span>

              <span className="text-background/85 leading-relaxed">
                Zamra International Convention & Exhibition Centre
                <br />
                HMT Colony, Kalamassery
                <br />
                Kochi, Kerala 683503
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {sent ? (
            <div className="rounded-xl bg-background text-foreground p-10 min-h-[420px] flex flex-col justify-center">
              <p className="stat-num text-accent-hover text-sm mb-4">ENQUIRY RECEIVED</p>
              <h3 className="font-heading text-primary text-2xl md:text-3xl font-medium">
                Thank you. We'll be in touch shortly.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                A member of the Zamra team will respond within one working day. If your event is
                time-sensitive, please call us directly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-xl bg-background text-foreground p-6 md:p-10 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />

                <Field label="Email Address" name="email" type="email" required />
                <Field label="Organization (Optional)" name="organization" />

                <SelectField
                  label="Event Type"
                  name="event"
                  options={[
                    "Wedding",
                    "Reception",
                    "Engagement",
                    "Conference",
                    "Corporate Event",
                    "Exhibition",
                    "Trade Show",
                    "Cultural Event",
                    "Product Launch",
                    "Birthday / Anniversary",
                    "Other",
                  ]}
                />

                <Field label="Preferred Event Date" name="date" type="date" />

                <SelectField
                  label="Expected Guests"
                  name="guests"
                  options={[
                    "Up to 100",
                    "100–300",
                    "300–500",
                    "500–1,000",
                    "1,000–2,000",
                    "2,000+",
                  ]}
                />

                <SelectField
                  label="Estimated Budget (Optional)"
                  name="budget"
                  options={[
                    "Below ₹2 Lakhs",
                    "₹2–5 Lakhs",
                    "₹5–10 Lakhs",
                    "₹10–25 Lakhs",
                    "₹25 Lakhs+",
                  ]}
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-primary mb-2">
                  Anything we should know?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-border bg-background px-3 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
                  placeholder="Optional — timeline, must-haves, questions."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-accent text-accent-foreground text-[15px] font-medium hover:bg-accent-hover transition-colors"
              >
                Send Enquiry
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted by the Zamra team about your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-medium text-primary mb-2">
        {label}
        {required && <span className="text-accent-hover"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full h-11 rounded-md border border-border bg-background px-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-medium text-primary mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full h-11 rounded-md border border-border bg-background px-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
