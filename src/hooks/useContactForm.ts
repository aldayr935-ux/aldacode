"use client";

import { useState, useCallback } from "react";
import type { ContactFormData } from "@/types";
import { WHATSAPP_NUMBER } from "@/data/contact";

type FieldErrors = Partial<Record<keyof ContactFormData, boolean>>;
type Status = "idle" | "sending" | "sent";

const EMPTY_FORM: ContactFormData = {
  nombre: "",
  email: "",
  servicio: "",
  mensaje: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: false }));
    },
    [],
  );

  const validate = useCallback((): boolean => {
    const newErrors: FieldErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = true;
    if (!EMAIL_REGEX.test(form.email.trim())) newErrors.email = true;
    if (!form.mensaje.trim()) newErrors.mensaje = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setStatus("sending");

      const texto =
        `¡Hola! Me contacto desde el sitio web de NETIKA. 👋\n\n` +
        `*Nombre:* ${form.nombre.trim()}\n` +
        `*Correo:* ${form.email.trim()}\n` +
        `*Servicio de interés:* ${form.servicio || "No especificado"}\n` +
        `*Mensaje:*\n${form.mensaje.trim()}`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

      setTimeout(() => {
        window.open(url, "_blank");
        setStatus("sent");
        setTimeout(() => {
          setForm(EMPTY_FORM);
          setStatus("idle");
        }, 2000);
      }, 600);
    },
    [form, validate],
  );

  return { form, errors, status, handleChange, handleSubmit };
}
