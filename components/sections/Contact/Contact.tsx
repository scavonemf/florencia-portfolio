"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "../../ui/Button";
import SectionTag from "../../ui/SectionTag";
import { cn } from "../../../lib/utils";
import { form, input, section, text } from "../../ui/styles";
import SectionTitle from "../../ui/SectionTitle";
import { RevealBlock } from "../../ui/RevealBlock/RevealBlock";
import SectionLayout from "../../ui/SectionLayout";

export default function Contact() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <SectionLayout id="contact" twoColumn={true} className='border-b-0'>
      <RevealBlock>
        <div className="flex flex-col justify-center">
          <SectionTag text={t("tag")} />
          <SectionTitle title={t("headlineStart")} subtitle={t("headlineEm")} />
          <p className={text.secondary}>{t("sub")}</p>
        </div>
      </RevealBlock>

      <RevealBlock delay="100ms">
        <form action="https://formspree.io/f/mrendrjr" method="POST" className={form.container}>
          <div className={form.row}>
            <div className={form.group}>
              <label className={input.label}>{t("labelName")}</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={cn(input.field, "transition-colors focus:border-indigo-400 dark:focus:border-indigo-500")}
                placeholder={t("placeholderName")}
              />
            </div>

            <div className={form.group}>
              <label className={input.label}>{t("labelEmail")}</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={cn(input.field, "transition-colors focus:border-indigo-400 dark:focus:border-indigo-500")}
                placeholder={t("placeholderEmail")}
              />
            </div>
          </div>

          <div className={form.group}>
            <label className={input.label}>{t("labelMessage")}</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={cn(input.field, "resize-none transition-colors focus:border-indigo-400 dark:focus:border-indigo-500")}
              placeholder={t("placeholderMessage")}
            />
          </div>

          <div className={form.actions}>
            <Button type="submit" variant="primary" className={form.submit}>
              {t("btnSubmit")}
            </Button>
          </div>
        </form>
      </RevealBlock>
    </SectionLayout>
  );
}