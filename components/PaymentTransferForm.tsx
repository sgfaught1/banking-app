"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { useForm } from "react-hook-form";

import * as z from "zod";

import Link from 'next/link'




import { Button } from "./ui/button";

import {

    Form,

    FormControl,

    FormDescription,

    FormField,

    FormItem,

    FormLabel,

    FormMessage,

} from "@/components/ui/form"

import { Input } from "@/components/ui/input"



const formSchema = z.object({

    email: z.string().email("Invalid email address"),

    name: z.string().min(4, "Transfer note is too short"),

    amount: z.string().min(4, "Amount is too short"),

    senderBank: z.string().min(4, "Please select a valid bank account"),

    sharableId: z.string().min(8, "Please select a valid sharable Id"),

});




const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);




    const form = useForm<z.infer<typeof formSchema>>({

        resolver: zodResolver(formSchema),

        defaultValues: {

            name: "",

            email: "",

            amount: "",

            senderBank: "",

            sharableId: "",

        },

    });

    


    return (

        

        <Form {...form}>

            <form onSubmit={form.handleSubmit()} className="flex flex-col">

                

                <FormField

                    control={form.control}

                    name="name"

                    render={({ field }) => (

                        <FormItem className="border-t border-gray-200">

                            <div className="payment-transfer_form-item pb-6 pt-5">

                                <div className="payment-transfer_form-content">

                                    <FormLabel className="text-14 font-medium text-gray-700">

                                        Transfer Note

                                    </FormLabel>

                                    <FormDescription className="text-12 font-normal text-gray-600">

                                        Please provide any additional information or instructions

                                        related to the transfer

                                    </FormDescription>

                                </div>

                                <div className="flex w-full flex-col">

                                    <FormControl>

                                        <textarea

                                            placeholder="Write a short note here"

                                            className="input-class px-2 mt-3"

                                            {...field}>

                                        </textarea>

                                    </FormControl>

                                    <FormMessage className="text-12 text-red-500" />

                                </div>

                            </div>

                        </FormItem>

                    )}

                />




                <div className="payment-transfer_form-details">

                    <h2 className="text-18 font-semibold text-gray-900">

                        Bank account details

                    </h2>

                    <p className="text-16 font-normal text-gray-600">

                        Enter the recipient details below

                    </p>

                </div>




                <FormField

                    control={form.control}

                    name="email"

                    render={({ field }) => (

                        <FormItem className="border-t border-gray-200">

                            <div className="payment-transfer_form-item py-5">

                                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">

                                    Recipient&apos;s Email Address

                                </FormLabel>

                                <div className="flex w-full flex-col">

                                    <FormControl>

                                        <Input

                                            placeholder="ex: johndoe@gmail.com"

                                            className="input-class"

                                            {...field}

                                        />

                                    </FormControl>

                                    <FormMessage className="text-12 text-red-500" />

                                </div>

                            </div>

                        </FormItem>

                    )}

                />




               



                <FormField

                    control={form.control}

                    name="amount"

                    render={({ field }) => (

                        <FormItem className="border-y border-gray-200">

                            <div className="payment-transfer_form-item py-5">

                                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">

                                    Amount

                                </FormLabel>

                                <div className="flex w-full flex-col">

                                    <FormControl>

                                        <Input

                                            placeholder="ex: 5.00"

                                            className="input-class"

                                            {...field}

                                        />

                                    </FormControl>

                                    <FormMessage className="text-12 text-red-500" />

                                </div>

                            </div>

                        </FormItem>

                    )}

                />




                <div className="payment-transfer_btn-box">
                <Link href = '/'>
                    <Button type="submit" onClick={() => alert('Payment Pending... We will notify you and transfer appropriate funds when your payment has finished processing!')} className="payment-transfer_btn w-full">

                        {isLoading ? (

                            <>

                                <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...

                            </>

                        ) : (

                            "Transfer Funds"

                        )}

                    </Button>
                </Link>
                </div>

            </form>

            <p style={{color: 'gray'}}>*All fields optional for demo purposes</p>
        </Form>

    );

};




export default PaymentTransferForm;

