"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "../ui/Button";
import SectionTag from "../ui/SectionTag";
import { cn } from "../../lib/utils";
import {
  form,
  input,
  section,
  text,
} from "../ui/styles";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className={section.twoColumn}>
      <div className="flex flex-col justify-center">
        <SectionTag text={t("tag")} />
        <SectionTitle title={t("headlineStart")} subtitle={t("headlineEm")} />
        <p className={text.secondary}>{t("sub")}</p>
      </div>
      <form action="https://formspree.io/f/mrendrjr" method="POST" className={form.container}>
        <div className={form.row}>
          <div className={form.group}>
            <label className={input.label}>
              {t("labelName")}
            </label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className={input.field}
              placeholder={t("placeholderName")}
            />
          </div>

          <div className={form.group}>
            <label className={input.label}>
              {t("labelEmail")}
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className={input.field}
              placeholder={t("placeholderEmail")}
            />
          </div>
        </div>

        <div className={form.group}>
          <label className={input.label}>
            {t("labelMessage")}
          </label>

          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className={cn(input.field, "resize-none")}
            placeholder={t("placeholderMessage")}
          />
        </div>

        <div className={form.actions}>
          <Button
            type="submit"
            variant="primary"
            className={form.submit}
          >
            {t("btnSubmit")}
          </Button>
        </div>
      </form>
    </section>
  );
}