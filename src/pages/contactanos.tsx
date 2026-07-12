import emailjs from "@emailjs/browser";
import { type ChangeEvent, type FormEvent, useCallback, useRef, useState } from "react";
import ContactSuccessModal from "../components/ContactSuccessModal";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";

type ContactFormStatus = "idle" | "sending" | "success" | "error";
type FieldName = "name" | "email" | "message";
type ContactFormValues = Record<FieldName, string> & { company: string };
type ContactFormErrors = Partial<Record<FieldName, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  company: "",
};

function validateForm({ name, email, message }: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName) {
    errors.name = "Escribe tu nombre.";
  } else if (trimmedName.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!trimmedEmail) {
    errors.email = "Escribe tu correo.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Escribe un correo válido.";
  }

  if (!trimmedMessage) {
    errors.message = "Escribe tu mensaje.";
  } else if (trimmedMessage.length < 5) {
    errors.message = "El mensaje debe tener al menos 5 caracteres.";
  }

  return errors;
}

export default function Contactanos() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = event.target.name as keyof ContactFormValues;
    setValues((currentValues) => ({ ...currentValues, [field]: event.target.value }));

    if (field !== "company" && errors[field]) {
      setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    }

    if (status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("1. SUBMIT EJECUTADO");

    if (status === "sending") {
      console.log("2. BLOQUEADO POR ESTADO SENDING");
      return;
    }

    if (values.company) {
      console.log("3. HONEYPOT ACTIVADO");
      return;
    }

    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      console.log("4. ERRORES DE VALIDACIÓN", validationErrors);
      setStatus("idle");
      return;
    }

    const serviceId = "service_1e5bts8";
    const templateId = "template_l88dy68";
    const publicKey = "nKbNsYsJlPL9MffMx";

    setStatus("sending");
    console.log("5. ANTES DE EMAILJS.SEND");

    let timeoutId: number | undefined;

    try {
      const emailPromise = emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        },
        publicKey,
      );

      const timeoutPromise = new Promise<never>((_, reject) => {
        timeoutId = window.setTimeout(() => {
          reject(new Error("EmailJS tardó más de 12 segundos en responder."));
        }, 12000);
      });

      const response = await Promise.race([emailPromise, timeoutPromise]);

      console.log("6. RESPUESTA EMAILJS", response);
      setValues(initialValues);
      setErrors({});
      setStatus("success");
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("7. ERROR EMAILJS", error);
      setStatus("error");
    } finally {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    }
  }

  const closeSuccessModal = useCallback(() => {
    setIsSuccessModalOpen(false);
    setStatus("idle");
  }, []);

  return (
    <main>
      <PageHero
        eyebrow="Contactanos"
        title="Cuéntanos qué estás intentando."
        subtitle="No tienes que llegar con todo resuelto. Una idea, una duda o una colaboración posible ya es suficiente para empezar a hablar."
      />

      <Section className="contact-section">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-honeypot" aria-hidden="true">
            <label htmlFor="contact-company">Empresa</label>
            <input
              id="contact-company"
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <label htmlFor="contact-name">
            Nombre
            <input
              id="contact-name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              disabled={status === "sending"}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && <span id="contact-name-error" className="contact-field-error">{errors.name}</span>}
          </label>

          <label htmlFor="contact-email">
            Correo
            <input
              id="contact-email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              disabled={status === "sending"}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && <span id="contact-email-error" className="contact-field-error">{errors.email}</span>}
          </label>

          <label htmlFor="contact-message">
            Mensaje
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              value={values.message}
              onChange={handleChange}
              disabled={status === "sending"}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && <span id="contact-message-error" className="contact-field-error">{errors.message}</span>}
          </label>

          <button
            ref={submitButtonRef}
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "ENVIANDO..." : "ENVIAR"}
          </button>

          {status === "error" && (
            <div className="contact-form-status" role="alert">
              <strong>NO PUDIMOS ENVIAR TU MENSAJE.</strong>
              <span>
                Intenta nuevamente o escríbenos a{" "}
                <a href="mailto:adultxs.inexpertxs@gmail.com">adultxs.inexpertxs@gmail.com</a>.
              </span>
            </div>
          )}
        </form>

        <aside className="contact-links">
          <p>adultxs.inexpertxs@gmail.com</p>
          <a href="https://www.instagram.com/adultxs_inexpertxs/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </aside>
      </Section>

      <ContactSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        returnFocusRef={submitButtonRef}
      />
    </main>
  );
}
