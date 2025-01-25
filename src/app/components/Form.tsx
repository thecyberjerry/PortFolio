import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import Button from "./Button"
import { PrismicRichText } from "@prismicio/react"
import { FooterProps } from "@/slices/Footer"
import { ErrorMessage } from "@hookform/error-message"
import { config, formConfigValues } from "@/app/form.config"
interface IFormInput {
    name: string
    email: string
    budget: number
    message: string
    singleErrorInput: string
}

export default function Customform({ slice }: Pick<FooterProps, "slice">) {
    let { name, email, message, budget } = config;
    let { message: { maxMessageLength, minMessageLength }, budgetAmount: { minBudget, maxBudget }, name: { maxLength }, email: { emailMaxLength } } = formConfigValues;
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>({
        criteriaMode: "all",
        mode: "onTouched",
        reValidateMode: "onSubmit"
    })
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        fetch("/api/save-contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then((value) => {
            if (value.status === false) throw new Error()
            else return value
        }).catch((error) => { console.log(error, "error") })
    }

    function Inputerrors() {
        const IFormInput: Array<keyof IFormInput> = ["name", "budget", "message", "email"];
        return IFormInput.map((item, index: number) => {
            return <ErrorMessage
                key={index}
                errors={errors}
                name={item}
                render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                    ))
                }
            />
        })
    }

    return (
        <form id="footer" onSubmit={handleSubmit(onSubmit)} className={`${slice.primary.form_background_colour} ${slice.primary.form_font_colour} py-8 px-4 md:p-14 gap-8 flex flex-col`}>
            <div className="text-red-500 text-center md:text-justify">
                <Inputerrors />
            </div>
            <div>
                <input {...register("name", { required: name.requiredMessage, maxLength: maxLength })} type="text" id="name" className="bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Name" />
            </div>
            <div>
                <input {...register("email", {
                    required: email.requiredMessage, maxLength: { value: emailMaxLength, message: email.invalidLength }, pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: email.invalidEmailType
                    }
                })} id="email" className="bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Email" />
            </div>
            <div>
                <input {...register("budget", { required: false, min: { value: minBudget, message: budget.minBudget }, max: { value: maxBudget, message: budget.maxBudget } })} type="number" id="budget" className="bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Budget in INR ₹ (Optional)" />
            </div>
            <div>
                <textarea {...register("message", { required: message.requiredMessage, minLength: { value: minMessageLength, message: message.minimumMessage }, maxLength: { value: maxMessageLength, message: message.maximumMessage } })} id="message" rows={6} maxLength={maxMessageLength} className="resize-none bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Message" />
            </div>
            {
                slice.primary.button_text &&
                <Button btnBg={slice.primary.button_background_colour} btnTextFont={slice.primary.button_font_family} btnTextColour={slice.primary.button_font_colour}>
                    <PrismicRichText field={slice.primary.button_text} />
                </Button>
            }
        </form>
    )
}